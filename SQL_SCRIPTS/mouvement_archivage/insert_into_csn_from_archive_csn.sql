BEGIN
    INTO_GRHDSN_FROM_GRH_ARCHIVE(201501000833, 0020240387);
END ;


BEGIN
    DECLARE
--         V$INSERT     LONG ;
-- --         P$MATRICULE VARCHAR2(2000) ;
--         P$ID_ARCHIVE VARCHAR2(2000) ;
    BEGIN
        --         P$MATRICULE := 200048001615;
--         P$ID_ARCHIVE := 0020240341;
        ARCHIVE_PERSONNEL('200844001775', '72', '00');
    END;
END;



BEGIN
    DECLARE
        V$INSERT     LONG ;
--         P$MATRICULE VARCHAR2(2000) ;
        P$ID_ARCHIVE VARCHAR2(2000) ;
    BEGIN
        --         P$MATRICULE := 200048001615 ;
        P$ID_ARCHIVE := 5120240092;
        FOR V$TAB IN ( SELECT TABLE_NAME, COLS
                       FROM GRHDSN.ALL_TAB
                       where TABLE_NAME not in ('D_MOUVEMENT_GRH', 'EST_AFFECT')
                       ORDER BY NIVEAU )
            LOOP
                BEGIN
                    V$INSERT := 'INSERT INTO GRHDSN.' || V$TAB.TABLE_NAME || ' (' || V$TAB.COLS || ' ) SELECT ' ||
                                V$TAB.COLS || '  FROM GRH_MOUVEMENT.M_' || V$TAB.TABLE_NAME ||
                                ' WHERE ID_MOUVEMENT = 515320240584';
                    DBMS_OUTPUT.PUT_LINE(V$INSERT);
                    EXECUTE IMMEDIATE V$INSERT;
                EXCEPTION
                    WHEN OTHERS THEN
                        ROLLBACK;
                        DBMS_OUTPUT.PUT_LINE(SQLCODE);
                        DBMS_OUTPUT.PUT_LINE(SQLERRM);
                        COMMIT;
                END;
            END LOOP;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            COMMIT;
    END;
END;




