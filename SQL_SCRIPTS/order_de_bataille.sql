drop view VV_ORDRE_BT_0000;
create view VV_ORDRE_BT_0000 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join R_FONCT mvgrhfonct on mvgrh.FONCTION = mvgrhfonct.FONCTION
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART = '0000')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE = '0000')
order by grade, MATRICULE;



drop view VV_ORDRE_BT_01;
create view VV_ORDRE_BT_01 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART like '1%')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE like '1%')
order by CSN, grade, MATRICULE;



drop view VV_ORDRE_BT_02;
create view VV_ORDRE_BT_02 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART like '2%')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE like '2%')
order by CSN, grade, MATRICULE;


drop view VV_ORDRE_BT_03;
create view VV_ORDRE_BT_03 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART like '3%')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE like '3%')
order by CSN, grade, MATRICULE;



drop view VV_ORDRE_BT_04;
create view VV_ORDRE_BT_04 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART like '4%')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE like '4%')
order by CSN, grade, MATRICULE;

drop view VV_ORDRE_BT_05;
create view VV_ORDRE_BT_05 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART like '5%')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE like '5%')
order by CSN, grade, MATRICULE;

drop view VV_ORDRE_BT_06;
create view VV_ORDRE_BT_06 as
select csn_mv.LIB_CSN_AR                     as mv_csn,
       est_affect_fonct.LIB_FONCTION_AR         lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'SORTANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join (select EST_AFFECT.*
                    from EST_AFFECT
                             inner join (select MATRICULE, max(D_AFFECTATION) as max_d_affectation
                                         from EST_AFFECT
                                         where D_AFFECTATION < to_date('01/01/2024', 'dd/mm/yyyy')
                                         group by MATRICULE) vv
                                        on D_AFFECTATION = max_d_affectation and EST_AFFECT.MATRICULE = vv.MATRICULE) mm
                   on PERSONNELS.MATRICULE = mm.MATRICULE
         left join R_FONCT est_affect_fonct on mm.FONCT = est_affect_fonct.FONCTION
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_DEPART = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_DEPART like '6%')
union
select csn_mv.LIB_CSN_AR                     as mv_csn,
       LIB_FONCTION_AR                          lib_fonction_pam,
       NOMA,
       PNOMA,
       PERSONNELS.MATRICULE,
       LIB_GRADE_AR,
       VV_DERNIERE_NOMINATION.D_NOMIN,
       PERSONNELS.GRADE,
       LIB_ARME_AR,
       GET_DIPLOME_MIL(PERSONNELS.MATRICULE) as DIP_MIL,
       GET_DIPLOME_CIV(PERSONNELS.MATRICULE) as DIP_CIV,
       LIB_POSITION_AR,
       csn_mv.CSN,
       typeMouvement.LIB_MUTATION_AR,
       'ENTRANT'                             as type
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         inner join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         inner join VV_DERNIERE_NOMINATION on PERSONNELS.MATRICULE = VV_DERNIERE_NOMINATION.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn_mv on mvgrh.CSN_ARRIVE = csn_mv.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
where (mvgrh.CSN_ARRIVE like '6%')
order by CSN, grade, MATRICULE;




