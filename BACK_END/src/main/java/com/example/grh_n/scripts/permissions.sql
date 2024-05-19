select *
from PERSONNELS
         inner join;

create table tmp_permission as
select p.NOMA, p.PNOMA, bb.max_permission, to_char(bb.nn, '0.00') jour_
from PERSONNELS p
         inner join (select tt.*, (sysdate - tt.max_permission) / 30 as nn
                     from (select p.MATRICULE, max(permission.D_D_ABS) as max_permission
                           from PERSONNELS P
                                    inner join (select * from EST_INDISPONIBLE indi where indi.CODE_ABS in ('4', '5')) permission
                                               on p.MATRICULE = permission.MATRICULE
                                    left join R_GRADE grade on p.GRADE = grade.GRADE
                                    left join R_CAT_GRADE cat_grade on cat_grade.CAT = grade.CAT_GRADE
                           where CSN = '0000'
                             and p.POSITION like '10%'
                             and cat_grade.CAT_GRADE not in ('3', '4')

                           group by P.MATRICULE) tt
                     where (sysdate - tt.max_permission) / 30 >= 3
                     order by tt.max_permission desc) bb
                    on p.MATRICULE = bb.MATRICULE;

select p.MATRICULE, (sysdate - max(permission.D_D_ABS)) / 30 as max_permission, max(permission.D_D_ABS)
from PERSONNELS P
         inner join (select * from EST_INDISPONIBLE indi where indi.CODE_ABS in ('4', '5')) permission
                    on p.MATRICULE = permission.MATRICULE
         left join R_GRADE grade on p.GRADE = grade.GRADE
         left join R_CAT_GRADE cat_grade on cat_grade.CAT = grade.CAT_GRADE
where CSN = '0000'
  and p.POSITION like '10%'
  and cat_grade.CAT_GRADE not in ('3', '4')

group by P.MATRICULE;

select indi.MATRICULE, NOMA, PNOMA, indi.MV_CSN, indi.NBR_JOURS, indi.D_D_ABS, LIB_GRADE_AR , indi.MOTIF
from EST_INDISPONIBLE indi
         inner join PERSONNELS perso on indi.MATRICULE = perso.MATRICULE
         inner join r_grade rgrade on perso.GRADE = rgrade.GRADE
where indi.CODE_ABS in ('4', '5')
  and indi.MV_CSN = '51'
  and indi.MATRICULE = '200116000595'
order by D_D_ABS desc
