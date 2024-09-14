drop table tmp_pca_dsn;
create table tmp_pca_dsn as
select
    count(*) ,
       PERSONNELS.CSN ,
       csn.LIB_CSN_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join R_CSN csn on PERSONNELS.CSN = csn.CSN
where catgrade.CAT_GRADE in (10)
  and PERSONNELS.POSITION like '10%'
group by csn.LIB_CSN_AR, PERSONNELS.CSN
order by PERSONNELS.CSN;

drop table TMP_PCC_DSN_07_09_2024;
create table TMP_PCC_DSN_07_09_2024 as
select
    count(*) count_ ,
    PERSONNELS.CSN ,
    csn.LIB_CSN_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join R_CSN csn on PERSONNELS.CSN = csn.CSN
where catgrade.CAT_GRADE in (10)
  and PERSONNELS.POSITION like '10%'
group by csn.LIB_CSN_AR, PERSONNELS.CSN
order by PERSONNELS.CSN;



