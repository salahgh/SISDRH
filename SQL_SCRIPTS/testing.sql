select D_SONCTION(MATRICULE, 2000, 2024), DERN_SONCTION(MATRICULE), GET_DUREE_REGION(MATRICULE)
from PERSONNELS;

select *
from EST_MUTER;

select USERS.*,
       ENC_DEC.decrypt('E0C8802A8C62F3DD7007684C8BBD4321')
from USERS;

select MATRICULE
from PERSONNELS
         inner join R_POSITION on PERSONNELS.POSITION = R_POSITION.POSITION
where PERSONNELS.POSITION like '10%';

select *
from PERSONNELS;
select *
from EST_MUTER
order by MATRICULE;

create table BMP2_S1_2024_2025 as
select perso.MATRICULE,
       NOMA,
       PNOMA,
       grade.LIB_GRADE_AR,
       grade.GRADE,
       arme.LIB_ARME_AR,
       old.LIB_UNITEE_AR as old,
       new.LIB_UNITEE_AR as new
from D_MOUVEMENT_GRH mvgrh
         inner join R_GRADE grade on mvgrh.GRADE = grade.GRADE
         inner join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
         inner join PERSONNELS perso on perso.MATRICULE = mvgrh.MATRICULE
         inner join R_ARME arme on perso.ARME = arme.ARME
         inner join R_UNITEE old on mvgrh.OLD_UNITE = old.UNITEE
         inner join R_UNITEE new on mvgrh.NEW_UNITE = new.UNITEE
where mvgrh.TYPE_MUTATION = '3'
  and grade.GRADE = '43';

insert into GEC_R_COURIER_AUTORITE (ID)
select ID
from RH_R_UNITE;
commit;
select *
from GEC_R_COURIER_AUTORITE;



SELECT person.MATRICULE,
       NOMA,
       PNOMA,
       D_D_STAGE,
       D_F_STAGE,
       LIB_SPEC_AR,
       LIB_DIP_AR
FROM PERSONNELS person
         inner join EST_STAGIERE on person.MATRICULE = EST_STAGIERE.MATRICULE
         left join R_DIPLOME on EST_STAGIERE.DIPLOME = R_DIPLOME.DIP
         left join R_SPECIALITE on EST_STAGIERE.SPECIALITE = R_SPECIALITE.SPEC
WHERE DIP = DIPLOME
  AND SPECIALITE = SPEC
  AND SUBSTR(DIP
          , 1
          , 1) = '1'
  and (person.MATRICULE, D_D_STAGE) = (select person.MATRICULE, max(D_D_STAGE) as max_d_d_stage
                                       from EST_STAGIERE
                                       where person.MATRICULE = EST_STAGIERE.MATRICULE
                                       group by person.MATRICULE)
order by person.MATRICULE;


create view VV_DERNIERE_NOMINATION as
select EST_NOMINER_G.*
from EST_NOMINER_G
         inner join (select MATRICULE, max(D_NOMIN) as max_d_nomination
                     from GRHDSN.EST_NOMINER_G
                     group by MATRICULE) tmp
                    on EST_NOMINER_G.MATRICULE = tmp.MATRICULE and EST_NOMINER_G.D_NOMIN = max_d_nomination ;

select * from VV_DERNIERE_NOMINATION where MATRICULE = '201143005895'

