DECLARE
    -- Variable declarations
    l_RetVal           VARCHAR2 (32767);
    l_P$ID_MOUVEMENT   VARCHAR2 (32767);
BEGIN
    -- Variable initializations
    l_P$ID_MOUVEMENT := '206120240623';

    -- Call
    l_RetVal :=
            GRH_MOUVEMENT.INS_INTO_GRH_CSN (P$ID_MOUVEMENT => l_P$ID_MOUVEMENT);

    DBMS_OUTPUT.PUT_LINE(l_RetVal);

    -- Transaction control
    COMMIT;

    -- Output bind variables, do not modify
END;

