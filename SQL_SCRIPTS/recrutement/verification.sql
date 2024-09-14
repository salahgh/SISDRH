select *
from RECRUTEMENT_SOFF_04_08_2024;

select count(*)
from RECRUTEMENT_SOFF_04_08_2024_2;

create table tmp_jaro_1 as
select *
from TMP_JARO_WINK_1_RES
where RES >= 60;

alter table RECRUTEMENT_SOFF_04_08_2024_2
    add constraint id_ primary key ("id_insid");

update (select RECRUTEMENT_SOFF_04_08_2024_2."id_insid" as id_,
               TMP_JARO_WINK_RES_IDENTIFIE_T.ID_51,
               RECRUTEMENT_SOFF_04_08_2024_2.DOUBLE_AVEC
        from RECRUTEMENT_SOFF_04_08_2024_2
                 inner join TMP_JARO_WINK_RES_IDENTIFIE_T on RECRUTEMENT_SOFF_04_08_2024_2."id_insid" =
                                                             TMP_JARO_WINK_RES_IDENTIFIE_T.CIT_ID_IDENTIFIE) vv
set vv.DOUBLE_AVEC = ID_51;

update RECRUTEMENT_SOFF_04_08_2024_2
set DOUBLE_AVEC = 'double'
where "id_insid" in (select CIT_ID_IDENTIFIE from TMP_JARO_WINK_RES_IDENTIFIE_T);

delete RECRUTEMENT_SOFF_04_08_2024_2
where "id_inssexe" = 'F';

drop table TMP_WILAYA;
create table TMP_WILAYA as
select "id_inswilaya_resdcode_wil"
from RECRUTEMENT_SOFF_04_08_2024_2
group by "id_inswilaya_resdcode_wil";
alter table TMP_WILAYA
    add constraint mskdfjmds primary key ("id_inswilaya_resdcode_wil");

update (select RECRUTEMENT_SOFF_04_08_2024_2.ID_REGION old, TMP_WILAYA.ID_REGION new
        from RECRUTEMENT_SOFF_04_08_2024_2
                 inner join TMP_WILAYA on RECRUTEMENT_SOFF_04_08_2024_2."id_inswilaya_resdcode_wil" =
                                          TMP_WILAYA."id_inswilaya_resdcode_wil") vv
set vv.old = vv.new;










