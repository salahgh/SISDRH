drop table tmp_;
create table tmp_ as
select *
from A_USERS_ONGLET@GRHDSN11
where ID = 'HOUAM';
update tmp_
set ID = 'MAAFA';
SELECT *
FROM TMP_;
insert into A_USERS_ONGLET@GRHDSN10
select *
from tmp_;

drop table tmp_;
create table tmp_ as
select *
from A_USERS_TABLE@GRHDSN11
where ID = 'HOUAM';
update tmp_
set ID = 'MAAFA';
insert into A_USERS_TABLE@GRHDSN10
select *
from tmp_;

drop table tmp_;
commit;
create table tmp_ as
select *
from A_USERS_REPORTS@GRHDSN11
where ID = 'HOUAM';
update tmp_
set ID = 'MAAFA';
insert into A_USERS_REPORTS@GRHDSN10
select *
from tmp_
where tmp_.ID not in (select id from A_USERS_REPORTS);

drop table tmp_;
commit;
create table tmp_ as
select *
from A_USER_MENU@GRHDSN11
where ID = 'HOUAM';
update tmp_
set ID = 'MAAFA';
insert into A_USER_MENU@GRHDSN10
select *
from tmp_;


drop table tmp_;
create table tmp_ as
select *
from A_PRIVILEGES@GRHDSN11
where ID = 'HOUAM';
commit;
update tmp_
set ID        = 'MAAFA',
    STRUCTURE = '1160000000000';
select distinct *
from tmp_;
insert into A_PRIVILEGES@GRHDSN10
select distinct *
from tmp_;

update A_PRIVILEGES@GRHDSN10
set structure = '1160000000000'
where id = 'MAAFA';
delete A_PRIVILEGES@GRHDSN10
where id = 'MAAFA';

commit;

select ENC_DEC.decrypt(PASSWORD),
       USERS.*
from USERS where ID = 'GRH' order by ID;

select * from USERS order by ID;

select * from A_PRIVILEGES where ID = 'LE_CM';





