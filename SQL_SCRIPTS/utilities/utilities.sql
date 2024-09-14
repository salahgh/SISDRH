create view VV_MAX_EST_AFFECT as
select EST_AFFECT.*
from EST_AFFECT
         inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation from EST_AFFECT group by MATRICULE) vv
                    on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE;

select EST_AFFECT.*
from EST_AFFECT
         inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation from EST_AFFECT group by MATRICULE) vv
                    on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE where D_AFFECTATION < to_date('01/01/2024' , 'dd/mm/yyyy') ;

select * from PERSONNELS where MATRICULE = '200029000588';
