
select * from RECRUTEMENT_OFF_ST_2024 ;
create table RECRUTEMENT_OFF_ST_2024_2 as select * from RECRUTEMENT_OFF_ST_2024 ;
commit ;

update RECRUTEMENT_OFF_ST_2024 set "id_insnom" = upper("id_insnom");
update RECRUTEMENT_OFF_ST_2024 set "id_insprenom" = upper("id_insprenom");
update RECRUTEMENT_OFF_ST_2024_2 set "id_insnom" = upper("id_insnom");
update RECRUTEMENT_OFF_ST_2024_2 set "id_insprenom" = upper("id_insprenom");

----------------------------------------------------------------------------------------------------------------------

drop table TMP_JARO_WINK_1_RES;
create table TMP_JARO_WINK_1_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                ))                >= 60;

drop table TMP_JARO_WINK_2_RES;
create table TMP_JARO_WINK_2_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_2(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_2(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                ))                >= 60;

drop table TMP_JARO_WINK_3_RES;
create table TMP_JARO_WINK_3_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_3(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and  to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_3(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                 )) >= 60;

drop table TMP_JARO_WINK_4_RES;
create table TMP_JARO_WINK_4_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_4(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_4(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                )) >= 60;

drop table TMP_JARO_WINK_5_RES;
create table TMP_JARO_WINK_5_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_5(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_5(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                )) >= 60 ;

drop table TMP_JARO_WINK_6_RES;
create table TMP_JARO_WINK_6_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_6(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_6(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                )) >= 60;

drop table TMP_JARO_WINK_7_RES;
create table TMP_JARO_WINK_7_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_7(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_7(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                )) >= 60;

drop table TMP_JARO_WINK_8_RES;
create table TMP_JARO_WINK_8_RES as
select RECRUTEMENT_OFF_ST_2024_2."id_insid" as CIT_ID_IDENTIFIE,
       RECRUTEMENT_OFF_ST_2024_2."id_insid"      ID_51,
       to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
               PERMUTATION_1(
                       RECRUTEMENT_OFF_ST_2024."id_insnom",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
               ),
               PERMUTATION_8(
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                       RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                       RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
               )
                 ))                as RES
from RECRUTEMENT_OFF_ST_2024,
     RECRUTEMENT_OFF_ST_2024_2
where  RECRUTEMENT_OFF_ST_2024."id_insid" <> RECRUTEMENT_OFF_ST_2024_2."id_insid"
  and to_number(UTL_MATCH.EDIT_DISTANCE_SIMILARITY(
        PERMUTATION_1(
                RECRUTEMENT_OFF_ST_2024."id_insnom",
                RECRUTEMENT_OFF_ST_2024."id_insprenom",
                RECRUTEMENT_OFF_ST_2024."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024."id_insprenom_mere"
        ),
        PERMUTATION_8(
                RECRUTEMENT_OFF_ST_2024_2."id_insnom",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_ar",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_pr",
                RECRUTEMENT_OFF_ST_2024_2."id_insnom_mere",
                RECRUTEMENT_OFF_ST_2024_2."id_insprenom_mere"
        )
                )) >= 60;

select count(*)
from TMP_JARO_WINK_8_RES;
select *
from TMP_JARO_WINK_8_RES
order by RES desc;

drop table TMP_JARO_WINK_RES;
create table TMP_JARO_WINK_RES as
select *
from TMP_JARO_WINK_1_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_2_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_3_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_4_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_5_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_6_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_7_RES;
insert into TMP_JARO_WINK_RES
select *
from TMP_JARO_WINK_8_RES;
select *
from TMP_JARO_WINK_RES
order by TMP_JARO_WINK_RES.ID_51 desc;

select count(*)
from TMP_JARO_WINK_RES;

drop table TMP_JARO_WINK_RES_IDENTIFIE_t;
create table TMP_JARO_WINK_RES_IDENTIFIE_t as
select TMP_JARO_WINK_RES.*
from TMP_JARO_WINK_RES
         inner join (select count(*),
                            ID_51,
                            max(RES) as max_res
                     from TMP_JARO_WINK_RES
                     group by ID_51) max_ on max_.ID_51 = TMP_JARO_WINK_RES.ID_51
    and max_.max_res = TMP_JARO_WINK_RES.RES
order by RES desc;

select *
from TMP_JARO_WINK_RES_IDENTIFIE_t
order by RES desc, ID_51;

delete TMP_JARO_WINK_RES_IDENTIFIE_t where RES < 78;

drop table TMP_JARO_WINK_RES_IDENTIFIE;
create table TMP_JARO_WINK_RES_IDENTIFIE as
select max(CIT_ID_IDENTIFIE)  as CIT_ID_IDENTIFIE,
       max(CIT_CSN_IDENTIFIE) as CIT_CSN_IDENTIFIE,
       ID_51,
       max(RES)                  RES,
       max(cit_nom)              cit_nom,
       max(mob_nom)              mob_nom,
       max(cit_pnom)             cit_pnom,
       max(mob_pnom)             mob_pnom,
       max(cit_noma)             cit_noma,
       max(mob_noma)             mob_noma,
       max(cit_pnoma)            cit_pnoma,
       max(mob_pnoma)            mob_pnoma,
       max(cit_ppere)            cit_ppere,
       max(mob_ppere)            mob_ppere,
       max(cit_nmere)            cit_nmere,
       max(mob_nmere)            mob_nmere,
       max(cit_pmere)            cit_pmere,
       max(mob_pmere)            mob_pmere
from TMP_JARO_WINK_RES_IDENTIFIE_t
group by ID_51;

select *
from TMP_JARO_WINK_RES_IDENTIFIE
order by RES desc, ID_51;

grant select on TMP_JARO_WINK_RES_IDENTIFIE to CSN25;
grant select on TMP_RESC_2024 to CSN25;
grant select on TMP_RESC_2024_2 to CSN25;

