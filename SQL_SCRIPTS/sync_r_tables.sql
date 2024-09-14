select *
from R_TYPE_TEXT_REGLEMENTAIRE;
insert into R_TYPE_TEXT_REGLEMENTAIRE
values (7, 'لائحة تذكيريى', 'NOTE RAPPEL');
insert into R_TYPE_TEXT_REGLEMENTAIRE
values (8, 'مشروع قرار', 'PROJET DE LOIS');
insert into R_TYPE_TEXT_REGLEMENTAIRE
values (9, 'محضر إجتماع', 'PV_REUNION');
insert into R_TYPE_TEXT_REGLEMENTAIRE
values (10, 'محضر', 'PV');
insert into R_TYPE_TEXT_REGLEMENTAIRE
values (11, 'توجيهة', 'DIRECTIVE');

VALUES (1, 'ABROGE', 'يبيب') ;

insert into R_OCR_RESULT_RELATION_TYPE(ID, LIB_TYP_RELATION_FR, LIB_TYPE_RELATION_AR)
VALUES (2, 'ANULE', 'يبيب') ;

commit;

insert into RTEXT_AUTORITE select * from RTEXT_AUTORITE@GRH_N_LINK;
select * from GRH_N.RTEXT_AUTORITE@GRH_N_LINK;

insert into RTEXT_DOMAINE select * from GRH_N.RTEXT_DOMAINE@GRH_N_LINK;
select * from GRH_N.RTEXT_DOMAINE@GRH_N_LINK;

select DOMAINE_ID  from OCR_RESULT ;
update OCR_RESULT set DOMAINE_ID = 1 ;
commit ;

select * from RH_R_TYPE_ADRESSE ;

insert into RH_R_TYPE_ADRESSE (ID, LIB_AR)
values (1  );