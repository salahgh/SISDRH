select ID,
       ID_INSADRESSE,
       DIPLOMESAUTRE_DIP,
       DATE_INSC,
       ID_INSDATE_NAISSANCE,
       ID_INSMAIL,
       ID_INSDATE_NM,
       ID_INSNOM_MERE,
       ID_INSNOM,
       ID_INSNOM_AR,
       ID_INSDATE_NP,
       ID_INSPRENOM_MERE,
       ID_INSPRENOM,
       ID_INSPRENOM_AR,
       ID_INSNOM_PR,
       ID_INSTELE,
       LR_ID,
       NATIONALITE_ID,
       SEX_ID_SEX,
       WN_ID,
       WN_MERE_ID,
       WN_PERE_ID
from REC_D_CANDIDAT;

create table tmp_soff_2024 as
select *
from RECRUTEMENT_SOFF_04_08_2024_2@GRHDSN_LINK;


select *
from RH_R_CODE_GEO;
update RH_R_CODE_GEO
set WILAYA_ID = substr(ID, 0, 2)
where to_number(substr(ID, 0, 2)) <= 58
  and ID <> 0;

create table tmp_wilaya as
select *
from tmp_wilaya@GRHDSN_LINK;
alter table tmp_wilaya
    add constraint msdkfdf primary key ("id_inswilaya_resdcode_wil");


create table tmp_wilaya_ as
select *
from (select "id_inslieu_naissancenom_ar_wil" lib_wilaya_ar, "id_inslieu_naissancenom_wil" lib_wilaya_fr
      from tmp_soff_2024 aa
      group by aa."id_inslieu_naissancenom_ar_wil", aa."id_inslieu_naissancenom_wil");

create table tmp_aa as
select id, LIB_AR, lib_wilaya_ar
from tmp_wilaya_
         FULL OUTER JOIN RH_R_WILAYA on LIB_AR = lib_wilaya_ar;

drop table tmp_wilaya_;

create table tmp_wilaya_ as
select *
from (select "id_inslieu_naissancenom_ar_wil" lib_wilaya_ar, "id_inslieu_naissancenom_wil" lib_wilaya_fr
      from tmp_soff_2024 aa
      group by aa."id_inswilaya_naiss_pcode_wil", aa."id_inslieu_naissancenom_wil");

create table tmp_wnmere as
select id, LIB_AR, lib_wilaya_ar
from tmp_wilaya_
         FULL OUTER JOIN RH_R_WILAYA on LIB_AR = lib_wilaya_ar;



ALTER TABLE TMP_DIPLOME
    ADD (CODE_SPECIALITE varchar2(255));

drop table TMP_DIPLOME;

create table RMP_RDIPLOME_ANC as
select *
from R_DIPLOME@GRHDSN_LINK;

create table TMP_DIPLOME as
select aa."diplomesid_dipnom_dip", count(*) cc
from tmp_soff_2024 aa
group by aa."diplomesid_dipnom_dip";

alter table TMP_DIPLOME
    add (CODE_DIPLOME varchar2(254));
alter table TMP_DIPLOME
    add (CODE_SPECIALITE varchar2(254));

create table TMP_AUTRE_DIPLOME as
select soff."diplomesautre_dip", count(*) cc
from tmp_soff_2024 soff
group by soff."diplomesautre_dip";

alter table TMP_AUTRE_DIPLOME
    add (CODE_DIPLOME varchar2(255));


insert into REC_D_INSCRIPTION (ID, ID_INSADRESSE, DIPLOMESAUTRE_DIP, DATE_INSC, ID_INSDATE_NAISSANCE, ID_INSMAIL,
                               ID_INSDATE_NM, ID_INSNOM_MERE, ID_INSNOM, ID_INSNOM_AR, ID_INSDATE_NP, ID_INSPRENOM_MERE,
                               ID_INSPRENOM, ID_INSPRENOM_AR, ID_INSNOM_PR, ID_INSTELE, NATIONALITE_ID,
                               SEX_ID_SEX,
                               WN_ID, WN_MERE_ID, WN_PERE_ID, WR_ID, EXERCICE_ID, TYPE_RECRUTEMNT_ID)
SELECT soff."id_insid",
       soff."id_insadresse",
       soff."diplomesautre_dip",
       soff."date_insc",
       soff."id_insdate_naissance",
       soff."id_insmail",
       soff."id_insdate_nm",
       soff."id_insnom_mere",
       soff."id_insnom",
       soff."id_insnom_ar",
       soff."id_insdate_np",
       soff."id_insprenom_mere",
       soff."id_insprenom",
       soff."id_insprenom_ar",
       soff."id_insnom_pr",
       soff."id_instele",
       1,
       soff."id_inssexe",
       case
           when soff."id_inslieu_naissancecode_wil" < 10 then '0' || to_char(soff."id_inslieu_naissancecode_wil")
           else to_char(soff."id_inslieu_naissancecode_wil")
           end WN_ID,
       case
           when soff."id_inswilaya_naiss_mcode_wil" < 10 then '0' || to_char(soff."id_inswilaya_naiss_mcode_wil")
           else to_char(soff."id_inswilaya_naiss_mcode_wil")
           end WN_MERE_ID,
       case
           when soff."id_inswilaya_naiss_pcode_wil" < 10 then '0' || to_char(soff."id_inswilaya_naiss_pcode_wil")
           else to_char(soff."id_inswilaya_naiss_pcode_wil")
           end WN_PERE_ID,
       case
           when soff."id_inswilaya_resdcode_wil" < 10 then '0' || to_char(soff."id_inswilaya_resdcode_wil")
           else to_char(soff."id_inswilaya_resdcode_wil")
           end WR_ID
        ,
       '2024/2025',
       'SOFF'
from tmp_soff_2024 soff;

commit;

insert into REC_CANDIDAT_DIPLOME (ID, ANNE, DIPLOMESECOLE, MOYENNE, DIPLOME_ID, INSCRIPTION_ID, SPECIALITE_ID)
SELECT REC_CANDIDAT_DIPLOME_SEQ.nextval,
       null,
       trim(vv.ecole),
       to_number(vv.diplomesmoyenne),
       trim(vv.CODE_DIPLOME),
       trim(vv.id_insid),
       trim(vv.CODE_SPECIALITE)
from (select soff."id_insid"        id_insid,
             diplome.CODE_SPECIALITE,
             diplome.CODE_DIPLOME,
             soff."diplomesmoyenne" diplomesmoyenne,
             soff."diplomesecole"   ecole
      from tmp_soff_2024 soff
               left join TMP_DIPLOME diplome on soff."diplomesid_dipnom_dip" = diplome."diplomesid_dipnom_dip") vv;


insert into REC_CANDIDAT_DIPLOME (ID, ANNE, DIPLOMESECOLE, MOYENNE, DIPLOME_ID, INSCRIPTION_ID, SPECIALITE_ID)
SELECT REC_CANDIDAT_DIPLOME_SEQ.nextval,
       null,
       null,
       null,
       trim(vv.CODE_DIPLOME),
       trim(vv."id_insid"),
       null
from (select soff."id_insid", autre.CODE_DIPLOME
      from tmp_soff_2024 soff
               inner join TMP_AUTRE_DIPLOME autre on soff."diplomesautre_dip" = autre."diplomesautre_dip"
      where autre.CODE_DIPLOME is not null) vv;

select soff."id_insid", autre.CODE_DIPLOME
from tmp_soff_2024 soff
         inner join TMP_AUTRE_DIPLOME autre on soff."diplomesautre_dip" = autre."diplomesautre_dip"
where autre.CODE_DIPLOME is not null




