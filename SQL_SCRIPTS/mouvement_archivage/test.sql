
DECLARE
    P$CSN      VARCHAR2(200);
    P$MODE_REF CHAR(200);
BEGIN

    P$CSN      := '10';
    P$MODE_REF := 'F';
    JGRH.REFRESH_CSN_ALL_MV ( P$CSN => P$CSN, P$MODE_REF => P$MODE_REF) ;
    JGRH.RAF_CSN_V4 ( P$CSN => P$CSN) ;

--     P$CSN      := '12';
--     P$MODE_REF := 'F';
--     JGRH.REFRESH_CSN_ALL_MV ( P$CSN => P$CSN, P$MODE_REF => P$MODE_REF) ;
--     JGRH.RAF_CSN_V4 ( P$CSN => P$CSN) ;
--
--     P$CSN      := '10';
--     P$MODE_REF := 'F';
--     JGRH.REFRESH_CSN_ALL_MV ( P$CSN => P$CSN, P$MODE_REF => P$MODE_REF) ;
--     JGRH.RAF_CSN_V4 ( P$CSN => P$CSN) ;
--
--     P$CSN      := '20';
--     P$MODE_REF := 'F';
--     JGRH.REFRESH_CSN_ALL_MV ( P$CSN => P$CSN, P$MODE_REF => P$MODE_REF) ;
--     JGRH.RAF_CSN_V4 ( P$CSN => P$CSN) ;
--
--     P$CSN      := '21';
--     P$MODE_REF := 'F';
--     JGRH.REFRESH_CSN_ALL_MV ( P$CSN => P$CSN, P$MODE_REF => P$MODE_REF) ;
--     JGRH.RAF_CSN_V4 ( P$CSN => P$CSN) ;
--
--     P$CSN      := '22';
--     P$MODE_REF := 'F';
--     JGRH.REFRESH_CSN_ALL_MV ( P$CSN => P$CSN, P$MODE_REF => P$MODE_REF) ;
--     JGRH.RAF_CSN_V4 ( P$CSN => P$CSN) ;

END;

BEGIN
    FOR V$PER_MUT IN (SELECT dd.id_archive,
                             DD.ARCHIVE_PAR,
                             CC.id_mouvement,
                             CC.matricule,
                             CC.type_mutation,
                             DD.D_ARCHIVE,
                             decode(CC.type_mutation, '2', '0000', '8', '0000', CC.csn_depart) csn_depart,
                             decode(CC.type_mutation, '3', '0000', CC.csn_arrive)              csn_arrive,
                             CC.POSITION

                      FROM GRHDSN.D_MOUVEMENT_GRH CC
                               INNER JOIN GRH_ARCHIVE.D_ARCHIVE_SUIVI DD ON cc.matricule = dd.matricule
                      WHERE (
                          (d_mr_depart IS NOT NULL AND mr_depart IS NOT NULL AND d_mr_depart <= dd.d_archive and
                           CC.type_mutation NOT IN ('2', '8') and DD.SRC_ARCHIVE = SUBSTR(CC.csn_depart, 1, 2))
                              or
                          (d_mr_depart IS NULL AND mr_depart IS NULL AND CC.type_mutation IN ('2', '8') and
                           DD.SRC_ARCHIVE = '00')
                          )
                        AND dd.d_archive = (SELECT MAX(KK.d_archive)
                                            FROM GRH_ARCHIVE.D_ARCHIVE_SUIVI KK
                                            WHERE dd.MATRICULE = kk.matricule)
                        AND NOT EXISTS (SELECT 1 FROM d_suivi_mouvement MO WHERE MO.id_mouvement = cc.id_mouvement)
--                         AND EXISTS (SELECT 1
--                                     FROM GRHDSN.R_MOUVEMENT RR
--                                     WHERE RR.CODE_MOUVEMENT = CC.CODE_MOUVEMENT
--                                       AND SYSDATE BETWEEN rr.d_debut_mv AND rr.d_echiancier_mv)
--                         and CC.type_mutation in ('1', '2', '3', '8')
--                         AND cc.valide = 'O'

                      UNION

                      SELECT dd.id_archive,
                             DD.VALIDE_PAR,
                             DD.id_mouvement,
                             DD.matricule,
                             DD.type_mutation,
                             DD.DATE_VALIDATION,
                             DD.csn_depart,
                             DD.csn_arrive,
                             DD.N_POSITION

                      FROM GRH_mouvement.d_suivi_mouvement DD
                      WHERE DD.type_mutation = '7'
                        AND INS_F_AR_GRHDSN = 'N'
        )
        LOOP
            BEGIN
                FOR V$TAB IN ( SELECT TABLE_NAME TABLE_NAME, COLS
                               FROM GRHDSN.ALL_TAB
                               WHERE UPPER(table_name) NOT IN ('D_MOUVEMENT_GRH', 'MISSION', 'ELEMENTS_MISSION')
                               ORDER BY NIVEAU )
                    LOOP
                        V$EXCEPTION := FALSE;
                        BEGIN
                            V$INSERT :=
                                    'BEGIN INSERT INTO GRH_MOUVEMENT.M_' || V$TAB.TABLE_NAME || ' (' || V$TAB.COLS ||
                                    ',id_mouvement ) SELECT ' || V$TAB.COLS || '  ,''' || V$PER_MUT.id_mouvement ||
                                    ''' FROM GRH_ARCHIVE.AR_' || V$TAB.TABLE_NAME ||
                                    ' WHERE ID_ARCHIVE = :2 ; :4 := SQL%ROWCOUNT; END ;';
                            EXECUTE IMMEDIATE V$INSERT USING V$PER_MUT.ID_ARCHIVE , OUT V$NBR;
                            IF V$TAB.TABLE_NAME = 'PERSONNELS' AND V$NBR <> 1 THEN

                                RAISE V$PERSONNEL_EXCEPTION ;
                            END IF;
                        EXCEPTION
                            WHEN V$PERSONNEL_EXCEPTION THEN
                                ROLLBACK;
                                V$EXCEPTION := TRUE;
                                V$SQL_CODE := '-2000';
                                V$SQL_ERRM := 'Erreur personnel ' || V$PER_MUT.MATRICULE || ' exist ' || v$nbr ||
                                              ' fois dans "D_MOUVEMENT_GRH" Ou "GRH_ARCHIVE.D_ARCHIVE_SUIVI"';
                                INSERT INTO A_MOUVEMENT_ERROR (TABLE_NAME, MATRICULE, ID_MOUVEMENT, SQL_CODE, SQL_ERRM, OPERATION)
                                VALUES (V$TAB.TABLE_NAME, V$PER_MUT.MATRICULE, V$PER_MUT.ID_MOUVEMENT, V$SQL_CODE,
                                        V$SQL_ERRM, 'INS_INTO_MOUV_DSN FROM_AR_DSN');
                                COMMIT;
                                EXIT;
                            WHEN OTHERS THEN
                                ROLLBACK;
                                V$EXCEPTION := TRUE;
                                V$SQL_CODE := SQLCODE;
                                V$SQL_ERRM := SUBSTR(SQLERRM, 1, 2000);
                                INSERT INTO A_MOUVEMENT_ERROR (TABLE_NAME, MATRICULE, ID_MOUVEMENT, SQL_CODE, SQL_ERRM, OPERATION)
                                VALUES (V$TAB.TABLE_NAME, V$PER_MUT.MATRICULE, V$PER_MUT.ID_MOUVEMENT, V$SQL_CODE,
                                        V$SQL_ERRM, 'INS_INTO_MOUV_DSN FROM_AR_DSN');
                                COMMIT;
                                EXIT;
                        END;
                    END LOOP;
                IF NOT V$EXCEPTION THEN

                    IF V$PER_MUT.type_mutation = '7' THEN -- If Personnel Position  is like 3% (Cx)
                        V$INSERT := 'UPDATE D_SUIVI_MOUVEMENT SET ins_f_ar_grhdsn =''O'' WHERE id_mouvement = :1';
                        EXECUTE IMMEDIATE V$INSERT USING V$PER_MUT.id_mouvement;
                    ELSE

                        V$INSERT := 'INSERT INTO d_suivi_mouvement (id_mouvement,matricule,date_validation,csn_depart,csn_arrive,valide_par,type_mutation,n_position,id_archive, ins_f_ar_grhdsn
                                            ) VALUES (    :v0,    :v1,    :v2,    :v3,    :v4,    :v5,    :v6,    :v7,    :v8,   ''O'')';

                        EXECUTE IMMEDIATE V$INSERT USING V$PER_MUT.id_mouvement, V$PER_MUT.matricule,V$PER_MUT.D_ARCHIVE,V$PER_MUT.csn_depart,V$PER_MUT.csn_arrive,V$PER_MUT.ARCHIVE_par,V$PER_MUT.type_mutation,V$PER_MUT.position,V$PER_MUT.id_archive;
                        --  EXECUTE IMMEDIATE 'BEGIN UPDATE GRH_MOUVEMENT.m_personnels SET POSITION = :1 ,CSN =:2 WHERE ID_MOUVEMENT = :3 ; :4 := SQL%ROWCOUNT; END ;'  USING V$PER_MUT.POSITION_arrive , V$PER_MUT.csn_arrive , V$PER_MUT.id_mouvement, OUT V$NBR;
                        -- DBMS_OUTPUT.PUT_LINE(V$PER_MUT.id_mouvement||'-- '||V$NBR) ;
                    END IF;
                    COMMIT;
                ELSE
                    ROLLBACK ;
                END IF;

            EXCEPTION
                WHEN OTHERS THEN
                    ROLLBACK;
                    V$SQL_CODE := SQLCODE;
                    V$SQL_ERRM := SUBSTR(SQLERRM, 1, 2000);
                    INSERT INTO A_MOUVEMENT_ERROR (TABLE_NAME, MATRICULE, ID_MOUVEMENT, SQL_CODE, SQL_ERRM, OPERATION)
                    VALUES ('GET_DATA_FROM_ARCHIVE_DSN', V$PER_MUT.MATRICULE, V$PER_MUT.ID_MOUVEMENT, V$SQL_CODE,
                            V$SQL_ERRM, 'INS_INTO_MOUV_DSN FROM_AR_DSN');
                    COMMIT;
            END;
        END LOOP;
END ;


















