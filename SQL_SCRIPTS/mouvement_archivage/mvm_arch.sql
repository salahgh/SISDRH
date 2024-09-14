-- insert into tmp_anomalie_mouvement
select PERSONNELS.MATRICULE p_mat,
       mvgrh.ID_MOUVEMENT,
       mouvment.matricule   m_mat,
       CSN_ARRIVE,
       MV_CSN,
       PERSONNELS.NOM,
       PERSONNELS.PNOM,
       PERSONNELS.NOMA,
       PERSONNELS.PNOMA,
       grade.LIB_GRADE_AR,
       catgrade.LIB_CAT_AR,
       LIB_ARME_AR,
       csn.LIB_CSN_AR,
       font.LIB_STRUCTURE_AR,
       LIB_FONCTION_AR,
       typeMouvement.LIB_MUTATION_AR
from PERSONNELS
         left join R_GRADE grade on PERSONNELS.GRADE = grade.GRADE
         left join r_arme arme on PERSONNELS.ARME = arme.ARME
         left join R_POSITION position on PERSONNELS.POSITION = position.POSITION
         left join R_CAT_GRADE catgrade on grade.CAT_GRADE = catgrade.CAT_GRADE
         left join D_MOUVEMENT_GRH mvgrh on PERSONNELS.MATRICULE = mvgrh.MATRICULE
         left join R_FONCT font on mvgrh.FONCTION = font.FONCTION
         left join R_CSN csn on mvgrh.CSN_DEPART = csn.CSN
         left join R_TYPE_MOUVEMENT typeMouvement on mvgrh.TYPE_MUTATION = typeMouvement.TYPE_MUTATION
         left join GRH_MOUVEMENT.M_PERSONNELS@GRHDSN61 mouvment on mouvment.matricule = PERSONNELS.matricule
where ANNEE = 2024
  and (CSN_ARRIVE like '61%')
--   and (CSN_ARRIVE <> CSN_DEPART or CSN_ARRIVE is null)
  and PERSONNELS.MATRICULE not in (select MATRICULE from GRHDSN.PERSONNELS@GRHDSN61)
order by PERSONNELS.GRADE, CSN_ARRIVE;

select * from PERSONNELS where MATRICULE = '199936004195';
delete A_ARCHIVE_ERROR where MATRICULE = '200844001775';
delete A_MOUVEMENT_ERROR where matricule = '200636004868';

select POSITION, PERSONNELS.MATRICULE , NOMA , PNOMA , GRADE , NIVEAU , vv.* from PERSONNELS inner join (
    select * from EST_AFFECT where D_AFFECTATION >= to_date('01/01/2024','dd/mm/yyyy')
)vv on PERSONNELS.MATRICULE = vv.MATRICULE order by GRADE ;



select * from PERSONNELS@GRHDSN20 where matricule = '201844008082' ;
select * from PERSONNELS where matricule = '201844008082' ;
select * from A_SIGNER where matricule = '201623001816' ;
select * from PERSONNELS@GRHDSN20 where matricule = '201844008082' ;

select * from GRH_ARCHIVE.AR_PERSONNELS where MATRICULE = '201844008082' ;
select * from GRH_ARCHIVE.AR_A_SIGNER where MATRICULE = '201623001816' ;
select * from GRH_ARCHIVE.AR_PERSONNELS@GRHDSN61 where matricule = '206120240623';
select * from GRH_ARCHIVE.AR_PERSONNELS@GRHDSN12 where nom like '%T%' and pnom like '%K%R%M%%';

select * from GRH_MOUVEMENT.M_PERSONNELS where MATRICULE = '200844001775' ;
select * from GRH_MOUVEMENT.M_PERSONNELS@GRHDSN61 where MATRICULE = '201844008082' ;
select * from GRH_MOUVEMENT.M_PERSONNELS@GRHDSN23 where MATRICULE = '200319000545' ;


select * from grh_archive.D_ARCHIVE_SUIVI where MATRICULE = '200844001775' ;
select * from grh_archive.A_ARCHIVE_ERROR where MATRICULE = '200844001775' ;
select * from GRH_MOUVEMENT.A_MOUVEMENT_ERROR where MATRICULE = '200844001775' order by DATE_ERR desc ;
select * from GRH_MOUVEMENT.D_SUIVI_MOUVEMENT where MATRICULE = '200844001775' order by DATE_MOUVEMENT desc ;

select ENC_DEC.decrypt(PASSWORD) , USERS.* from USERS ;

begin
    declare
    V$INSERT     NUMBER ;
    begin
      GRH_ARCHIVE.DEL_PERSONNEL('199936004195' , '00');
    end;
end;

begin
    GRH_MOUVEMENT.EXECUTE_MOUVEMENT_GRH();
end;

begin
    GRH_ARCHIVE.ARCHIVE_PERSONNEL_GAIN();
end;

begin
    GRH_ARCHIVE.ARCHIVE_ALL_PERSONNELS();
end;





select * from PERSONNELS where matricule = '202140007132' ;

create table BACK_UP as select * from D_HABILITATION ;

select * from TRACES where matricule = '200936008195'


