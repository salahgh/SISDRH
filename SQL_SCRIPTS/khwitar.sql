drop view VV_DSN_MOUVEMENT;
create view VV_DSN_MOUVEMENT as
select PERSONNELS.MATRICULE,
       PERSONNELS.NOM,
       PERSONNELS.PNOM,
       NOMA,
       PNOMA,
       LIB_GRADE_AR,
       catgrade.LIB_CAT_AR,
       LIB_ARME_AR,
       csn.LIB_CSN_AR,
       font.LIB_STRUCTURE_AR,
       LIB_FONCTION_AR,
       typeMouvement.LIB_MUTATION_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         inner join R_CSN csn on mvgrh.CSN_DEPART = csn.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where ANNEE = 2024
  and (CSN_DEPART = '0000' or CSN_ARRIVE = '0000')
--   and (CSN_ARRIVE <> CSN_DEPART or CSN_ARRIVE is null)
order by PERSONNELS.GRADE, CSN_DEPART, CSN_ARRIVE;

create table REPRESENTANT_DSN_STRUCTURE as
select REPRESENTANT_DES_SN.*,
       PERSONNELS.MATRICULE,
       PERSONNELS.NOMA,
       PERSONNELS.PNOMA,
       grade.LIB_GRADE_AR,
       R_CSN.LIB_CSN_AR ,
       fonct.LIB_FONCTION_AR ,
       struct.LIB_STRUCTURE_AR
from REPRESENTANT_DES_SN
         left join PERSONNELS on PERSONNELS.MATRICULE = REPRESENTANT_DES_SN.MAT
         left join VV_MAX_EST_AFFECT max_affect on max_affect.MATRICULE = REPRESENTANT_DES_SN.MAT
         left join R_STRUCT struct on struct.STRUCTURE = max_affect.STRUCT
         left join R_FONCT fonct on fonct.FONCTION = max_affect.FONCT
         left join R_CSN on PERSONNELS.CSN = R_CSN.CSN
         left join R_GRADE grade on grade.GRADE = PERSONNELS.GRADE