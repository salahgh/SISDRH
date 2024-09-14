drop view REPORT_POSTE_REALISE ;
create view REPORT_POSTE_REALISE as
select postOff.POSTE,
       postOff.SOMME                                        as TED,
       realise.count_                                       as REALISE_,
       TO_CHAR(realise.count_ / postOff.SOMME * 100, '999') as pourcentage
from POSTE_OFF_TED_2022 postOff
         left JOIN (select count(p.MATRICULE) as count_,
                           rhPoste.ID_POSTE,
                           TRIE_
                    from RH_POSTE rhPoste
                             left join PAM_OFF_2024 p on rhPoste.ID_POSTE = p.POSTE
                    group by rhPoste.ID_POSTE, TRIE_
                    order by TRIE_) realise on realise.ID_POSTE = postOff.POSTE
order by realise.TRIE_;


create view REPORT_OFF_PAR_GRADE as
select count(*) count_,
       P.G id_grade,
       P.GRADE lib_grade
from PAM_OFF_2024 P
group by P.G, P.GRADE
order by P.G;

select count(*) as count_ , p.POSTE , p.GRADE from GRH_N.PAM_OFF_2024 P group by p.POSTE , p.GRADE , p.G order by P.G ;

SELECT *
FROM (
         SELECT  p.POSTE, p.G
         FROM GRH_N.PAM_OFF_2024 p
     ) SourceData
PIVOT (
    count(SourceData.G) FOR G in (22,32)
) PivotTable;

select  p.GRADE, p.POSTE , p.MATRICULE from GRH_N.PAM_OFF_2024 P inner join GRH_N.RH_POSTE RP on RP.ID_POSTE = p.POSTE order by P.G , rp.TRIE_ ;

select
    P.MATRICULE ,
    P.GRADE ,
    p.LIB_ARME_AR ,
    p.NOMA ,
    P.PNOMA ,
    p.POSTE ,
    p.FONCTION ,
    P.CSN from GRH_N.PAM_OFF_2024 P where to_number(substr2(P.MATRICULE,0,4)) <= 1999
order by P.G , P.TRI_;

select
    P.MATRICULE ,
    P.GRADE ,
    p.LIB_ARME_AR ,
    p.NOMA ,
    P.PNOMA ,
    p.POSTE ,
    p.PROP,
    P.CSN from GRH_N.PAM_OFF_2024 P where PROP >= 1
order by P.G , P.TRI_


