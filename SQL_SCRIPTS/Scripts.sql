select *
from OCR_RESULT;

update OCR_RESULT
set OCR_DONE      = 'n',
    EXECUTED_AT   = null,
    TERMINATED_AT = null;
commit;

CREATE USER DBSDRH IDENTIFIED BY "majmajBS13..";
GRANT CREATE SESSION TO DBSDRH;
GRANT CREATE ANY TABLE TO DBSDRH;
GRANT CREATE ANY INDEX TO DBSDRH;
GRANT CREATE ANY PROCEDURE TO DBSDRH;
GRANT CREATE ANY VIEW TO DBSDRH;
GRANT CREATE ANY TRIGGER TO DBSDRH;
GRANT CREATE ANY SEQUENCE TO DBSDRH;
grant unlimited tablespace to DBSDRH;



delete PDF_FOLDER_OCR_RESULT;
drop table PDF_FOLDER_OCR_RESULT;
delete OCR_RESULT_PAGE_AS_IMAGE;
drop table OCR_RESULT_PAGE_AS_IMAGE;
delete OCR_RESULT;
delete OCR_RESULT_PINNED;
delete OCR_RESULT_USER_GRANT;
delete PDF_FOLDER;
delete A_USER;

drop table a_user;
drop table a_user;
drop table a_user;
drop table OCR_RESULT;
drop table PDF_FOLDER;
drop table A_USER_PRIVILEGE;
drop table A_USER_ROLE;
drop table A_USER_PRIVILEGE_RESTRICTION;
drop table A_DEMANDE_INSCRIPTION_USER;
drop table A_ROLE_PRIVILEGE;
drop table A_ROLE_COMPOSITE;
drop table A_ROLE;
drop table A_PRIVILEGE;
drop table A_USER;
drop table A_DEMANDE_INSCRIPTION_USER;

insert into A_USER (id, LOCKED, PASSWORD, DEMANDE_INSCRIPTION_ID, PERSONNEL_ID)
select PERSONNEL_ID, 'n', PASSWORD, ID, PERSONNEL_ID
from A_DEMANDE_INSCRIPTION_USER;

commit  ;

select *
from A_USER;
select *
from A_DEMANDE_INSCRIPTION_USER;

SELECT s1.sid     AS blocking_sid,
       s1.serial# AS blocking_serial,
       s2.sid     AS blocked_sid,
       s2.serial# AS blocked_serial,
       l1.type    AS lock_type,
       l1.id1,
       l1.id2
FROM v$lock l1
         JOIN v$session s1 ON (s1.sid = l1.sid)
         JOIN v$lock l2 ON (l2.id1 = l1.id1 AND l2.id2 = l1.id2 AND l2.request > 0)
         JOIN v$session s2 ON (s2.sid = l2.sid)
WHERE s1.sid <> s2.sid;
select *
from personnel@GRHDSN_LINK;

-- auto-generated definition

select * from A_USER AU ;

select * from A_USER_PRIVILEGE AUP ;

select LIB_STRUCTURE_AR , trim(replace(LIB_STRUCTURE_AR , 'ـ' , '')) from RH_TED_STRUCTURE_INTERNE where LIB_STRUCTURE_AR like '%ـ%';
update RH_TED_STRUCTURE_INTERNE set LIB_STRUCTURE_AR = trim(replace(LIB_STRUCTURE_AR , 'ـ' , '')) ;

commit ;

select *
from RH_TED_TYPE_STRUCTURE_INTERNE ;
insert into RH_TED_TYPE_STRUCTURE_INTERNE (ID, LIB_AR, LIB_FR) VALUES (5 , 'مفتشية' , 'inspection') ;
insert into RH_TED_TYPE_STRUCTURE_INTERNE (ID, LIB_AR, LIB_FR) VALUES (6 , 'مديرية فرعية' , 'sous-direction') ;
update RH_TED_STRUCTURE_INTERNE set TED_NUM_ID = '5004' ;
update RH_TED_STRUCTURE_INTERNE set TYPE_STRUCTURE_INTERNE_ID = 6 where ID = '102' ;
commit  ;

select *
from RH_TED_TYPE_STRUCTURE_INTERNE;















