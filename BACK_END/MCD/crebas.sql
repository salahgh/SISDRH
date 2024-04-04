/*==============================================================*/
/* Nom de SGBD :  ORACLE Version 11g                            */
/* Date de création :  29/11/2022 10:59:13                      */
/*==============================================================*/


alter table AVOIR_APTITUDE_MEDICALE
   drop constraint FK_AVOIR_AP_AVOIR_APT_DATE;

alter table AVOIR_APTITUDE_MEDICALE
   drop constraint FK_AVOIR_AP_AVOIR_APT_R_APTITU;

alter table AVOIR_APTITUDE_MEDICALE
   drop constraint FK_AVOIR_AP_AVOIR_APT_D_CONCOU;

alter table AVOIR_APTITUDE_MEDICALE
   drop constraint FK_AVOIR_AP_AVOIR_APT_R_TYPE_T;

alter table AVOIR_DECISION_CIVIL
   drop constraint FK_AVOIR_DE_AVOIR_DEC_D_PERSON;

alter table AVOIR_DECISION_CIVIL
   drop constraint FK_AVOIR_DE_AVOIR_DEC_D_DICISI;

alter table AVOIR_ETAT
   drop constraint FK_AVOIR_ET_AVOIR_ETA_D_MARRIA;

alter table AVOIR_HABILITATION
   drop constraint FK_AVOIR_HA_AVOIR_HAB_D_HABILI;

alter table AVOIR_HABILITATION
   drop constraint FK_AVOIR_HA_AVOIR_HAB_D_PERSON;

alter table AVOIR_R_HABILITATION
   drop constraint FK_AVOIR_R__AVOIR_R_H_R_HABILI;

alter table AVOIR_R_HABILITATION
   drop constraint FK_AVOIR_R__AVOIR_R_H_D_HABILI;

alter table AVOIR_TED_SPECIALITE
   drop constraint FK_AVOIR_TE_AVOIR_TED_R_TED;

alter table AVOIR_TED_SPECIALITE
   drop constraint FK_AVOIR_TE_AVOIR_TED_R_TED_SP;

alter table DANS_WILAYA
   drop constraint FK_DANS_WIL_DANS_WILA_R_WILAYA;

alter table DANS_WILAYA
   drop constraint FK_DANS_WIL_DANS_WILA_R_CODE_G;

alter table D_AFFECTATION
   drop constraint FK_D_AFFECT_AVOIR_FON_R_FONCTI;

alter table D_AFFECTATION
   drop constraint FK_D_AFFECT_AVOIR_TYP_R_TYPE_F;

alter table D_AFFECTATION
   drop constraint FK_D_AFFECT_EST_AFFEC_D_PERSON;

alter table D_ARRESTATION
   drop constraint FK_D_ARREST_DANS_UNIT_R_UNITE;

alter table D_BESOIN_ACCORDE
   drop constraint FK_D_BESOIN_ACCORDE_F_D_FORMAT;

alter table D_CANDIDAT
   drop constraint FK_D_CANDID_CANDIDAT__R_SEX;

alter table D_CANDIDAT
   drop constraint FK_D_CANDID_EST_NE_A_R_CODE_G;

alter table D_CANDIDAT
   drop constraint FK_D_CANDID_RESIDE_R_CODE_G;

alter table D_CANDIDAT_DOSSIER_INSCRIPTION
   drop constraint FK_D_CANDID_D_CANDIDA_D_CANDID;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_AVOIR_TYP_R_TYPE_R;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_CANDIDAT__R_SITUAT;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_EST_INSCR_D_CANDID;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_INSCRIT_D_R_EXERCI;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_INSCRIT_D_R_SESSIO;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_PERSO_REC_D_PERSON;

alter table D_CANDIDAT_INSCRIPTION
   drop constraint FK_D_CANDID_RECRUTER__R_UNITE;

alter table D_CANDIDAT_PROGRAMME
   drop constraint FK_D_CANDID_D_CANDIDA_D_CAN;

alter table D_CANDIDAT_PROGRAMME
   drop constraint FK_D_CANDID_D_CANDIDA_D_COMISS;

alter table D_CHOIX_MUTATION
   drop constraint FK_D_CHOIX__D_CHOIX_M_R_UNITE;

alter table D_CHOIX_MUTATION
   drop constraint FK_D_CHOIX__D_CHOIX_M_D_FICHE_;

alter table D_COMISSION_EVALUATION
   drop constraint FK_D_COMISS_COMISSION_R_EXERCI;

alter table D_CONCOURS
   drop constraint FK_D_CONCOU_CONCOUR_D_R_UNITE;

alter table D_CONCOURS
   drop constraint FK_D_CONCOU_D_GERER_C_D_COMISS;

alter table D_CONCOURS_FORMATION
   drop constraint FK_D_CONCOU_D_CONCOUR_D_CONCOU;

alter table D_CONCOURS_FORMATION
   drop constraint FK_D_CONCOU_D_CONCOUR_D_BESOIN;

alter table D_CONSIGNES_INTERIME
   drop constraint FK_D_CONSIG_A_POUR_CO_D_INDISP;

alter table D_CONTACT
   drop constraint FK_D_CONTAC_AVOIR_CON_D_PERSON;

alter table D_CONTACT
   drop constraint FK_D_CONTAC_AVOIR_TYP_R_TYPE_C;

alter table D_CONTACT
   drop constraint FK_D_CONTAC_CANDIDTA__D_CANDID;

alter table D_CONTACT
   drop constraint FK_D_CONTAC_PROCHE_AV_D_PROCHE;

alter table D_COURRIER
   drop constraint FK_D_COURRI_AVOIR_CLA_R_CLASSI;

alter table D_COURRIER
   drop constraint FK_D_COURRI_AVOIR_TYP_R_TYPE_C;

alter table D_COURRIER
   drop constraint FK_D_COURRI_EMIS_PAR_R_UNITE;

alter table D_COURRIER_COM
   drop constraint FK_D_COURRI_D_COURRIE_D_COMISS;

alter table D_COURRIER_COM
   drop constraint FK_D_COURRI_D_COURRI;

alter table D_COURRIER_FORMATION_ACCORDE
   drop constraint FK_D_COURRI_D_COURRIE_R_TYPE_B;

alter table D_COURRIER_FORMATION_ACCORDE
   drop constraint FK_D_COURRI_D_COURRIE_D_BESOIN;

alter table D_COURRIER_FORMATION_ACCORDE
   drop constraint FK_D_COURRI_D_COURRIE_D_COURRI;

alter table D_DECORATION
   drop constraint FK_D_DECORA_AVOIR_TYP_R_TYPE_D;

alter table D_DECORATION
   drop constraint FK_D_DECORA_ETRE_DECO_D_PERSON;

alter table D_DEMANDE_ELEMENT_MISSION
   drop constraint FK_D_DEMAND_D_DEMANDE_D_PERSON;

alter table D_DEMANDE_ELEMENT_MISSION
   drop constraint FK_D_DEMAND_D_DEMANDE_D_DEMAND;

alter table D_DEMANDE_ELEMENT_MISSION
   drop constraint FK_D_DEMAND_D_DEMANDE_R_PROFIL;

alter table D_DEMANDE_INDISP
   drop constraint FK_D_DEMAND_DEMANDE_P_R_MOTIF_;

alter table D_DEMANDE_INDISP
   drop constraint FK_D_DEMAND_FAIT_OBJE_D_PERSON;

alter table D_DEMANDE_MISSION
   drop constraint FK_D_DEMAND_AU_MOYEN__R_MOYENS;

alter table D_DEMANDE_MISSION
   drop constraint FK_D_DEMAND_A_DEMANDE_D_PERSON;

alter table D_DESERTION
   drop constraint FK_D_DESERT_A_DESERTE_D_PERSON;

alter table D_DESERTION
   drop constraint FK_D_DESERT_DE_UNITE__R_UNITE;

alter table D_DICISION_CIVIL
   drop constraint FK_D_DICISI_AU_PROFIT_R_UNITE;

alter table D_DICISION_CIVIL
   drop constraint FK_D_DICISI_AVOIR_GRA_R_GRADE_;

alter table D_DICISION_CIVIL
   drop constraint FK_D_DICISI_AVOIR_TYP_R_TYPE_D;

alter table D_DIPLOME_CANDIDAT
   drop constraint FK_D_DIPLOM_D_DIPLOME_R_ETABLI;

alter table D_DIPLOME_CANDIDAT
   drop constraint FK_D_DIPLOM_D_DIPLOME_D_CANDID;

alter table D_DIPLOME_CANDIDAT
   drop constraint FK_D_DIPLOM_D_DIPLOME_R_DIPLOM;

alter table D_DIPLOME_CANDIDAT
   drop constraint FK_D_DIPLOM_D_DIPLOME_R_SPECIA;

alter table D_DIVORCE
   drop constraint FK_D_DIVORC_EST_DIVOR_D_MARRIA;

alter table D_DOSSIER
   drop constraint FK_D_DOSSIE_A_DOSSIER_D_PERSON;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_AVEC_GRAD_R_GRADE;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_AVEC_NIVE_R_NIVEAU;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_AVOIR_MOD_R_MODE_E;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_AVOIR_TYP_R_TYPE_E;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_A_SIGNER__D_PERSON;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_DANS_UNIT_R_UNITE;

alter table D_ENGAGEMENT
   drop constraint FK_D_ENGAGE_POUR_ARME_R_ARME;

alter table D_EPREUVE
   drop constraint FK_D_EPREUV_AVOIR_TYP_R_TYPE_E;

alter table D_EPREUVE
   drop constraint FK_D_EPREUV_CONTIENT__D_CONCOU;

alter table D_ETAPE_RECRUTEMENT
   drop constraint FK_D_ETAPE__D_ETAPE_R_DATE;

alter table D_ETAPE_RECRUTEMENT
   drop constraint FK_D_ETAPE__D_ETAPE_R_R_ETAPE_;

alter table D_ETAPE_RECRUTEMENT
   drop constraint FK_D_ETAPE__D_ETAPE_R_D_CANDID;

alter table D_FICHE_VOEUX
   drop constraint FK_D_FICHE__A_FAIT_VO_D_PERSON;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_APPARTIEN_D_COURRI;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_AVOIR_LIE_R_ETABLI;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_AVOIR_LIE_R_UNITE;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_AVOIR_NAT_R_NATURE;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_AVOIR_SPE_R_SPECIA;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_AVOIR_TYP_R_TYPE_F;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_CONTIENT_R_FORMAT;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_DANS_EXER_R_EXERCI;

alter table D_FORMATION_DISPONIBLE
   drop constraint FK_D_FORMAT_EN_DIFFER_R_SESSIO;

alter table D_FORMATION_THEME_FP
   drop constraint FK_D_FORMAT_PROPOSE_P_D_PERSON;

alter table D_GRILLE_EVALUATION
   drop constraint FK_D_GRILLE_AVOIR_DEC_R_DECISI;

alter table D_GRILLE_EVALUATION
   drop constraint FK_D_GRILLE_AVOIR_GRI_D_CANDID;

alter table D_GRILLE_EVALUATION
   drop constraint FK_D_GRILLE_EVALUER_D_PERSON;

alter table D_GRILLE_EVALUATION
   drop constraint FK_D_GRILLE_EVALUE_DA_D_CONCOU;

alter table D_INCORPORATION
   drop constraint FK_D_INCORP_EST_INCOR_D_PERSON;

alter table D_INCORPORATION
   drop constraint FK_D_INCORP_EST_INCOR_R_GRADE;

alter table D_INCORPORATION
   drop constraint FK_D_INCORP_EST_INCOR_R_NIVEAU;

alter table D_INCORPORATION
   drop constraint FK_D_INCORP_EST_INCOR_R_UNITE;

alter table D_INCORPORATION
   drop constraint FK_D_INCORP_EST_INCOR_R_CTG;

alter table D_INCORPORATION
   drop constraint FK_D_INCORP_EST_INCOR_R_ARME;

alter table D_INDISPONIBLE
   drop constraint FK_D_INDISP_AVOIR_LIE_R_CODE_G;

alter table D_INDISPONIBLE
   drop constraint FK_D_INDISP_A_POUR_IN_D_PERSON;

alter table D_INDISPONIBLE
   drop constraint FK_D_INDISP_EST_INDIS_D_PERSON;

alter table D_INDISPONIBLE
   drop constraint FK_D_INDISP_POUR_MOTI_R_MOTIF_;

alter table D_JUGEMENT
   drop constraint FK_D_JUGEME_AVOIR_TYP_R_CONDAM;

alter table D_JUGEMENT
   drop constraint FK_D_JUGEME_EST_JUGE_D_PERSON;

alter table D_MARRIAGE
   drop constraint FK_D_MARRIA_A_LIEU_MA_R_CODE_G;

alter table D_MARRIAGE
   drop constraint FK_D_MARRIA_EST_MARIE_D_PERSON;

alter table D_MARRIAGE
   drop constraint FK_D_MARRIA_EST_MARIE_D_MARRIA;

alter table D_MARRIAGE_CONJOINT
   drop constraint FK_D_MARRIA_CONJOIN_D_R_SEX;

alter table D_MARRIAGE_CONJOINT
   drop constraint FK_D_MARRIA_CONJOIN_N_R_CODE_G;

alter table D_MARRIAGE_ENFANTS
   drop constraint FK_D_MARRIA_ENFANT_DE_R_SEX;

alter table D_MARRIAGE_ENFANTS
   drop constraint FK_D_MARRIA_ENFANT_NE_R_CODE_G;

alter table D_MARRIAGE_ENFANTS
   drop constraint FK_D_MARRIA_EST_PERE__D_MARRIA;

alter table D_MEMBRE_COMMISION
   drop constraint FK_D_MEMBRE_D_MEMBRE__D_PERSON;

alter table D_MEMBRE_COMMISION
   drop constraint FK_D_MEMBRE_D_MEMBRE__D_COMISS;

alter table D_MEMBRE_COMMISION
   drop constraint FK_D_MEMBRE_D_MEMBRE__R_PROFIL;

alter table D_MISE_ROUTE
   drop constraint FK_D_MISE_R_AVOIR_TYP_R_TYPE_M;

alter table D_MISE_ROUTE
   drop constraint FK_D_MISE_R_FAIT_OBJE_D_PERSON;

alter table D_MISE_ROUTE
   drop constraint FK_D_MISE_R_MISE_RO;

alter table D_MISE_ROUTE
   drop constraint FK_D_MISE_R_MISE_ROUT_R_UNI;

alter table D_MISSION
   drop constraint FK_D_MISSIO_AU_MOYEN__R_MOYENS;

alter table D_MISSION
   drop constraint FK_D_MISSIO_A_VEHICUL_R_VEHICU;

alter table D_MISSION
   drop constraint FK_D_MISSIO_D_MISSON__D_DEMAND;

alter table D_MISSION_TYPE_RECRUTEMENT
   drop constraint FK_D_MISSIO_D_MISSION_R_TYPE_R;

alter table D_MISSION_TYPE_RECRUTEMENT
   drop constraint FK_D_MISSIO_D_MISSION_D_COMISS;

alter table D_MUTATION
   drop constraint FK_D_MUTATI_A_UNITE_R_UNITE;

alter table D_MUTATION
   drop constraint FK_D_MUTATI_DE_UNITE_R_UNITE;

alter table D_MUTATION
   drop constraint FK_D_MUTATI_EST_MUTER_D_PERSON;

alter table D_MUTATION
   drop constraint FK_D_MUTATI_TYPE_MUTA_R_TYPE_M;

alter table D_NOMINATION
   drop constraint FK_D_NOMINA_EST_NOMIN_D_PERSON;

alter table D_NOMINATION
   drop constraint FK_D_NOMINA_OBTIEN_GR_R_GRADE;

alter table D_NOTATION
   drop constraint FK_D_NOTATI_DANS_UNIT_R_UNITE;

alter table D_NOTATION
   drop constraint FK_D_NOTATI_EST_NOTE_D_PERSON;

alter table D_NOTE_EPREUVE
   drop constraint FK_D_NOTE_E_D_NOTE_EP_D_PERSON;

alter table D_NOTE_EPREUVE
   drop constraint FK_D_NOTE_E_D_NOTE_EP_D_EPREUV;

alter table D_NOTE_EPREUVE
   drop constraint FK_D_NOTE_E_D_NOTE_EP_D_CANDID;

alter table D_PERMANENCE
   drop constraint FK_D_PERMAN_EST_PROGR_R_UNITE;

alter table D_PERMANENCE
   drop constraint FK_D_PERMAN_PERMANENC_R_TYPE_P;

alter table D_PERSONELS_PERMANENCE
   drop constraint FK_D_PERSON_D_PERSONE_R_POSTE_;

alter table D_PERSONELS_PERMANENCE
   drop constraint FK_D_PERSON_D_PERSONE_D_PERMAN;

alter table D_PERSONELS_PERMANENCE
   drop constraint FK_D_PERSON_D_PERSON;

alter table D_PERSONELS_PERMANENCE
   drop constraint FK_D_PERSON_D_PERSONE_R_PROFIL;

alter table D_PERSONEL_FONCTION
   drop constraint FK_D_PERSON_D_PERSONE_R_STRUCT;

alter table D_PERSONEL_FONCTION
   drop constraint FK_D_PERSON_D_PERSONE_D_PERSON;

alter table D_PERSONEL_FONCTION
   drop constraint FK_D_PERSON_D_PERSONE_R_FONCTI;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_APPARTENT_R_STRUCT;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_APPARTIEN_R_ARME;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_AVOIR_GRO_R_GROUPA;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_AVOIR_LIE_R_CODE_G;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_AVOIR_NIV_R_NIVEAU;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_AVOIR_SIT_R_SITUAT;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_EST_DE_SE_R_SEX;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_PERSONNEL_R_POSITI;

alter table D_PERSONNELS
   drop constraint FK_D_PERSON_POSSEDE_G_R_GRADE;

alter table D_PERSONNELS_ADRESSE
   drop constraint FK_D_PERSON_AVOIR_ADR_D_PERSON;

alter table D_PERSONNELS_ADRESSE
   drop constraint FK_D_PERSON_AVOIR_TYP_R_ADRESS;

alter table D_PERSONNELS_DIPLOME
   drop constraint FK_D_PERSON_D_PERSONN_D_PER;

alter table D_PERSONNELS_DIPLOME
   drop constraint FK_D_PERSON_D_PERSONN_D_BESOIN;

alter table D_PERSONNELS_DIPLOME
   drop constraint FK_D_PERSON_D_PERSONN_R_DIPLOM;

alter table D_PERSONNELS_DIPLOME
   drop constraint FK_D_PERSON_D_PERSONN_R_SPECIA;

alter table D_PERSONNELS_MISSIONS
   drop constraint FK_D_PERSON_D_PERSO;

alter table D_PERSONNELS_MISSIONS
   drop constraint FK_D_PERSON_D_PERSONN_D_MISSIO;

alter table D_PERSONNELS_MISSIONS
   drop constraint FK_D_PERSON_D_PERSONN_R_PROFIL;

alter table D_PERSONNELS_PHOTOS
   drop constraint FK_D_PERSON_AVOIR_PHO_D_PERSON;

alter table D_PERSONNELS_PIECES
   drop constraint FK_D_PERSON_AVOIR_TYP_R_TYPE_P;

alter table D_PERSONNELS_PIECES
   drop constraint FK_D_PERSON_PERSONEL__D_PERSON;

alter table D_PERSONNEL_CONCOURS
   drop constraint FK_D_PERSON_D_PERSONN_R_RESULT;

alter table D_PERSONNEL_CONCOURS
   drop constraint FK_D_PERSON_D_PERSONN_D_PERSO;

alter table D_PERSONNEL_CONCOURS
   drop constraint FK_D_PERSON_D_PERSONN_D_CONCOU;

alter table D_PERSONNEL_COURRIER
   drop constraint FK_D_PERSON_D_PERSONN_D_COURRI;

alter table D_PERSONNEL_COURRIER
   drop constraint FK_D_PERSON_D_PERSONN_D_PE;

alter table D_POSTE_ACCORDE
   drop constraint FK_D_POSTE__ACCORDER__R_UNITE;

alter table D_POSTE_ACCORDE
   drop constraint FK_D_POSTE__ACCORDE_A_R_ARME;

alter table D_POSTE_ACCORDE
   drop constraint FK_D_POSTE__ACCORDE_S_R_SPECIA;

alter table D_POSTE_ACCORDE
   drop constraint FK_D_POSTE__ACORDE_SE_D_COURRI;

alter table D_PRESENCE
   drop constraint FK_D_PRESEN_EST_PRESE_D_PERSON;

alter table D_PRISE_CONTACTE
   drop constraint FK_D_PRISE__D_PRISE;

alter table D_PRISE_CONTACTE
   drop constraint FK_D_PRISE__D_PRISE_C_D_CANDID;

alter table D_PRISE_CONTACTE
   drop constraint FK_D_PRISE__D_PRISE_C_R_RESULT;

alter table D_PRISE_CONTACTE
   drop constraint FK_D_PRISE__D_PRI;

alter table D_PRISE_CONTACTE
   drop constraint FK_D_PRISE__D_PRISE_C_R_MOTIF_;

alter table D_PRISE_CONTACTE
   drop constraint FK_D_PRISE__D_PRISE_C_D_CONTAC;

alter table D_PRIX_FORMATION
   drop constraint FK_D_PRIX_F_D_PRIX_FO_R_EXERCI;

alter table D_PRIX_FORMATION
   drop constraint FK_D_PRIX_F_D_PRIX_FO_R_FORMAT;

alter table D_PRIX_FORMATION
   drop constraint FK_D_PRIX_F_D_PRIX_FO_R_ETABLI;

alter table D_PRIX_FORMATION
   drop constraint FK_D_PRIX_F_D_PRIX_FO_R_OPTION;

alter table D_PROCHE_URG
   drop constraint FK_D_PROCHE_AVOIR_PRO_D_PERSON;

alter table D_RADIATION
   drop constraint FK_D_RADIAT_EST_RADIE_D_PERSON;

alter table D_RADIATION
   drop constraint FK_D_RADIAT_EST_RADIE_R_ARME;

alter table D_RADIATION
   drop constraint FK_D_RADIAT_EST_RADIE_R_GRADE;

alter table D_RADIATION
   drop constraint FK_D_RADIAT_EST_RADIE_R_MOTIF_;

alter table D_RADIATION
   drop constraint FK_D_RADIAT_EST_RADIE_R_UNITE;

alter table D_RESULTAT_CONCOUR
   drop constraint FK_D_RESULT_D_RESULTA_R_RESULT;

alter table D_RESULTAT_CONCOUR
   drop constraint FK_D_RESULT_D_RESULTA_D_CONCOU;

alter table D_RESULTAT_CONCOUR
   drop constraint FK_D_RESULT_D_RESULTA_D_CANDID;

alter table D_SANCTION
   drop constraint FK_D_SANCTI_D_SANCTIO_D_ARREST;

alter table D_SANCTION
   drop constraint FK_D_SANCTI_EST_SANCT_D_PERSON;

alter table D_SOLLICITEUR
   drop constraint FK_D_SOLLIC_D_SOLLICI_D_INTERV;

alter table D_SOLLICITEUR
   drop constraint FK_D_SOLLIC_D_SOLLICI_D_CANDID;

alter table D_SOUS_DOSSIER_DOCUMENTS
   drop constraint FK_D_SOUS_D_D_SOUS_DO_D_DOSSIE;

alter table D_SUIVI_FORMATION
   drop constraint FK_D_SUIVI__D_SUIVI_F_R_ETAPE_;

alter table D_SUIVI_FORMATION
   drop constraint FK_D_SUIVI__D_SUIVI_F_D_PERSON;

alter table D_SUIVI_FORMATION
   drop constraint FK_D_SUIVI__D_SUIVI_F_D_BESOIN;

alter table D_SUIVI_FORMATION
   drop constraint FK_D_SUIVI__D_SUIVI_F_D_FORMAT;

alter table D_SUJET_EPREUVE
   drop constraint FK_D_SUJET__D_SUJET_E_D_SUJET_;

alter table D_SUJET_EPREUVE
   drop constraint FK_D_SUJET__D_SUJET_E_D_EPREUV;

alter table D_SUJET_EXAMEN
   drop constraint FK_D_SUJET__D_SUJET_M_R_MATIER;

alter table EST_DESTINE
   drop constraint FK_EST_DEST_EST_DESTI_R_TYPE_D;

alter table EST_DESTINE
   drop constraint FK_EST_DEST_EST_DESTI_R_UNITE;

alter table EST_DESTINE
   drop constraint FK_EST_DEST_EST_DESTI_D_COURRI;

alter table EVALUER_CRITERE
   drop constraint FK_EVALUER__EVALUER_C_R_SOUS_C;

alter table EVALUER_CRITERE
   drop constraint FK_EVALUER__EVALUER_C_D_GRILLE;

alter table EVALUER_CRITERE
   drop constraint FK_EVALUER__EVALUER_C_R_EVALUA;

alter table EXPRIME_BESOIN
   drop constraint FK_EXPRIME__EXPRIME_B_D_FORMAT;

alter table EXPRIME_BESOIN
   drop constraint FK_EXPRIME__EXPRIME_B_D_COURRI;

alter table EXPRIME_BESOIN
   drop constraint FK_EXPRIME__EXPRIME_B_R_TYPE_B;

alter table PHOTO_GRADE
   drop constraint FK_PHOTO_GR_PHOTO_GRA_R_GRADE;

alter table PHOTO_GRADE
   drop constraint FK_PHOTO_GR_PHOTO_GRA_D_PERSON;

alter table R_ARME
   drop constraint FK_R_ARME_APPARTIEN_R_COMMAN;

alter table R_DIP_SPEC
   drop constraint FK_R_DIP_SP_R_DIP_SPE_R_SPECIA;

alter table R_DIP_SPEC
   drop constraint FK_R_DIP_SP_R_DIP_SPE_R_DIPLOM;

alter table R_FONCTION
   drop constraint FK_R_FONCTI_AVOIR_COD_R_POSTE;

alter table R_GRADE
   drop constraint FK_R_GRADE_APPARTIEN_R_CATEGO;

alter table R_GRADE
   drop constraint FK_R_GRADE_AVOIR_CAT_R_CAT_GR;

alter table R_NIVEAU_ETUDE
   drop constraint FK_R_NIVEAU_POSSEDE_C_R_CAT_GR;

alter table R_PROFIL_CATEGORIE
   drop constraint FK_R_PROFIL_R_PROFIL__R_GRADE;

alter table R_PROFIL_CATEGORIE
   drop constraint FK_R_PROFIL_R_PROFIL__R_PROFIL;

alter table R_SOUS_CRITERE_EVALUATION
   drop constraint FK_R_SOUS_C_AVOIR_SOU_R_CRITER;

alter table R_STRUCTURE
   drop constraint FK_R_STRUCT_AVOI;

alter table R_STRUCTURE
   drop constraint FK_R_STRUCT_CONSTITUE_R_STRUCT;

alter table R_STRUCTURE_SN
   drop constraint FK_R_STRUCT_AVOIR_TYP_R_T;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_ARM_R_ARME;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_ARM_R_ARMEME;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_CAT_R_CATEGO;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_FON_R_FONCTI;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_HAB_R_HABILI;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_QUA_R_QUALIF;

alter table R_TED
   drop constraint FK_R_TED_AVOIR_STR_R_STRUCT;

alter table R_TYPE_MR
   drop constraint FK_R_TYPE_M_MR_A_UNIT_R_UNITE;

alter table R_TYPE_MR
   drop constraint FK_R_TYPE_M_MR_DE_UNI_R_UNITE;

alter table R_UNITE
   drop constraint FK_R_UNITE_APARTIEN__R_ARME;

alter table R_UNITE
   drop constraint FK_R_UNITE_SITUER_DA_R_CODE_G;

alter table R_UNITE
   drop constraint FK_R_UNITE_UNITE_APP_R_ARME;

drop index AVOIR_APTITUDE_MEDICALE_FK;

drop index AVOIR_APTITUDE_MEDICALE4_FK;

drop index AVOIR_APTITUDE_MEDICALE3_FK;

drop index AVOIR_APTITUDE_MEDICALE2_FK;

drop table AVOIR_APTITUDE_MEDICALE cascade constraints;

drop index AVOIR_DECISION_CIVIL_FK;

drop index AVOIR_DECISION_CIVIL2_FK;

drop table AVOIR_DECISION_CIVIL cascade constraints;

drop index AVOIR_ETAT2_FK;

drop table AVOIR_ETAT cascade constraints;

drop index AVOIR_HABILITATION_FK;

drop index AVOIR_HABILITATION2_FK;

drop table AVOIR_HABILITATION cascade constraints;

drop index AVOIR_R_HABILITATION_FK;

drop index AVOIR_R_HABILITATION2_FK;

drop table AVOIR_R_HABILITATION cascade constraints;

drop index AVOIR_TED_SPECIALITE_FK;

drop index AVOIR_TED_SPECIALITE2_FK;

drop table AVOIR_TED_SPECIALITE cascade constraints;

drop index DANS_WILAYA_FK;

drop index DANS_WILAYA2_FK;

drop table DANS_WILAYA cascade constraints;

drop table "DATE" cascade constraints;

drop index AVOIR_TYPE_FONCTION_FK;

drop index AVOIR_FONCTION_FK;

drop index EST_AFFECTER_FK;

drop table D_AFFECTATION cascade constraints;

drop index DANS_UNITE_ARRET_FK;

drop table D_ARRESTATION cascade constraints;

drop index ACCORDE_FORMATION_FK;

drop table D_BESOIN_ACCORDE cascade constraints;

drop index CANDIDAT_EST_DE_SEX_FK;

drop index RESIDE_FK;

drop index EST_NE_A_FK;

drop table D_CANDIDAT cascade constraints;

drop index D_CANDIDAT_DOSSIER_INSCR;

drop table D_CANDIDAT_DOSSIER_INSCRIPTION cascade constraints;

drop index INSCRIT_DANS_SESSION_FK;

drop index EST_INSCRIT_FK;

drop index INSCRIT_DANS_EXERCICE_FK;

drop index CANDIDAT_AVOIR_SITUATION_FK;

drop index RECRUTER_DANS_FK;

drop index AVOIR_TYPE_RECRUTEMENT_FK;

drop index PERSO_RECRUTE_FK;

drop table D_CANDIDAT_INSCRIPTION cascade constraints;

drop index D_CANDIDAT_PROGRAMME_FK;

drop index D_CANDIDAT_PROGRAMME2_FK;

drop table D_CANDIDAT_PROGRAMME cascade constraints;

drop index D_CHOIX_MUTATION_FK;

drop index D_CHOIX_MUTATION2_FK;

drop table D_CHOIX_MUTATION cascade constraints;

drop index COMISSION_DANS_EXERCICE_FK;

drop table D_COMISSION_EVALUATION cascade constraints;

drop index CONCOUR_DANS_UNITE_FK;

drop index D_GERER_CONCOURS_FK;

drop table D_CONCOURS cascade constraints;

drop index D_CONCOURS_FORMATION_FK;

drop index D_CONCOURS_FORMATION2_FK;

drop table D_CONCOURS_FORMATION cascade constraints;

drop index A_POUR_CONSIGNES_FK;

drop table D_CONSIGNES_INTERIME cascade constraints;

drop index CANDIDTA_AVOIR_CONTACT_FK;

drop index PROCHE_AVOIR_CONTACT_FK;

drop index AVOIR_TYPE_CONTACT_FK;

drop index AVOIR_CONTACT_FK;

drop table D_CONTACT cascade constraints;

drop index AVOIR_CLASSIFICATION_FK;

drop index EMIS_PAR_FK;

drop index AVOIR_TYPE_COURRIER_FK;

drop table D_COURRIER cascade constraints;

drop index D_COURRIER_COM_FK;

drop index D_COURRIER_COM2_FK;

drop table D_COURRIER_COM cascade constraints;

drop index D_COURRIER_FORMATION_ACC;

drop index D_COURRIER_FORMATION_ACCOR;

drop index D_COURRIER_FORM;

drop table D_COURRIER_FORMATION_ACCORDE cascade constraints;

drop index AVOIR_TYPE_DECORATION_FK;

drop index ETRE_DECORER_FK;

drop table D_DECORATION cascade constraints;

drop index D_DEMANDE_ELEMENT_MISSION_FK;

drop index D_DEMANDE_ELEMENT_MISSION3_FK;

drop index D_DEMANDE_ELEMENT_MISSION2_FK;

drop table D_DEMANDE_ELEMENT_MISSION cascade constraints;

drop index DEMANDE_POUR_MOTIF_FK;

drop index FAIT_OBJECT_DEMANDE_INDISP_FK;

drop table D_DEMANDE_INDISP cascade constraints;

drop index A_DEMANDER_MISSION_FK;

drop index AU_MOYEN_DE_DEMANDE_FK;

drop table D_DEMANDE_MISSION cascade constraints;

drop index DE_UNITE_DESERTION_FK;

drop index A_DESERTE_FK;

drop table D_DESERTION cascade constraints;

drop index AU_PROFIT_DE_FK;

drop index AVOIR_TYPE_DECISION_FK;

drop index AVOIR_GRADE_PCA_FK;

drop table D_DICISION_CIVIL cascade constraints;

drop index D_DIPLOME_CANDIDAT_FK;

drop index D_DIPLOME_CANDIDAT4_FK;

drop index D_DIPLOME_CANDIDAT3_FK;

drop index D_DIPLOME_CANDIDAT2_FK;

drop table D_DIPLOME_CANDIDAT cascade constraints;

drop index EST_DIVORCER_AVEC_FK;

drop table D_DIVORCE cascade constraints;

drop index A_DOSSIER_FK;

drop table D_DOSSIER cascade constraints;

drop index AVOIR_MODE_ENGAGEMENT_FK;

drop index AVOIR_TYPE_ENGAGEMENT_FK;

drop index AVEC_GRADE_FK;

drop index POUR_ARME_FK;

drop index DANS_UNITE_FK;

drop index AVEC_NIVEAU_FK;

drop index A_SIGNER_CONTART_ENGAGEMENT_FK;

drop table D_ENGAGEMENT cascade constraints;

drop index CONTIENT_EPREUVE_FK;

drop index AVOIR_TYPE_EPREUVE_FK;

drop table D_EPREUVE cascade constraints;

drop index D_ETAPE_RECRUTEMENT_FK;

drop index D_ETAPE_RECRUTEMENT3_FK;

drop index D_ETAPE_RECRUTEMENT2_FK;

drop table D_ETAPE_RECRUTEMENT cascade constraints;

drop index A_FAIT_VOEUX_MUTATION_FK;

drop table D_FICHE_VOEUX cascade constraints;

drop index AVOIR_NATURE_FORMATION_FK;

drop index AVOIR_LIEU_DANS_ETABLISS;

drop index EN_DIFFERENTE_FK;

drop index AVOIR_TYPE_FORMATION_FK;

drop index APPARTIEN_ENVOI_FK;

drop index CONTIENT_FK;

drop index DANS_EXERCICE_FK;

drop index AVOIR_SPECIALITE_FK;

drop index AVOIR_LIEU_DANS_UNITE_FK;

drop table D_FORMATION_DISPONIBLE cascade constraints;

drop index PROPOSE_PAR_FK;

drop table D_FORMATION_THEME_FP cascade constraints;

drop index AVOIR_DECISION_FK;

drop index EVALUE_DANS_CONCOUR_FK;

drop index EVALUER_FK;

drop index AVOIR_GRILLE_EVALUATION_FK;

drop table D_GRILLE_EVALUATION cascade constraints;

drop table D_HABILITATION cascade constraints;

drop index EST_INCORPORE_A_UNITE_FK;

drop index EST_INCORPORE_POUR_ARME_FK;

drop index EST_INCORPORE_AVEC_GRADE_FK;

drop index EST_INCORPORE_AVEC_NIVEAU_FK;

drop index EST_INCORPORE_CTG_FK;

drop index EST_INCORPORE_FK;

drop table D_INCORPORATION cascade constraints;

drop index A_POUR_INTERIME_FK;

drop index POUR_MOTIF_FK;

drop index AVOIR_LIEU_DISTINATION_FK;

drop index EST_INDISPONIBLE_FK;

drop table D_INDISPONIBLE cascade constraints;

drop table D_INTERVENANT cascade constraints;

drop index AVOIR_TYPE_CONDAMNATION_FK;

drop index EST_JUGE_FK;

drop table D_JUGEMENT cascade constraints;

drop index EST_MARIER_AVEC_FK;

drop index A_LIEU_MARIAGE_FK;

drop index EST_MARIER_FK;

drop table D_MARRIAGE cascade constraints;

drop index CONJOIN_NE_A_FK;

drop index CONJOIN_DE_SEX_FK;

drop table D_MARRIAGE_CONJOINT cascade constraints;

drop index ENFANT_NE_A_FK;

drop index ENFANT_DE_SEX_FK;

drop index EST_PERE_DE_FK;

drop table D_MARRIAGE_ENFANTS cascade constraints;

drop index D_MEMBRE_COMMISION_FK;

drop index D_MEMBRE_COMMISION3_FK;

drop index D_MEMBRE_COMMISION2_FK;

drop table D_MEMBRE_COMMISION cascade constraints;

drop index MISE_ROUTE_A_DISTINATION_FK;

drop index MISE_ROUTE_DE_UNITE_FK;

drop index AVOIR_TYPE_MISE_ROUTE_FK;

drop index FAIT_OBJECT_MISE_ROUTE_FK;

drop table D_MISE_ROUTE cascade constraints;

drop index A_VEHICULE_FK;

drop index D_MISSON_ACCORDE_FK;

drop index AU_MOYEN_DE_FK;

drop table D_MISSION cascade constraints;

drop index D_MISSION_TYPE_RECRUTEMENT_FK;

drop index D_MISSION_TYPE_RECRUTEMENT2_FK;

drop table D_MISSION_TYPE_RECRUTEMENT cascade constraints;

drop index TYPE_MUTATION_FK;

drop index A_UNITE_FK;

drop index DE_UNITE_FK;

drop index EST_MUTER_FK;

drop table D_MUTATION cascade constraints;

drop index OBTIEN_GRADE_FK;

drop index EST_NOMINER_GRADE_FK;

drop table D_NOMINATION cascade constraints;

drop index DANS_UNITE_NOTATION_FK;

drop index EST_NOTE_FK;

drop table D_NOTATION cascade constraints;

drop index D_NOTE_EPREUVE_FK;

drop index D_NOTE_EPREUVE3_FK;

drop index D_NOTE_EPREUVE2_FK;

drop table D_NOTE_EPREUVE cascade constraints;

drop index EST_PROGRAMME_A_UNITE_FK;

drop index PERMANENCE_DE_TYPE_FK;

drop table D_PERMANENCE cascade constraints;

drop index D_PERSONELS_PERMANENCE_FK;

drop index D_PERSONELS_PERMANENCE4_FK;

drop index D_PERSONELS_PERMANENCE3_FK;

drop index D_PERSONELS_PERMANENCE2_FK;

drop table D_PERSONELS_PERMANENCE cascade constraints;

drop index D_PERSONEL_FONCTION_FK;

drop index D_PERSONEL_FONCTION3_FK;

drop index D_PERSONEL_FONCTION2_FK;

drop table D_PERSONEL_FONCTION cascade constraints;

drop index EST_DE_SEX_FK;

drop index POSSEDE_GRADE_FK;

drop index APPARTIEN_ARME_FK;

drop index AVOIR_GROUPAGE_FK;

drop index AVOIR_NIVEAU_FK;

drop index APPARTENT_AU_SSN_FK;

drop index PERSONNEL_AVOIR_POSITION_FK;

drop index AVOIR_SITUATION_FAMILIALE_FK;

drop index AVOIR_LIEU_LN_FK;

drop table D_PERSONNELS cascade constraints;

drop index AVOIR_ADRESS_FK;

drop index AVOIR_TYPE_FK;

drop table D_PERSONNELS_ADRESSE cascade constraints;

drop index D_PERSONNELS_DIPLOME_FK;

drop index D_PERSONNELS_DIPLOME4_FK;

drop index D_PERSONNELS_DIPLOME3_FK;

drop index D_PERSONNELS_DIPLOME2_FK;

drop table D_PERSONNELS_DIPLOME cascade constraints;

drop index D_PERSONNELS_MISSIONS_FK;

drop index D_PERSONNELS_MISSIONS3_FK;

drop index D_PERSONNELS_MISSIONS2_FK;

drop table D_PERSONNELS_MISSIONS cascade constraints;

drop index AVOIR_PHOTO_FK;

drop table D_PERSONNELS_PHOTOS cascade constraints;

drop index PERSONEL_PIECE_FK;

drop index AVOIR_TYPE_PIECE_FK;

drop table D_PERSONNELS_PIECES cascade constraints;

drop index D_PERSONNEL_CONCOURS_FK;

drop index D_PERSONNEL_CONCOURS3_FK;

drop index D_PERSONNEL_CONCOURS2_FK;

drop table D_PERSONNEL_CONCOURS cascade constraints;

drop index D_PERSONNEL_COURRIER_FK;

drop index D_PERSONNEL_COURRIER2_FK;

drop table D_PERSONNEL_COURRIER cascade constraints;

drop index ACORDE_SELON_MSG_FK;

drop index ACCORDE_ARME_FK;

drop index ACCORDE_SPECIALITE_FK;

drop index ACCORDER_DAND_UNE_UNITE_FK;

drop table D_POSTE_ACCORDE cascade constraints;

drop index EST_PRESENT_FK;

drop table D_PRESENCE cascade constraints;

drop index D_PRISE_CONTACTE_FK;

drop index D_PRISE_CONTACTE6_FK;

drop index D_PRISE_CONTACTE5_FK;

drop index D_PRISE_CONTACTE4_FK;

drop index D_PRISE_CONTACTE3_FK;

drop index D_PRISE_CONTACTE2_FK;

drop table D_PRISE_CONTACTE cascade constraints;

drop index D_PRIX_FORMATION_FK;

drop index D_PRIX_FORMATION4_FK;

drop index D_PRIX_FORMATION3_FK;

drop index D_PRIX_FORMATION2_FK;

drop table D_PRIX_FORMATION cascade constraints;

drop index AVOIR_PROCHE_URG_FK;

drop table D_PROCHE_URG cascade constraints;

drop index EST_RADIER_AVEC_MOTIF_FK;

drop index EST_RADIER_DEPUIS_UNITE_FK;

drop index EST_RADIER_AVEC_GRADE_FK;

drop index EST_RADIER_AVEC_ARME_FK;

drop index EST_RADIER_FK;

drop table D_RADIATION cascade constraints;

drop index D_RESULTAT_CONCOUR_FK;

drop index D_RESULTAT_CONCOUR3_FK;

drop index D_RESULTAT_CONCOUR2_FK;

drop table D_RESULTAT_CONCOUR cascade constraints;

drop index D_SANCTION_ARRESTATION_FK;

drop index EST_SANCTIONNER_FK;

drop table D_SANCTION cascade constraints;

drop index D_SOLLICITEUR_FK;

drop index D_SOLLICITEUR2_FK;

drop table D_SOLLICITEUR cascade constraints;

drop index D_SOUS_DOSSIER_DOCUMENTS3_FK;

drop table D_SOUS_DOSSIER_DOCUMENTS cascade constraints;

drop index D_SUIVI_FORMATION_FK;

drop index D_SUIVI_FORMATION4_FK;

drop index D_SUIVI_FORMATION3_FK;

drop index D_SUIVI_FORMATION2_FK;

drop table D_SUIVI_FORMATION cascade constraints;

drop index D_SUJET_EPREUVE_FK;

drop index D_SUJET_EPREUVE2_FK;

drop table D_SUJET_EPREUVE cascade constraints;

drop index D_SUJET_MATIERE_FK;

drop table D_SUJET_EXAMEN cascade constraints;

drop index EST_DESTINE_FK;

drop index EST_DESTINE3_FK;

drop index EST_DESTINE2_FK;

drop table EST_DESTINE cascade constraints;

drop index EVALUER_CRITERE_FK;

drop index EVALUER_CRITERE3_FK;

drop index EVALUER_CRITERE2_FK;

drop table EVALUER_CRITERE cascade constraints;

drop index EXPRIME_BESOIN_FK;

drop index EXPRIME_BESOIN3_FK;

drop index EXPRIME_BESOIN2_FK;

drop table EXPRIME_BESOIN cascade constraints;

drop index PHOTO_GRADE_FK;

drop index PHOTO_GRADE2_FK;

drop table PHOTO_GRADE cascade constraints;

drop table R_ADRESSE_TYPE cascade constraints;

drop table R_APTITUDE_MEDICALE cascade constraints;

drop index APPARTIENT_CDT_FK;

drop table R_ARME cascade constraints;

drop table R_ARMEMENT cascade constraints;

drop table R_CATEGORIE_TED cascade constraints;

drop table R_CAT_GRADE cascade constraints;

drop table R_CLASSIFICATION cascade constraints;

drop table R_CODE_GEO cascade constraints;

drop table R_COMMANDEMENT cascade constraints;

drop table R_CONDAMNATION_TYPE cascade constraints;

drop table R_CRITERE_EVALUATION cascade constraints;

drop table R_CTG cascade constraints;

drop table R_DECISION cascade constraints;

drop table R_DIPLOME cascade constraints;

drop index R_DIP_SPEC_FK;

drop index R_DIP_SPEC2_FK;

drop table R_DIP_SPEC cascade constraints;

drop table R_ETABLISSEMENT cascade constraints;

drop table R_ETAPE_FORMATION cascade constraints;

drop table R_ETAPE_RECRUTEMENT cascade constraints;

drop table R_EVALUATION cascade constraints;

drop table R_EXERCICE cascade constraints;

drop index AVOIR_CODE_FK;

drop table R_FONCTION cascade constraints;

drop table R_FORMATION cascade constraints;

drop index AVOIR_CAT_GRADE_FK;

drop index APPARTIENT_FK;

drop table R_GRADE cascade constraints;

drop table R_GRADE_PCA cascade constraints;

drop table R_GROUPAGE cascade constraints;

drop table R_HABILITATION cascade constraints;

drop table R_MATIERE cascade constraints;

drop table R_MODE_ENGAGEMENT cascade constraints;

drop table R_MOTIF_INDIPONIBILITE cascade constraints;

drop table R_MOTIF_PRISE_CONTACT cascade constraints;

drop table R_MOTIF_RADIATION cascade constraints;

drop table R_MOYENS cascade constraints;

drop table R_NATURE_FORMATION cascade constraints;

drop index POSSEDE_CATEGORIE_FK;

drop table R_NIVEAU_ETUDE cascade constraints;

drop table R_OPTION_FORMATION cascade constraints;

drop table R_POSITION cascade constraints;

drop table R_POSTE cascade constraints;

drop table R_POSTE_PERMANENCE cascade constraints;

drop table R_PROFILE cascade constraints;

drop table R_PROFILE_PERMANENCE cascade constraints;

drop index R_PROFIL_CATEGORIE_FK;

drop index R_PROFIL_CATEGORIE2_FK;

drop table R_PROFIL_CATEGORIE cascade constraints;

drop table R_PROFIL_PERSONEL cascade constraints;

drop table R_QUALIFICATION cascade constraints;

drop table R_RESULTAT_CONCOURS cascade constraints;

drop table R_RESULTAT_PRISE_CONTACT cascade constraints;

drop table R_SESSION cascade constraints;

drop table R_SEX cascade constraints;

drop table R_SITUATION_FAMILIALE cascade constraints;

drop index AVOIR_SOUS_CRITERE_FK;

drop table R_SOUS_CRITERE_EVALUATION cascade constraints;

drop table R_SPECIALITE cascade constraints;

drop index AVOIR_TYPE_STRUCTURE_FK;

drop index CONSTITUE_DE_FK;

drop table R_STRUCTURE cascade constraints;

drop index AVOIR_TYPE_STR_SN_FK;

drop table R_STRUCTURE_SN cascade constraints;

drop index AVOIR_FONCTION_TED_FK;

drop index AVOIR_HABILITAION_FK;

drop index AVOIR_QUALIFICATION_FK;

drop index AVOIR_ARMEMENT_FK;

drop index AVOIR_ARME_FK;

drop index AVOIR_CAT_TED_FK;

drop index AVOIR_STRUCTURE_FK;

drop table R_TED cascade constraints;

drop table R_TED_SPECIALITE cascade constraints;

drop table R_TYPE_BESOIN cascade constraints;

drop table R_TYPE_CONTACT cascade constraints;

drop table R_TYPE_COURRIER cascade constraints;

drop table R_TYPE_DECISION cascade constraints;

drop table R_TYPE_DECORATION cascade constraints;

drop table R_TYPE_DEST_COURRIER cascade constraints;

drop table R_TYPE_ENGAGEMENT cascade constraints;

drop table R_TYPE_EPREUVE cascade constraints;

drop table R_TYPE_FONCTION cascade constraints;

drop table R_TYPE_FORMATION cascade constraints;

drop index MR_A_UNITE_FK;

drop index MR_DE_UNITE_FK;

drop table R_TYPE_MR cascade constraints;

drop table R_TYPE_MUTATION cascade constraints;

drop table R_TYPE_PERMANENCE cascade constraints;

drop table R_TYPE_PIECE cascade constraints;

drop table R_TYPE_RECRUTEMENT cascade constraints;

drop table R_TYPE_STRUCTURE cascade constraints;

drop table R_TYPE_STRUCTURE_SN cascade constraints;

drop table R_TYPE_TEST_MEDICALE cascade constraints;

drop index UNITE_APPARTIEN_ARME_FK;

drop index APARTIEN_ARME_FK;

drop index SITUER_DANS_FK;

drop table R_UNITE cascade constraints;

drop table R_VEHICULE cascade constraints;

drop table R_WILAYA cascade constraints;

/*==============================================================*/
/* Table : AVOIR_APTITUDE_MEDICALE                              */
/*==============================================================*/
create table AVOIR_APTITUDE_MEDICALE 
(
   ID_APTITUDE_MEDICALE CHAR(2)              not null,
   ID_CONCOURS          VARCHAR2(10)         not null,
   ID_TYPE_TEST_MEDICALE VARCHAR2(10)         not null,
   "DATE"               DATE                 not null,
   constraint PK_AVOIR_APTITUDE_MEDICALE primary key (ID_APTITUDE_MEDICALE, ID_CONCOURS, ID_TYPE_TEST_MEDICALE, "DATE")
);

/*==============================================================*/
/* Index : AVOIR_APTITUDE_MEDICALE2_FK                          */
/*==============================================================*/
create index AVOIR_APTITUDE_MEDICALE2_FK on AVOIR_APTITUDE_MEDICALE (
   ID_APTITUDE_MEDICALE ASC
);

/*==============================================================*/
/* Index : AVOIR_APTITUDE_MEDICALE3_FK                          */
/*==============================================================*/
create index AVOIR_APTITUDE_MEDICALE3_FK on AVOIR_APTITUDE_MEDICALE (
   ID_CONCOURS ASC
);

/*==============================================================*/
/* Index : AVOIR_APTITUDE_MEDICALE4_FK                          */
/*==============================================================*/
create index AVOIR_APTITUDE_MEDICALE4_FK on AVOIR_APTITUDE_MEDICALE (
   ID_TYPE_TEST_MEDICALE ASC
);

/*==============================================================*/
/* Index : AVOIR_APTITUDE_MEDICALE_FK                           */
/*==============================================================*/
create index AVOIR_APTITUDE_MEDICALE_FK on AVOIR_APTITUDE_MEDICALE (
   "DATE" ASC
);

/*==============================================================*/
/* Table : AVOIR_DECISION_CIVIL                                 */
/*==============================================================*/
create table AVOIR_DECISION_CIVIL 
(
   ID_DECISION          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   constraint PK_AVOIR_DECISION_CIVIL primary key (ID_DECISION, ID_PERSONNEL)
);

/*==============================================================*/
/* Index : AVOIR_DECISION_CIVIL2_FK                             */
/*==============================================================*/
create index AVOIR_DECISION_CIVIL2_FK on AVOIR_DECISION_CIVIL (
   ID_DECISION ASC
);

/*==============================================================*/
/* Index : AVOIR_DECISION_CIVIL_FK                              */
/*==============================================================*/
create index AVOIR_DECISION_CIVIL_FK on AVOIR_DECISION_CIVIL (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : AVOIR_ETAT                                           */
/*==============================================================*/
create table AVOIR_ETAT 
(
   ID_MARRIAGE_CONJOINT NUMBER(12,0)         not null,
   ID_ETAT              VARCHAR2(1)          not null,
   constraint PK_AVOIR_ETAT primary key (ID_MARRIAGE_CONJOINT, ID_ETAT)
);

/*==============================================================*/
/* Index : AVOIR_ETAT2_FK                                       */
/*==============================================================*/
create index AVOIR_ETAT2_FK on AVOIR_ETAT (
   ID_MARRIAGE_CONJOINT ASC
);

/*==============================================================*/
/* Table : AVOIR_HABILITATION                                   */
/*==============================================================*/
create table AVOIR_HABILITATION 
(
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_HABILITATION      NUMBER               not null,
   constraint PK_AVOIR_HABILITATION primary key (ID_PERSONNEL, ID_HABILITATION)
);

/*==============================================================*/
/* Index : AVOIR_HABILITATION2_FK                               */
/*==============================================================*/
create index AVOIR_HABILITATION2_FK on AVOIR_HABILITATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_HABILITATION_FK                                */
/*==============================================================*/
create index AVOIR_HABILITATION_FK on AVOIR_HABILITATION (
   ID_HABILITATION ASC
);

/*==============================================================*/
/* Table : AVOIR_R_HABILITATION                                 */
/*==============================================================*/
create table AVOIR_R_HABILITATION 
(
   ID_HABILITATION      NUMBER               not null,
   ID_R_HABILITATION    VARCHAR2(10)         not null,
   constraint PK_AVOIR_R_HABILITATION primary key (ID_HABILITATION, ID_R_HABILITATION)
);

/*==============================================================*/
/* Index : AVOIR_R_HABILITATION2_FK                             */
/*==============================================================*/
create index AVOIR_R_HABILITATION2_FK on AVOIR_R_HABILITATION (
   ID_HABILITATION ASC
);

/*==============================================================*/
/* Index : AVOIR_R_HABILITATION_FK                              */
/*==============================================================*/
create index AVOIR_R_HABILITATION_FK on AVOIR_R_HABILITATION (
   ID_R_HABILITATION ASC
);

/*==============================================================*/
/* Table : AVOIR_TED_SPECIALITE                                 */
/*==============================================================*/
create table AVOIR_TED_SPECIALITE 
(
   ID_TED_SPECIALITE    VARCHAR2(2)          not null,
   ID_TED               VARCHAR2(10)         not null,
   constraint PK_AVOIR_TED_SPECIALITE primary key (ID_TED_SPECIALITE, ID_TED)
);

/*==============================================================*/
/* Index : AVOIR_TED_SPECIALITE2_FK                             */
/*==============================================================*/
create index AVOIR_TED_SPECIALITE2_FK on AVOIR_TED_SPECIALITE (
   ID_TED_SPECIALITE ASC
);

/*==============================================================*/
/* Index : AVOIR_TED_SPECIALITE_FK                              */
/*==============================================================*/
create index AVOIR_TED_SPECIALITE_FK on AVOIR_TED_SPECIALITE (
   ID_TED ASC
);

/*==============================================================*/
/* Table : DANS_WILAYA                                          */
/*==============================================================*/
create table DANS_WILAYA 
(
   CODE_APC             VARCHAR2(6)          not null,
   CODE_WILAYA          VARCHAR2(10)         not null,
   constraint PK_DANS_WILAYA primary key (CODE_APC, CODE_WILAYA)
);

/*==============================================================*/
/* Index : DANS_WILAYA2_FK                                      */
/*==============================================================*/
create index DANS_WILAYA2_FK on DANS_WILAYA (
   CODE_APC ASC
);

/*==============================================================*/
/* Index : DANS_WILAYA_FK                                       */
/*==============================================================*/
create index DANS_WILAYA_FK on DANS_WILAYA (
   CODE_WILAYA ASC
);

/*==============================================================*/
/* Table : "DATE"                                               */
/*==============================================================*/
create table "DATE" 
(
   "DATE"               DATE                 not null,
   constraint PK_DATE primary key ("DATE")
);

/*==============================================================*/
/* Table : D_AFFECTATION                                        */
/*==============================================================*/
create table D_AFFECTATION 
(
   ID_AFFECTATION       NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_FONCTION          VARCHAR2(6)          not null,
   ID_TYPE_FONCTION     VARCHAR2(6)          not null,
   D_AFFECTATION        DATE,
   REF_DECISION         VARCHAR2(70),
   D_REF_DICISION       DATE,
   REF_PV_INSTALLATION  VARCHAR2(70),
   D_PV_INSTALATION     DATE,
   REF_CESS_FONCTION    VARCHAR2(70),
   D_REF_CESS_FONCTION  DATE,
   D_CESS_FONCTION      DATE,
   constraint PK_D_AFFECTATION primary key (ID_AFFECTATION)
);

/*==============================================================*/
/* Index : EST_AFFECTER_FK                                      */
/*==============================================================*/
create index EST_AFFECTER_FK on D_AFFECTATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_FONCTION_FK                                    */
/*==============================================================*/
create index AVOIR_FONCTION_FK on D_AFFECTATION (
   ID_FONCTION ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_FONCTION_FK                               */
/*==============================================================*/
create index AVOIR_TYPE_FONCTION_FK on D_AFFECTATION (
   ID_TYPE_FONCTION ASC
);

/*==============================================================*/
/* Table : D_ARRESTATION                                        */
/*==============================================================*/
create table D_ARRESTATION 
(
   ID_ARRESTATION       NUMBER(12,0)         not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   D_D_ARRESTATION      DATE,
   D_F_ARRESTATION      DATE,
   D_ENTRER             DATE,
   D_SORTIE             DATE,
   REF_B_ECROUT         VARCHAR2(70),
   D_B_ECROUT           DATE,
   REF_L_PUNITION       VARCHAR2(70),
   D_REF_L_PUNITION     DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_ARRESTATION primary key (ID_ARRESTATION)
);

/*==============================================================*/
/* Index : DANS_UNITE_ARRET_FK                                  */
/*==============================================================*/
create index DANS_UNITE_ARRET_FK on D_ARRESTATION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_BESOIN_ACCORDE                                     */
/*==============================================================*/
create table D_BESOIN_ACCORDE 
(
   ID_BESOIN_ACCORDE    VARCHAR2(12)         not null,
   ID_FORMATION_DISPONIBLE VARCHAR2(12)         not null,
   NBR_ACCORDE          INTEGER,
   D_D_FORMATION        DATE,
   D_F_FORMATION        DATE,
   constraint PK_D_BESOIN_ACCORDE primary key (ID_BESOIN_ACCORDE)
);

/*==============================================================*/
/* Index : ACCORDE_FORMATION_FK                                 */
/*==============================================================*/
create index ACCORDE_FORMATION_FK on D_BESOIN_ACCORDE (
   ID_FORMATION_DISPONIBLE ASC
);

/*==============================================================*/
/* Table : D_CANDIDAT                                           */
/*==============================================================*/
create table D_CANDIDAT 
(
   ID_CANDIDAT          VARCHAR2(10)         not null,
   CODE_APC             VARCHAR2(6)          not null,
   R_C_CODE_APC         VARCHAR2(6)          not null,
   ID_SEX               VARCHAR2(1)          not null,
   NOMA                 VARCHAR2(50)         not null,
   PNOMA                VARCHAR2(50)         not null,
   NOM                  VARCHAR2(255)        not null,
   PNOM                 VARCHAR2(255)        not null,
   DN                   DATE                 not null,
   PPERE                VARCHAR2(255)        not null,
   NMERE                VARCHAR2(255)        not null,
   PMERE                VARCHAR2(255)        not null,
   ADRESSE              VARCHAR2(255)        default '/' not null,
   PHOTO                RAW(5000),
   constraint PK_D_CANDIDAT primary key (ID_CANDIDAT)
);

/*==============================================================*/
/* Index : EST_NE_A_FK                                          */
/*==============================================================*/
create index EST_NE_A_FK on D_CANDIDAT (
   CODE_APC ASC
);

/*==============================================================*/
/* Index : RESIDE_FK                                            */
/*==============================================================*/
create index RESIDE_FK on D_CANDIDAT (
   R_C_CODE_APC ASC
);

/*==============================================================*/
/* Index : CANDIDAT_EST_DE_SEX_FK                               */
/*==============================================================*/
create index CANDIDAT_EST_DE_SEX_FK on D_CANDIDAT (
   ID_SEX ASC
);

/*==============================================================*/
/* Table : D_CANDIDAT_DOSSIER_INSCRIPTION                       */
/*==============================================================*/
create table D_CANDIDAT_DOSSIER_INSCRIPTION 
(
   ID_CANDIDAT          VARCHAR2(10)         not null,
   ID_DOCUMENTS         VARCHAR2(6)          not null,
   DOCUMENT_PDF         VARBINARY(64000),
   constraint PK_D_CANDIDAT_DOSSIER_INSCRIPT primary key (ID_CANDIDAT, ID_DOCUMENTS)
);

/*==============================================================*/
/* Index : D_CANDIDAT_DOSSIER_INSCR                             */
/*==============================================================*/
create index D_CANDIDAT_DOSSIER_INSCR on D_CANDIDAT_DOSSIER_INSCRIPTION (
   ID_CANDIDAT ASC
);

/*==============================================================*/
/* Table : D_CANDIDAT_INSCRIPTION                               */
/*==============================================================*/
create table D_CANDIDAT_INSCRIPTION 
(
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_PERSONNEL         VARCHAR2(10),
   CODE_TYPE_RECRUTEMENT VARCHAR2(10)         not null,
   CODE_UNITE           VARCHAR2(7),
   ID_SITUATION_FAMILIALE VARCHAR2(1)          not null,
   ID_EXERCICE          VARCHAR2(4)          not null,
   ID_CANDIDAT          VARCHAR2(10)         not null,
   ID_SESSION           VARCHAR2(1)          not null,
   D_INSCIPTION         DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_CANDIDAT_INSCRIPTION primary key (ID_INSCRIPTION)
);

/*==============================================================*/
/* Index : PERSO_RECRUTE_FK                                     */
/*==============================================================*/
create index PERSO_RECRUTE_FK on D_CANDIDAT_INSCRIPTION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_RECRUTEMENT_FK                            */
/*==============================================================*/
create index AVOIR_TYPE_RECRUTEMENT_FK on D_CANDIDAT_INSCRIPTION (
   CODE_TYPE_RECRUTEMENT ASC
);

/*==============================================================*/
/* Index : RECRUTER_DANS_FK                                     */
/*==============================================================*/
create index RECRUTER_DANS_FK on D_CANDIDAT_INSCRIPTION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : CANDIDAT_AVOIR_SITUATION_FK                          */
/*==============================================================*/
create index CANDIDAT_AVOIR_SITUATION_FK on D_CANDIDAT_INSCRIPTION (
   ID_SITUATION_FAMILIALE ASC
);

/*==============================================================*/
/* Index : INSCRIT_DANS_EXERCICE_FK                             */
/*==============================================================*/
create index INSCRIT_DANS_EXERCICE_FK on D_CANDIDAT_INSCRIPTION (
   ID_EXERCICE ASC
);

/*==============================================================*/
/* Index : EST_INSCRIT_FK                                       */
/*==============================================================*/
create index EST_INSCRIT_FK on D_CANDIDAT_INSCRIPTION (
   ID_CANDIDAT ASC
);

/*==============================================================*/
/* Index : INSCRIT_DANS_SESSION_FK                              */
/*==============================================================*/
create index INSCRIT_DANS_SESSION_FK on D_CANDIDAT_INSCRIPTION (
   ID_SESSION ASC
);

/*==============================================================*/
/* Table : D_CANDIDAT_PROGRAMME                                 */
/*==============================================================*/
create table D_CANDIDAT_PROGRAMME 
(
   ID_COMMISION_EVALUATION VARCHAR2(6)          not null,
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   DATE_PRESELECTION    DATE                 not null,
   constraint PK_D_CANDIDAT_PROGRAMME primary key (ID_COMMISION_EVALUATION, ID_INSCRIPTION)
);

/*==============================================================*/
/* Index : D_CANDIDAT_PROGRAMME2_FK                             */
/*==============================================================*/
create index D_CANDIDAT_PROGRAMME2_FK on D_CANDIDAT_PROGRAMME (
   ID_COMMISION_EVALUATION ASC
);

/*==============================================================*/
/* Index : D_CANDIDAT_PROGRAMME_FK                              */
/*==============================================================*/
create index D_CANDIDAT_PROGRAMME_FK on D_CANDIDAT_PROGRAMME (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Table : D_CHOIX_MUTATION                                     */
/*==============================================================*/
create table D_CHOIX_MUTATION 
(
   ID_FICHE_VOEUX       NUMBER(12,0)         not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_CHOIX_MUTATION primary key (ID_FICHE_VOEUX, CODE_UNITE)
);

/*==============================================================*/
/* Index : D_CHOIX_MUTATION2_FK                                 */
/*==============================================================*/
create index D_CHOIX_MUTATION2_FK on D_CHOIX_MUTATION (
   ID_FICHE_VOEUX ASC
);

/*==============================================================*/
/* Index : D_CHOIX_MUTATION_FK                                  */
/*==============================================================*/
create index D_CHOIX_MUTATION_FK on D_CHOIX_MUTATION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_COMISSION_EVALUATION                               */
/*==============================================================*/
create table D_COMISSION_EVALUATION 
(
   ID_COMMISION_EVALUATION VARCHAR2(6)          not null,
   ID_EXERCICE          VARCHAR2(4)          not null,
   DATE_DEBUT_MISSION   DATE                 not null,
   DATE_FIN_MISSION     DATE                 not null,
   EVALUATEUR_HC        CHAR(1),
   OSERVATION           VARCHAR2(256),
   constraint PK_D_COMISSION_EVALUATION primary key (ID_COMMISION_EVALUATION)
);

/*==============================================================*/
/* Index : COMISSION_DANS_EXERCICE_FK                           */
/*==============================================================*/
create index COMISSION_DANS_EXERCICE_FK on D_COMISSION_EVALUATION (
   ID_EXERCICE ASC
);

/*==============================================================*/
/* Table : D_CONCOURS                                           */
/*==============================================================*/
create table D_CONCOURS 
(
   ID_CONCOURS          VARCHAR2(10)         not null,
   ID_COMMISION_EVALUATION VARCHAR2(6)          not null,
   CODE_UNITE           VARCHAR2(7),
   DATE_DEBUT_CONCOURS  DATE                 default '01/01/1900',
   DATE_FIN_CONCOURS    DATE,
   OBS_CONCOURS         VARCHAR2(100)        default '/',
   constraint PK_D_CONCOURS primary key (ID_CONCOURS)
);

/*==============================================================*/
/* Index : D_GERER_CONCOURS_FK                                  */
/*==============================================================*/
create index D_GERER_CONCOURS_FK on D_CONCOURS (
   ID_COMMISION_EVALUATION ASC
);

/*==============================================================*/
/* Index : CONCOUR_DANS_UNITE_FK                                */
/*==============================================================*/
create index CONCOUR_DANS_UNITE_FK on D_CONCOURS (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_CONCOURS_FORMATION                                 */
/*==============================================================*/
create table D_CONCOURS_FORMATION 
(
   ID_BESOIN_ACCORDE    VARCHAR2(12)         not null,
   ID_CONCOURS          VARCHAR2(10)         not null,
   constraint PK_D_CONCOURS_FORMATION primary key (ID_BESOIN_ACCORDE, ID_CONCOURS)
);

/*==============================================================*/
/* Index : D_CONCOURS_FORMATION2_FK                             */
/*==============================================================*/
create index D_CONCOURS_FORMATION2_FK on D_CONCOURS_FORMATION (
   ID_BESOIN_ACCORDE ASC
);

/*==============================================================*/
/* Index : D_CONCOURS_FORMATION_FK                              */
/*==============================================================*/
create index D_CONCOURS_FORMATION_FK on D_CONCOURS_FORMATION (
   ID_CONCOURS ASC
);

/*==============================================================*/
/* Table : D_CONSIGNES_INTERIME                                 */
/*==============================================================*/
create table D_CONSIGNES_INTERIME 
(
   CONTENUS             VARCHAR2(1024),
   OBSERVATION          VARCHAR2(1024),
   ID_CONSIGNE_INTERIME CHAR(10)             not null,
   ID_INDISPONIBLE      NUMBER(12,0)         not null,
   constraint PK_D_CONSIGNES_INTERIME primary key (ID_CONSIGNE_INTERIME)
);

/*==============================================================*/
/* Index : A_POUR_CONSIGNES_FK                                  */
/*==============================================================*/
create index A_POUR_CONSIGNES_FK on D_CONSIGNES_INTERIME (
   ID_INDISPONIBLE ASC
);

/*==============================================================*/
/* Table : D_CONTACT                                            */
/*==============================================================*/
create table D_CONTACT 
(
   ID_CONTACT           NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10),
   ID_TYPE_CONTACT      VARCHAR2(6)          not null,
   ID_LIEN_CONTACT      VARCHAR2(6),
   ID_CANDIDAT          VARCHAR2(10),
   CONTACT              VARCHAR2(10)         not null,
   VALIDE               CHAR(1)              not null,
   constraint PK_D_CONTACT primary key (ID_CONTACT)
);

/*==============================================================*/
/* Index : AVOIR_CONTACT_FK                                     */
/*==============================================================*/
create index AVOIR_CONTACT_FK on D_CONTACT (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_CONTACT_FK                                */
/*==============================================================*/
create index AVOIR_TYPE_CONTACT_FK on D_CONTACT (
   ID_TYPE_CONTACT ASC
);

/*==============================================================*/
/* Index : PROCHE_AVOIR_CONTACT_FK                              */
/*==============================================================*/
create index PROCHE_AVOIR_CONTACT_FK on D_CONTACT (
   ID_LIEN_CONTACT ASC
);

/*==============================================================*/
/* Index : CANDIDTA_AVOIR_CONTACT_FK                            */
/*==============================================================*/
create index CANDIDTA_AVOIR_CONTACT_FK on D_CONTACT (
   ID_CANDIDAT ASC
);

/*==============================================================*/
/* Table : D_COURRIER                                           */
/*==============================================================*/
create table D_COURRIER 
(
   ID_COURRIER          VARCHAR2(12)         not null,
   ID_TYPE_COURRIER     CHAR(10)             not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   ID_CLASSIFFICATION   CHAR(10)             not null,
   REF_ENVOI            VARCHAR2(10)         not null,
   DATE_REF_ENVOI       DATE                 not null,
   REF_ARRIVE           VARCHAR2(250),
   DATE_ARRRIVE         DATE,
   OBJET                CHAR(256)            not null,
   DATE_DELAIS          DATE,
   OBSERVATION          VARCHAR2(1024)       not null,
   PDF                  BLOB,
   constraint PK_D_COURRIER primary key (ID_COURRIER)
);

/*==============================================================*/
/* Index : AVOIR_TYPE_COURRIER_FK                               */
/*==============================================================*/
create index AVOIR_TYPE_COURRIER_FK on D_COURRIER (
   ID_TYPE_COURRIER ASC
);

/*==============================================================*/
/* Index : EMIS_PAR_FK                                          */
/*==============================================================*/
create index EMIS_PAR_FK on D_COURRIER (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : AVOIR_CLASSIFICATION_FK                              */
/*==============================================================*/
create index AVOIR_CLASSIFICATION_FK on D_COURRIER (
   ID_CLASSIFFICATION ASC
);

/*==============================================================*/
/* Table : D_COURRIER_COM                                       */
/*==============================================================*/
create table D_COURRIER_COM 
(
   ID_COURRIER          VARCHAR2(12)         not null,
   ID_COMMISION_EVALUATION VARCHAR2(6)          not null,
   constraint PK_D_COURRIER_COM primary key (ID_COURRIER, ID_COMMISION_EVALUATION)
);

/*==============================================================*/
/* Index : D_COURRIER_COM2_FK                                   */
/*==============================================================*/
create index D_COURRIER_COM2_FK on D_COURRIER_COM (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Index : D_COURRIER_COM_FK                                    */
/*==============================================================*/
create index D_COURRIER_COM_FK on D_COURRIER_COM (
   ID_COMMISION_EVALUATION ASC
);

/*==============================================================*/
/* Table : D_COURRIER_FORMATION_ACCORDE                         */
/*==============================================================*/
create table D_COURRIER_FORMATION_ACCORDE 
(
   ID_BESOIN_ACCORDE    VARCHAR2(12)         not null,
   ID_COURRIER          VARCHAR2(12)         not null,
   ID_TYPE_BESOIN       VARCHAR2(2)          not null,
   constraint PK_D_COURRIER_FORMATION_ACCORD primary key (ID_BESOIN_ACCORDE, ID_COURRIER, ID_TYPE_BESOIN)
);

/*==============================================================*/
/* Index : D_COURRIER_FORM                                      */
/*==============================================================*/
create index D_COURRIER_FORM on D_COURRIER_FORMATION_ACCORDE (
   ID_BESOIN_ACCORDE ASC
);

/*==============================================================*/
/* Index : D_COURRIER_FORMATION_ACCOR                           */
/*==============================================================*/
create index D_COURRIER_FORMATION_ACCOR on D_COURRIER_FORMATION_ACCORDE (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Index : D_COURRIER_FORMATION_ACC                             */
/*==============================================================*/
create index D_COURRIER_FORMATION_ACC on D_COURRIER_FORMATION_ACCORDE (
   ID_TYPE_BESOIN ASC
);

/*==============================================================*/
/* Table : D_DECORATION                                         */
/*==============================================================*/
create table D_DECORATION 
(
   ID_DECORATION        NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_TYPE_DECO         VARCHAR2(2)          not null,
   D_DECORATION         DATE,
   REF_DECORATION       VARCHAR2(70),
   D_REF_DECORATION     DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_DECORATION primary key (ID_DECORATION)
);

/*==============================================================*/
/* Index : ETRE_DECORER_FK                                      */
/*==============================================================*/
create index ETRE_DECORER_FK on D_DECORATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_DECORATION_FK                             */
/*==============================================================*/
create index AVOIR_TYPE_DECORATION_FK on D_DECORATION (
   ID_TYPE_DECO ASC
);

/*==============================================================*/
/* Table : D_DEMANDE_ELEMENT_MISSION                            */
/*==============================================================*/
create table D_DEMANDE_ELEMENT_MISSION 
(
   ID_DEMANDE_MISSION   NUMBER(12,0)         not null,
   ID_PROFILE           VARCHAR2(1)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   constraint PK_D_DEMANDE_ELEMENT_MISSION primary key (ID_DEMANDE_MISSION, ID_PROFILE, ID_PERSONNEL)
);

/*==============================================================*/
/* Index : D_DEMANDE_ELEMENT_MISSION2_FK                        */
/*==============================================================*/
create index D_DEMANDE_ELEMENT_MISSION2_FK on D_DEMANDE_ELEMENT_MISSION (
   ID_DEMANDE_MISSION ASC
);

/*==============================================================*/
/* Index : D_DEMANDE_ELEMENT_MISSION3_FK                        */
/*==============================================================*/
create index D_DEMANDE_ELEMENT_MISSION3_FK on D_DEMANDE_ELEMENT_MISSION (
   ID_PROFILE ASC
);

/*==============================================================*/
/* Index : D_DEMANDE_ELEMENT_MISSION_FK                         */
/*==============================================================*/
create index D_DEMANDE_ELEMENT_MISSION_FK on D_DEMANDE_ELEMENT_MISSION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_DEMANDE_INDISP                                     */
/*==============================================================*/
create table D_DEMANDE_INDISP 
(
   ID_DEMANDE_INDISPO   NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_MOTIF_INDIPONIBILITE VARCHAR2(2)          not null,
   D_D_INDISPO          DATE,
   D_F_INDISPO          DATE,
   MOTIF                VARCHAR2(150),
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_DEMANDE_INDISP primary key (ID_DEMANDE_INDISPO)
);

/*==============================================================*/
/* Index : FAIT_OBJECT_DEMANDE_INDISP_FK                        */
/*==============================================================*/
create index FAIT_OBJECT_DEMANDE_INDISP_FK on D_DEMANDE_INDISP (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : DEMANDE_POUR_MOTIF_FK                                */
/*==============================================================*/
create index DEMANDE_POUR_MOTIF_FK on D_DEMANDE_INDISP (
   ID_MOTIF_INDIPONIBILITE ASC
);

/*==============================================================*/
/* Table : D_DEMANDE_MISSION                                    */
/*==============================================================*/
create table D_DEMANDE_MISSION 
(
   ID_DEMANDE_MISSION   NUMBER(12,0)         not null,
   ID_MOYEN             VARCHAR2(2)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   D_D_MISSION          DATE,
   D_F_MISSION          DATE,
   ACCORDE              CHAR(1),
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_DEMANDE_MISSION primary key (ID_DEMANDE_MISSION)
);

/*==============================================================*/
/* Index : AU_MOYEN_DE_DEMANDE_FK                               */
/*==============================================================*/
create index AU_MOYEN_DE_DEMANDE_FK on D_DEMANDE_MISSION (
   ID_MOYEN ASC
);

/*==============================================================*/
/* Index : A_DEMANDER_MISSION_FK                                */
/*==============================================================*/
create index A_DEMANDER_MISSION_FK on D_DEMANDE_MISSION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_DESERTION                                          */
/*==============================================================*/
create table D_DESERTION 
(
   ID_DESERTION         NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   D_DESERTION          DATE,
   REF_BR_UNITEE        VARCHAR2(70),
   D_REF_BR_UNITEE      DATE,
   REF_BR_DRRH          VARCHAR2(70),
   D_REF_BR_DRRH        DATE,
   D_RETOUR             DATE,
   REF_BCR_UNITEE       VARCHAR2(70),
   D_REF_BCR_UNITEE     DATE,
   REF_BCR_DRRH         VARCHAR2(70),
   D_REF_BCR_DRRH       DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_DESERTION primary key (ID_DESERTION)
);

/*==============================================================*/
/* Index : A_DESERTE_FK                                         */
/*==============================================================*/
create index A_DESERTE_FK on D_DESERTION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : DE_UNITE_DESERTION_FK                                */
/*==============================================================*/
create index DE_UNITE_DESERTION_FK on D_DESERTION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_DICISION_CIVIL                                     */
/*==============================================================*/
create table D_DICISION_CIVIL 
(
   ID_DECISION          NUMBER(12,0)         not null,
   ID_GRADE_PCA         VARCHAR2(3)          not null,
   ID_TYPE_DECISION     VARCHAR2(3)          not null,
   CODE_UNITE           VARCHAR2(7),
   D_P_EFFET            DATE,
   REF_DECISION         VARCHAR2(70),
   D_REF_DECISION       DATE,
   CONTENU_DESION       VARCHAR2(1024),
   CATEGORIE            INTEGER,
   DEGRE                INTEGER,
   N_INDICIEL           INTEGER,
   N_INDICIEL_BAS       INTEGER,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_DICISION_CIVIL primary key (ID_DECISION)
);

/*==============================================================*/
/* Index : AVOIR_GRADE_PCA_FK                                   */
/*==============================================================*/
create index AVOIR_GRADE_PCA_FK on D_DICISION_CIVIL (
   ID_GRADE_PCA ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_DECISION_FK                               */
/*==============================================================*/
create index AVOIR_TYPE_DECISION_FK on D_DICISION_CIVIL (
   ID_TYPE_DECISION ASC
);

/*==============================================================*/
/* Index : AU_PROFIT_DE_FK                                      */
/*==============================================================*/
create index AU_PROFIT_DE_FK on D_DICISION_CIVIL (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_DIPLOME_CANDIDAT                                   */
/*==============================================================*/
create table D_DIPLOME_CANDIDAT 
(
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_R_DIPLOME         CHAR(10)             not null,
   ID_SPECIALITE        VARCHAR2(6)          not null,
   ID_ETABLISSEMENT     VARCHAR2(5)          not null,
   DATE_OBTENSION       DATE,
   MOYENNE              INTEGER,
   constraint PK_D_DIPLOME_CANDIDAT primary key (ID_INSCRIPTION, ID_R_DIPLOME, ID_SPECIALITE, ID_ETABLISSEMENT)
);

/*==============================================================*/
/* Index : D_DIPLOME_CANDIDAT2_FK                               */
/*==============================================================*/
create index D_DIPLOME_CANDIDAT2_FK on D_DIPLOME_CANDIDAT (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : D_DIPLOME_CANDIDAT3_FK                               */
/*==============================================================*/
create index D_DIPLOME_CANDIDAT3_FK on D_DIPLOME_CANDIDAT (
   ID_R_DIPLOME ASC
);

/*==============================================================*/
/* Index : D_DIPLOME_CANDIDAT4_FK                               */
/*==============================================================*/
create index D_DIPLOME_CANDIDAT4_FK on D_DIPLOME_CANDIDAT (
   ID_SPECIALITE ASC
);

/*==============================================================*/
/* Index : D_DIPLOME_CANDIDAT_FK                                */
/*==============================================================*/
create index D_DIPLOME_CANDIDAT_FK on D_DIPLOME_CANDIDAT (
   ID_ETABLISSEMENT ASC
);

/*==============================================================*/
/* Table : D_DIVORCE                                            */
/*==============================================================*/
create table D_DIVORCE 
(
   ID_DIVORCE           NUMBER(12,0)         not null,
   ID_MARRIAGE_CONJOINT NUMBER(12,0)         not null,
   D_DIVORCE            DATE,
   N_ACT_DIVORCE        VARCHAR2(70),
   D_ACT_DIVORCE        DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_DIVORCE primary key (ID_DIVORCE)
);

/*==============================================================*/
/* Index : EST_DIVORCER_AVEC_FK                                 */
/*==============================================================*/
create index EST_DIVORCER_AVEC_FK on D_DIVORCE (
   ID_MARRIAGE_CONJOINT ASC
);

/*==============================================================*/
/* Table : D_DOSSIER                                            */
/*==============================================================*/
create table D_DOSSIER 
(
   ID_DOSSIER           CHAR(10)             not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_TYPE_DOSSIER      VARCHAR2(6)          not null,
   constraint PK_D_DOSSIER primary key (ID_DOSSIER)
);

/*==============================================================*/
/* Index : A_DOSSIER_FK                                         */
/*==============================================================*/
create index A_DOSSIER_FK on D_DOSSIER (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_ENGAGEMENT                                         */
/*==============================================================*/
create table D_ENGAGEMENT 
(
   ID_ENGAGEMENT        NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_NIVEAU_ETUDE      VARCHAR2(1)          not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   ID_ARME              VARCHAR2(3)          not null,
   ID_GRADE             VARCHAR2(2)          not null,
   ID_TYPE_ENGAGEMENT   VARCHAR2(12)         not null,
   ID_MODE_ENGAGEMENT   VARCHAR2(12),
   D_ENGAGEMENT         DATE,
   N_ACT_ENG            VARCHAR2(70),
   D_ACT_ENG            DATE,
   N_AVIS_ENG           VARCHAR2(70),
   D_AVIS_ENG           DATE,
   constraint PK_D_ENGAGEMENT primary key (ID_ENGAGEMENT)
);

/*==============================================================*/
/* Index : A_SIGNER_CONTART_ENGAGEMENT_FK                       */
/*==============================================================*/
create index A_SIGNER_CONTART_ENGAGEMENT_FK on D_ENGAGEMENT (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVEC_NIVEAU_FK                                       */
/*==============================================================*/
create index AVEC_NIVEAU_FK on D_ENGAGEMENT (
   ID_NIVEAU_ETUDE ASC
);

/*==============================================================*/
/* Index : DANS_UNITE_FK                                        */
/*==============================================================*/
create index DANS_UNITE_FK on D_ENGAGEMENT (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : POUR_ARME_FK                                         */
/*==============================================================*/
create index POUR_ARME_FK on D_ENGAGEMENT (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : AVEC_GRADE_FK                                        */
/*==============================================================*/
create index AVEC_GRADE_FK on D_ENGAGEMENT (
   ID_GRADE ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_ENGAGEMENT_FK                             */
/*==============================================================*/
create index AVOIR_TYPE_ENGAGEMENT_FK on D_ENGAGEMENT (
   ID_TYPE_ENGAGEMENT ASC
);

/*==============================================================*/
/* Index : AVOIR_MODE_ENGAGEMENT_FK                             */
/*==============================================================*/
create index AVOIR_MODE_ENGAGEMENT_FK on D_ENGAGEMENT (
   ID_MODE_ENGAGEMENT ASC
);

/*==============================================================*/
/* Table : D_EPREUVE                                            */
/*==============================================================*/
create table D_EPREUVE 
(
   ID_EPREUVE           CHAR(3)              not null,
   ID_TYPE_EXAMEN       CHAR(2)              not null,
   ID_CONCOURS          VARCHAR2(10)         not null,
   D_D_EPREUVE          DATE,
   D_F_EPREUVE          DATE,
   COEFICIENT           INTEGER,
   constraint PK_D_EPREUVE primary key (ID_EPREUVE)
);

/*==============================================================*/
/* Index : AVOIR_TYPE_EPREUVE_FK                                */
/*==============================================================*/
create index AVOIR_TYPE_EPREUVE_FK on D_EPREUVE (
   ID_TYPE_EXAMEN ASC
);

/*==============================================================*/
/* Index : CONTIENT_EPREUVE_FK                                  */
/*==============================================================*/
create index CONTIENT_EPREUVE_FK on D_EPREUVE (
   ID_CONCOURS ASC
);

/*==============================================================*/
/* Table : D_ETAPE_RECRUTEMENT                                  */
/*==============================================================*/
create table D_ETAPE_RECRUTEMENT 
(
   CODE_POSITION_CANDIDAT INTEGER              not null,
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   "DATE"               DATE                 not null,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_ETAPE_RECRUTEMENT primary key (CODE_POSITION_CANDIDAT, ID_INSCRIPTION, "DATE")
);

/*==============================================================*/
/* Index : D_ETAPE_RECRUTEMENT2_FK                              */
/*==============================================================*/
create index D_ETAPE_RECRUTEMENT2_FK on D_ETAPE_RECRUTEMENT (
   CODE_POSITION_CANDIDAT ASC
);

/*==============================================================*/
/* Index : D_ETAPE_RECRUTEMENT3_FK                              */
/*==============================================================*/
create index D_ETAPE_RECRUTEMENT3_FK on D_ETAPE_RECRUTEMENT (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : D_ETAPE_RECRUTEMENT_FK                               */
/*==============================================================*/
create index D_ETAPE_RECRUTEMENT_FK on D_ETAPE_RECRUTEMENT (
   "DATE" ASC
);

/*==============================================================*/
/* Table : D_FICHE_VOEUX                                        */
/*==============================================================*/
create table D_FICHE_VOEUX 
(
   ID_FICHE_VOEUX       NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ANNEE                INTEGER,
   OBS_CHEF_CTSN        VARCHAR2(1024),
   OBS_CHEF_CSN         VARCHAR2(1024),
   OBS_DRSN             VARCHAR2(1024),
   OBS_DSN              VARCHAR2(1024),
   constraint PK_D_FICHE_VOEUX primary key (ID_FICHE_VOEUX)
);

/*==============================================================*/
/* Index : A_FAIT_VOEUX_MUTATION_FK                             */
/*==============================================================*/
create index A_FAIT_VOEUX_MUTATION_FK on D_FICHE_VOEUX (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_FORMATION_DISPONIBLE                               */
/*==============================================================*/
create table D_FORMATION_DISPONIBLE 
(
   ID_FORMATION_DISPONIBLE VARCHAR2(12)         not null,
   CODE_UNITE           VARCHAR2(7),
   ID_SPECIALITE        VARCHAR2(6)          not null,
   ID_EXERCICE          VARCHAR2(4)          not null,
   CODE_FORMATION       VARCHAR2(3)          not null,
   ID_COURRIER          VARCHAR2(12),
   ID_TYPE_FORMATION    VARCHAR2(1)          not null,
   ID_SESSION           VARCHAR2(1),
   ID_ETABLISSEMENT     VARCHAR2(5),
   ID_NATURE_FORMATION  VARCHAR2(1)          not null,
   constraint PK_D_FORMATION_DISPONIBLE primary key (ID_FORMATION_DISPONIBLE)
);

/*==============================================================*/
/* Index : AVOIR_LIEU_DANS_UNITE_FK                             */
/*==============================================================*/
create index AVOIR_LIEU_DANS_UNITE_FK on D_FORMATION_DISPONIBLE (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : AVOIR_SPECIALITE_FK                                  */
/*==============================================================*/
create index AVOIR_SPECIALITE_FK on D_FORMATION_DISPONIBLE (
   ID_SPECIALITE ASC
);

/*==============================================================*/
/* Index : DANS_EXERCICE_FK                                     */
/*==============================================================*/
create index DANS_EXERCICE_FK on D_FORMATION_DISPONIBLE (
   ID_EXERCICE ASC
);

/*==============================================================*/
/* Index : CONTIENT_FK                                          */
/*==============================================================*/
create index CONTIENT_FK on D_FORMATION_DISPONIBLE (
   CODE_FORMATION ASC
);

/*==============================================================*/
/* Index : APPARTIEN_ENVOI_FK                                   */
/*==============================================================*/
create index APPARTIEN_ENVOI_FK on D_FORMATION_DISPONIBLE (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_FORMATION_FK                              */
/*==============================================================*/
create index AVOIR_TYPE_FORMATION_FK on D_FORMATION_DISPONIBLE (
   ID_TYPE_FORMATION ASC
);

/*==============================================================*/
/* Index : EN_DIFFERENTE_FK                                     */
/*==============================================================*/
create index EN_DIFFERENTE_FK on D_FORMATION_DISPONIBLE (
   ID_SESSION ASC
);

/*==============================================================*/
/* Index : AVOIR_LIEU_DANS_ETABLISS                             */
/*==============================================================*/
create index AVOIR_LIEU_DANS_ETABLISS on D_FORMATION_DISPONIBLE (
   ID_ETABLISSEMENT ASC
);

/*==============================================================*/
/* Index : AVOIR_NATURE_FORMATION_FK                            */
/*==============================================================*/
create index AVOIR_NATURE_FORMATION_FK on D_FORMATION_DISPONIBLE (
   ID_NATURE_FORMATION ASC
);

/*==============================================================*/
/* Table : D_FORMATION_THEME_FP                                 */
/*==============================================================*/
create table D_FORMATION_THEME_FP 
(
   ID_FORMATION_THEME_FP VARCHAR2(6)          default '000000' not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   DATE_PROPOSITION     DATE                 default '01/01/1900' not null,
   PROBLEMATIQUE        VARCHAR2(1024)       default '/',
   ACCORDER             VARCHAR2(1)          default 'N'
      constraint CKC_ACCORDER_D_FORMAT check (ACCORDER is null or (ACCORDER in ('O','N'))),
   MOT_CLE_RECHERCHE    VARCHAR2(1024)       default '/',
   SCANE_THEME          VARBINARY(64000),
   constraint PK_D_FORMATION_THEME_FP primary key (ID_FORMATION_THEME_FP)
);

/*==============================================================*/
/* Index : PROPOSE_PAR_FK                                       */
/*==============================================================*/
create index PROPOSE_PAR_FK on D_FORMATION_THEME_FP (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_GRILLE_EVALUATION                                  */
/*==============================================================*/
create table D_GRILLE_EVALUATION 
(
   ID_GRILLLE_EVALUATION CHAR(5)              not null,
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_CONCOURS          VARCHAR2(10)         not null,
   CODE_DECISION        CHAR(1)              not null,
   OBSERVATION          VARCHAR2(1024)       not null,
   NOTE                 INTEGER,
   constraint PK_D_GRILLE_EVALUATION primary key (ID_GRILLLE_EVALUATION)
);

/*==============================================================*/
/* Index : AVOIR_GRILLE_EVALUATION_FK                           */
/*==============================================================*/
create index AVOIR_GRILLE_EVALUATION_FK on D_GRILLE_EVALUATION (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : EVALUER_FK                                           */
/*==============================================================*/
create index EVALUER_FK on D_GRILLE_EVALUATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : EVALUE_DANS_CONCOUR_FK                               */
/*==============================================================*/
create index EVALUE_DANS_CONCOUR_FK on D_GRILLE_EVALUATION (
   ID_CONCOURS ASC
);

/*==============================================================*/
/* Index : AVOIR_DECISION_FK                                    */
/*==============================================================*/
create index AVOIR_DECISION_FK on D_GRILLE_EVALUATION (
   CODE_DECISION ASC
);

/*==============================================================*/
/* Table : D_HABILITATION                                       */
/*==============================================================*/
create table D_HABILITATION 
(
   ID_HABILITATION      NUMBER               not null,
   constraint PK_D_HABILITATION primary key (ID_HABILITATION)
);

/*==============================================================*/
/* Table : D_INCORPORATION                                      */
/*==============================================================*/
create table D_INCORPORATION 
(
   ID_INCORPORATION     NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_CTG               VARCHAR2(4)          not null,
   ID_NIVEAU_ETUDE      VARCHAR2(1)          not null,
   ID_GRADE             VARCHAR2(2)          not null,
   ID_ARME              VARCHAR2(3)          not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   D_INCORPORATION      DATE,
   AVIS_INCO            VARCHAR2(70),
   D_AVIS_INCO          DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_INCORPORATION primary key (ID_INCORPORATION)
);

/*==============================================================*/
/* Index : EST_INCORPORE_FK                                     */
/*==============================================================*/
create index EST_INCORPORE_FK on D_INCORPORATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : EST_INCORPORE_CTG_FK                                 */
/*==============================================================*/
create index EST_INCORPORE_CTG_FK on D_INCORPORATION (
   ID_CTG ASC
);

/*==============================================================*/
/* Index : EST_INCORPORE_AVEC_NIVEAU_FK                         */
/*==============================================================*/
create index EST_INCORPORE_AVEC_NIVEAU_FK on D_INCORPORATION (
   ID_NIVEAU_ETUDE ASC
);

/*==============================================================*/
/* Index : EST_INCORPORE_AVEC_GRADE_FK                          */
/*==============================================================*/
create index EST_INCORPORE_AVEC_GRADE_FK on D_INCORPORATION (
   ID_GRADE ASC
);

/*==============================================================*/
/* Index : EST_INCORPORE_POUR_ARME_FK                           */
/*==============================================================*/
create index EST_INCORPORE_POUR_ARME_FK on D_INCORPORATION (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : EST_INCORPORE_A_UNITE_FK                             */
/*==============================================================*/
create index EST_INCORPORE_A_UNITE_FK on D_INCORPORATION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_INDISPONIBLE                                       */
/*==============================================================*/
create table D_INDISPONIBLE 
(
   ID_INDISPONIBLE      NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   CODE_APC             VARCHAR2(6),
   ID_MOTIF_INDIPONIBILITE VARCHAR2(2)          not null,
   D_P_ID_PERSONNEL     VARCHAR2(10),
   D_D_ABS              DATE,
   NBR_JOURS            INTEGER,
   MOTIF                VARCHAR2(150),
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_INDISPONIBLE primary key (ID_INDISPONIBLE)
);

/*==============================================================*/
/* Index : EST_INDISPONIBLE_FK                                  */
/*==============================================================*/
create index EST_INDISPONIBLE_FK on D_INDISPONIBLE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_LIEU_DISTINATION_FK                            */
/*==============================================================*/
create index AVOIR_LIEU_DISTINATION_FK on D_INDISPONIBLE (
   CODE_APC ASC
);

/*==============================================================*/
/* Index : POUR_MOTIF_FK                                        */
/*==============================================================*/
create index POUR_MOTIF_FK on D_INDISPONIBLE (
   ID_MOTIF_INDIPONIBILITE ASC
);

/*==============================================================*/
/* Index : A_POUR_INTERIME_FK                                   */
/*==============================================================*/
create index A_POUR_INTERIME_FK on D_INDISPONIBLE (
   D_P_ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_INTERVENANT                                        */
/*==============================================================*/
create table D_INTERVENANT 
(
   ID_SOLLICITEUR       CHAR(10)             not null,
   NOM                  VARCHAR2(255)        not null,
   PNOM                 VARCHAR2(255)        not null,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_INTERVENANT primary key (ID_SOLLICITEUR)
);

/*==============================================================*/
/* Table : D_JUGEMENT                                           */
/*==============================================================*/
create table D_JUGEMENT 
(
   ID_JUGEMENT          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_CONDAMNATION_TYPE VARCHAR2(2)          not null,
   DATE_AUDIUANCE       DATE                 not null,
   REF_AUDIENCE         VARCHAR2(50),
   INCULPATION          VARCHAR2(100),
   DATE_INCULPATION     DATE,
   DATE_MONDAT_DEPOT    DATE,
   D_CONDAMNATION       DATE,
   CONDAMNATION_DETAILLE VARCHAR2(250),
   DUREE_CONDAMNATION   INTEGER,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_JUGEMENT primary key (ID_JUGEMENT)
);

/*==============================================================*/
/* Index : EST_JUGE_FK                                          */
/*==============================================================*/
create index EST_JUGE_FK on D_JUGEMENT (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_CONDAMNATION_FK                           */
/*==============================================================*/
create index AVOIR_TYPE_CONDAMNATION_FK on D_JUGEMENT (
   ID_CONDAMNATION_TYPE ASC
);

/*==============================================================*/
/* Table : D_MARRIAGE                                           */
/*==============================================================*/
create table D_MARRIAGE 
(
   ID_MARRIAGE          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   CODE_APC             VARCHAR2(6)          not null,
   ID_MARRIAGE_CONJOINT NUMBER(12,0)         not null,
   ID_ATTRIBUTEUR       VARCHAR2(1)          not null,
   REF_AUTORISATION     VARCHAR2(30),
   DATE_REF_AUTORISATION DATE,
   DATE_MARRIAGE        DATE,
   NUM_ACTE_MARRIAGE    INTEGER,
   DATE_ACTE_MARRIAGE   DATE,
   REF_RECONNAISSANCE   VARCHAR2(30),
   DATE_REF_RECONNAISSANCE DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_MARRIAGE primary key (ID_MARRIAGE)
);

/*==============================================================*/
/* Index : EST_MARIER_FK                                        */
/*==============================================================*/
create index EST_MARIER_FK on D_MARRIAGE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : A_LIEU_MARIAGE_FK                                    */
/*==============================================================*/
create index A_LIEU_MARIAGE_FK on D_MARRIAGE (
   CODE_APC ASC
);

/*==============================================================*/
/* Index : EST_MARIER_AVEC_FK                                   */
/*==============================================================*/
create index EST_MARIER_AVEC_FK on D_MARRIAGE (
   ID_MARRIAGE_CONJOINT ASC
);

/*==============================================================*/
/* Table : D_MARRIAGE_CONJOINT                                  */
/*==============================================================*/
create table D_MARRIAGE_CONJOINT 
(
   ID_MARRIAGE_CONJOINT NUMBER(12,0)         not null,
   ID_SEX               VARCHAR2(1)          not null,
   CODE_APC             VARCHAR2(6)          not null,
   NOMA                 VARCHAR2(50),
   PNOMA                VARCHAR2(50),
   NOM                  VARCHAR2(255),
   PNOM                 VARCHAR2(255),
   DN                   DATE,
   PPERE                VARCHAR2(255),
   NMERE                VARCHAR2(255),
   PMERE                VARCHAR2(255),
   constraint PK_D_MARRIAGE_CONJOINT primary key (ID_MARRIAGE_CONJOINT)
);

/*==============================================================*/
/* Index : CONJOIN_DE_SEX_FK                                    */
/*==============================================================*/
create index CONJOIN_DE_SEX_FK on D_MARRIAGE_CONJOINT (
   ID_SEX ASC
);

/*==============================================================*/
/* Index : CONJOIN_NE_A_FK                                      */
/*==============================================================*/
create index CONJOIN_NE_A_FK on D_MARRIAGE_CONJOINT (
   CODE_APC ASC
);

/*==============================================================*/
/* Table : D_MARRIAGE_ENFANTS                                   */
/*==============================================================*/
create table D_MARRIAGE_ENFANTS 
(
   ID_ENFANT            NUMBER(12,0)         not null,
   ID_MARRIAGE_CONJOINT NUMBER(12,0)         not null,
   ID_SEX               VARCHAR2(1)          not null,
   CODE_APC             VARCHAR2(6)          not null,
   ID_ETAT              VARCHAR2(1)          not null,
   NOM                  VARCHAR2(255),
   PNOM                 VARCHAR2(255),
   NOMA                 VARCHAR2(50),
   PNOMA                VARCHAR2(50),
   DN                   DATE,
   N_ACT_NAIS           VARCHAR2(50),
   constraint PK_D_MARRIAGE_ENFANTS primary key (ID_ENFANT)
);

/*==============================================================*/
/* Index : EST_PERE_DE_FK                                       */
/*==============================================================*/
create index EST_PERE_DE_FK on D_MARRIAGE_ENFANTS (
   ID_MARRIAGE_CONJOINT ASC
);

/*==============================================================*/
/* Index : ENFANT_DE_SEX_FK                                     */
/*==============================================================*/
create index ENFANT_DE_SEX_FK on D_MARRIAGE_ENFANTS (
   ID_SEX ASC
);

/*==============================================================*/
/* Index : ENFANT_NE_A_FK                                       */
/*==============================================================*/
create index ENFANT_NE_A_FK on D_MARRIAGE_ENFANTS (
   CODE_APC ASC
);

/*==============================================================*/
/* Table : D_MEMBRE_COMMISION                                   */
/*==============================================================*/
create table D_MEMBRE_COMMISION 
(
   ID_COMMISION_EVALUATION VARCHAR2(6)          not null,
   LIB_PROFIL_COMMISSION_AR VARCHAR2(70)         not null,
   ID_PROFIL_COMMISSION VARCHAR2(2)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   constraint PK_D_MEMBRE_COMMISION primary key (ID_COMMISION_EVALUATION, LIB_PROFIL_COMMISSION_AR, ID_PROFIL_COMMISSION, ID_PERSONNEL)
);

/*==============================================================*/
/* Index : D_MEMBRE_COMMISION2_FK                               */
/*==============================================================*/
create index D_MEMBRE_COMMISION2_FK on D_MEMBRE_COMMISION (
   ID_COMMISION_EVALUATION ASC
);

/*==============================================================*/
/* Index : D_MEMBRE_COMMISION3_FK                               */
/*==============================================================*/
create index D_MEMBRE_COMMISION3_FK on D_MEMBRE_COMMISION (
   LIB_PROFIL_COMMISSION_AR ASC,
   ID_PROFIL_COMMISSION ASC
);

/*==============================================================*/
/* Index : D_MEMBRE_COMMISION_FK                                */
/*==============================================================*/
create index D_MEMBRE_COMMISION_FK on D_MEMBRE_COMMISION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_MISE_ROUTE                                         */
/*==============================================================*/
create table D_MISE_ROUTE 
(
   REF_MR               VARCHAR2(70),
   D_REF_MR             DATE,
   D_EFFET_MR           DATE,
   REF_AVIS_MUTATION    VARCHAR2(70),
   D_REF_AVIS_MUTATION  DATE,
   FONCTION             VARCHAR2(150),
   CHAINE               CHAR(1),
   N_COMBAT_1           VARCHAR2(8),
   N_COMBAT_2           VARCHAR2(8),
   CONGE                CHAR(1),
   OBSERVATION          VARCHAR2(1024),
   ID_MISE_ROUTE        CHAR(12)             not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_TYPE_MR           VARCHAR2(4)          not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   R_U_CODE_UNITE       VARCHAR2(7)          not null,
   constraint PK_D_MISE_ROUTE primary key (ID_MISE_ROUTE)
);

/*==============================================================*/
/* Index : FAIT_OBJECT_MISE_ROUTE_FK                            */
/*==============================================================*/
create index FAIT_OBJECT_MISE_ROUTE_FK on D_MISE_ROUTE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_MISE_ROUTE_FK                             */
/*==============================================================*/
create index AVOIR_TYPE_MISE_ROUTE_FK on D_MISE_ROUTE (
   ID_TYPE_MR ASC
);

/*==============================================================*/
/* Index : MISE_ROUTE_DE_UNITE_FK                               */
/*==============================================================*/
create index MISE_ROUTE_DE_UNITE_FK on D_MISE_ROUTE (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : MISE_ROUTE_A_DISTINATION_FK                          */
/*==============================================================*/
create index MISE_ROUTE_A_DISTINATION_FK on D_MISE_ROUTE (
   R_U_CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_MISSION                                            */
/*==============================================================*/
create table D_MISSION 
(
   ID_MISSION           NUMBER(12,0)         not null,
   ID_MOYEN             VARCHAR2(2)          not null,
   ID_DEMANDE_MISSION   NUMBER(12,0),
   ID_VEHICULE          VARCHAR2(2),
   D_D_MISSION          DATE,
   D_F_MISSION          DATE,
   REF_OM               VARCHAR2(50),
   D_REF_OM             DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_MISSION primary key (ID_MISSION)
);

/*==============================================================*/
/* Index : AU_MOYEN_DE_FK                                       */
/*==============================================================*/
create index AU_MOYEN_DE_FK on D_MISSION (
   ID_MOYEN ASC
);

/*==============================================================*/
/* Index : D_MISSON_ACCORDE_FK                                  */
/*==============================================================*/
create index D_MISSON_ACCORDE_FK on D_MISSION (
   ID_DEMANDE_MISSION ASC
);

/*==============================================================*/
/* Index : A_VEHICULE_FK                                        */
/*==============================================================*/
create index A_VEHICULE_FK on D_MISSION (
   ID_VEHICULE ASC
);

/*==============================================================*/
/* Table : D_MISSION_TYPE_RECRUTEMENT                           */
/*==============================================================*/
create table D_MISSION_TYPE_RECRUTEMENT 
(
   ID_COMMISION_EVALUATION VARCHAR2(6)          not null,
   CODE_TYPE_RECRUTEMENT VARCHAR2(10)         not null,
   constraint PK_D_MISSION_TYPE_RECRUTEMENT primary key (ID_COMMISION_EVALUATION, CODE_TYPE_RECRUTEMENT)
);

/*==============================================================*/
/* Index : D_MISSION_TYPE_RECRUTEMENT2_FK                       */
/*==============================================================*/
create index D_MISSION_TYPE_RECRUTEMENT2_FK on D_MISSION_TYPE_RECRUTEMENT (
   ID_COMMISION_EVALUATION ASC
);

/*==============================================================*/
/* Index : D_MISSION_TYPE_RECRUTEMENT_FK                        */
/*==============================================================*/
create index D_MISSION_TYPE_RECRUTEMENT_FK on D_MISSION_TYPE_RECRUTEMENT (
   CODE_TYPE_RECRUTEMENT ASC
);

/*==============================================================*/
/* Table : D_MUTATION                                           */
/*==============================================================*/
create table D_MUTATION 
(
   ID_MUTATION          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   R_U_CODE_UNITE       VARCHAR2(7)          not null,
   ID_TYPE_MUTATION     VARCHAR2(2)          not null,
   D_MUTATION           DATE,
   REF_MUTATION         VARCHAR2(70),
   D_REF_MUTATION       DATE,
   FONCTION             VARCHAR2(150),
   constraint PK_D_MUTATION primary key (ID_MUTATION)
);

/*==============================================================*/
/* Index : EST_MUTER_FK                                         */
/*==============================================================*/
create index EST_MUTER_FK on D_MUTATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : DE_UNITE_FK                                          */
/*==============================================================*/
create index DE_UNITE_FK on D_MUTATION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : A_UNITE_FK                                           */
/*==============================================================*/
create index A_UNITE_FK on D_MUTATION (
   R_U_CODE_UNITE ASC
);

/*==============================================================*/
/* Index : TYPE_MUTATION_FK                                     */
/*==============================================================*/
create index TYPE_MUTATION_FK on D_MUTATION (
   ID_TYPE_MUTATION ASC
);

/*==============================================================*/
/* Table : D_NOMINATION                                         */
/*==============================================================*/
create table D_NOMINATION 
(
   ID_NOMINATION        NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_GRADE             VARCHAR2(2)          not null,
   D_NOMIN              DATE,
   REF_NOMIN            VARCHAR2(70),
   D_REF_NOMIN          DATE,
   constraint PK_D_NOMINATION primary key (ID_NOMINATION)
);

/*==============================================================*/
/* Index : EST_NOMINER_GRADE_FK                                 */
/*==============================================================*/
create index EST_NOMINER_GRADE_FK on D_NOMINATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : OBTIEN_GRADE_FK                                      */
/*==============================================================*/
create index OBTIEN_GRADE_FK on D_NOMINATION (
   ID_GRADE ASC
);

/*==============================================================*/
/* Table : D_NOTATION                                           */
/*==============================================================*/
create table D_NOTATION 
(
   ID_NOTATION          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   D_D_NOTAION          DATE,
   D_F_NOTATION         DATE,
   AUTRE_CAUSE          VARCHAR2(1024),
   APPR_CHEF            VARCHAR2(1024),
   CHEF                 VARCHAR2(150),
   FONCTION_CHEF        VARCHAR2(150),
   FONCTION             VARCHAR2(150),
   constraint PK_D_NOTATION primary key (ID_NOTATION)
);

/*==============================================================*/
/* Index : EST_NOTE_FK                                          */
/*==============================================================*/
create index EST_NOTE_FK on D_NOTATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : DANS_UNITE_NOTATION_FK                               */
/*==============================================================*/
create index DANS_UNITE_NOTATION_FK on D_NOTATION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_NOTE_EPREUVE                                       */
/*==============================================================*/
create table D_NOTE_EPREUVE 
(
   ID_EPREUVE           CHAR(3)              not null,
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   NOTE                 INTEGER              not null,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_NOTE_EPREUVE primary key (ID_EPREUVE, ID_INSCRIPTION, ID_PERSONNEL)
);

/*==============================================================*/
/* Index : D_NOTE_EPREUVE2_FK                                   */
/*==============================================================*/
create index D_NOTE_EPREUVE2_FK on D_NOTE_EPREUVE (
   ID_EPREUVE ASC
);

/*==============================================================*/
/* Index : D_NOTE_EPREUVE3_FK                                   */
/*==============================================================*/
create index D_NOTE_EPREUVE3_FK on D_NOTE_EPREUVE (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : D_NOTE_EPREUVE_FK                                    */
/*==============================================================*/
create index D_NOTE_EPREUVE_FK on D_NOTE_EPREUVE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PERMANENCE                                         */
/*==============================================================*/
create table D_PERMANENCE 
(
   ID_PERMANENCE        NUMBER(12,0)         not null,
   ID_TYPE_PERMANENCE   VARCHAR2(1)          not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   D_D_PERMANENCE       DATE,
   D_F_PERMANENCE       DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_PERMANENCE primary key (ID_PERMANENCE)
);

/*==============================================================*/
/* Index : PERMANENCE_DE_TYPE_FK                                */
/*==============================================================*/
create index PERMANENCE_DE_TYPE_FK on D_PERMANENCE (
   ID_TYPE_PERMANENCE ASC
);

/*==============================================================*/
/* Index : EST_PROGRAMME_A_UNITE_FK                             */
/*==============================================================*/
create index EST_PROGRAMME_A_UNITE_FK on D_PERMANENCE (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Table : D_PERSONELS_PERMANENCE                               */
/*==============================================================*/
create table D_PERSONELS_PERMANENCE 
(
   ID_PERMANENCE        NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_PROFILE_PERMANENCE VARCHAR2(2)          not null,
   CODE_POSTE_PERMANENCE VARCHAR2(6)          not null,
   constraint PK_D_PERSONELS_PERMANENCE primary key (ID_PERMANENCE, ID_PERSONNEL, ID_PROFILE_PERMANENCE, CODE_POSTE_PERMANENCE)
);

/*==============================================================*/
/* Index : D_PERSONELS_PERMANENCE2_FK                           */
/*==============================================================*/
create index D_PERSONELS_PERMANENCE2_FK on D_PERSONELS_PERMANENCE (
   ID_PERMANENCE ASC
);

/*==============================================================*/
/* Index : D_PERSONELS_PERMANENCE3_FK                           */
/*==============================================================*/
create index D_PERSONELS_PERMANENCE3_FK on D_PERSONELS_PERMANENCE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : D_PERSONELS_PERMANENCE4_FK                           */
/*==============================================================*/
create index D_PERSONELS_PERMANENCE4_FK on D_PERSONELS_PERMANENCE (
   ID_PROFILE_PERMANENCE ASC
);

/*==============================================================*/
/* Index : D_PERSONELS_PERMANENCE_FK                            */
/*==============================================================*/
create index D_PERSONELS_PERMANENCE_FK on D_PERSONELS_PERMANENCE (
   CODE_POSTE_PERMANENCE ASC
);

/*==============================================================*/
/* Table : D_PERSONEL_FONCTION                                  */
/*==============================================================*/
create table D_PERSONEL_FONCTION 
(
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_FONCTION          VARCHAR2(6)          not null,
   ID_STRUCTURE         VARCHAR2(10)         not null,
   DATE_DEBUT           DATE                 default '01/01/1900' not null,
   constraint PK_D_PERSONEL_FONCTION primary key (ID_PERSONNEL, ID_FONCTION, ID_STRUCTURE)
);

/*==============================================================*/
/* Index : D_PERSONEL_FONCTION2_FK                              */
/*==============================================================*/
create index D_PERSONEL_FONCTION2_FK on D_PERSONEL_FONCTION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : D_PERSONEL_FONCTION3_FK                              */
/*==============================================================*/
create index D_PERSONEL_FONCTION3_FK on D_PERSONEL_FONCTION (
   ID_FONCTION ASC
);

/*==============================================================*/
/* Index : D_PERSONEL_FONCTION_FK                               */
/*==============================================================*/
create index D_PERSONEL_FONCTION_FK on D_PERSONEL_FONCTION (
   ID_STRUCTURE ASC
);

/*==============================================================*/
/* Table : D_PERSONNELS                                         */
/*==============================================================*/
create table D_PERSONNELS 
(
   ID_PERSONNEL         VARCHAR2(10)         not null,
   CODE_APC             VARCHAR2(6)          not null,
   ID_SITUATION_FAMILIALE VARCHAR2(1)          not null,
   ID_POSITION          VARCHAR2(2)          not null,
   CODE_STRUCTURE_SN    VARCHAR2(4)          not null,
   ID_NIVEAU_ETUDE      VARCHAR2(1)          not null,
   ID_GROUPAGE          VARCHAR2(1)          not null,
   ID_ARME              VARCHAR2(3),
   ID_GRADE             VARCHAR2(2)          not null,
   ID_SEX               VARCHAR2(1)          not null,
   constraint PK_D_PERSONNELS primary key (ID_PERSONNEL)
);

/*==============================================================*/
/* Index : AVOIR_LIEU_LN_FK                                     */
/*==============================================================*/
create index AVOIR_LIEU_LN_FK on D_PERSONNELS (
   CODE_APC ASC
);

/*==============================================================*/
/* Index : AVOIR_SITUATION_FAMILIALE_FK                         */
/*==============================================================*/
create index AVOIR_SITUATION_FAMILIALE_FK on D_PERSONNELS (
   ID_SITUATION_FAMILIALE ASC
);

/*==============================================================*/
/* Index : PERSONNEL_AVOIR_POSITION_FK                          */
/*==============================================================*/
create index PERSONNEL_AVOIR_POSITION_FK on D_PERSONNELS (
   ID_POSITION ASC
);

/*==============================================================*/
/* Index : APPARTENT_AU_SSN_FK                                  */
/*==============================================================*/
create index APPARTENT_AU_SSN_FK on D_PERSONNELS (
   CODE_STRUCTURE_SN ASC
);

/*==============================================================*/
/* Index : AVOIR_NIVEAU_FK                                      */
/*==============================================================*/
create index AVOIR_NIVEAU_FK on D_PERSONNELS (
   ID_NIVEAU_ETUDE ASC
);

/*==============================================================*/
/* Index : AVOIR_GROUPAGE_FK                                    */
/*==============================================================*/
create index AVOIR_GROUPAGE_FK on D_PERSONNELS (
   ID_GROUPAGE ASC
);

/*==============================================================*/
/* Index : APPARTIEN_ARME_FK                                    */
/*==============================================================*/
create index APPARTIEN_ARME_FK on D_PERSONNELS (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : POSSEDE_GRADE_FK                                     */
/*==============================================================*/
create index POSSEDE_GRADE_FK on D_PERSONNELS (
   ID_GRADE ASC
);

/*==============================================================*/
/* Index : EST_DE_SEX_FK                                        */
/*==============================================================*/
create index EST_DE_SEX_FK on D_PERSONNELS (
   ID_SEX ASC
);

/*==============================================================*/
/* Table : D_PERSONNELS_ADRESSE                                 */
/*==============================================================*/
create table D_PERSONNELS_ADRESSE 
(
   ID_ADRESSE           NUMBER(12,0)         not null,
   ID_TYPE_ADRESSE      VARCHAR2(1)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ADRESSE_AR           VARCHAR2(150),
   VALIDE               CHAR(1),
   constraint PK_D_PERSONNELS_ADRESSE primary key (ID_ADRESSE)
);

/*==============================================================*/
/* Index : AVOIR_TYPE_FK                                        */
/*==============================================================*/
create index AVOIR_TYPE_FK on D_PERSONNELS_ADRESSE (
   ID_TYPE_ADRESSE ASC
);

/*==============================================================*/
/* Index : AVOIR_ADRESS_FK                                      */
/*==============================================================*/
create index AVOIR_ADRESS_FK on D_PERSONNELS_ADRESSE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PERSONNELS_DIPLOME                                 */
/*==============================================================*/
create table D_PERSONNELS_DIPLOME 
(
   ID_BESOIN_ACCORDE    VARCHAR2(12)         not null,
   ID_R_DIPLOME         CHAR(10)             not null,
   ID_SPECIALITE        VARCHAR2(6)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   constraint PK_D_PERSONNELS_DIPLOME primary key (ID_BESOIN_ACCORDE, ID_R_DIPLOME, ID_SPECIALITE, ID_PERSONNEL)
);

/*==============================================================*/
/* Index : D_PERSONNELS_DIPLOME2_FK                             */
/*==============================================================*/
create index D_PERSONNELS_DIPLOME2_FK on D_PERSONNELS_DIPLOME (
   ID_BESOIN_ACCORDE ASC
);

/*==============================================================*/
/* Index : D_PERSONNELS_DIPLOME3_FK                             */
/*==============================================================*/
create index D_PERSONNELS_DIPLOME3_FK on D_PERSONNELS_DIPLOME (
   ID_R_DIPLOME ASC
);

/*==============================================================*/
/* Index : D_PERSONNELS_DIPLOME4_FK                             */
/*==============================================================*/
create index D_PERSONNELS_DIPLOME4_FK on D_PERSONNELS_DIPLOME (
   ID_SPECIALITE ASC
);

/*==============================================================*/
/* Index : D_PERSONNELS_DIPLOME_FK                              */
/*==============================================================*/
create index D_PERSONNELS_DIPLOME_FK on D_PERSONNELS_DIPLOME (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PERSONNELS_MISSIONS                                */
/*==============================================================*/
create table D_PERSONNELS_MISSIONS 
(
   ID_MISSION           NUMBER(12,0)         not null,
   ID_PROFILE           VARCHAR2(1)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   constraint PK_D_PERSONNELS_MISSIONS primary key (ID_MISSION, ID_PROFILE, ID_PERSONNEL)
);

/*==============================================================*/
/* Index : D_PERSONNELS_MISSIONS2_FK                            */
/*==============================================================*/
create index D_PERSONNELS_MISSIONS2_FK on D_PERSONNELS_MISSIONS (
   ID_MISSION ASC
);

/*==============================================================*/
/* Index : D_PERSONNELS_MISSIONS3_FK                            */
/*==============================================================*/
create index D_PERSONNELS_MISSIONS3_FK on D_PERSONNELS_MISSIONS (
   ID_PROFILE ASC
);

/*==============================================================*/
/* Index : D_PERSONNELS_MISSIONS_FK                             */
/*==============================================================*/
create index D_PERSONNELS_MISSIONS_FK on D_PERSONNELS_MISSIONS (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PERSONNELS_PHOTOS                                  */
/*==============================================================*/
create table D_PERSONNELS_PHOTOS 
(
   ID_CONTACT_URG3      NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   D_AJOUT              DATE,
   PHOTO                RAW(5000),
   constraint PK_D_PERSONNELS_PHOTOS primary key (ID_CONTACT_URG3)
);

/*==============================================================*/
/* Index : AVOIR_PHOTO_FK                                       */
/*==============================================================*/
create index AVOIR_PHOTO_FK on D_PERSONNELS_PHOTOS (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PERSONNELS_PIECES                                  */
/*==============================================================*/
create table D_PERSONNELS_PIECES 
(
   N_PIECE_PIECE        VARCHAR2(12)         not null,
   DATE_ETAB_PIECE      DATE                 not null,
   DATE_EXP_PIECE       DATE,
   ID_PERSONNELS_PIECES CHAR(10)             not null,
   ID_TYPE_PIECE        VARCHAR2(2)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   constraint PK_D_PERSONNELS_PIECES primary key (ID_PERSONNELS_PIECES)
);

/*==============================================================*/
/* Index : AVOIR_TYPE_PIECE_FK                                  */
/*==============================================================*/
create index AVOIR_TYPE_PIECE_FK on D_PERSONNELS_PIECES (
   ID_TYPE_PIECE ASC
);

/*==============================================================*/
/* Index : PERSONEL_PIECE_FK                                    */
/*==============================================================*/
create index PERSONEL_PIECE_FK on D_PERSONNELS_PIECES (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PERSONNEL_CONCOURS                                 */
/*==============================================================*/
create table D_PERSONNEL_CONCOURS 
(
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_CONCOURS          VARCHAR2(10)         not null,
   ID_RESULTAT_CONCOURS VARCHAR2(2)          not null,
   MOYENNE              INTEGER,
   constraint PK_D_PERSONNEL_CONCOURS primary key (ID_PERSONNEL, ID_CONCOURS, ID_RESULTAT_CONCOURS)
);

/*==============================================================*/
/* Index : D_PERSONNEL_CONCOURS2_FK                             */
/*==============================================================*/
create index D_PERSONNEL_CONCOURS2_FK on D_PERSONNEL_CONCOURS (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : D_PERSONNEL_CONCOURS3_FK                             */
/*==============================================================*/
create index D_PERSONNEL_CONCOURS3_FK on D_PERSONNEL_CONCOURS (
   ID_CONCOURS ASC
);

/*==============================================================*/
/* Index : D_PERSONNEL_CONCOURS_FK                              */
/*==============================================================*/
create index D_PERSONNEL_CONCOURS_FK on D_PERSONNEL_CONCOURS (
   ID_RESULTAT_CONCOURS ASC
);

/*==============================================================*/
/* Table : D_PERSONNEL_COURRIER                                 */
/*==============================================================*/
create table D_PERSONNEL_COURRIER 
(
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_COURRIER          VARCHAR2(12)         not null,
   constraint PK_D_PERSONNEL_COURRIER primary key (ID_PERSONNEL, ID_COURRIER)
);

/*==============================================================*/
/* Index : D_PERSONNEL_COURRIER2_FK                             */
/*==============================================================*/
create index D_PERSONNEL_COURRIER2_FK on D_PERSONNEL_COURRIER (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : D_PERSONNEL_COURRIER_FK                              */
/*==============================================================*/
create index D_PERSONNEL_COURRIER_FK on D_PERSONNEL_COURRIER (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Table : D_POSTE_ACCORDE                                      */
/*==============================================================*/
create table D_POSTE_ACCORDE 
(
   ID_POSTE_ACCORDE     CHAR(10)             not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   ID_SPECIALITE        VARCHAR2(6)          not null,
   ID_ARME              VARCHAR2(3)          not null,
   ID_COURRIER          VARCHAR2(12)         not null,
   NBR_PLACE_ACCORDE    INTEGER              not null,
   constraint PK_D_POSTE_ACCORDE primary key (ID_POSTE_ACCORDE)
);

/*==============================================================*/
/* Index : ACCORDER_DAND_UNE_UNITE_FK                           */
/*==============================================================*/
create index ACCORDER_DAND_UNE_UNITE_FK on D_POSTE_ACCORDE (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : ACCORDE_SPECIALITE_FK                                */
/*==============================================================*/
create index ACCORDE_SPECIALITE_FK on D_POSTE_ACCORDE (
   ID_SPECIALITE ASC
);

/*==============================================================*/
/* Index : ACCORDE_ARME_FK                                      */
/*==============================================================*/
create index ACCORDE_ARME_FK on D_POSTE_ACCORDE (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : ACORDE_SELON_MSG_FK                                  */
/*==============================================================*/
create index ACORDE_SELON_MSG_FK on D_POSTE_ACCORDE (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Table : D_PRESENCE                                           */
/*==============================================================*/
create table D_PRESENCE 
(
   ID_PRESENCE          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   HEURE                DATE,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_PRESENCE primary key (ID_PRESENCE)
);

/*==============================================================*/
/* Index : EST_PRESENT_FK                                       */
/*==============================================================*/
create index EST_PRESENT_FK on D_PRESENCE (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_PRISE_CONTACTE                                     */
/*==============================================================*/
create table D_PRISE_CONTACTE 
(
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_RESULTAT_PRISE_CONTACT CHAR(10)             not null,
   "DATE"               DATE                 not null,
   ID_MOTIF_PRISE_CONTACT CHAR(2)              not null,
   ID_CONTACT           NUMBER(12,0)         not null,
   DAT_DATE             DATE                 not null,
   MOTIF_APPEL_DETAILLE CHAR(256),
   EVALUATION           INTEGER,
   constraint PK_D_PRISE_CONTACTE primary key (ID_INSCRIPTION, ID_RESULTAT_PRISE_CONTACT, "DATE", ID_MOTIF_PRISE_CONTACT, ID_CONTACT, DAT_DATE)
);

/*==============================================================*/
/* Index : D_PRISE_CONTACTE2_FK                                 */
/*==============================================================*/
create index D_PRISE_CONTACTE2_FK on D_PRISE_CONTACTE (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : D_PRISE_CONTACTE3_FK                                 */
/*==============================================================*/
create index D_PRISE_CONTACTE3_FK on D_PRISE_CONTACTE (
   ID_RESULTAT_PRISE_CONTACT ASC
);

/*==============================================================*/
/* Index : D_PRISE_CONTACTE4_FK                                 */
/*==============================================================*/
create index D_PRISE_CONTACTE4_FK on D_PRISE_CONTACTE (
   "DATE" ASC
);

/*==============================================================*/
/* Index : D_PRISE_CONTACTE5_FK                                 */
/*==============================================================*/
create index D_PRISE_CONTACTE5_FK on D_PRISE_CONTACTE (
   ID_MOTIF_PRISE_CONTACT ASC
);

/*==============================================================*/
/* Index : D_PRISE_CONTACTE6_FK                                 */
/*==============================================================*/
create index D_PRISE_CONTACTE6_FK on D_PRISE_CONTACTE (
   ID_CONTACT ASC
);

/*==============================================================*/
/* Index : D_PRISE_CONTACTE_FK                                  */
/*==============================================================*/
create index D_PRISE_CONTACTE_FK on D_PRISE_CONTACTE (
   DAT_DATE ASC
);

/*==============================================================*/
/* Table : D_PRIX_FORMATION                                     */
/*==============================================================*/
create table D_PRIX_FORMATION 
(
   CODE_FORMATION       VARCHAR2(3)          not null,
   ID_ETABLISSEMENT     VARCHAR2(5)          not null,
   ID_OPTION_FORMATION  VARCHAR2(3)          not null,
   ID_EXERCICE          VARCHAR2(4)          not null,
   PRIX                 NUMBER(12,2),
   constraint PK_D_PRIX_FORMATION primary key (CODE_FORMATION, ID_ETABLISSEMENT, ID_OPTION_FORMATION, ID_EXERCICE)
);

/*==============================================================*/
/* Index : D_PRIX_FORMATION2_FK                                 */
/*==============================================================*/
create index D_PRIX_FORMATION2_FK on D_PRIX_FORMATION (
   CODE_FORMATION ASC
);

/*==============================================================*/
/* Index : D_PRIX_FORMATION3_FK                                 */
/*==============================================================*/
create index D_PRIX_FORMATION3_FK on D_PRIX_FORMATION (
   ID_ETABLISSEMENT ASC
);

/*==============================================================*/
/* Index : D_PRIX_FORMATION4_FK                                 */
/*==============================================================*/
create index D_PRIX_FORMATION4_FK on D_PRIX_FORMATION (
   ID_OPTION_FORMATION ASC
);

/*==============================================================*/
/* Index : D_PRIX_FORMATION_FK                                  */
/*==============================================================*/
create index D_PRIX_FORMATION_FK on D_PRIX_FORMATION (
   ID_EXERCICE ASC
);

/*==============================================================*/
/* Table : D_PROCHE_URG                                         */
/*==============================================================*/
create table D_PROCHE_URG 
(
   ID_LIEN_CONTACT      VARCHAR2(6)          not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   NOM                  VARCHAR2(255)        not null,
   PRNOM                CHAR(256)            not null,
   constraint PK_D_PROCHE_URG primary key (ID_LIEN_CONTACT)
);

/*==============================================================*/
/* Index : AVOIR_PROCHE_URG_FK                                  */
/*==============================================================*/
create index AVOIR_PROCHE_URG_FK on D_PROCHE_URG (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Table : D_RADIATION                                          */
/*==============================================================*/
create table D_RADIATION 
(
   ID_RADIATION         NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_ARME              VARCHAR2(3)          not null,
   ID_GRADE             VARCHAR2(2)          not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   ID_MOTIF_RADIATION   VARCHAR2(2)          not null,
   D_RADIATION          DATE,
   REF_RADIATION        VARCHAR2(70),
   D_REF_RADIATION      DATE,
   MOTIF_RAD_DETAILLE   VARCHAR2(1024),
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_RADIATION primary key (ID_RADIATION)
);

/*==============================================================*/
/* Index : EST_RADIER_FK                                        */
/*==============================================================*/
create index EST_RADIER_FK on D_RADIATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : EST_RADIER_AVEC_ARME_FK                              */
/*==============================================================*/
create index EST_RADIER_AVEC_ARME_FK on D_RADIATION (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : EST_RADIER_AVEC_GRADE_FK                             */
/*==============================================================*/
create index EST_RADIER_AVEC_GRADE_FK on D_RADIATION (
   ID_GRADE ASC
);

/*==============================================================*/
/* Index : EST_RADIER_DEPUIS_UNITE_FK                           */
/*==============================================================*/
create index EST_RADIER_DEPUIS_UNITE_FK on D_RADIATION (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : EST_RADIER_AVEC_MOTIF_FK                             */
/*==============================================================*/
create index EST_RADIER_AVEC_MOTIF_FK on D_RADIATION (
   ID_MOTIF_RADIATION ASC
);

/*==============================================================*/
/* Table : D_RESULTAT_CONCOUR                                   */
/*==============================================================*/
create table D_RESULTAT_CONCOUR 
(
   ID_CONCOURS          VARCHAR2(10)         not null,
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_RESULTAT_CONCOURS VARCHAR2(2)          not null,
   MOYENNE_GENERALE     NUMBER(2,2),
   constraint PK_D_RESULTAT_CONCOUR primary key (ID_CONCOURS, ID_INSCRIPTION, ID_RESULTAT_CONCOURS)
);

/*==============================================================*/
/* Index : D_RESULTAT_CONCOUR2_FK                               */
/*==============================================================*/
create index D_RESULTAT_CONCOUR2_FK on D_RESULTAT_CONCOUR (
   ID_CONCOURS ASC
);

/*==============================================================*/
/* Index : D_RESULTAT_CONCOUR3_FK                               */
/*==============================================================*/
create index D_RESULTAT_CONCOUR3_FK on D_RESULTAT_CONCOUR (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : D_RESULTAT_CONCOUR_FK                                */
/*==============================================================*/
create index D_RESULTAT_CONCOUR_FK on D_RESULTAT_CONCOUR (
   ID_RESULTAT_CONCOURS ASC
);

/*==============================================================*/
/* Table : D_SANCTION                                           */
/*==============================================================*/
create table D_SANCTION 
(
   ID_SANCTION          NUMBER(12,0)         not null,
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_ARRESTATION       NUMBER(12,0),
   D_SANCTION           DATE,
   REF_SANCTION         VARCHAR2(70),
   D_REF_SANCTION       DATE,
   MOTIF_SANCTION       VARCHAR2(1024),
   CINDITIONS           VARCHAR2(1024),
   ATTRIBUTEUR          VARCHAR2(150),
   OBSERVATION          VARCHAR2(1024),
   constraint PK_D_SANCTION primary key (ID_SANCTION)
);

/*==============================================================*/
/* Index : EST_SANCTIONNER_FK                                   */
/*==============================================================*/
create index EST_SANCTIONNER_FK on D_SANCTION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : D_SANCTION_ARRESTATION_FK                            */
/*==============================================================*/
create index D_SANCTION_ARRESTATION_FK on D_SANCTION (
   ID_ARRESTATION ASC
);

/*==============================================================*/
/* Table : D_SOLLICITEUR                                        */
/*==============================================================*/
create table D_SOLLICITEUR 
(
   ID_INSCRIPTION       VARCHAR2(12)         not null,
   ID_SOLLICITEUR       CHAR(10)             not null,
   constraint PK_D_SOLLICITEUR primary key (ID_INSCRIPTION, ID_SOLLICITEUR)
);

/*==============================================================*/
/* Index : D_SOLLICITEUR2_FK                                    */
/*==============================================================*/
create index D_SOLLICITEUR2_FK on D_SOLLICITEUR (
   ID_INSCRIPTION ASC
);

/*==============================================================*/
/* Index : D_SOLLICITEUR_FK                                     */
/*==============================================================*/
create index D_SOLLICITEUR_FK on D_SOLLICITEUR (
   ID_SOLLICITEUR ASC
);

/*==============================================================*/
/* Table : D_SOUS_DOSSIER_DOCUMENTS                             */
/*==============================================================*/
create table D_SOUS_DOSSIER_DOCUMENTS 
(
   ID_DOCUMENTS         VARCHAR2(6)          not null,
   ID_DOSSIER           CHAR(10)             not null,
   ID_SOUS_DOSSIER      VARCHAR2(4)          not null,
   DOCUMENT             RAW(64000),
   constraint PK_D_SOUS_DOSSIER_DOCUMENTS primary key (ID_DOCUMENTS, ID_DOSSIER, ID_SOUS_DOSSIER)
);

/*==============================================================*/
/* Index : D_SOUS_DOSSIER_DOCUMENTS3_FK                         */
/*==============================================================*/
create index D_SOUS_DOSSIER_DOCUMENTS3_FK on D_SOUS_DOSSIER_DOCUMENTS (
   ID_DOSSIER ASC
);

/*==============================================================*/
/* Table : D_SUIVI_FORMATION                                    */
/*==============================================================*/
create table D_SUIVI_FORMATION 
(
   ID_PERSONNEL         VARCHAR2(10)         not null,
   ID_BESOIN_ACCORDE    VARCHAR2(12)         not null,
   ID_FORMATION_THEME_FP VARCHAR2(6)          default '000000' not null,
   ID_ETAPE_FORMATION   VARCHAR2(2)          not null,
   OBSERVATION          VARCHAR2(1024),
   D_ETAPE_FORMATION    DATE,
   constraint PK_D_SUIVI_FORMATION primary key (ID_PERSONNEL, ID_BESOIN_ACCORDE, ID_FORMATION_THEME_FP, ID_ETAPE_FORMATION)
);

/*==============================================================*/
/* Index : D_SUIVI_FORMATION2_FK                                */
/*==============================================================*/
create index D_SUIVI_FORMATION2_FK on D_SUIVI_FORMATION (
   ID_PERSONNEL ASC
);

/*==============================================================*/
/* Index : D_SUIVI_FORMATION3_FK                                */
/*==============================================================*/
create index D_SUIVI_FORMATION3_FK on D_SUIVI_FORMATION (
   ID_BESOIN_ACCORDE ASC
);

/*==============================================================*/
/* Index : D_SUIVI_FORMATION4_FK                                */
/*==============================================================*/
create index D_SUIVI_FORMATION4_FK on D_SUIVI_FORMATION (
   ID_FORMATION_THEME_FP ASC
);

/*==============================================================*/
/* Index : D_SUIVI_FORMATION_FK                                 */
/*==============================================================*/
create index D_SUIVI_FORMATION_FK on D_SUIVI_FORMATION (
   ID_ETAPE_FORMATION ASC
);

/*==============================================================*/
/* Table : D_SUJET_EPREUVE                                      */
/*==============================================================*/
create table D_SUJET_EPREUVE 
(
   ID_EPREUVE           CHAR(3)              not null,
   ID_SUJET_EXAMEN      VARCHAR2(12)         not null,
   constraint PK_D_SUJET_EPREUVE primary key (ID_EPREUVE, ID_SUJET_EXAMEN)
);

/*==============================================================*/
/* Index : D_SUJET_EPREUVE2_FK                                  */
/*==============================================================*/
create index D_SUJET_EPREUVE2_FK on D_SUJET_EPREUVE (
   ID_EPREUVE ASC
);

/*==============================================================*/
/* Index : D_SUJET_EPREUVE_FK                                   */
/*==============================================================*/
create index D_SUJET_EPREUVE_FK on D_SUJET_EPREUVE (
   ID_SUJET_EXAMEN ASC
);

/*==============================================================*/
/* Table : D_SUJET_EXAMEN                                       */
/*==============================================================*/
create table D_SUJET_EXAMEN 
(
   ID_SUJET_EXAMEN      VARCHAR2(12)         not null,
   ID_MATIERE           VARCHAR2(4)          not null,
   SCAN_SUJET           VARBINARY(64000),
   constraint PK_D_SUJET_EXAMEN primary key (ID_SUJET_EXAMEN)
);

/*==============================================================*/
/* Index : D_SUJET_MATIERE_FK                                   */
/*==============================================================*/
create index D_SUJET_MATIERE_FK on D_SUJET_EXAMEN (
   ID_MATIERE ASC
);

/*==============================================================*/
/* Table : EST_DESTINE                                          */
/*==============================================================*/
create table EST_DESTINE 
(
   CODE_UNITE           VARCHAR2(7)          not null,
   ID_COURRIER          VARCHAR2(12)         not null,
   ID_TYPE_DEST_COURRIER CHAR(2)              not null,
   constraint PK_EST_DESTINE primary key (CODE_UNITE, ID_COURRIER, ID_TYPE_DEST_COURRIER)
);

/*==============================================================*/
/* Index : EST_DESTINE2_FK                                      */
/*==============================================================*/
create index EST_DESTINE2_FK on EST_DESTINE (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : EST_DESTINE3_FK                                      */
/*==============================================================*/
create index EST_DESTINE3_FK on EST_DESTINE (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Index : EST_DESTINE_FK                                       */
/*==============================================================*/
create index EST_DESTINE_FK on EST_DESTINE (
   ID_TYPE_DEST_COURRIER ASC
);

/*==============================================================*/
/* Table : EVALUER_CRITERE                                      */
/*==============================================================*/
create table EVALUER_CRITERE 
(
   ID_GRILLLE_EVALUATION CHAR(5)              not null,
   ID_EVALUATION        CHAR(2)              not null,
   ID_SOUS_CRITERE_EVALUATION CHAR(2)              not null,
   constraint PK_EVALUER_CRITERE primary key (ID_GRILLLE_EVALUATION, ID_EVALUATION, ID_SOUS_CRITERE_EVALUATION)
);

/*==============================================================*/
/* Index : EVALUER_CRITERE2_FK                                  */
/*==============================================================*/
create index EVALUER_CRITERE2_FK on EVALUER_CRITERE (
   ID_GRILLLE_EVALUATION ASC
);

/*==============================================================*/
/* Index : EVALUER_CRITERE3_FK                                  */
/*==============================================================*/
create index EVALUER_CRITERE3_FK on EVALUER_CRITERE (
   ID_EVALUATION ASC
);

/*==============================================================*/
/* Index : EVALUER_CRITERE_FK                                   */
/*==============================================================*/
create index EVALUER_CRITERE_FK on EVALUER_CRITERE (
   ID_SOUS_CRITERE_EVALUATION ASC
);

/*==============================================================*/
/* Table : EXPRIME_BESOIN                                       */
/*==============================================================*/
create table EXPRIME_BESOIN 
(
   ID_COURRIER          VARCHAR2(12)         not null,
   ID_TYPE_BESOIN       VARCHAR2(2)          not null,
   ID_FORMATION_DISPONIBLE VARCHAR2(12)         not null,
   NBR                  INTEGER,
   constraint PK_EXPRIME_BESOIN primary key (ID_COURRIER, ID_TYPE_BESOIN, ID_FORMATION_DISPONIBLE)
);

/*==============================================================*/
/* Index : EXPRIME_BESOIN2_FK                                   */
/*==============================================================*/
create index EXPRIME_BESOIN2_FK on EXPRIME_BESOIN (
   ID_COURRIER ASC
);

/*==============================================================*/
/* Index : EXPRIME_BESOIN3_FK                                   */
/*==============================================================*/
create index EXPRIME_BESOIN3_FK on EXPRIME_BESOIN (
   ID_TYPE_BESOIN ASC
);

/*==============================================================*/
/* Index : EXPRIME_BESOIN_FK                                    */
/*==============================================================*/
create index EXPRIME_BESOIN_FK on EXPRIME_BESOIN (
   ID_FORMATION_DISPONIBLE ASC
);

/*==============================================================*/
/* Table : PHOTO_GRADE                                          */
/*==============================================================*/
create table PHOTO_GRADE 
(
   ID_CONTACT_URG3      NUMBER(12,0)         not null,
   ID_GRADE             VARCHAR2(2)          not null,
   constraint PK_PHOTO_GRADE primary key (ID_CONTACT_URG3, ID_GRADE)
);

/*==============================================================*/
/* Index : PHOTO_GRADE2_FK                                      */
/*==============================================================*/
create index PHOTO_GRADE2_FK on PHOTO_GRADE (
   ID_CONTACT_URG3 ASC
);

/*==============================================================*/
/* Index : PHOTO_GRADE_FK                                       */
/*==============================================================*/
create index PHOTO_GRADE_FK on PHOTO_GRADE (
   ID_GRADE ASC
);

/*==============================================================*/
/* Table : R_ADRESSE_TYPE                                       */
/*==============================================================*/
create table R_ADRESSE_TYPE 
(
   ID_TYPE_ADRESSE      VARCHAR2(1)          not null,
   LIB_TYPE_ADRESSE_AR  VARCHAR2(50),
   LIB_TYPE_ADRESSE_FR  VARCHAR2(50),
   constraint PK_R_ADRESSE_TYPE primary key (ID_TYPE_ADRESSE)
);

/*==============================================================*/
/* Table : R_APTITUDE_MEDICALE                                  */
/*==============================================================*/
create table R_APTITUDE_MEDICALE 
(
   ID_APTITUDE_MEDICALE CHAR(2)              not null,
   LIB_APTITUDE_MEDICALE_AR CHAR(256)            not null,
   LIB_APTITUDE_MEDICALE_FR CHAR(256)            not null,
   constraint PK_R_APTITUDE_MEDICALE primary key (ID_APTITUDE_MEDICALE)
);

/*==============================================================*/
/* Table : R_ARME                                               */
/*==============================================================*/
create table R_ARME 
(
   ID_ARME              VARCHAR2(3)          not null,
   ID_COMMANDEMENT      VARCHAR2(3)          not null,
   LIB_ARME_AR          VARCHAR2(256)        not null,
   LIB_ARME_FR          VARCHAR2(256)        not null,
   constraint PK_R_ARME primary key (ID_ARME)
);

/*==============================================================*/
/* Index : APPARTIENT_CDT_FK                                    */
/*==============================================================*/
create index APPARTIENT_CDT_FK on R_ARME (
   ID_COMMANDEMENT ASC
);

/*==============================================================*/
/* Table : R_ARMEMENT                                           */
/*==============================================================*/
create table R_ARMEMENT 
(
   ID_ARMEMENT          VARCHAR2(3)          not null,
   LIB_ARMEMENT_AR      VARCHAR2(256),
   LIB_ARMEMENT_FR      VARCHAR2(256),
   ABRE_AR              VARCHAR2(256),
   ABRE_FR              VARCHAR2(256),
   constraint PK_R_ARMEMENT primary key (ID_ARMEMENT)
);

/*==============================================================*/
/* Table : R_CATEGORIE_TED                                      */
/*==============================================================*/
create table R_CATEGORIE_TED 
(
   ID_CATEGORIE_TED     VARCHAR2(2)          not null,
   LIB_CATEGORIE_AR     VARCHAR2(256)        not null,
   LIB_CATEGORIE_FR     VARCHAR2(256)        not null,
   constraint PK_R_CATEGORIE_TED primary key (ID_CATEGORIE_TED)
);

/*==============================================================*/
/* Table : R_CAT_GRADE                                          */
/*==============================================================*/
create table R_CAT_GRADE 
(
   ID_CAT_GRADE         VARCHAR2(2)          not null,
   LIB_CAT_GRADE_AR     VARCHAR2(256),
   LIB_CAT_GRADE_FR     VARCHAR2(256),
   constraint PK_R_CAT_GRADE primary key (ID_CAT_GRADE)
);

/*==============================================================*/
/* Table : R_CLASSIFICATION                                     */
/*==============================================================*/
create table R_CLASSIFICATION 
(
   ID_CLASSIFFICATION   CHAR(10)             not null,
   LIB_CLASSIFICATION_AR CHAR(256)            not null,
   LIB_CLASSIFICATION_FR CHAR(256)            not null,
   constraint PK_R_CLASSIFICATION primary key (ID_CLASSIFFICATION)
);

/*==============================================================*/
/* Table : R_CODE_GEO                                           */
/*==============================================================*/
create table R_CODE_GEO 
(
   CODE_APC             VARCHAR2(6)          not null,
   LIB_APC_AR           VARCHAR2(150),
   LIB_APC_FR           VARCHAR2(150),
   constraint PK_R_CODE_GEO primary key (CODE_APC)
);

/*==============================================================*/
/* Table : R_COMMANDEMENT                                       */
/*==============================================================*/
create table R_COMMANDEMENT 
(
   ID_COMMANDEMENT      VARCHAR2(3)          not null,
   LIB_COMMANDEMENT_AR  VARCHAR2(250)        not null,
   LIB_COMMANDEMENT_FR  VARCHAR2(250)        not null,
   constraint PK_R_COMMANDEMENT primary key (ID_COMMANDEMENT)
);

/*==============================================================*/
/* Table : R_CONDAMNATION_TYPE                                  */
/*==============================================================*/
create table R_CONDAMNATION_TYPE 
(
   ID_CONDAMNATION_TYPE VARCHAR2(2)          not null,
   LIB_CONDAMNATION_TYPE_AR VARCHAR2(30),
   LIB_CONDAMNATION_TYPE_FR VARCHAR2(30),
   constraint PK_R_CONDAMNATION_TYPE primary key (ID_CONDAMNATION_TYPE)
);

/*==============================================================*/
/* Table : R_CRITERE_EVALUATION                                 */
/*==============================================================*/
create table R_CRITERE_EVALUATION 
(
   ID_CRITERE_EVALUATION CHAR(2)              not null,
   LIB_CRITERE_EVALUATION CHAR(256)            not null,
   constraint PK_R_CRITERE_EVALUATION primary key (ID_CRITERE_EVALUATION)
);

/*==============================================================*/
/* Table : R_CTG                                                */
/*==============================================================*/
create table R_CTG 
(
   ID_CTG               VARCHAR2(4)          not null,
   LIB_TYPE_MR_AR       VARCHAR2(70),
   constraint PK_R_CTG primary key (ID_CTG)
);

/*==============================================================*/
/* Table : R_DECISION                                           */
/*==============================================================*/
create table R_DECISION 
(
   CODE_DECISION        CHAR(1)              not null,
   LIB_DECISION_AR      CHAR(256)            not null,
   LIB_DECISION_FR      CHAR(256)            not null,
   constraint PK_R_DECISION primary key (CODE_DECISION)
);

/*==============================================================*/
/* Table : R_DIPLOME                                            */
/*==============================================================*/
create table R_DIPLOME 
(
   ID_R_DIPLOME         CHAR(10)             not null,
   LIB_DIP_AR           CHAR(256)            not null,
   LIB_DIP_FR           CHAR(256),
   POID                 INTEGER,
   constraint PK_R_DIPLOME primary key (ID_R_DIPLOME)
);

/*==============================================================*/
/* Table : R_DIP_SPEC                                           */
/*==============================================================*/
create table R_DIP_SPEC 
(
   ID_R_DIPLOME         CHAR(10)             not null,
   ID_SPECIALITE        VARCHAR2(6)          not null,
   constraint PK_R_DIP_SPEC primary key (ID_R_DIPLOME, ID_SPECIALITE)
);

/*==============================================================*/
/* Index : R_DIP_SPEC2_FK                                       */
/*==============================================================*/
create index R_DIP_SPEC2_FK on R_DIP_SPEC (
   ID_R_DIPLOME ASC
);

/*==============================================================*/
/* Index : R_DIP_SPEC_FK                                        */
/*==============================================================*/
create index R_DIP_SPEC_FK on R_DIP_SPEC (
   ID_SPECIALITE ASC
);

/*==============================================================*/
/* Table : R_ETABLISSEMENT                                      */
/*==============================================================*/
create table R_ETABLISSEMENT 
(
   ID_ETABLISSEMENT     VARCHAR2(5)          not null,
   LIB_ETABLISSEMENT_AR CHAR(256)            not null,
   LIB_ETABLISSEMENT_FR CHAR(256),
   ABR_ETABLISSEMENT_AR CHAR(150),
   ABR_ETABLISSEMENT_FR CHAR(150),
   constraint PK_R_ETABLISSEMENT primary key (ID_ETABLISSEMENT)
);

/*==============================================================*/
/* Table : R_ETAPE_FORMATION                                    */
/*==============================================================*/
create table R_ETAPE_FORMATION 
(
   ID_ETAPE_FORMATION   VARCHAR2(2)          not null,
   LIB_ETAPE_FORMATION_AR VARCHAR2(70),
   LIB_ETAPE_FORMATION_FR VARCHAR2(70),
   constraint PK_R_ETAPE_FORMATION primary key (ID_ETAPE_FORMATION)
);

/*==============================================================*/
/* Table : R_ETAPE_RECRUTEMENT                                  */
/*==============================================================*/
create table R_ETAPE_RECRUTEMENT 
(
   CODE_POSITION_CANDIDAT INTEGER              not null,
   LIB_ETAT_RECRUTEMENT_AR CHAR(256)            not null,
   LIB_ETAT_RECRUTEMENT_FR CHAR(256)            not null,
   constraint PK_R_ETAPE_RECRUTEMENT primary key (CODE_POSITION_CANDIDAT)
);

/*==============================================================*/
/* Table : R_EVALUATION                                         */
/*==============================================================*/
create table R_EVALUATION 
(
   ID_EVALUATION        CHAR(2)              not null,
   LIB_EVALUATION       CHAR(256)            not null,
   VALEUR               INTEGER              not null,
   constraint PK_R_EVALUATION primary key (ID_EVALUATION)
);

/*==============================================================*/
/* Table : R_EXERCICE                                           */
/*==============================================================*/
create table R_EXERCICE 
(
   ID_EXERCICE          VARCHAR2(4)          not null,
   LIB_EXERCICE         CHAR(20)             not null,
   constraint PK_R_EXERCICE primary key (ID_EXERCICE)
);

/*==============================================================*/
/* Table : R_FONCTION                                           */
/*==============================================================*/
create table R_FONCTION 
(
   ID_FONCTION          VARCHAR2(6)          not null,
   ID_POSTE             VARCHAR2(10),
   LIB_FONCTION_AR      VARCHAR2(150),
   LIB_FONCTION_FR      VARCHAR2(150),
   constraint PK_R_FONCTION primary key (ID_FONCTION)
);

/*==============================================================*/
/* Index : AVOIR_CODE_FK                                        */
/*==============================================================*/
create index AVOIR_CODE_FK on R_FONCTION (
   ID_POSTE ASC
);

/*==============================================================*/
/* Table : R_FORMATION                                          */
/*==============================================================*/
create table R_FORMATION 
(
   CODE_FORMATION       VARCHAR2(3)          not null,
   LIB_POSITION_FORMATION_AR VARCHAR2(70),
   LIB_FORMATION_FR     VARCHAR2(70),
   DUREE_FORMATION      NUMBER(2)            default 0,
   ABR_AR               VARCHAR2(256)        default '/',
   ABR_FR               VARCHAR2(256)        default '/',
   AGE_LIMITE           NUMBER(2)            default 100,
   constraint PK_R_FORMATION primary key (CODE_FORMATION)
);

/*==============================================================*/
/* Table : R_GRADE                                              */
/*==============================================================*/
create table R_GRADE 
(
   ID_GRADE             VARCHAR2(2)          not null,
   ID_CATEGORIE_TED     VARCHAR2(2)          not null,
   ID_CAT_GRADE         VARCHAR2(2)          not null,
   LIB_GRADE_FR         VARCHAR2(256)        not null,
   LIB_GRADE_AR         VARCHAR2(256)        not null,
   ABR_GRADE_AR         VARCHAR2(256)        not null,
   ABR_GRADE_FR         VARCHAR2(256)        not null,
   constraint PK_R_GRADE primary key (ID_GRADE)
);

/*==============================================================*/
/* Index : APPARTIENT_FK                                        */
/*==============================================================*/
create index APPARTIENT_FK on R_GRADE (
   ID_CATEGORIE_TED ASC
);

/*==============================================================*/
/* Index : AVOIR_CAT_GRADE_FK                                   */
/*==============================================================*/
create index AVOIR_CAT_GRADE_FK on R_GRADE (
   ID_CAT_GRADE ASC
);

/*==============================================================*/
/* Table : R_GRADE_PCA                                          */
/*==============================================================*/
create table R_GRADE_PCA 
(
   ID_GRADE_PCA         VARCHAR2(3)          not null,
   LIB_GRADE_PCA_AR     VARCHAR2(150),
   LIB_GRADE_PCA_FR     VARCHAR2(150),
   constraint PK_R_GRADE_PCA primary key (ID_GRADE_PCA)
);

/*==============================================================*/
/* Table : R_GROUPAGE                                           */
/*==============================================================*/
create table R_GROUPAGE 
(
   ID_GROUPAGE          VARCHAR2(1)          not null,
   LIB_GROUPAGE         VARCHAR2(150),
   constraint PK_R_GROUPAGE primary key (ID_GROUPAGE)
);

/*==============================================================*/
/* Table : R_HABILITATION                                       */
/*==============================================================*/
create table R_HABILITATION 
(
   ID_R_HABILITATION    VARCHAR2(10)         not null,
   LIB_HABILITATION     VARCHAR2(256)        not null,
   constraint PK_R_HABILITATION primary key (ID_R_HABILITATION)
);

/*==============================================================*/
/* Table : R_MATIERE                                            */
/*==============================================================*/
create table R_MATIERE 
(
   ID_MATIERE           VARCHAR2(4)          not null,
   LIB_MATIERE_AR       VARCHAR2(70),
   LIB_MATIERE_FR       VARCHAR2(70),
   constraint PK_R_MATIERE primary key (ID_MATIERE)
);

/*==============================================================*/
/* Table : R_MODE_ENGAGEMENT                                    */
/*==============================================================*/
create table R_MODE_ENGAGEMENT 
(
   ID_MODE_ENGAGEMENT   VARCHAR2(12)         not null,
   LIB_MODE_ENGAGEMENT_AR VARCHAR2(70),
   LIB_MODE_ENGAGEMENT_FR VARCHAR2(70),
   constraint PK_R_MODE_ENGAGEMENT primary key (ID_MODE_ENGAGEMENT)
);

/*==============================================================*/
/* Table : R_MOTIF_INDIPONIBILITE                               */
/*==============================================================*/
create table R_MOTIF_INDIPONIBILITE 
(
   ID_MOTIF_INDIPONIBILITE VARCHAR2(2)          not null,
   LIB_MOTIF_INDIPONIBILITE_AR VARCHAR2(100),
   LIB_MOTIF_INDIPONIBILITE_FR VARCHAR2(100),
   constraint PK_R_MOTIF_INDIPONIBILITE primary key (ID_MOTIF_INDIPONIBILITE)
);

/*==============================================================*/
/* Table : R_MOTIF_PRISE_CONTACT                                */
/*==============================================================*/
create table R_MOTIF_PRISE_CONTACT 
(
   ID_MOTIF_PRISE_CONTACT CHAR(2)              not null,
   LIB_MOTIF_PRISE_CONTACT_AR CHAR(256)            not null,
   LIB_MOTIF_PRISE_CONTACT_FR CHAR(256),
   constraint PK_R_MOTIF_PRISE_CONTACT primary key (ID_MOTIF_PRISE_CONTACT)
);

/*==============================================================*/
/* Table : R_MOTIF_RADIATION                                    */
/*==============================================================*/
create table R_MOTIF_RADIATION 
(
   ID_MOTIF_RADIATION   VARCHAR2(2)          not null,
   LIB_MOTIF_RADIATION_AR VARCHAR2(150),
   LIB_MOTIF_RADIATION_FR VARCHAR2(150),
   constraint PK_R_MOTIF_RADIATION primary key (ID_MOTIF_RADIATION)
);

/*==============================================================*/
/* Table : R_MOYENS                                             */
/*==============================================================*/
create table R_MOYENS 
(
   ID_MOYEN             VARCHAR2(2)          not null,
   LIB_MOYEN_AR         VARCHAR2(50),
   LIB_MOYEN_FR         VARCHAR2(50),
   constraint PK_R_MOYENS primary key (ID_MOYEN)
);

/*==============================================================*/
/* Table : R_NATURE_FORMATION                                   */
/*==============================================================*/
create table R_NATURE_FORMATION 
(
   ID_NATURE_FORMATION  VARCHAR2(1)          not null,
   LIB_NATURE_FORMATION_AR VARCHAR2(70),
   LIB_NATURE_FORMATION_FR VARCHAR2(70),
   constraint PK_R_NATURE_FORMATION primary key (ID_NATURE_FORMATION)
);

/*==============================================================*/
/* Table : R_NIVEAU_ETUDE                                       */
/*==============================================================*/
create table R_NIVEAU_ETUDE 
(
   ID_NIVEAU_ETUDE      VARCHAR2(1)          not null,
   ID_CAT_GRADE         VARCHAR2(2)          not null,
   LIB_NIVEAU_ETUDE_AR  VARCHAR2(150),
   LIB_NIVEAU_ETUDE_FR  VARCHAR2(150),
   constraint PK_R_NIVEAU_ETUDE primary key (ID_NIVEAU_ETUDE)
);

/*==============================================================*/
/* Index : POSSEDE_CATEGORIE_FK                                 */
/*==============================================================*/
create index POSSEDE_CATEGORIE_FK on R_NIVEAU_ETUDE (
   ID_CAT_GRADE ASC
);

/*==============================================================*/
/* Table : R_OPTION_FORMATION                                   */
/*==============================================================*/
create table R_OPTION_FORMATION 
(
   ID_OPTION_FORMATION  VARCHAR2(3)          not null,
   LIB_OPTION_FORMATION_AR VARCHAR2(150),
   LIB_OPTION_FORMATION_FR VARCHAR2(150),
   constraint PK_R_OPTION_FORMATION primary key (ID_OPTION_FORMATION)
);

/*==============================================================*/
/* Table : R_POSITION                                           */
/*==============================================================*/
create table R_POSITION 
(
   ID_POSITION          VARCHAR2(2)          not null,
   LIB_TYPE_PIECE_AR    VARCHAR2(150),
   LIB_TYPE_PIECE_FR    VARCHAR2(150),
   constraint PK_R_POSITION primary key (ID_POSITION)
);

/*==============================================================*/
/* Table : R_POSTE                                              */
/*==============================================================*/
create table R_POSTE 
(
   ID_POSTE             VARCHAR2(10)         not null,
   LIB_POSTE_AR         VARCHAR2(256)        not null,
   LIB_POSTE_FR         VARCHAR2(256)        not null,
   ABR                  VARCHAR2(10)         not null,
   constraint PK_R_POSTE primary key (ID_POSTE)
);

/*==============================================================*/
/* Table : R_POSTE_PERMANENCE                                   */
/*==============================================================*/
create table R_POSTE_PERMANENCE 
(
   CODE_POSTE_PERMANENCE VARCHAR2(6)          not null,
   LIB_POSTE_PERMANENCE_AR VARCHAR2(70),
   LIB_POSTE_PERMANENCE_FR VARCHAR2(70),
   constraint PK_R_POSTE_PERMANENCE primary key (CODE_POSTE_PERMANENCE)
);

/*==============================================================*/
/* Table : R_PROFILE                                            */
/*==============================================================*/
create table R_PROFILE 
(
   ID_PROFILE           VARCHAR2(1)          not null,
   LIB_PROFILE_AR       VARCHAR2(70),
   LIB_PROFILE_FR       VARCHAR2(70),
   constraint PK_R_PROFILE primary key (ID_PROFILE)
);

/*==============================================================*/
/* Table : R_PROFILE_PERMANENCE                                 */
/*==============================================================*/
create table R_PROFILE_PERMANENCE 
(
   ID_PROFILE_PERMANENCE VARCHAR2(2)          not null,
   LIB_PROFILE_PERMANENCE_AR VARCHAR2(70),
   LIB_PROFILE_PERMANENCE_FR VARCHAR2(70),
   constraint PK_R_PROFILE_PERMANENCE primary key (ID_PROFILE_PERMANENCE)
);

/*==============================================================*/
/* Table : R_PROFIL_CATEGORIE                                   */
/*==============================================================*/
create table R_PROFIL_CATEGORIE 
(
   ID_PROFILE_PERMANENCE VARCHAR2(2)          not null,
   ID_GRADE             VARCHAR2(2)          not null,
   constraint PK_R_PROFIL_CATEGORIE primary key (ID_PROFILE_PERMANENCE, ID_GRADE)
);

/*==============================================================*/
/* Index : R_PROFIL_CATEGORIE2_FK                               */
/*==============================================================*/
create index R_PROFIL_CATEGORIE2_FK on R_PROFIL_CATEGORIE (
   ID_PROFILE_PERMANENCE ASC
);

/*==============================================================*/
/* Index : R_PROFIL_CATEGORIE_FK                                */
/*==============================================================*/
create index R_PROFIL_CATEGORIE_FK on R_PROFIL_CATEGORIE (
   ID_GRADE ASC
);

/*==============================================================*/
/* Table : R_PROFIL_PERSONEL                                    */
/*==============================================================*/
create table R_PROFIL_PERSONEL 
(
   ID_PROFIL_COMMISSION VARCHAR2(2)          not null,
   LIB_PROFIL_COMMISSION_AR VARCHAR2(70)         not null,
   LIB_PROFIL_COMMISSION_FR VARCHAR2(70),
   constraint PK_R_PROFIL_PERSONEL primary key (LIB_PROFIL_COMMISSION_AR, ID_PROFIL_COMMISSION)
);

/*==============================================================*/
/* Table : R_QUALIFICATION                                      */
/*==============================================================*/
create table R_QUALIFICATION 
(
   ID_QUALIFICATION     VARCHAR2(2)          not null,
   LIB_QUALIFICATION_AR VARCHAR2(256),
   LIB_QUALIFICATION_FR VARCHAR2(256),
   ABR_AR               VARCHAR2(256)        default '/',
   ABR_FR               VARCHAR2(256)        default '/',
   constraint PK_R_QUALIFICATION primary key (ID_QUALIFICATION)
);

/*==============================================================*/
/* Table : R_RESULTAT_CONCOURS                                  */
/*==============================================================*/
create table R_RESULTAT_CONCOURS 
(
   ID_RESULTAT_CONCOURS VARCHAR2(2)          not null,
   LIB_RESULTAT_CONCOURS_AR VARCHAR2(70),
   LIB_RESULTAT_CONCOURS_FR VARCHAR2(70),
   constraint PK_R_RESULTAT_CONCOURS primary key (ID_RESULTAT_CONCOURS)
);

/*==============================================================*/
/* Table : R_RESULTAT_PRISE_CONTACT                             */
/*==============================================================*/
create table R_RESULTAT_PRISE_CONTACT 
(
   ID_RESULTAT_PRISE_CONTACT CHAR(10)             not null,
   LIB_RESULTAT_PRISE_CONTACT_FR CHAR(256)            not null,
   LIB_RESULTAT_PRISE_CONTACT_AR CHAR(256)            not null,
   constraint PK_R_RESULTAT_PRISE_CONTACT primary key (ID_RESULTAT_PRISE_CONTACT)
);

/*==============================================================*/
/* Table : R_SESSION                                            */
/*==============================================================*/
create table R_SESSION 
(
   ID_SESSION           VARCHAR2(1)          not null,
   LIB_SESSION_AR       VARCHAR2(70),
   LIB_SESSION_FR       VARCHAR2(70),
   constraint PK_R_SESSION primary key (ID_SESSION)
);

/*==============================================================*/
/* Table : R_SEX                                                */
/*==============================================================*/
create table R_SEX 
(
   ID_SEX               VARCHAR2(1)          not null,
   LIB_SEX_AR           VARCHAR2(15),
   LIB_SEX_FR           VARCHAR2(15),
   constraint PK_R_SEX primary key (ID_SEX)
);

/*==============================================================*/
/* Table : R_SITUATION_FAMILIALE                                */
/*==============================================================*/
create table R_SITUATION_FAMILIALE 
(
   ID_SITUATION_FAMILIALE VARCHAR2(1)          not null,
   LIB_SITUATION_FAMILIALE_AR VARCHAR2(256),
   LIB_SITUATION_FAMILIALE_FR VARCHAR2(256),
   constraint PK_R_SITUATION_FAMILIALE primary key (ID_SITUATION_FAMILIALE)
);

/*==============================================================*/
/* Table : R_SOUS_CRITERE_EVALUATION                            */
/*==============================================================*/
create table R_SOUS_CRITERE_EVALUATION 
(
   ID_SOUS_CRITERE_EVALUATION CHAR(2)              not null,
   ID_CRITERE_EVALUATION CHAR(2)              not null,
   LIB_SOUS_CRITERE_EVALUATION CHAR(256)            not null,
   constraint PK_R_SOUS_CRITERE_EVALUATION primary key (ID_SOUS_CRITERE_EVALUATION)
);

/*==============================================================*/
/* Index : AVOIR_SOUS_CRITERE_FK                                */
/*==============================================================*/
create index AVOIR_SOUS_CRITERE_FK on R_SOUS_CRITERE_EVALUATION (
   ID_CRITERE_EVALUATION ASC
);

/*==============================================================*/
/* Table : R_SPECIALITE                                         */
/*==============================================================*/
create table R_SPECIALITE 
(
   ID_SPECIALITE        VARCHAR2(6)          not null,
   LIB_SPECIALITE_AR    CHAR(256)            not null,
   LIB_SPECIALITE_FR    CHAR(256),
   constraint PK_R_SPECIALITE primary key (ID_SPECIALITE)
);

/*==============================================================*/
/* Table : R_STRUCTURE                                          */
/*==============================================================*/
create table R_STRUCTURE 
(
   ID_STRUCTURE         VARCHAR2(10)         not null,
   R_S_ID_STRUCTURE     VARCHAR2(10),
   ID_TYPE_STRUCT       VARCHAR2(10)         not null,
   LIB_STRUCTURE_AR     VARCHAR2(256),
   LIB_STRUCTURE_FR     VARCHAR2(256),
   ABR_AR               VARCHAR2(256)        default '/',
   constraint PK_R_STRUCTURE primary key (ID_STRUCTURE)
);

/*==============================================================*/
/* Index : CONSTITUE_DE_FK                                      */
/*==============================================================*/
create index CONSTITUE_DE_FK on R_STRUCTURE (
   R_S_ID_STRUCTURE ASC
);

/*==============================================================*/
/* Index : AVOIR_TYPE_STRUCTURE_FK                              */
/*==============================================================*/
create index AVOIR_TYPE_STRUCTURE_FK on R_STRUCTURE (
   ID_TYPE_STRUCT ASC
);

/*==============================================================*/
/* Table : R_STRUCTURE_SN                                       */
/*==============================================================*/
create table R_STRUCTURE_SN 
(
   LIB_STRUCTURE_SN_AR  VARCHAR2(150),
   LIB_STRUCTURE_SN_FR  VARCHAR2(150),
   CODE_STRUCTURE_SN    VARCHAR2(4)          not null,
   ID_TYPE_STRUCTURE_SN VARCHAR2(1)          not null,
   constraint PK_R_STRUCTURE_SN primary key (CODE_STRUCTURE_SN)
);

/*==============================================================*/
/* Index : AVOIR_TYPE_STR_SN_FK                                 */
/*==============================================================*/
create index AVOIR_TYPE_STR_SN_FK on R_STRUCTURE_SN (
   ID_TYPE_STRUCTURE_SN ASC
);

/*==============================================================*/
/* Table : R_TED                                                */
/*==============================================================*/
create table R_TED 
(
   ID_TED               VARCHAR2(10)         not null,
   ID_STRUCTURE         VARCHAR2(10)         not null,
   ID_CATEGORIE_TED     VARCHAR2(2)          not null,
   ID_ARME              VARCHAR2(3),
   ID_ARMEMENT          VARCHAR2(3),
   ID_QUALIFICATION     VARCHAR2(2),
   ID_R_HABILITATION    VARCHAR2(10),
   ID_FONCTION          VARCHAR2(6)          not null,
   NBR                  INTEGER              not null,
   OBSERVATION          VARCHAR2(1024),
   constraint PK_R_TED primary key (ID_TED)
);

/*==============================================================*/
/* Index : AVOIR_STRUCTURE_FK                                   */
/*==============================================================*/
create index AVOIR_STRUCTURE_FK on R_TED (
   ID_STRUCTURE ASC
);

/*==============================================================*/
/* Index : AVOIR_CAT_TED_FK                                     */
/*==============================================================*/
create index AVOIR_CAT_TED_FK on R_TED (
   ID_CATEGORIE_TED ASC
);

/*==============================================================*/
/* Index : AVOIR_ARME_FK                                        */
/*==============================================================*/
create index AVOIR_ARME_FK on R_TED (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : AVOIR_ARMEMENT_FK                                    */
/*==============================================================*/
create index AVOIR_ARMEMENT_FK on R_TED (
   ID_ARMEMENT ASC
);

/*==============================================================*/
/* Index : AVOIR_QUALIFICATION_FK                               */
/*==============================================================*/
create index AVOIR_QUALIFICATION_FK on R_TED (
   ID_QUALIFICATION ASC
);

/*==============================================================*/
/* Index : AVOIR_HABILITAION_FK                                 */
/*==============================================================*/
create index AVOIR_HABILITAION_FK on R_TED (
   ID_R_HABILITATION ASC
);

/*==============================================================*/
/* Index : AVOIR_FONCTION_TED_FK                                */
/*==============================================================*/
create index AVOIR_FONCTION_TED_FK on R_TED (
   ID_FONCTION ASC
);

/*==============================================================*/
/* Table : R_TED_SPECIALITE                                     */
/*==============================================================*/
create table R_TED_SPECIALITE 
(
   ID_TED_SPECIALITE    VARCHAR2(2)          not null,
   constraint PK_R_TED_SPECIALITE primary key (ID_TED_SPECIALITE)
);

/*==============================================================*/
/* Table : R_TYPE_BESOIN                                        */
/*==============================================================*/
create table R_TYPE_BESOIN 
(
   ID_TYPE_BESOIN       VARCHAR2(2)          not null,
   LIB_TYPE_BESOIN_AR   VARCHAR2(70),
   LIB_TYPE_BESOIN_FR   VARCHAR2(70),
   constraint PK_R_TYPE_BESOIN primary key (ID_TYPE_BESOIN)
);

/*==============================================================*/
/* Table : R_TYPE_CONTACT                                       */
/*==============================================================*/
create table R_TYPE_CONTACT 
(
   ID_TYPE_CONTACT      VARCHAR2(6)          not null,
   LIB_TYPE_PERMANENCE_AR VARCHAR2(150),
   LIB_TYPE_PERMANENCE_FR VARCHAR2(150),
   constraint PK_R_TYPE_CONTACT primary key (ID_TYPE_CONTACT)
);

/*==============================================================*/
/* Table : R_TYPE_COURRIER                                      */
/*==============================================================*/
create table R_TYPE_COURRIER 
(
   ID_TYPE_COURRIER     CHAR(10)             not null,
   LIB_TYPE_COURRIER_AR CHAR(256)            not null,
   LIB_TYPE_COURRIER_FR CHAR(256)            not null,
   constraint PK_R_TYPE_COURRIER primary key (ID_TYPE_COURRIER)
);

/*==============================================================*/
/* Table : R_TYPE_DECISION                                      */
/*==============================================================*/
create table R_TYPE_DECISION 
(
   ID_TYPE_DECISION     VARCHAR2(3)          not null,
   LIB_ID_TYPE_DECISION_AR VARCHAR2(70),
   LIB_ID_TYPE_DECISION_FR VARCHAR2(70),
   constraint PK_R_TYPE_DECISION primary key (ID_TYPE_DECISION)
);

/*==============================================================*/
/* Table : R_TYPE_DECORATION                                    */
/*==============================================================*/
create table R_TYPE_DECORATION 
(
   ID_TYPE_DECO         VARCHAR2(2)          not null,
   LIB_TYPE_DECO_AR     VARCHAR2(70),
   LIB_TYPE_DECO_FR     VARCHAR2(70),
   constraint PK_R_TYPE_DECORATION primary key (ID_TYPE_DECO)
);

/*==============================================================*/
/* Table : R_TYPE_DEST_COURRIER                                 */
/*==============================================================*/
create table R_TYPE_DEST_COURRIER 
(
   ID_TYPE_DEST_COURRIER CHAR(2)              not null,
   LIB_TYPE_DEST_COURRIER_AR CHAR(256)            not null,
   LIB_TYPE_DEST_COURRIER_FR CHAR(256)            not null,
   constraint PK_R_TYPE_DEST_COURRIER primary key (ID_TYPE_DEST_COURRIER)
);

/*==============================================================*/
/* Table : R_TYPE_ENGAGEMENT                                    */
/*==============================================================*/
create table R_TYPE_ENGAGEMENT 
(
   ID_TYPE_ENGAGEMENT   VARCHAR2(12)         not null,
   LIB_TYPE_ENGAGEMENT_AR VARCHAR2(70),
   LIB_TYPE_ENGAGEMENT_FR VARCHAR2(70),
   constraint PK_R_TYPE_ENGAGEMENT primary key (ID_TYPE_ENGAGEMENT)
);

/*==============================================================*/
/* Table : R_TYPE_EPREUVE                                       */
/*==============================================================*/
create table R_TYPE_EPREUVE 
(
   ID_TYPE_EXAMEN       CHAR(2)              not null,
   LIB_TYPE_EXAMEN_AR   CHAR(256)            not null,
   LIB_TYPE_EXAMEN_FR   CHAR(256)            not null,
   constraint PK_R_TYPE_EPREUVE primary key (ID_TYPE_EXAMEN)
);

/*==============================================================*/
/* Table : R_TYPE_FONCTION                                      */
/*==============================================================*/
create table R_TYPE_FONCTION 
(
   ID_TYPE_FONCTION     VARCHAR2(6)          not null,
   LIB_TYPE_FONCTION_AR VARCHAR2(150),
   LIB_TYPE_FORNCTION_FR VARCHAR2(150),
   constraint PK_R_TYPE_FONCTION primary key (ID_TYPE_FONCTION)
);

/*==============================================================*/
/* Table : R_TYPE_FORMATION                                     */
/*==============================================================*/
create table R_TYPE_FORMATION 
(
   ID_TYPE_FORMATION    VARCHAR2(1)          not null,
   LIB__TYPE_FORMATION_AR VARCHAR2(70),
   LIB__TYPE_FORMATION_FR VARCHAR2(70),
   constraint PK_R_TYPE_FORMATION primary key (ID_TYPE_FORMATION)
);

/*==============================================================*/
/* Table : R_TYPE_MR                                            */
/*==============================================================*/
create table R_TYPE_MR 
(
   ID_TYPE_MR           VARCHAR2(4)          not null,
   CODE_UNITE           VARCHAR2(7)          not null,
   R_U_CODE_UNITE       VARCHAR2(7)          not null,
   LIB_TYPE_MR_AR       VARCHAR2(70),
   LIB_TYPE_MR_FR       VARCHAR2(70),
   constraint PK_R_TYPE_MR primary key (ID_TYPE_MR)
);

/*==============================================================*/
/* Index : MR_DE_UNITE_FK                                       */
/*==============================================================*/
create index MR_DE_UNITE_FK on R_TYPE_MR (
   CODE_UNITE ASC
);

/*==============================================================*/
/* Index : MR_A_UNITE_FK                                        */
/*==============================================================*/
create index MR_A_UNITE_FK on R_TYPE_MR (
   R_U_CODE_UNITE ASC
);

/*==============================================================*/
/* Table : R_TYPE_MUTATION                                      */
/*==============================================================*/
create table R_TYPE_MUTATION 
(
   ID_TYPE_MUTATION     VARCHAR2(2)          not null,
   LIB_TYPE_MUTATION_AR VARCHAR2(50),
   LIB_TYPE_MUTATION_FR VARCHAR2(50),
   constraint PK_R_TYPE_MUTATION primary key (ID_TYPE_MUTATION)
);

/*==============================================================*/
/* Table : R_TYPE_PERMANENCE                                    */
/*==============================================================*/
create table R_TYPE_PERMANENCE 
(
   ID_TYPE_PERMANENCE   VARCHAR2(1)          not null,
   LIB_TYPE_PERMANENCE_AR VARCHAR2(150),
   LIB_TYPE_PERMANENCE_FR VARCHAR2(150),
   constraint PK_R_TYPE_PERMANENCE primary key (ID_TYPE_PERMANENCE)
);

/*==============================================================*/
/* Table : R_TYPE_PIECE                                         */
/*==============================================================*/
create table R_TYPE_PIECE 
(
   ID_TYPE_PIECE        VARCHAR2(2)          not null,
   LIB_TYPE_PIECE_AR    VARCHAR2(150),
   LIB_TYPE_PIECE_FR    VARCHAR2(150),
   constraint PK_R_TYPE_PIECE primary key (ID_TYPE_PIECE)
);

/*==============================================================*/
/* Table : R_TYPE_RECRUTEMENT                                   */
/*==============================================================*/
create table R_TYPE_RECRUTEMENT 
(
   CODE_TYPE_RECRUTEMENT VARCHAR2(10)         not null,
   LIB_TYPE_RECRUTEMENT_AR VARCHAR2(70),
   LIB_TYPE_RECRUTEMENT_FR VARCHAR2(70),
   LIB_ABR_TYPE_RECRUTEMENT_AR VARCHAR2(25),
   LIB_ABR_TYPE_RECRUTEMENT_FR VARCHAR2(25),
   constraint PK_R_TYPE_RECRUTEMENT primary key (CODE_TYPE_RECRUTEMENT)
);

/*==============================================================*/
/* Table : R_TYPE_STRUCTURE                                     */
/*==============================================================*/
create table R_TYPE_STRUCTURE 
(
   ID_TYPE_STRUCT       VARCHAR2(10)         not null,
   LIB_TYPE_STRUCT_AR   VARCHAR2(256)        not null,
   LIB_TYPE_STRUCT_FR   VARCHAR2(256)        not null,
   constraint PK_R_TYPE_STRUCTURE primary key (ID_TYPE_STRUCT)
);

/*==============================================================*/
/* Table : R_TYPE_STRUCTURE_SN                                  */
/*==============================================================*/
create table R_TYPE_STRUCTURE_SN 
(
   ID_TYPE_STRUCTURE_SN VARCHAR2(1)          not null,
   LIB_TYPE_STRUCTURE_SN_AR VARCHAR2(20),
   LIB_TYPE_STRUCTURE_SN_FR VARCHAR2(20),
   constraint PK_R_TYPE_STRUCTURE_SN primary key (ID_TYPE_STRUCTURE_SN)
);

/*==============================================================*/
/* Table : R_TYPE_TEST_MEDICALE                                 */
/*==============================================================*/
create table R_TYPE_TEST_MEDICALE 
(
   ID_TYPE_TEST_MEDICALE VARCHAR2(10)         not null,
   LIB_TYPE_TEST_MEDICALE_AR VARCHAR2(256)        not null,
   LIB_TYPE_TEST_MEDICALE_FR VARCHAR2(256),
   constraint PK_R_TYPE_TEST_MEDICALE primary key (ID_TYPE_TEST_MEDICALE)
);

/*==============================================================*/
/* Table : R_UNITE                                              */
/*==============================================================*/
create table R_UNITE 
(
   CODE_UNITE           VARCHAR2(7)          not null,
   ID_REGION            VARCHAR2(1),
   CODE_APC             VARCHAR2(6),
   ID_ARME              VARCHAR2(3),
   R_A_ID_ARME          VARCHAR2(3),
   LIB_UNITEE_AR        VARCHAR2(256)        not null,
   LIB_UNITEE_FR        VARCHAR2(256),
   ABREVIATION_AR       CHAR(150),
   ABREVIATION_FR       CHAR(150),
   DESSOUTE             CHAR(1),
   constraint PK_R_UNITE primary key (CODE_UNITE)
);

/*==============================================================*/
/* Index : SITUER_DANS_FK                                       */
/*==============================================================*/
create index SITUER_DANS_FK on R_UNITE (
   CODE_APC ASC
);

/*==============================================================*/
/* Index : APARTIEN_ARME_FK                                     */
/*==============================================================*/
create index APARTIEN_ARME_FK on R_UNITE (
   ID_ARME ASC
);

/*==============================================================*/
/* Index : UNITE_APPARTIEN_ARME_FK                              */
/*==============================================================*/
create index UNITE_APPARTIEN_ARME_FK on R_UNITE (
   R_A_ID_ARME ASC
);

/*==============================================================*/
/* Table : R_VEHICULE                                           */
/*==============================================================*/
create table R_VEHICULE 
(
   ID_VEHICULE          VARCHAR2(2)          not null,
   NOM_VEHICULE         VARCHAR2(1024),
   PLAQUE_IMMATRIUCLATION VARCHAR2(255)        not null,
   constraint PK_R_VEHICULE primary key (ID_VEHICULE)
);

/*==============================================================*/
/* Table : R_WILAYA                                             */
/*==============================================================*/
create table R_WILAYA 
(
   CODE_WILAYA          VARCHAR2(10)         not null,
   LIB_WILAYA_AR        VARCHAR2(10),
   LIB_WILAYA_FR        VARCHAR2(10),
   constraint PK_R_WILAYA primary key (CODE_WILAYA)
);

alter table AVOIR_APTITUDE_MEDICALE
   add constraint FK_AVOIR_AP_AVOIR_APT_DATE foreign key ("DATE")
      references "DATE" ("DATE");

alter table AVOIR_APTITUDE_MEDICALE
   add constraint FK_AVOIR_AP_AVOIR_APT_R_APTITU foreign key (ID_APTITUDE_MEDICALE)
      references R_APTITUDE_MEDICALE (ID_APTITUDE_MEDICALE);

alter table AVOIR_APTITUDE_MEDICALE
   add constraint FK_AVOIR_AP_AVOIR_APT_D_CONCOU foreign key (ID_CONCOURS)
      references D_CONCOURS (ID_CONCOURS);

alter table AVOIR_APTITUDE_MEDICALE
   add constraint FK_AVOIR_AP_AVOIR_APT_R_TYPE_T foreign key (ID_TYPE_TEST_MEDICALE)
      references R_TYPE_TEST_MEDICALE (ID_TYPE_TEST_MEDICALE);

alter table AVOIR_DECISION_CIVIL
   add constraint FK_AVOIR_DE_AVOIR_DEC_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table AVOIR_DECISION_CIVIL
   add constraint FK_AVOIR_DE_AVOIR_DEC_D_DICISI foreign key (ID_DECISION)
      references D_DICISION_CIVIL (ID_DECISION);

alter table AVOIR_ETAT
   add constraint FK_AVOIR_ET_AVOIR_ETA_D_MARRIA foreign key (ID_MARRIAGE_CONJOINT)
      references D_MARRIAGE_CONJOINT (ID_MARRIAGE_CONJOINT);

alter table AVOIR_HABILITATION
   add constraint FK_AVOIR_HA_AVOIR_HAB_D_HABILI foreign key (ID_HABILITATION)
      references D_HABILITATION (ID_HABILITATION);

alter table AVOIR_HABILITATION
   add constraint FK_AVOIR_HA_AVOIR_HAB_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table AVOIR_R_HABILITATION
   add constraint FK_AVOIR_R__AVOIR_R_H_R_HABILI foreign key (ID_R_HABILITATION)
      references R_HABILITATION (ID_R_HABILITATION);

alter table AVOIR_R_HABILITATION
   add constraint FK_AVOIR_R__AVOIR_R_H_D_HABILI foreign key (ID_HABILITATION)
      references D_HABILITATION (ID_HABILITATION);

alter table AVOIR_TED_SPECIALITE
   add constraint FK_AVOIR_TE_AVOIR_TED_R_TED foreign key (ID_TED)
      references R_TED (ID_TED);

alter table AVOIR_TED_SPECIALITE
   add constraint FK_AVOIR_TE_AVOIR_TED_R_TED_SP foreign key (ID_TED_SPECIALITE)
      references R_TED_SPECIALITE (ID_TED_SPECIALITE);

alter table DANS_WILAYA
   add constraint FK_DANS_WIL_DANS_WILA_R_WILAYA foreign key (CODE_WILAYA)
      references R_WILAYA (CODE_WILAYA);

alter table DANS_WILAYA
   add constraint FK_DANS_WIL_DANS_WILA_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_AFFECTATION
   add constraint FK_D_AFFECT_AVOIR_FON_R_FONCTI foreign key (ID_FONCTION)
      references R_FONCTION (ID_FONCTION);

alter table D_AFFECTATION
   add constraint FK_D_AFFECT_AVOIR_TYP_R_TYPE_F foreign key (ID_TYPE_FONCTION)
      references R_TYPE_FONCTION (ID_TYPE_FONCTION);

alter table D_AFFECTATION
   add constraint FK_D_AFFECT_EST_AFFEC_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_ARRESTATION
   add constraint FK_D_ARREST_DANS_UNIT_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_BESOIN_ACCORDE
   add constraint FK_D_BESOIN_ACCORDE_F_D_FORMAT foreign key (ID_FORMATION_DISPONIBLE)
      references D_FORMATION_DISPONIBLE (ID_FORMATION_DISPONIBLE);

alter table D_CANDIDAT
   add constraint FK_D_CANDID_CANDIDAT__R_SEX foreign key (ID_SEX)
      references R_SEX (ID_SEX);

alter table D_CANDIDAT
   add constraint FK_D_CANDID_EST_NE_A_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_CANDIDAT
   add constraint FK_D_CANDID_RESIDE_R_CODE_G foreign key (R_C_CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_CANDIDAT_DOSSIER_INSCRIPTION
   add constraint FK_D_CANDID_D_CANDIDA_D_CANDID foreign key (ID_CANDIDAT)
      references D_CANDIDAT (ID_CANDIDAT);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_AVOIR_TYP_R_TYPE_R foreign key (CODE_TYPE_RECRUTEMENT)
      references R_TYPE_RECRUTEMENT (CODE_TYPE_RECRUTEMENT);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_CANDIDAT__R_SITUAT foreign key (ID_SITUATION_FAMILIALE)
      references R_SITUATION_FAMILIALE (ID_SITUATION_FAMILIALE);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_EST_INSCR_D_CANDID foreign key (ID_CANDIDAT)
      references D_CANDIDAT (ID_CANDIDAT);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_INSCRIT_D_R_EXERCI foreign key (ID_EXERCICE)
      references R_EXERCICE (ID_EXERCICE);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_INSCRIT_D_R_SESSIO foreign key (ID_SESSION)
      references R_SESSION (ID_SESSION);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_PERSO_REC_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_CANDIDAT_INSCRIPTION
   add constraint FK_D_CANDID_RECRUTER__R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_CANDIDAT_PROGRAMME
   add constraint FK_D_CANDID_D_CANDIDA_D_CAN foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_CANDIDAT_PROGRAMME
   add constraint FK_D_CANDID_D_CANDIDA_D_COMISS foreign key (ID_COMMISION_EVALUATION)
      references D_COMISSION_EVALUATION (ID_COMMISION_EVALUATION);

alter table D_CHOIX_MUTATION
   add constraint FK_D_CHOIX__D_CHOIX_M_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_CHOIX_MUTATION
   add constraint FK_D_CHOIX__D_CHOIX_M_D_FICHE_ foreign key (ID_FICHE_VOEUX)
      references D_FICHE_VOEUX (ID_FICHE_VOEUX);

alter table D_COMISSION_EVALUATION
   add constraint FK_D_COMISS_COMISSION_R_EXERCI foreign key (ID_EXERCICE)
      references R_EXERCICE (ID_EXERCICE);

alter table D_CONCOURS
   add constraint FK_D_CONCOU_CONCOUR_D_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_CONCOURS
   add constraint FK_D_CONCOU_D_GERER_C_D_COMISS foreign key (ID_COMMISION_EVALUATION)
      references D_COMISSION_EVALUATION (ID_COMMISION_EVALUATION);

alter table D_CONCOURS_FORMATION
   add constraint FK_D_CONCOU_D_CONCOUR_D_CONCOU foreign key (ID_CONCOURS)
      references D_CONCOURS (ID_CONCOURS);

alter table D_CONCOURS_FORMATION
   add constraint FK_D_CONCOU_D_CONCOUR_D_BESOIN foreign key (ID_BESOIN_ACCORDE)
      references D_BESOIN_ACCORDE (ID_BESOIN_ACCORDE);

alter table D_CONSIGNES_INTERIME
   add constraint FK_D_CONSIG_A_POUR_CO_D_INDISP foreign key (ID_INDISPONIBLE)
      references D_INDISPONIBLE (ID_INDISPONIBLE);

alter table D_CONTACT
   add constraint FK_D_CONTAC_AVOIR_CON_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_CONTACT
   add constraint FK_D_CONTAC_AVOIR_TYP_R_TYPE_C foreign key (ID_TYPE_CONTACT)
      references R_TYPE_CONTACT (ID_TYPE_CONTACT);

alter table D_CONTACT
   add constraint FK_D_CONTAC_CANDIDTA__D_CANDID foreign key (ID_CANDIDAT)
      references D_CANDIDAT (ID_CANDIDAT);

alter table D_CONTACT
   add constraint FK_D_CONTAC_PROCHE_AV_D_PROCHE foreign key (ID_LIEN_CONTACT)
      references D_PROCHE_URG (ID_LIEN_CONTACT);

alter table D_COURRIER
   add constraint FK_D_COURRI_AVOIR_CLA_R_CLASSI foreign key (ID_CLASSIFFICATION)
      references R_CLASSIFICATION (ID_CLASSIFFICATION);

alter table D_COURRIER
   add constraint FK_D_COURRI_AVOIR_TYP_R_TYPE_C foreign key (ID_TYPE_COURRIER)
      references R_TYPE_COURRIER (ID_TYPE_COURRIER);

alter table D_COURRIER
   add constraint FK_D_COURRI_EMIS_PAR_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_COURRIER_COM
   add constraint FK_D_COURRI_D_COURRIE_D_COMISS foreign key (ID_COMMISION_EVALUATION)
      references D_COMISSION_EVALUATION (ID_COMMISION_EVALUATION);

alter table D_COURRIER_COM
   add constraint FK_D_COURRI_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table D_COURRIER_FORMATION_ACCORDE
   add constraint FK_D_COURRI_D_COURRIE_R_TYPE_B foreign key (ID_TYPE_BESOIN)
      references R_TYPE_BESOIN (ID_TYPE_BESOIN);

alter table D_COURRIER_FORMATION_ACCORDE
   add constraint FK_D_COURRI_D_COURRIE_D_BESOIN foreign key (ID_BESOIN_ACCORDE)
      references D_BESOIN_ACCORDE (ID_BESOIN_ACCORDE);

alter table D_COURRIER_FORMATION_ACCORDE
   add constraint FK_D_COURRI_D_COURRIE_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table D_DECORATION
   add constraint FK_D_DECORA_AVOIR_TYP_R_TYPE_D foreign key (ID_TYPE_DECO)
      references R_TYPE_DECORATION (ID_TYPE_DECO);

alter table D_DECORATION
   add constraint FK_D_DECORA_ETRE_DECO_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_DEMANDE_ELEMENT_MISSION
   add constraint FK_D_DEMAND_D_DEMANDE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_DEMANDE_ELEMENT_MISSION
   add constraint FK_D_DEMAND_D_DEMANDE_D_DEMAND foreign key (ID_DEMANDE_MISSION)
      references D_DEMANDE_MISSION (ID_DEMANDE_MISSION);

alter table D_DEMANDE_ELEMENT_MISSION
   add constraint FK_D_DEMAND_D_DEMANDE_R_PROFIL foreign key (ID_PROFILE)
      references R_PROFILE (ID_PROFILE);

alter table D_DEMANDE_INDISP
   add constraint FK_D_DEMAND_DEMANDE_P_R_MOTIF_ foreign key (ID_MOTIF_INDIPONIBILITE)
      references R_MOTIF_INDIPONIBILITE (ID_MOTIF_INDIPONIBILITE);

alter table D_DEMANDE_INDISP
   add constraint FK_D_DEMAND_FAIT_OBJE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_DEMANDE_MISSION
   add constraint FK_D_DEMAND_AU_MOYEN__R_MOYENS foreign key (ID_MOYEN)
      references R_MOYENS (ID_MOYEN);

alter table D_DEMANDE_MISSION
   add constraint FK_D_DEMAND_A_DEMANDE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_DESERTION
   add constraint FK_D_DESERT_A_DESERTE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_DESERTION
   add constraint FK_D_DESERT_DE_UNITE__R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_DICISION_CIVIL
   add constraint FK_D_DICISI_AU_PROFIT_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_DICISION_CIVIL
   add constraint FK_D_DICISI_AVOIR_GRA_R_GRADE_ foreign key (ID_GRADE_PCA)
      references R_GRADE_PCA (ID_GRADE_PCA);

alter table D_DICISION_CIVIL
   add constraint FK_D_DICISI_AVOIR_TYP_R_TYPE_D foreign key (ID_TYPE_DECISION)
      references R_TYPE_DECISION (ID_TYPE_DECISION);

alter table D_DIPLOME_CANDIDAT
   add constraint FK_D_DIPLOM_D_DIPLOME_R_ETABLI foreign key (ID_ETABLISSEMENT)
      references R_ETABLISSEMENT (ID_ETABLISSEMENT);

alter table D_DIPLOME_CANDIDAT
   add constraint FK_D_DIPLOM_D_DIPLOME_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_DIPLOME_CANDIDAT
   add constraint FK_D_DIPLOM_D_DIPLOME_R_DIPLOM foreign key (ID_R_DIPLOME)
      references R_DIPLOME (ID_R_DIPLOME);

alter table D_DIPLOME_CANDIDAT
   add constraint FK_D_DIPLOM_D_DIPLOME_R_SPECIA foreign key (ID_SPECIALITE)
      references R_SPECIALITE (ID_SPECIALITE);

alter table D_DIVORCE
   add constraint FK_D_DIVORC_EST_DIVOR_D_MARRIA foreign key (ID_MARRIAGE_CONJOINT)
      references D_MARRIAGE_CONJOINT (ID_MARRIAGE_CONJOINT);

alter table D_DOSSIER
   add constraint FK_D_DOSSIE_A_DOSSIER_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_AVEC_GRAD_R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_AVEC_NIVE_R_NIVEAU foreign key (ID_NIVEAU_ETUDE)
      references R_NIVEAU_ETUDE (ID_NIVEAU_ETUDE);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_AVOIR_MOD_R_MODE_E foreign key (ID_MODE_ENGAGEMENT)
      references R_MODE_ENGAGEMENT (ID_MODE_ENGAGEMENT);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_AVOIR_TYP_R_TYPE_E foreign key (ID_TYPE_ENGAGEMENT)
      references R_TYPE_ENGAGEMENT (ID_TYPE_ENGAGEMENT);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_A_SIGNER__D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_DANS_UNIT_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_ENGAGEMENT
   add constraint FK_D_ENGAGE_POUR_ARME_R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table D_EPREUVE
   add constraint FK_D_EPREUV_AVOIR_TYP_R_TYPE_E foreign key (ID_TYPE_EXAMEN)
      references R_TYPE_EPREUVE (ID_TYPE_EXAMEN);

alter table D_EPREUVE
   add constraint FK_D_EPREUV_CONTIENT__D_CONCOU foreign key (ID_CONCOURS)
      references D_CONCOURS (ID_CONCOURS);

alter table D_ETAPE_RECRUTEMENT
   add constraint FK_D_ETAPE__D_ETAPE_R_DATE foreign key ("DATE")
      references "DATE" ("DATE");

alter table D_ETAPE_RECRUTEMENT
   add constraint FK_D_ETAPE__D_ETAPE_R_R_ETAPE_ foreign key (CODE_POSITION_CANDIDAT)
      references R_ETAPE_RECRUTEMENT (CODE_POSITION_CANDIDAT);

alter table D_ETAPE_RECRUTEMENT
   add constraint FK_D_ETAPE__D_ETAPE_R_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_FICHE_VOEUX
   add constraint FK_D_FICHE__A_FAIT_VO_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_APPARTIEN_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_AVOIR_LIE_R_ETABLI foreign key (ID_ETABLISSEMENT)
      references R_ETABLISSEMENT (ID_ETABLISSEMENT);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_AVOIR_LIE_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_AVOIR_NAT_R_NATURE foreign key (ID_NATURE_FORMATION)
      references R_NATURE_FORMATION (ID_NATURE_FORMATION);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_AVOIR_SPE_R_SPECIA foreign key (ID_SPECIALITE)
      references R_SPECIALITE (ID_SPECIALITE);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_AVOIR_TYP_R_TYPE_F foreign key (ID_TYPE_FORMATION)
      references R_TYPE_FORMATION (ID_TYPE_FORMATION);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_CONTIENT_R_FORMAT foreign key (CODE_FORMATION)
      references R_FORMATION (CODE_FORMATION);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_DANS_EXER_R_EXERCI foreign key (ID_EXERCICE)
      references R_EXERCICE (ID_EXERCICE);

alter table D_FORMATION_DISPONIBLE
   add constraint FK_D_FORMAT_EN_DIFFER_R_SESSIO foreign key (ID_SESSION)
      references R_SESSION (ID_SESSION);

alter table D_FORMATION_THEME_FP
   add constraint FK_D_FORMAT_PROPOSE_P_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_GRILLE_EVALUATION
   add constraint FK_D_GRILLE_AVOIR_DEC_R_DECISI foreign key (CODE_DECISION)
      references R_DECISION (CODE_DECISION);

alter table D_GRILLE_EVALUATION
   add constraint FK_D_GRILLE_AVOIR_GRI_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_GRILLE_EVALUATION
   add constraint FK_D_GRILLE_EVALUER_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_GRILLE_EVALUATION
   add constraint FK_D_GRILLE_EVALUE_DA_D_CONCOU foreign key (ID_CONCOURS)
      references D_CONCOURS (ID_CONCOURS);

alter table D_INCORPORATION
   add constraint FK_D_INCORP_EST_INCOR_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_INCORPORATION
   add constraint FK_D_INCORP_EST_INCOR_R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table D_INCORPORATION
   add constraint FK_D_INCORP_EST_INCOR_R_NIVEAU foreign key (ID_NIVEAU_ETUDE)
      references R_NIVEAU_ETUDE (ID_NIVEAU_ETUDE);

alter table D_INCORPORATION
   add constraint FK_D_INCORP_EST_INCOR_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_INCORPORATION
   add constraint FK_D_INCORP_EST_INCOR_R_CTG foreign key (ID_CTG)
      references R_CTG (ID_CTG);

alter table D_INCORPORATION
   add constraint FK_D_INCORP_EST_INCOR_R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table D_INDISPONIBLE
   add constraint FK_D_INDISP_AVOIR_LIE_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_INDISPONIBLE
   add constraint FK_D_INDISP_A_POUR_IN_D_PERSON foreign key (D_P_ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_INDISPONIBLE
   add constraint FK_D_INDISP_EST_INDIS_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_INDISPONIBLE
   add constraint FK_D_INDISP_POUR_MOTI_R_MOTIF_ foreign key (ID_MOTIF_INDIPONIBILITE)
      references R_MOTIF_INDIPONIBILITE (ID_MOTIF_INDIPONIBILITE);

alter table D_JUGEMENT
   add constraint FK_D_JUGEME_AVOIR_TYP_R_CONDAM foreign key (ID_CONDAMNATION_TYPE)
      references R_CONDAMNATION_TYPE (ID_CONDAMNATION_TYPE);

alter table D_JUGEMENT
   add constraint FK_D_JUGEME_EST_JUGE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_MARRIAGE
   add constraint FK_D_MARRIA_A_LIEU_MA_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_MARRIAGE
   add constraint FK_D_MARRIA_EST_MARIE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_MARRIAGE
   add constraint FK_D_MARRIA_EST_MARIE_D_MARRIA foreign key (ID_MARRIAGE_CONJOINT)
      references D_MARRIAGE_CONJOINT (ID_MARRIAGE_CONJOINT);

alter table D_MARRIAGE_CONJOINT
   add constraint FK_D_MARRIA_CONJOIN_D_R_SEX foreign key (ID_SEX)
      references R_SEX (ID_SEX);

alter table D_MARRIAGE_CONJOINT
   add constraint FK_D_MARRIA_CONJOIN_N_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_MARRIAGE_ENFANTS
   add constraint FK_D_MARRIA_ENFANT_DE_R_SEX foreign key (ID_SEX)
      references R_SEX (ID_SEX);

alter table D_MARRIAGE_ENFANTS
   add constraint FK_D_MARRIA_ENFANT_NE_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_MARRIAGE_ENFANTS
   add constraint FK_D_MARRIA_EST_PERE__D_MARRIA foreign key (ID_MARRIAGE_CONJOINT)
      references D_MARRIAGE_CONJOINT (ID_MARRIAGE_CONJOINT);

alter table D_MEMBRE_COMMISION
   add constraint FK_D_MEMBRE_D_MEMBRE__D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_MEMBRE_COMMISION
   add constraint FK_D_MEMBRE_D_MEMBRE__D_COMISS foreign key (ID_COMMISION_EVALUATION)
      references D_COMISSION_EVALUATION (ID_COMMISION_EVALUATION);

alter table D_MEMBRE_COMMISION
   add constraint FK_D_MEMBRE_D_MEMBRE__R_PROFIL foreign key (LIB_PROFIL_COMMISSION_AR, ID_PROFIL_COMMISSION)
      references R_PROFIL_PERSONEL (LIB_PROFIL_COMMISSION_AR, ID_PROFIL_COMMISSION);

alter table D_MISE_ROUTE
   add constraint FK_D_MISE_R_AVOIR_TYP_R_TYPE_M foreign key (ID_TYPE_MR)
      references R_TYPE_MR (ID_TYPE_MR);

alter table D_MISE_ROUTE
   add constraint FK_D_MISE_R_FAIT_OBJE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_MISE_ROUTE
   add constraint FK_D_MISE_R_MISE_RO foreign key (R_U_CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_MISE_ROUTE
   add constraint FK_D_MISE_R_MISE_ROUT_R_UNI foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_MISSION
   add constraint FK_D_MISSIO_AU_MOYEN__R_MOYENS foreign key (ID_MOYEN)
      references R_MOYENS (ID_MOYEN);

alter table D_MISSION
   add constraint FK_D_MISSIO_A_VEHICUL_R_VEHICU foreign key (ID_VEHICULE)
      references R_VEHICULE (ID_VEHICULE);

alter table D_MISSION
   add constraint FK_D_MISSIO_D_MISSON__D_DEMAND foreign key (ID_DEMANDE_MISSION)
      references D_DEMANDE_MISSION (ID_DEMANDE_MISSION);

alter table D_MISSION_TYPE_RECRUTEMENT
   add constraint FK_D_MISSIO_D_MISSION_R_TYPE_R foreign key (CODE_TYPE_RECRUTEMENT)
      references R_TYPE_RECRUTEMENT (CODE_TYPE_RECRUTEMENT);

alter table D_MISSION_TYPE_RECRUTEMENT
   add constraint FK_D_MISSIO_D_MISSION_D_COMISS foreign key (ID_COMMISION_EVALUATION)
      references D_COMISSION_EVALUATION (ID_COMMISION_EVALUATION);

alter table D_MUTATION
   add constraint FK_D_MUTATI_A_UNITE_R_UNITE foreign key (R_U_CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_MUTATION
   add constraint FK_D_MUTATI_DE_UNITE_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_MUTATION
   add constraint FK_D_MUTATI_EST_MUTER_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_MUTATION
   add constraint FK_D_MUTATI_TYPE_MUTA_R_TYPE_M foreign key (ID_TYPE_MUTATION)
      references R_TYPE_MUTATION (ID_TYPE_MUTATION);

alter table D_NOMINATION
   add constraint FK_D_NOMINA_EST_NOMIN_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_NOMINATION
   add constraint FK_D_NOMINA_OBTIEN_GR_R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table D_NOTATION
   add constraint FK_D_NOTATI_DANS_UNIT_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_NOTATION
   add constraint FK_D_NOTATI_EST_NOTE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_NOTE_EPREUVE
   add constraint FK_D_NOTE_E_D_NOTE_EP_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_NOTE_EPREUVE
   add constraint FK_D_NOTE_E_D_NOTE_EP_D_EPREUV foreign key (ID_EPREUVE)
      references D_EPREUVE (ID_EPREUVE);

alter table D_NOTE_EPREUVE
   add constraint FK_D_NOTE_E_D_NOTE_EP_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_PERMANENCE
   add constraint FK_D_PERMAN_EST_PROGR_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_PERMANENCE
   add constraint FK_D_PERMAN_PERMANENC_R_TYPE_P foreign key (ID_TYPE_PERMANENCE)
      references R_TYPE_PERMANENCE (ID_TYPE_PERMANENCE);

alter table D_PERSONELS_PERMANENCE
   add constraint FK_D_PERSON_D_PERSONE_R_POSTE_ foreign key (CODE_POSTE_PERMANENCE)
      references R_POSTE_PERMANENCE (CODE_POSTE_PERMANENCE);

alter table D_PERSONELS_PERMANENCE
   add constraint FK_D_PERSON_D_PERSONE_D_PERMAN foreign key (ID_PERMANENCE)
      references D_PERMANENCE (ID_PERMANENCE);

alter table D_PERSONELS_PERMANENCE
   add constraint FK_D_PERSON_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONELS_PERMANENCE
   add constraint FK_D_PERSON_D_PERSONE_R_PROFIL foreign key (ID_PROFILE_PERMANENCE)
      references R_PROFILE_PERMANENCE (ID_PROFILE_PERMANENCE);

alter table D_PERSONEL_FONCTION
   add constraint FK_D_PERSON_D_PERSONE_R_STRUCT foreign key (ID_STRUCTURE)
      references R_STRUCTURE (ID_STRUCTURE);

alter table D_PERSONEL_FONCTION
   add constraint FK_D_PERSON_D_PERSONE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONEL_FONCTION
   add constraint FK_D_PERSON_D_PERSONE_R_FONCTI foreign key (ID_FONCTION)
      references R_FONCTION (ID_FONCTION);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_APPARTENT_R_STRUCT foreign key (CODE_STRUCTURE_SN)
      references R_STRUCTURE_SN (CODE_STRUCTURE_SN);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_APPARTIEN_R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_AVOIR_GRO_R_GROUPA foreign key (ID_GROUPAGE)
      references R_GROUPAGE (ID_GROUPAGE);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_AVOIR_LIE_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_AVOIR_NIV_R_NIVEAU foreign key (ID_NIVEAU_ETUDE)
      references R_NIVEAU_ETUDE (ID_NIVEAU_ETUDE);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_AVOIR_SIT_R_SITUAT foreign key (ID_SITUATION_FAMILIALE)
      references R_SITUATION_FAMILIALE (ID_SITUATION_FAMILIALE);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_EST_DE_SE_R_SEX foreign key (ID_SEX)
      references R_SEX (ID_SEX);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_PERSONNEL_R_POSITI foreign key (ID_POSITION)
      references R_POSITION (ID_POSITION);

alter table D_PERSONNELS
   add constraint FK_D_PERSON_POSSEDE_G_R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table D_PERSONNELS_ADRESSE
   add constraint FK_D_PERSON_AVOIR_ADR_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONNELS_ADRESSE
   add constraint FK_D_PERSON_AVOIR_TYP_R_ADRESS foreign key (ID_TYPE_ADRESSE)
      references R_ADRESSE_TYPE (ID_TYPE_ADRESSE);

alter table D_PERSONNELS_DIPLOME
   add constraint FK_D_PERSON_D_PERSONN_D_PER foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONNELS_DIPLOME
   add constraint FK_D_PERSON_D_PERSONN_D_BESOIN foreign key (ID_BESOIN_ACCORDE)
      references D_BESOIN_ACCORDE (ID_BESOIN_ACCORDE);

alter table D_PERSONNELS_DIPLOME
   add constraint FK_D_PERSON_D_PERSONN_R_DIPLOM foreign key (ID_R_DIPLOME)
      references R_DIPLOME (ID_R_DIPLOME);

alter table D_PERSONNELS_DIPLOME
   add constraint FK_D_PERSON_D_PERSONN_R_SPECIA foreign key (ID_SPECIALITE)
      references R_SPECIALITE (ID_SPECIALITE);

alter table D_PERSONNELS_MISSIONS
   add constraint FK_D_PERSON_D_PERSO foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONNELS_MISSIONS
   add constraint FK_D_PERSON_D_PERSONN_D_MISSIO foreign key (ID_MISSION)
      references D_MISSION (ID_MISSION);

alter table D_PERSONNELS_MISSIONS
   add constraint FK_D_PERSON_D_PERSONN_R_PROFIL foreign key (ID_PROFILE)
      references R_PROFILE (ID_PROFILE);

alter table D_PERSONNELS_PHOTOS
   add constraint FK_D_PERSON_AVOIR_PHO_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONNELS_PIECES
   add constraint FK_D_PERSON_AVOIR_TYP_R_TYPE_P foreign key (ID_TYPE_PIECE)
      references R_TYPE_PIECE (ID_TYPE_PIECE);

alter table D_PERSONNELS_PIECES
   add constraint FK_D_PERSON_PERSONEL__D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONNEL_CONCOURS
   add constraint FK_D_PERSON_D_PERSONN_R_RESULT foreign key (ID_RESULTAT_CONCOURS)
      references R_RESULTAT_CONCOURS (ID_RESULTAT_CONCOURS);

alter table D_PERSONNEL_CONCOURS
   add constraint FK_D_PERSON_D_PERSONN_D_PERSO foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PERSONNEL_CONCOURS
   add constraint FK_D_PERSON_D_PERSONN_D_CONCOU foreign key (ID_CONCOURS)
      references D_CONCOURS (ID_CONCOURS);

alter table D_PERSONNEL_COURRIER
   add constraint FK_D_PERSON_D_PERSONN_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table D_PERSONNEL_COURRIER
   add constraint FK_D_PERSON_D_PERSONN_D_PE foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_POSTE_ACCORDE
   add constraint FK_D_POSTE__ACCORDER__R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_POSTE_ACCORDE
   add constraint FK_D_POSTE__ACCORDE_A_R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table D_POSTE_ACCORDE
   add constraint FK_D_POSTE__ACCORDE_S_R_SPECIA foreign key (ID_SPECIALITE)
      references R_SPECIALITE (ID_SPECIALITE);

alter table D_POSTE_ACCORDE
   add constraint FK_D_POSTE__ACORDE_SE_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table D_PRESENCE
   add constraint FK_D_PRESEN_EST_PRESE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_PRISE_CONTACTE
   add constraint FK_D_PRISE__D_PRISE foreign key (DAT_DATE)
      references "DATE" ("DATE");

alter table D_PRISE_CONTACTE
   add constraint FK_D_PRISE__D_PRISE_C_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_PRISE_CONTACTE
   add constraint FK_D_PRISE__D_PRISE_C_R_RESULT foreign key (ID_RESULTAT_PRISE_CONTACT)
      references R_RESULTAT_PRISE_CONTACT (ID_RESULTAT_PRISE_CONTACT);

alter table D_PRISE_CONTACTE
   add constraint FK_D_PRISE__D_PRI foreign key ("DATE")
      references "DATE" ("DATE");

alter table D_PRISE_CONTACTE
   add constraint FK_D_PRISE__D_PRISE_C_R_MOTIF_ foreign key (ID_MOTIF_PRISE_CONTACT)
      references R_MOTIF_PRISE_CONTACT (ID_MOTIF_PRISE_CONTACT);

alter table D_PRISE_CONTACTE
   add constraint FK_D_PRISE__D_PRISE_C_D_CONTAC foreign key (ID_CONTACT)
      references D_CONTACT (ID_CONTACT);

alter table D_PRIX_FORMATION
   add constraint FK_D_PRIX_F_D_PRIX_FO_R_EXERCI foreign key (ID_EXERCICE)
      references R_EXERCICE (ID_EXERCICE);

alter table D_PRIX_FORMATION
   add constraint FK_D_PRIX_F_D_PRIX_FO_R_FORMAT foreign key (CODE_FORMATION)
      references R_FORMATION (CODE_FORMATION);

alter table D_PRIX_FORMATION
   add constraint FK_D_PRIX_F_D_PRIX_FO_R_ETABLI foreign key (ID_ETABLISSEMENT)
      references R_ETABLISSEMENT (ID_ETABLISSEMENT);

alter table D_PRIX_FORMATION
   add constraint FK_D_PRIX_F_D_PRIX_FO_R_OPTION foreign key (ID_OPTION_FORMATION)
      references R_OPTION_FORMATION (ID_OPTION_FORMATION);

alter table D_PROCHE_URG
   add constraint FK_D_PROCHE_AVOIR_PRO_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_RADIATION
   add constraint FK_D_RADIAT_EST_RADIE_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_RADIATION
   add constraint FK_D_RADIAT_EST_RADIE_R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table D_RADIATION
   add constraint FK_D_RADIAT_EST_RADIE_R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table D_RADIATION
   add constraint FK_D_RADIAT_EST_RADIE_R_MOTIF_ foreign key (ID_MOTIF_RADIATION)
      references R_MOTIF_RADIATION (ID_MOTIF_RADIATION);

alter table D_RADIATION
   add constraint FK_D_RADIAT_EST_RADIE_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table D_RESULTAT_CONCOUR
   add constraint FK_D_RESULT_D_RESULTA_R_RESULT foreign key (ID_RESULTAT_CONCOURS)
      references R_RESULTAT_CONCOURS (ID_RESULTAT_CONCOURS);

alter table D_RESULTAT_CONCOUR
   add constraint FK_D_RESULT_D_RESULTA_D_CONCOU foreign key (ID_CONCOURS)
      references D_CONCOURS (ID_CONCOURS);

alter table D_RESULTAT_CONCOUR
   add constraint FK_D_RESULT_D_RESULTA_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_SANCTION
   add constraint FK_D_SANCTI_D_SANCTIO_D_ARREST foreign key (ID_ARRESTATION)
      references D_ARRESTATION (ID_ARRESTATION);

alter table D_SANCTION
   add constraint FK_D_SANCTI_EST_SANCT_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_SOLLICITEUR
   add constraint FK_D_SOLLIC_D_SOLLICI_D_INTERV foreign key (ID_SOLLICITEUR)
      references D_INTERVENANT (ID_SOLLICITEUR);

alter table D_SOLLICITEUR
   add constraint FK_D_SOLLIC_D_SOLLICI_D_CANDID foreign key (ID_INSCRIPTION)
      references D_CANDIDAT_INSCRIPTION (ID_INSCRIPTION);

alter table D_SOUS_DOSSIER_DOCUMENTS
   add constraint FK_D_SOUS_D_D_SOUS_DO_D_DOSSIE foreign key (ID_DOSSIER)
      references D_DOSSIER (ID_DOSSIER);

alter table D_SUIVI_FORMATION
   add constraint FK_D_SUIVI__D_SUIVI_F_R_ETAPE_ foreign key (ID_ETAPE_FORMATION)
      references R_ETAPE_FORMATION (ID_ETAPE_FORMATION);

alter table D_SUIVI_FORMATION
   add constraint FK_D_SUIVI__D_SUIVI_F_D_PERSON foreign key (ID_PERSONNEL)
      references D_PERSONNELS (ID_PERSONNEL);

alter table D_SUIVI_FORMATION
   add constraint FK_D_SUIVI__D_SUIVI_F_D_BESOIN foreign key (ID_BESOIN_ACCORDE)
      references D_BESOIN_ACCORDE (ID_BESOIN_ACCORDE);

alter table D_SUIVI_FORMATION
   add constraint FK_D_SUIVI__D_SUIVI_F_D_FORMAT foreign key (ID_FORMATION_THEME_FP)
      references D_FORMATION_THEME_FP (ID_FORMATION_THEME_FP);

alter table D_SUJET_EPREUVE
   add constraint FK_D_SUJET__D_SUJET_E_D_SUJET_ foreign key (ID_SUJET_EXAMEN)
      references D_SUJET_EXAMEN (ID_SUJET_EXAMEN);

alter table D_SUJET_EPREUVE
   add constraint FK_D_SUJET__D_SUJET_E_D_EPREUV foreign key (ID_EPREUVE)
      references D_EPREUVE (ID_EPREUVE);

alter table D_SUJET_EXAMEN
   add constraint FK_D_SUJET__D_SUJET_M_R_MATIER foreign key (ID_MATIERE)
      references R_MATIERE (ID_MATIERE);

alter table EST_DESTINE
   add constraint FK_EST_DEST_EST_DESTI_R_TYPE_D foreign key (ID_TYPE_DEST_COURRIER)
      references R_TYPE_DEST_COURRIER (ID_TYPE_DEST_COURRIER);

alter table EST_DESTINE
   add constraint FK_EST_DEST_EST_DESTI_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table EST_DESTINE
   add constraint FK_EST_DEST_EST_DESTI_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table EVALUER_CRITERE
   add constraint FK_EVALUER__EVALUER_C_R_SOUS_C foreign key (ID_SOUS_CRITERE_EVALUATION)
      references R_SOUS_CRITERE_EVALUATION (ID_SOUS_CRITERE_EVALUATION);

alter table EVALUER_CRITERE
   add constraint FK_EVALUER__EVALUER_C_D_GRILLE foreign key (ID_GRILLLE_EVALUATION)
      references D_GRILLE_EVALUATION (ID_GRILLLE_EVALUATION);

alter table EVALUER_CRITERE
   add constraint FK_EVALUER__EVALUER_C_R_EVALUA foreign key (ID_EVALUATION)
      references R_EVALUATION (ID_EVALUATION);

alter table EXPRIME_BESOIN
   add constraint FK_EXPRIME__EXPRIME_B_D_FORMAT foreign key (ID_FORMATION_DISPONIBLE)
      references D_FORMATION_DISPONIBLE (ID_FORMATION_DISPONIBLE);

alter table EXPRIME_BESOIN
   add constraint FK_EXPRIME__EXPRIME_B_D_COURRI foreign key (ID_COURRIER)
      references D_COURRIER (ID_COURRIER);

alter table EXPRIME_BESOIN
   add constraint FK_EXPRIME__EXPRIME_B_R_TYPE_B foreign key (ID_TYPE_BESOIN)
      references R_TYPE_BESOIN (ID_TYPE_BESOIN);

alter table PHOTO_GRADE
   add constraint FK_PHOTO_GR_PHOTO_GRA_R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table PHOTO_GRADE
   add constraint FK_PHOTO_GR_PHOTO_GRA_D_PERSON foreign key (ID_CONTACT_URG3)
      references D_PERSONNELS_PHOTOS (ID_CONTACT_URG3);

alter table R_ARME
   add constraint FK_R_ARME_APPARTIEN_R_COMMAN foreign key (ID_COMMANDEMENT)
      references R_COMMANDEMENT (ID_COMMANDEMENT);

alter table R_DIP_SPEC
   add constraint FK_R_DIP_SP_R_DIP_SPE_R_SPECIA foreign key (ID_SPECIALITE)
      references R_SPECIALITE (ID_SPECIALITE);

alter table R_DIP_SPEC
   add constraint FK_R_DIP_SP_R_DIP_SPE_R_DIPLOM foreign key (ID_R_DIPLOME)
      references R_DIPLOME (ID_R_DIPLOME);

alter table R_FONCTION
   add constraint FK_R_FONCTI_AVOIR_COD_R_POSTE foreign key (ID_POSTE)
      references R_POSTE (ID_POSTE);

alter table R_GRADE
   add constraint FK_R_GRADE_APPARTIEN_R_CATEGO foreign key (ID_CATEGORIE_TED)
      references R_CATEGORIE_TED (ID_CATEGORIE_TED);

alter table R_GRADE
   add constraint FK_R_GRADE_AVOIR_CAT_R_CAT_GR foreign key (ID_CAT_GRADE)
      references R_CAT_GRADE (ID_CAT_GRADE);

alter table R_NIVEAU_ETUDE
   add constraint FK_R_NIVEAU_POSSEDE_C_R_CAT_GR foreign key (ID_CAT_GRADE)
      references R_CAT_GRADE (ID_CAT_GRADE);

alter table R_PROFIL_CATEGORIE
   add constraint FK_R_PROFIL_R_PROFIL__R_GRADE foreign key (ID_GRADE)
      references R_GRADE (ID_GRADE);

alter table R_PROFIL_CATEGORIE
   add constraint FK_R_PROFIL_R_PROFIL__R_PROFIL foreign key (ID_PROFILE_PERMANENCE)
      references R_PROFILE_PERMANENCE (ID_PROFILE_PERMANENCE);

alter table R_SOUS_CRITERE_EVALUATION
   add constraint FK_R_SOUS_C_AVOIR_SOU_R_CRITER foreign key (ID_CRITERE_EVALUATION)
      references R_CRITERE_EVALUATION (ID_CRITERE_EVALUATION);

alter table R_STRUCTURE
   add constraint FK_R_STRUCT_AVOI foreign key (ID_TYPE_STRUCT)
      references R_TYPE_STRUCTURE (ID_TYPE_STRUCT);

alter table R_STRUCTURE
   add constraint FK_R_STRUCT_CONSTITUE_R_STRUCT foreign key (R_S_ID_STRUCTURE)
      references R_STRUCTURE (ID_STRUCTURE);

alter table R_STRUCTURE_SN
   add constraint FK_R_STRUCT_AVOIR_TYP_R_T foreign key (ID_TYPE_STRUCTURE_SN)
      references R_TYPE_STRUCTURE_SN (ID_TYPE_STRUCTURE_SN);

alter table R_TED
   add constraint FK_R_TED_AVOIR_ARM_R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table R_TED
   add constraint FK_R_TED_AVOIR_ARM_R_ARMEME foreign key (ID_ARMEMENT)
      references R_ARMEMENT (ID_ARMEMENT);

alter table R_TED
   add constraint FK_R_TED_AVOIR_CAT_R_CATEGO foreign key (ID_CATEGORIE_TED)
      references R_CATEGORIE_TED (ID_CATEGORIE_TED);

alter table R_TED
   add constraint FK_R_TED_AVOIR_FON_R_FONCTI foreign key (ID_FONCTION)
      references R_FONCTION (ID_FONCTION);

alter table R_TED
   add constraint FK_R_TED_AVOIR_HAB_R_HABILI foreign key (ID_R_HABILITATION)
      references R_HABILITATION (ID_R_HABILITATION);

alter table R_TED
   add constraint FK_R_TED_AVOIR_QUA_R_QUALIF foreign key (ID_QUALIFICATION)
      references R_QUALIFICATION (ID_QUALIFICATION);

alter table R_TED
   add constraint FK_R_TED_AVOIR_STR_R_STRUCT foreign key (ID_STRUCTURE)
      references R_STRUCTURE (ID_STRUCTURE);

alter table R_TYPE_MR
   add constraint FK_R_TYPE_M_MR_A_UNIT_R_UNITE foreign key (R_U_CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table R_TYPE_MR
   add constraint FK_R_TYPE_M_MR_DE_UNI_R_UNITE foreign key (CODE_UNITE)
      references R_UNITE (CODE_UNITE);

alter table R_UNITE
   add constraint FK_R_UNITE_APARTIEN__R_ARME foreign key (ID_ARME)
      references R_ARME (ID_ARME);

alter table R_UNITE
   add constraint FK_R_UNITE_SITUER_DA_R_CODE_G foreign key (CODE_APC)
      references R_CODE_GEO (CODE_APC);

alter table R_UNITE
   add constraint FK_R_UNITE_UNITE_APP_R_ARME foreign key (R_A_ID_ARME)
      references R_ARME (ID_ARME);

