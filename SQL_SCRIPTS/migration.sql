insert into R_OCR_RESULT_RELATION_TYPE(ID, LIB_TYP_RELATION_FR, LIB_TYPE_RELATION_AR)
VALUES (1, 'MODIFIER', 'يعدل');
insert into R_OCR_RESULT_RELATION_TYPE(ID, LIB_TYP_RELATION_FR, LIB_TYPE_RELATION_AR)
VALUES (2, 'COMPLETER', 'يتمم');
insert into R_OCR_RESULT_RELATION_TYPE(ID, LIB_TYP_RELATION_FR, LIB_TYPE_RELATION_AR)
VALUES (3, 'ABROGER', 'يلغي');

-- auto-generated definition

drop table R_CAT_GRADE;
create table R_CAT_GRADE as
select *
from R_CAT_GRADE@GRHDSN_LINK;

insert into RH_R_CAT_GRADE
select *
from GRH_N.RH_R_CAT_GRADE@GRH_N_LINK;
insert into RH_R_GRADE
select *
from RH_R_GRADE@GRH_N_LINK;
insert into RH_R_ARME
select *
from RH_R_ARME@GRH_N_LINK;
insert into RH_R_REGION_MILITAIRE
select *
from RH_R_REGION_MILITAIRE@GRH_N_LINK;
insert into RH_R_UNITE
select *
from RH_R_UNITE@GRH_N_LINK;
insert into RH_R_TYPE_STRUCTURE_SN
select *
from RH_R_TYPE_STRUCTURE_SN@GRH_N_LINK;
insert into RH_R_STRUCTURE_SN (CODE_STRUCTURE_SN, ID_UNITE, ID_TYPE_STRUCTURE_SN)
select CODE_STRUCTURE_SN, ID_UNITE, ID_TYPE_STRUCTURE_SN
from RH_R_STRUCTURE_SN@GRH_N_LINK;

drop table tpm_;
create table tpm_ as
select *
from RH_R_STRUCTURE_SN@GRH_N_LINK;
alter table tpm_
    add constraint dfdf primary key (CODE_STRUCTURE_SN);
update (select a.ID_PERE as p, b.ID_PERE as oldP
        from RH_R_STRUCTURE_SN a
                 inner join TPM_ b on a.CODE_STRUCTURE_SN = b.CODE_STRUCTURE_SN) vv
set vv.p = vv.oldP;

drop table tmp_;
create table tmp_ as
select *
from PHOTOS P;

drop table tmp_2;
create table tmp_2 as
select *
from tmp_ t
where t.MATRICULE in (select MATRICULE from tmp_ t group by MATRICULE having count(*) = 1)
order by MATRICULE;
grant select on tmp_2 to DBSDRH;

insert into D_PHOTOS(ID, DATA, TRANSLATE_X, TRANSLATE_Y, ZOOM, ID_PERSONEL, DATE_TAKEN)
select t.MATRICULE, t.PHOTO, 0, 0, 1, MATRICULE, sysdate
from GRHDSN.TMP_2 t
where t.MATRICULE in (select DP.MATRICULE from D_PERSONNELS DP);


--
--
-- create table tmp_pesonnel as
-- select *
-- from personnels@GRH_N_OLD;
--
-- alter table tmp__
--     add constraint dsfdsf primary key (MATRICULE);
--
-- update (select ID_ARME, ID_GRADE, ARME, GRADE
--         from tmp__
--                  inner join D_PERSONNELS on D_PERSONNELS.ID_PERSONNEL = tmp__.MATRICULE) vv
-- set vv.ID_GRADE = GRADE,
--     vv.ID_ARME  = ARME;
--
--
--

drop table tmp_;
create table tmp_ as
select count(*) as count_, p.MATRICULE
from PERSONNELS P
group by p.MATRICULE
having count(*) = 1
order by count(*) desc;

drop table tmp_2;
create table tmp_2 as
select *
from PERSONNELS P
where p.MATRICULE in (select matricule from tmp_ t);
grant select on tmp_2 to DBSDRH;

select MATRICULE, length(MATRICULE)
from GRHDSN.TMP_2 T
order by length(MATRICULE) desc;

insert into D_PERSONNELS(ID_PERSONNEL, MATRICULE, NOM, NOMA, PNOM, PNOMA, ID_ARME, ID_GRADE)
select MATRICULE,
       MATRICULE,
       NOM,
       NOMA,
       PNOM,
       PNOMA,
       ARME,
       GRADE
from GRHDSN.TMP_2 T
where T.MATRICULE <> '2023255000040';

select count(MATRICULE), t.matricule
from grhdsn.tmp_2 t
group by t.matricule
order by count(*) desc;

select *
from grhdsn.TMP_2 T2
where T2.GRADE not in (select RRG.GRADE from RH_R_GRADE RRG);


insert into d_photos (ID, DATA, DATE_TAKEN, TRANSLATE_X, TRANSLATE_Y, ZOOM, ID_PERSONEL)
select matricule, photo, '01/01/2023', 0, 0, 1, matricule
from photos@GRHDSN_LINK
where matricule in (select matricule from D_PERSONNELS);

insert into D_PHOTOS@GRH_N_DEV
select *
from D_PHOTOS;

insert into D_THUMBNAIL
select *
from D_THUMBNAIL@GRH_N_DEV;
insert into D_PHOTOS
select *
from D_PHOTOS@GRH_N_DEV
where id not in (select id from D_PHOTOS);
insert into D_PERSONNELS
select *
from D_PERSONNELS@GRH_N_DEV
where matricule not in (select MATRICULE from D_PERSONNELS)


insert into BUG_PROJECT_MEMBERS
select bug_id, user_id
from (select BUG_PROJECT.ID as bug_id, A_USER.ID as user_id
      from BUG_PROJECT,
           A_USER);

insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (1, 'New/Open', 'مفتوح ', 'Ouvert');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (2, 'Assigned', 'مُخصَّص ', 'Assigné');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (3, 'In Progress', 'قيد التنفيذ', 'En cours');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (4, 'Pending Review', 'قيد المراجعة', 'En attente de révision');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (5, 'Resolved/Fixed', 'تم الحل/مُصلح', 'Résolu/Corrigé');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (6, 'Verified', 'تم التحقق', 'Vérifié');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (7, 'Closed', 'مغلق ', 'Fermé');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (8, 'Reopened', 'إعادة فتح', 'Réouvert');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (9, 'Deferred', 'تأجيل ', 'Reporté');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (10, 'Won''t Fix', 'لن يتم الإصلاح', 'Non résolu');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (11, 'Duplicate', 'مُكرر ', 'Dupliqué');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (12, 'On Hold', 'معلَّق ', 'En attente');
insert into BUG_R_STATUS (ID, STATUS_AN, STATUS_AR, STATUS_FR)
values (13, 'Rejected', 'مُرفوض ', 'Rejeté');

insert into BUG_R_SEVIRITY (ID, SEVIRITYAR, SEVIRITYFR)
values (1, 'منخفض', 'Faible');
insert into BUG_R_SEVIRITY (ID, SEVIRITYAR, SEVIRITYFR)
values (2, 'متوسط', 'Moyen');
insert into BUG_R_SEVIRITY (ID, SEVIRITYAR, SEVIRITYFR)
values (3, 'عالي', 'Élevé');
insert into BUG_R_SEVIRITY (ID, SEVIRITYAR, SEVIRITYFR)
values (4, 'حرج', 'Critique');
insert into BUG_R_SEVIRITY (ID, SEVIRITYAR, SEVIRITYFR)
values (5, 'مانع', 'Bloquant');

insert into BUG_R_PRIORITY (ID, PRIORITYAR, PRIORITYFR)
values (1, 'منخفض', 'Faible');
insert into BUG_R_PRIORITY (ID, PRIORITYAR, PRIORITYFR)
values (2, 'متوسط', 'Moyen');
insert into BUG_R_PRIORITY (ID, PRIORITYAR, PRIORITYFR)
values (3, 'عالي', 'Élevé');
insert into BUG_R_PRIORITY (ID, PRIORITYAR, PRIORITYFR)
values (4, 'عاجل', 'Urgent');
insert into BUG_R_PRIORITY (ID, PRIORITYAR, PRIORITYFR)
values (5, 'حرج', 'Critique');
insert into BUG_R_PRIORITY (ID, PRIORITYAR, PRIORITYFR)
values (6, 'فوري', 'Immédiat');

insert into BUG_TAG(ID, NAME)
values (1, 'tag1');
insert into BUG_TAG(ID, NAME)
values (2, 'tag2');
insert into BUG_TAG(ID, NAME)
values (3, 'tag3');
insert into BUG_TAG(ID, NAME)
values (4, 'tag4');
insert into BUG_TAG(ID, NAME)
values (5, 'tag5');
insert into BUG_TAG(ID, NAME)
values (6, 'tag6');

insert into RH_R_CONFIDENTIALITE (ID, LIB_CONFIDENTIALITE_AR, LIB_CONFIDENTIALITE_FR)
values ('1', 'مكتوم', 'CONFIDENTIEL');
insert into RH_R_CONFIDENTIALITE (ID, LIB_CONFIDENTIALITE_AR, LIB_CONFIDENTIALITE_FR)
values ('2', 'سري', 'SECRET');
insert into RH_R_CONFIDENTIALITE (ID, LIB_CONFIDENTIALITE_AR, LIB_CONFIDENTIALITE_FR)
values ('3', 'سري جدا', 'TRES SECRET');
insert into RH_R_CONFIDENTIALITE (ID, LIB_CONFIDENTIALITE_AR, LIB_CONFIDENTIALITE_FR)
values ('4', 'سري دفاع', 'SECRET DEFENSE');
insert into RH_R_CONFIDENTIALITE (ID, LIB_CONFIDENTIALITE_AR, LIB_CONFIDENTIALITE_FR)
values ('0', 'عادي', 'NORMAL');
insert into RH_R_CONFIDENTIALITE (ID, LIB_CONFIDENTIALITE_AR, LIB_CONFIDENTIALITE_FR)
values ('5', 'لم تحدد بعد', 'NON ENCORE DEFINIE');

insert into RH_R_HABILITATION (ID, ABBREVIATION, LIB_HABILITATION_AR, LIB_HABILITATION_FR)
values ('1', 'A', 'أ', 'A');
insert into RH_R_HABILITATION (ID, ABBREVIATION, LIB_HABILITATION_AR, LIB_HABILITATION_FR)
values ('2', 'B', 'ب', 'B');
insert into RH_R_HABILITATION (ID, ABBREVIATION, LIB_HABILITATION_AR, LIB_HABILITATION_FR)
values ('3', 'C', 'س', 'C');

insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('1', '0');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('2', '0');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('3', '0');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('1', '5');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('3', '1');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('2', '1');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('2', '2');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('1', '1');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('1', '2');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('1', '3');
insert into RH_R_HABIL_CONFIDEN (HABILITATION_ID, CONFIDENTIALITE_ID)
values ('1', '4');

commit;

insert into TED_R_QUALIFICATION(ID, LIB_QUALIFICATION_FR, LIB_QUALIFICATION_AR)
VALUES (1, 'Application/Spécialisation', 'تطبيق/تخصص');
insert into TED_R_QUALIFICATION(ID, LIB_QUALIFICATION_FR, LIB_QUALIFICATION_AR)
VALUES (2, 'Perfectionnement', 'إتقان');


insert into D_PERSONNELS (ID_PERSONNEL, MATRICULE, NOM, NOMA, PNOM, PNOMA, ID_ARME, ID_GRADE)
select MATRICULE,
       MATRICULE,
       NOM,
       NOMA,
       PNOM,
       PNOMA,
       ARME,
       GRADE
from tmp__
where tmp__.MATRICULE not in (select MATRICULE from D_PERSONNELS);

drop table tmp_photos;
create table tmp_photos as
select *
from photos@GRH_N_OLD;


insert into D_PHOTOS (ID, DATA, DATE_TAKEN, TRANSLATE_X, TRANSLATE_Y, ZOOM, ID_PERSONEL)
select MATRICULE, PHOTO, sysdate, 0, 0, 0, MATRICULE
from (select photos.MATRICULE, photos.PHOTO
      from tmp_photos photos
      where photos.MATRICULE not in (select p.ID from D_PHOTOS p)
        and photos.MATRICULE in (select perso.MATRICULE from D_PERSONNELS perso)
        and photos.MATRICULE in (select tt.matricule from tmp8 tt)) vv;

delete D_PHOTOS;

select count(*), MATRICULE
from D_PERSONNELS
group by MATRICULE
order by count(*) desc;

drop table TMP8;
create table TMP8 as
select count(*) as count_, matricule
from tmp_photos
group by matricule
order by count(*) desc;

delete tmp_photos tt
where tt.MATRICULE in (select matricule from tmp8 where count_ >= 2);

delete tmp8
where count_ >= 2;

delete D_PHOTOS;
drop table D_THUMBNAIL;

select *
from GRH_N.RH_R_UNITE RRU;

-- migration R_CODE_GEO vers RH_R_CODE_GEO

drop table tmp_r_code_geo;
create table tmp_r_code_geo as
select *
from R_CODE_GEO@GRH_N_OLD;
insert into RH_R_CODE_GEO(ID, LIB_APC_AR, LIB_APC_FR, LIB_WILAYA, TRANS)
    (select tmp.APC, tmp.LIB_APC_AR, tmp.LIB_APC_FR, LIB_WILAYA, TRANS from tmp_r_code_geo tmp);
drop table tmp_r_code_geo;
commit;

-- migration r_unite vers RH_R_UNITEE

drop table r_unitee_;
create table r_unitee_ as
select *
from R_UNITEE@GRH_N_OLD;
insert into RH_R_REGION_MILITAIRE (ID, LIB_ABR_REGION_AR, LIB_ABR_REGION_FR, LIB_REGION_AR, LIB_REGION_FR)
VALUES (7, 'و د و', 'MDN', 'وزارة الدفاع الوطني', 'ministère de la defense nationale');
insert into RH_R_REGION_MILITAIRE(ID, LIB_ABR_REGION_AR, LIB_ABR_REGION_FR, LIB_REGION_AR, LIB_REGION_FR)
values (8, 'الخارج', 'ETRANGER', 'الخارج', 'ETRANGER');
update r_unitee_
set r_unitee_.REGION = '7'
where REGION in ('0', '7', '9', '/');
update r_unitee_
set r_unitee_.LIEU_UNITEE = null;
select count(*), ru.REGION
from r_unitee_ ru
group by ru.REGION
order by ru.REGION;
insert into RH_R_UNITE (ID, ABREVIATION_AR, ABREVIATION_FR, DESSOUTE, LIB_UNITEE_AR, LIB_UNITEE_FR, LIEU_UNITE,
                        ID_REGION)
select ru.UNITEE,
       ru.ABREVIATION_AR,
       ru.ABREVIATION_FR,
       ru.DESSOUTE,
       ru.LIB_UNITEE_AR,
       ru.LIB_UNITEE_FR,
       ru.LIEU_UNITEE,
       ru.REGION
from r_unitee_ ru;

-- migration r_type_structure_sn

insert into RH_R_TYPE_STRUCTURE_SN(ID, LIB_AR, LIB_FR, ABR_AR, ABR_FR)
values ('1', 'مديرية الخدمة الوطنية', 'direction du service nationale', 'م خ و', 'DSN');

insert into RH_R_TYPE_STRUCTURE_SN(ID, LIB_AR, LIB_FR, ABR_AR, ABR_FR)
values ('2', 'مديرية جهوية للخدمة الوطنية', 'direction régionale du service nationale', 'م ج خ و', 'DRSN');

insert into RH_R_TYPE_STRUCTURE_SN(ID, LIB_AR, LIB_FR, ABR_AR, ABR_FR)
values ('3', 'مركز خدمة وطنية', 'centre du service nationale', 'م خ و', 'CSN');

insert into RH_R_TYPE_STRUCTURE_SN(ID, LIB_AR, LIB_FR, ABR_AR, ABR_FR)
values ('4', 'مركز إقليمي للخدمة الوطنية', 'centre territoriale du service nationale', 'م إ خ و', 'CTSN');


-- migration structure du service nationale

drop table r_csn_;
create table r_csn_ as
select *
from r_csn@grh_n_old;
insert into RH_R_STRUCTURE_SN (CODE_STRUCTURE_SN, ID_UNITE)
select rc.CSN, rc.UNITE
from r_csn_ rc;
-- verification.sql
select count(*), ID_TYPE_STRUCTURE_SN
from RH_R_STRUCTURE_SN RRSS
group by RRSS.ID_TYPE_STRUCTURE_SN;
select RRU.LIB_UNITEE_FR,
       RRU.LIB_UNITEE_AR,
       RRU.ABREVIATION_FR,
       RRU.ABREVIATION_FR,
       RH_R_TYPE_STRUCTURE_SN.ABR_FR,
       RH_R_TYPE_STRUCTURE_SN.ABR_AR,
       RH_R_TYPE_STRUCTURE_SN.LIB_AR,
       RH_R_TYPE_STRUCTURE_SN.LIB_FR
from RH_R_STRUCTURE_SN RRSS
         inner join RH_R_UNITE RRU on RRSS.ID_UNITE = RRU.ID
         inner join RH_R_TYPE_STRUCTURE_SN on RRSS.ID_TYPE_STRUCTURE_SN = RH_R_TYPE_STRUCTURE_SN.ID;
-- fin de verification.sql


create table r_code_geo_ as
select *
from r_code_geo@GRH_N_OLD;


insert into BUG_TAG@GRH_N_PROD
select *
from BUG_TAG;
insert into BUG_PROJECT@GRH_N_PROD
select *
from BUG_PROJECT;
insert into BUG_R_PRIORITY@GRH_N_PROD
select *
from BUG_R_PRIORITY
where ID not in (select ID from BUG_R_PRIORITY@GRH_N_PROD);
insert into BUG_R_SEVIRITY@GRH_N_PROD
select *
from BUG_R_SEVIRITY
where ID not in (select ID from BUG_R_SEVIRITY@GRH_N_PROD);
insert into BUG_R_TYPE@GRH_N_PROD
select *
from BUG_R_TYPE
where ID not in (select ID from BUG_R_TYPE@GRH_N_PROD);

create table PAM_OFF_2024_back_up as
select *
from PAM_OFF_2024 P;

drop table PAM_OFF_2024;
create table PAM_OFF_2024 as
select *
from PAM_OFF_2024__@GRHDSN_LINK;

insert into RH_POSTE
select *
from RH_POSTE@GRH_N_LINK;

select *
from PAM_OFF_2024 P;

drop table POSTE_OFF_TED_2022;
create table POSTE_OFF_TED_2022 as
select *
from POSTE_OFF_TED_2022@GRHDSN_LINK;

select *
from FICHE_VOEUX FV;
drop table FICHE_VOEUX;
create table FICHE_VOEUX as
select *
from FICHE_VOEUX@GRHDSN_LINK
order by to_number(ANNEE) desc;

select *
from POSTE_OFF_TED_2022 P;
create table POSTE_OFF_TED_2022 as
select *
from POSTE_OFF_TED_2022@GRHDSN_LINK;

select count(*)
from D_THUMBNAIL DT
where DT.THUMB_SIZE = '2200';

select *
from D_PHOTOS DP
where DP.ID not in (select DT.PHOTO_ID from D_THUMBNAIL DT);

drop table REPORTS_NAMES;
create table REPORTS_NAMES as
select *
from REPORTS_NAMES@GRH_N_LINK;
commit;

update D_PHOTOS
set FORMAT = 'JPG';
commit;

delete D_THUMBNAIL DT;

insert into D_PERSONNELS(ID_PERSONNEL, MATRICULE, NOM, NOMA, PNOM, PNOMA, ID_ARME, ID_GRADE)
select p.MATRICULE,
       p.MATRICULE,
       null,
       p.NOMA,
       null,
       p.PNOMA,
       p.ARME,
       p.G
from PAM_OFF_2024 P
where p.MATRICULE not in (select DP.matricule from D_PERSONNELS DP);

commit;

select count(*)
from D_THUMBNAIL DT
where DT.THUMB_SIZE = 2200;

delete D_THUMBNAIL DT;

select *
from D_PHOTOS DP;
update D_PHOTOS
set FORMAT = 'JPG';


select *
from D_PHOTOS P
where P.ID_PERSONEL = '201844008168';
select *
from D_THUMBNAIL DT
where DT.PHOTO_ID = '199927002237';

drop table tmp_photo;
create table tmp_photo as
select *
from photos@GRHDSN_LINK p
where p.matricule = 201844008168;

update (select DT.DATA as des, D_PHOTOS.DATA as src
        from D_THUMBNAIL DT
                 inner join D_PHOTOS on D_PHOTOS.ID = DT.PHOTO_ID
        where DT.DATA is null)
set des = src
;

insert into D_THUMBNAIL (ID, DATA, THUMB_SIZE, PHOTO_ID)
select D_THUMBNAIL_SEQ.nextval, p.DATA, 2500, P.ID
from D_PHOTOS P
where P.ID_PERSONEL not in (select DT.PHOTO_ID from D_THUMBNAIL DT where DT.THUMB_SIZE = 2500);



create table R_DIPLOME_MILITAIRE as
select P.CODE_DIP_MIL
from PAM_OFF_2024 p
group by P.CODE_DIP_MIL
order by count(*) desc;

create table R_DIPLOME_CIVILE as
select pam.CODE_DIP_CIV
from PAM_OFF_2024 pam
group by pam.CODE_DIP_CIV;

select *
from PROP_GRADE;

create table PROP_GRADE as
select *
from PROP_GRADE@GRHDSN_LINK;

select *
from PAV;
delete PAV;

insert into PAV (ID, ANNE, PERSONNEL)
select prop.MATRICULE, 2024, prop.MATRICULE
from PROP_GRADE prop;
commit;

-- auto-generated definition
create database link GRHDSN_LINK
    connect to GRHDSN identified by "FGkfjHjfBVxsUJ@2025"
    using '(DESCRIPTION =(ADDRESS_LIST =
(connect_timeout=0) (retry_count=1)
(ADDRESS = (PROTOCOL = TCP)
(HOST = 192.213.71.242)(PORT = 1521)))
(CONNECT_DATA = (SID = DBDSN)))';

create table CRITERE_DE_PONDERATION as
select *
from GRH_N.CRITERE_DE_PONDERATION@GRH_N_LINK;

drop table NOTE_DIPLOME cascade constraints;
create table NOTE_DIPLOME as
select *
from GRH_N.NOTE_DIPLOME@GRH_N_LINK;

drop table PAV_R_FELICITATION cascade constraints;
create table PAV_R_FELICITATION as
select *
from GRH_N.PAV_R_FELICITATION@GRH_N_LINK;

drop table PAV_R_SANCTION cascade constraints;
create table PAV_R_SANCTION as
select *
from GRH_N.PAV_R_SANCTION@GRH_N_LINK;

drop table R_DIPLOME_MILITAIRE cascade constraints;
create table R_DIPLOME_MILITAIRE as
select *
from GRH_N.R_DIPLOME_MILITAIRE@GRH_N_LINK;

drop table PAV cascade constraints;
create table PAV as
select *
from GRH_N.PAV@GRH_N_LINK;

update PAV p
set p.CHEF = 0;

select count(*), pam.CODE_DIP_MIL
from PAM_OFF_2024 pam
group by pam.CODE_DIP_MIL

select count(*)
from;

update GRH_N.OCR_RESULT
set OCR_DONE = 'n';
commit;
select *
from OCR_RESULT
where OCR_DONE = 'c'
   or OCR_DONE = 'o';


delete OCR_RESULT_PAGE_AS_IMAGE;
delete PDF_FOLDER_OCR_RESULT;
delete OCR_RESULT_USER_GRANT;
delete OCR_RESULT_PINNED;
delete OCR_RESULT;

select *
from FICHE_VOEUX;

select *
from FICHE_VOEUX FV
order by FV.ANNEE desc;
insert into FICHE_VOEUX
select *
from FICHE_VOEUX@GRHDSN_LINK FV
where FV.annee = 2024;

select *
from FICHE_VOEUX@GRHDSN_LINK;

select pam.MATRICULE, pam.NOMA, pam.PNOMA, unite.LIB_UNITEE_AR, unite.ABREVIATION_AR, unite.ABREVIATION_FR , unite.ID_REGION , unite.ID
from PAM_OFF_2024 pam
         inner join FICHE_VOEUX fv on fv.MATRICULE = pam.MATRICULE
         inner join RH_R_UNITE unite on unite.ID = fv.UNITE_3
where unite.ABREVIATION_FR is null ;


select * from BUG_R_PRIORITY ;


select * from CRITERE_DE_PONDERATION ;

select * from APPLICATIONS ;
insert into A_APPLICATIONS select * from APPLICATIONS ;
commit ;

























