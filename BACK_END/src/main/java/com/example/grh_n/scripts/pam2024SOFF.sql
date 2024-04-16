SELECT PP."MATRICULE",
       PP."NOMA",
       PP."PNOMA",
       PP."POSITION",
       PP."ARME",
       PP."GRADE",
       PP."G",
       PP."DIP_CIV",
       PP."CODE_DIP_CIV",
       PP."DIP_MIL",
       PP."CODE_DIP_MIL",
       PP."PAV",
       PP."PROP",
       PP."PAV_2025",
       PP."PAV_2026",
       PP."ENS",
       PP."LIB_ARME_AR",
       PP."CSN",
       PP."N_MUTATION",
       PP."C",
       PP."DUREE_N",
       PP."FONCTION",
       PP."DUREE_FONCT",
       PP."ENS_FONCTION",
       PP."POSTE",
       PP."ANNEE_SERV",
       PP."SUD",
--        PP."DUREE_S",
--        PP."N_DUREE_S",
       PP."TRI_"
--        PP."OBS",
--        DECODE(PP.OBS, NULL, 'لا', 'نعم') AS FORMATION
FROM (SELECT *
      FROM (SELECT TO_CHAR(P.MATRICULE)
                                                                        AS MATRICULE,
                   P.NOMA,
                   P.PNOMA,
                   RP.LIB_POSITION_AR
                                                                        AS POSITION,
                   P.ARME,
                   G.LIB_GRADE_AR
                                                                        AS GRADE,
                   G.GRADE
                                                                        AS G,
                   GRHDSN.GET_MAX_DIPLOME_CIV(P.MATRICULE)              AS DIP_CIV,
                   GRHDSN.GET_MAX_DIPLOME_CIV_CODE(P.MATRICULE)         AS CODE_DIP_CIV,
                   GRHDSN.GET_MAX_DIPLOME_MIL(P.MATRICULE)              AS DIP_MIL,
                   GRHDSN.GET_MAX_DIPLOME_MIL_CODE(P.MATRICULE)         AS CODE_DIP_MIL,
                   DECODE((SELECT COUNT(1)
                           FROM GRHDSN.PROP_GRADE PR
                           WHERE PR.MATRICULE = P.MATRICULE),
                          '0', 'لا',
                          'نعم')
                                                                        AS PAV,
                   (SELECT PR.PROP + 1
                    FROM GRHDSN.PROP_GRADE PR
                    WHERE PR.MATRICULE = P.MATRICULE)
                                                                        AS PROP,
                   DECODE((SELECT COUNT(1)
                           FROM GRHDSN.PROP_GRADE_2025 PR
                           WHERE PR.MATRICULE = P.MATRICULE),
                          '0', 'لا',
                          'نعم')
                                                                        AS PAV_2025,
                   DECODE((SELECT COUNT(1)
                           FROM GRHDSN.PROP_GRADE_2026 PR
                           WHERE PR.MATRICULE = P.MATRICULE),
                          '0', 'لا',
                          'نعم')
                                                                        AS PAV_2026,
                   (SELECT 2024 - TO_CHAR(N.D_NOMIN, 'YYYY')
                    FROM GRHDSN.EST_NOMINER_G N
                    WHERE P.MATRICULE = N.MATRICULE
                      AND N.D_NOMIN = (SELECT MAX(NN.D_NOMIN)
                                       FROM GRHDSN.EST_NOMINER_G NN
                                       WHERE N.MATRICULE = NN.MATRICULE))
                                                                        AS ENS,
                   A.LIB_ARME_AR,
                   DECODE(
                           SUBSTR(C.CSN, 1, 3),
                           '000', 'م.خ.و/و.د.و',
                           (DECODE(SUBSTR(C.CSN, 2, 3),
                                   '000', 'م.ج.خ.و/' || C.REGION,
                                   'م.خ.و/' || C.WILAYA)))
                                                                        AS CSN,
                   (SELECT COUNT(1)
                    FROM GRHDSN.EST_MUTER M
                    WHERE M.MATRICULE = P.MATRICULE
                      AND M.STAGE = '0')
                                                                        AS N_MUTATION,
                   P.CSN
                                                                        AS C,
                   TRUNC(/*GRHDSN.GET_LAST_DATE_MUT_V4 (P.MATRICULE) / 365*/ 1)
                                                                        AS DUREE_N,
                   RF.LIB_FONCTION_AR
                                                                        AS FONCTION,
                   ROUND((GRHDSN.GET_DUREE_LAST_FONCT(P.MATRICULE) / 365), 2)
                                                                        AS DUREE_FONCT,
                   0                                                    AS ENS_FONCTION,
                   RF.POSTE,
                   TO_CHAR(SYSDATE, 'YYYY') - SUBSTR(P.MATRICULE, 1, 4) AS ANNEE_SERV,
                /*(SELECT 2024 - TO_CHAR (A.D_AFFECTATION, 'YYYY')
                  FROM GRHDSN.EST_AFFECT A
                 WHERE     A.MATRICULE = P.MATRICULE
                       AND A.D_AFFECTATION =
                           (SELECT MAX (AA.D_AFFECTATION)
                             FROM GRHDSN.EST_AFFECT AA
                            WHERE     A.MATRICULE = AA.MATRICULE
                                  AND AA.TYPE_FONCT = '0')
                       AND A.TYPE_FONCT = '0')
                    AS ENS_FONCTION,*/
                   DECODE(GRHDSN.GET_SUD(P.MATRICULE),
                          'Y', 'نعم',
                          'N', 'لا',
                          '/')
                                                                        AS SUD,
--                    DECODE(GRHDSN.GET_DUREE_SUD(P.MATRICULE),
--                           NULL, 'سنة واحدة',
--                           '0', '/',
--                           '1', 'سنة واحدة',
--                           '2', 'سنتين',
--                           GRHDSN.GET_DUREE_SUD(P.MATRICULE) || ' سنوات')
--                                                                         AS DUREE_S,
--                    GRHDSN.GET_DUREE_SUD(P.MATRICULE)
--                                                                         AS N_DUREE_S,
                   GRHDSN.CODE_GRD_ANNEE(P.MATRICULE)
                                                                        AS TRI_
            FROM GRHDSN.PERSONNELS P,
                 GRHDSN.R_GRADE G,
                 GRHDSN.R_ARME A,
                 GRHDSN.R_CSN C,
                 GRHDSN.EST_AFFECT AF,
                 GRHDSN.R_FONCT RF,
                 GRHDSN.R_POSITION RP
            WHERE AF.MATRICULE = P.MATRICULE
              AND P.POSITION = RP.POSITION
              AND AF.D_AFFECTATION =
                  (SELECT MAX(AFF.D_AFFECTATION)
                   FROM GRHDSN.EST_AFFECT AFF
                   WHERE AF.MATRICULE = AFF.MATRICULE
                     AND AFF.TYPE_FONCT = '0')
              AND AF.TYPE_FONCT = '0'
              AND AF.FONCT = RF.FONCTION
              AND P.GRADE = G.GRADE
              AND P.ARME = A.ARME
              AND SUBSTR(P.CSN, 1, 2) || '00' = C.CSN
              AND P.GRADE <= '49'  and P.GRADE >= '39'
              AND (P.POSITION LIKE '1%' OR P.POSITION LIKE '2%')
              AND P.ARME NOT IN ('31', '42', '94')
            ORDER BY SUBSTR(P.CSN, 1, 2), G.GRADE, P.MATRICULE)
/*WHERE    (DUREE_N >= 4 AND C NOT IN ('3101', '3137', '4133', '6198', '6199'))
      OR (DUREE_N >= 3 AND C IN ('3101', '3137', '4133', '6198', '6199')) --AND C != '0000'*/
      ORDER BY G,
               GRHDSN.CODE_GRD_ANNEE(MATRICULE),
               C,
               DUREE_N) PP
/
;

select GRHDSN.GET_DUREE_LAST_FONCT(201143005895) from dual ;

