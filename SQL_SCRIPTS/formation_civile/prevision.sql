create table OFF_6RM as
select PERSONNELS.MATRICULE,
       NOMA,
       PNOMA,
       LIB_GRADE_AR                                                        as GR,
       arme.ARME,
       CSN,
       GRHDSN.GET_MAX_DIPLOME_CIV(PERSONNELS.MATRICULE)                    AS DIP_CIV,
       stcivil.D_F_STAGE                                                   as fin_stage_civile,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stcivil.D_F_STAGE) / 365     as rendement_civile,
       GRHDSN.GET_MAX_DIPLOME_MIL(PERSONNELS.MATRICULE)                    AS DIP_MIL,
       stmilitaire.D_F_STAGE                                               as fin_stage_militaire,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stmilitaire.D_F_STAGE) / 365 as rendement_militaire,
       LIB_ARME_AR,
       LIB_POSITION_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join VV_MAX_STAGE_CIVILE stcivil on stcivil.MATRICULE = PERSONNELS.MATRICULE
         left join VV_MAX_STAGE_MILITAIRE stmilitaire on stmilitaire.MATRICULE = PERSONNELS.MATRICULE
where position.POSITION like '1%'
  and grade.GRADE > 22
  and grade.GRADE <= 39
  and (csn like '6%')
  and arme.ARME <> 31
order by CSN, PERSONNELS.GRADE, MATRICULE;


create table OFF_ETAT_MOAJOR_2024_ as
select PERSONNELS.MATRICULE,
       NOMA,
       PNOMA,
       LIB_GRADE_AR                                                        as GR,
       grade.GRADE,
       arme.ARME,
       CSN,
       GRHDSN.GET_MAX_DIPLOME_CIV(PERSONNELS.MATRICULE)                    AS DIP_CIV,
       stcivil.D_F_STAGE                                                   as fin_stage_civile,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stcivil.D_F_STAGE) / 365     as rendement_civile,
       GRHDSN.GET_MAX_DIPLOME_MIL(PERSONNELS.MATRICULE)                    AS DIP_MIL,
       stmilitaire.D_F_STAGE                                               as fin_stage_militaire,
       stmilitaire.DIPLOME,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stmilitaire.D_F_STAGE) / 365 as rendement_militaire,
       LIB_ARME_AR,
       LIB_POSITION_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join VV_MAX_STAGE_CIVILE stcivil on stcivil.MATRICULE = PERSONNELS.MATRICULE
         left join VV_MAX_STAGE_MILITAIRE stmilitaire on stmilitaire.MATRICULE = PERSONNELS.MATRICULE
where position.POSITION like '1%'
  and grade.GRADE = 31
  and arme.ARME <> 31
--   and stmilitaire.DIPLOME = '1006'
order by CSN, PERSONNELS.GRADE, MATRICULE;


create table TMP_SOFF_DSN as
select PERSONNELS.MATRICULE,
       NOMA,
       PNOMA,
       LIB_GRADE_AR                                                        as GR,
       grade.GRADE,
       catgrade.CAT,
       arme.ARME,
       CSN,
       GRHDSN.GET_MAX_DIPLOME_CIV(PERSONNELS.MATRICULE)                    AS DIP_CIV,
       stcivil.D_F_STAGE                                                   as fin_stage_civile,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stcivil.D_F_STAGE) / 365     as rendement_civile,
       GRHDSN.GET_MAX_DIPLOME_MIL(PERSONNELS.MATRICULE)                    AS DIP_MIL,
       stmilitaire.D_F_STAGE                                               as fin_stage_militaire,
       stmilitaire.DIPLOME,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stmilitaire.D_F_STAGE) / 365 as rendement_militaire,
       LIB_ARME_AR,
       LIB_POSITION_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join VV_MAX_STAGE_CIVILE stcivil on stcivil.MATRICULE = PERSONNELS.MATRICULE
         left join VV_MAX_STAGE_MILITAIRE stmilitaire on stmilitaire.MATRICULE = PERSONNELS.MATRICULE
where position.POSITION like '1%'
  and CSN like '0000'
  and arme.ARME <> 31
  and CAT = '2'
--   and stmilitaire.DIPLOME = '1006'
order by CSN, PERSONNELS.GRADE, MATRICULE;

select ENC_DEC.decrypt(APPR_CHEF), GRH_ARCHIVE.AR_EST_NOTE_OFF.*
from GRH_ARCHIVE.AR_EST_NOTE_OFF
where MATRICULE = '201016001075';

create table TT_DESS_CANDIDAT as
select CSN,
       PERSONNELS.MATRICULE,
       NOMA,
       PNOMA,
       LIB_GRADE_AR                                                        as GR,
       catgrade.CAT_GRADE,
       stmilitaire.DIPLOME,
       PERSONNELS.GRADE,
       arme.ARME,
       GRHDSN.GET_MAX_DIPLOME_CIV(PERSONNELS.MATRICULE)                    AS DIP_CIV,
       stcivil.D_F_STAGE                                                   as fin_stage_civile,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stcivil.D_F_STAGE) / 365     as rendement_civile,
       GRHDSN.GET_MAX_DIPLOME_MIL(PERSONNELS.MATRICULE)                    AS DIP_MIL,
       stmilitaire.D_F_STAGE                                               as fin_stage_militaire,
       (to_date('01/09/2024', 'dd/mm/yyyy') - stmilitaire.D_F_STAGE) / 365 as rendement_militaire,
       LIB_ARME_AR,
       LIB_POSITION_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join VV_MAX_STAGE_CIVILE stcivil on stcivil.MATRICULE = PERSONNELS.MATRICULE
         left join VV_MAX_STAGE_MILITAIRE stmilitaire on stmilitaire.MATRICULE = PERSONNELS.MATRICULE
where (csn like '1%' or csn = '0000')
  and arme.ARME <> 31
  and catgrade.CAT = '2'
  and grade.GRADE not in ('47', '45', '41')

order by CSN, PERSONNELS.GRADE, MATRICULE;



SELECT DECODE(
               I.CODE_ABS,
               '1', 'المعني في حالة غياب غير شرعي',
               '2', 'المعني في حالة فرار',
               '3', 'إجازة قصيرة إلى غاية  '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '4', 'إجازة إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '5', 'عطلة إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '6', 'مهمة إلى يوم '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY') || ' ' || I.MOTIF,
               '7', 'متأخر عن الإجازة ',
               '9', 'توقيف إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '10', 'نقاهة إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '11', 'عطلة أمومة إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '12', 'عطلة مرضية إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '13', 'إستيداع إلى غاية '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '14', 'إستشفاء إلى يوم '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '15', 'متأخر عن مهمة ',
               '16', 'تأخر عن نقاهة ',
               '17', 'متأخر عن عطلة ',
               '20', 'مرخص  '
                   || I.OBS,
               '21', 'مأذون ليوم '
                   || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '22', 'محال أمام المحكمة العسكرية',
               '23', 'نقاهة طويلة المدى إلى غاية ' || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '24', 'إيقاف عن العمل إلى غاية ' || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '26', 'نقاهة(كوفيد 19) إلى غاية ' || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               '25', 'إسترجاع خفارة يوم ' || TO_CHAR(I.D_F_ABS, 'DD/MM/YYYY'),
               NULL)
           AS MOTIF,
       I.*
FROM GRHDSN.EST_INDISPONIBLE I,
     GRHDSN.EST_AFFECT A,
     GRHDSN.PERSONNELS P
WHERE TRUNC(SYSDATE) BETWEEN I.D_D_ABS AND I.D_F_ABS
  AND P.MATRICULE = I.MATRICULE
  AND (A.MATRICULE, A.D_AFFECTATION) IN
      (SELECT AA.MATRICULE, MAX(AA.D_AFFECTATION)
       FROM GRHDSN.EST_AFFECT AA
       GROUP BY AA.MATRICULE)
  AND I.MATRICULE = A.MATRICULE
  AND I.MATRICULE = '201241011033'
  AND P.CSN = '0000'
  AND P.POSITION LIKE '1%'
ORDER BY P.GRADE, A.MATRICULE;