

select * from PAM_OFF_2024 where G is null;

select count(*) , G from PAM_OFF_2024 group by G;

select count(*) , ARME , LIB_ARME_AR from PAM_OFF_2024 group by ARME , LIB_ARME_AR;

select count(*) , POSTE from PAM_OFF_2024 group by POSTE;

select count(*) from D_THUMBNAIL ;

select count(*) from RH_POSTE ;

select count(*) , CODE_DIP_MIL , DIP_MIL from PAM_OFF_2024 P
--                                          where p.DIP_MIL like '%دك%'
                                         group by p.CODE_DIP_MIL , p.DIP_MIL ;

select BLOCKING_SESSION , BLOCKING_INSTANCE , SERIAL# , SID  from V$SESSION where BLOCKING_SESSION is not null;
alter system kill session '245,140' ;