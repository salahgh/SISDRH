drop view vv_max_stage_militaire;
create view vv_max_stage_militaire as
select EST_STAGIERE.*, LIB_DIP_AR, LIB_SPEC_AR
from EST_STAGIERE
         inner join (select MATRICULE, max(R_DIPLOME.NIVEAU) max_d_fin_stage
                     from EST_STAGIERE
                              inner join R_DIPLOME on EST_STAGIERE.DIPLOME = R_DIPLOME.NIVEAU
                     where TYPE_ETAB = '0'
                     group by MATRICULE) vv_max_stage
                    on EST_STAGIERE.MATRICULE = vv_max_stage.MATRICULE and D_F_STAGE = max_d_fin_stage
         left join R_DIPLOME on EST_STAGIERE.DIPLOME = R_DIPLOME.DIP
         left join R_SPECIALITE on EST_STAGIERE.SPECIALITE = R_SPECIALITE.SPEC;

drop view vv_max_stage_civile;
create view vv_max_stage_civile as
select EST_STAGIERE.*, LIB_DIP_AR, LIB_SPEC_AR
from EST_STAGIERE
         inner join (select MATRICULE, max(D_F_STAGE) max_d_fin_stage
                     from EST_STAGIERE
                     where TYPE_ETAB = '1'
                     group by MATRICULE) vv_max_stage
                    on EST_STAGIERE.MATRICULE = vv_max_stage.MATRICULE and D_F_STAGE = max_d_fin_stage
         left join R_DIPLOME on EST_STAGIERE.DIPLOME = R_DIPLOME.DIP
         left join R_SPECIALITE on EST_STAGIERE.SPECIALITE = R_SPECIALITE.SPEC ;


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

alter system kill session '142,715'IMMEDIATE ;