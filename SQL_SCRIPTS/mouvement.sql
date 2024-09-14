select *
from ALL_TAB
order by NIVEAU;

select count(MATRICULE), MV_CSN
from PHOTOS
group by MV_CSN
order by MV_CSN;
;
select *
from PHOTOS
where MATRICULE in (select matricule
                    from (select count(*), MATRICULE
                          from PHOTOS
                          group by MATRICULE
                          having count(*) = 2
                          order by count(*) desc));

select MATRICULE
from PERSONNELS
where MATRICULE = 200323005291;

select *
from GRH_TABLES_R_CPT;

select *
from PERSONNELS
where NOMA like '%أيمن%'
   or PNOMA like '%أيمن%'
order by NOMA;

DROP TRIGGER GRHDSN.INSERT_PERSONNELS;

DROP TRIGGER GRHDSN.INS_PERSONNELS;

CREATE OR REPLACE TRIGGER GRHDSN.INS_PERSONNELS
    BEFORE INSERT
    ON GRHDSN.PERSONNELS
    FOR EACH ROW
DECLARE
    x$user    VARCHAR2(40);
    CURSOR CUR
        IS
        SELECT CONDITION, MSG, ERR
        FROM GRHDSN.A_CONTROLE_MAJ
        WHERE BLOC = 'PERSONNELS';
    x$request VARCHAR2(1000);
    x$count   INTEGER;
    x$message VARCHAR2(255);
BEGIN
    x$user := SECTION_EN_COURS;

    FOR C IN CUR
        LOOP
            x$request := 'SELECT COUNT(*) FROM DUAL WHERE ' || C.CONDITION;
            x$request :=
                    REPLACE(x$request, 'V$POSITION', '''' || :new.POSITION || '''');
            x$request := REPLACE(x$request, 'V$SERVICE', :new.SERVICE);
            x$request :=
                    REPLACE(x$request, 'V$DETACHE', '''' || :new.DETACHE || '''');
            x$request :=
                    REPLACE(x$request,
                            'V$ADRESSE_PRO',
                            '''' || :new.ADRESSE_PRO || '''');
            x$request := REPLACE(x$request, 'V$APC_R', :new.APC_R);
            x$request := REPLACE(x$request, 'V$CSN', '''' || :new.CSN || '''');
            x$request :=
                    REPLACE(x$request, 'V$N_A_NAIS', '''' || :new.N_A_NAIS || '''');
            x$request := REPLACE(x$request, 'V$MATRICULE', :new.MATRICULE);
            x$request := REPLACE(x$request, 'V$GRADE', :new.GRADE);
            x$request := REPLACE(x$request, 'V$APC', :new.APC);
            x$request := REPLACE(x$request, 'V$ARME', :new.ARME);
            x$request := REPLACE(x$request, 'V$NOM', '''' || :new.NOM || '''');
            x$request := REPLACE(x$request, 'V$PNOM', '''' || :new.PNOM || '''');
            x$request := REPLACE(x$request, 'V$NOMA', '''' || :new.NOMA || '''');
            x$request := REPLACE(x$request, 'V$PNOMA', '''' || :new.PNOMA || '''');
            x$request := REPLACE(x$request, 'V$DN', '''' || :new.DN || '''');
            x$request := REPLACE(x$request, 'V$PPERE', '''' || :new.PPERE || '''');
            x$request := REPLACE(x$request, 'V$NMERE', '''' || :new.NMERE || '''');
            x$request := REPLACE(x$request, 'V$PMERE', '''' || :new.PMERE || '''');
            x$request :=
                    REPLACE(x$request, 'V$ADRESSE', '''' || :new.ADRESSE || '''');
            x$request := REPLACE(x$request, 'V$GS', :new.GS);
            x$request := REPLACE(x$request, 'V$CCP', '''' || :new.CCP || '''');
            x$request := REPLACE(x$request, 'V$PHONE', '''' || :new.PHONE || '''');
            x$request :=
                    REPLACE(x$request, 'V$PHONE2', '''' || :new.PHONE2 || '''');
            x$request := REPLACE(x$request, 'V$SITUATION', :new.SITUATION);
            x$request := REPLACE(x$request, 'V$MAIL', '''' || :new.MAIL || '''');
            x$request := REPLACE(x$request, 'V$SEX', '''' || :new.SEX || '''');
            x$request :=
                    REPLACE(x$request,
                            'V$PREVENIR_ABS',
                            '''' || :new.PREVENIR_ABS || '''');
            x$request :=
                    REPLACE(x$request, 'V$PHONE_ABS', '''' || :new.PHONE_ABS || '''');
            x$request := REPLACE(x$request, 'V$CSN_ORG', :new.CSN_ORG);

            EXECUTE IMMEDIATE (x$request) INTO x$count;

            IF (x$count > 0)
            THEN
                x$message := C.MSG;
                RAISE_APPLICATION_ERROR(
                        '-20101',
                        'خطأ رقم : ' || C.ERR || ' : ' || x$message,
                        TRUE);
            END IF;
        END LOOP;

    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'CSN_ORG',
          :old.CSN_ORG,
          :new.CSN_ORG,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PHONE_ABS',
          :old.PHONE_ABS,
          :new.PHONE_ABS,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PREVENIR_ABS',
          :old.PREVENIR_ABS,
          :new.PREVENIR_ABS,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'SEX',
          :old.SEX,
          :new.SEX,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'MAIL',
          :old.MAIL,
          :new.MAIL,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'SITUATION',
          :old.SITUATION,
          :new.SITUATION,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PHONE2',
          :old.PHONE2,
          :new.PHONE2,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PHONE',
          :old.PHONE,
          :new.PHONE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'CCP',
          :old.CCP,
          :new.CCP,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'GS',
          :old.GS,
          :new.GS,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'ADRESSE',
          :old.ADRESSE,
          :new.ADRESSE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PMERE',
          :old.PMERE,
          :new.PMERE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'NMERE',
          :old.NMERE,
          :new.NMERE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PPERE',
          :old.PPERE,
          :new.PPERE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'DN',
          :old.DN,
          :new.DN,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PNOMA',
          :old.PNOMA,
          :new.PNOMA,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'NOMA',
          :old.NOMA,
          :new.NOMA,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'PNOM',
          :old.PNOM,
          :new.PNOM,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'NOM',
          :old.NOM,
          :new.NOM,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'ARME',
          :old.ARME,
          :new.ARME,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'APC',
          :old.APC,
          :new.APC,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'GRADE',
          :old.GRADE,
          :new.GRADE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'MATRICULE',
          :old.MATRICULE,
          :new.MATRICULE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'N_A_NAIS',
          :old.N_A_NAIS,
          :new.N_A_NAIS,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'CSN',
          :old.CSN,
          :new.CSN,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'APC_R',
          :old.APC_R,
          :new.APC_R,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'ADRESSE_PRO',
          :old.ADRESSE_PRO,
          :new.ADRESSE_PRO,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'DETACHE',
          :old.DETACHE,
          :new.DETACHE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'SERVICE',
          :old.SERVICE,
          :new.SERVICE,
          'INS');
    P_CPR(:new.MATRICULE,
          x$user,
          'PERSONNELS',
          'POSITION',
          :old.POSITION,
          :new.POSITION,
          'INS');
END;

/* Formatted on 31/08/2020 16:06:04 (QP5 v5.215.12089.38647) */
/

