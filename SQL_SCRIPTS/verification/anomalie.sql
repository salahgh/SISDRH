DROP VIEW GRHDSN.VV_VERIF_PERSONELS;

CREATE OR REPLACE FORCE VIEW GRHDSN.VV_VERIF_PERSONELS
            (MATRICULE, NOM, PNOM, LIB_GRADE_AR, OBS,
             GRADE)
AS
select "MATRICULE", "NOM", "PNOM", "LIB_GRADE_AR", "OBS", "GRADE"
from (select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'manque nom fr' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and nom is null

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'manque pnom fr' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and pnom is null

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'manque nom ar' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and NOMA is null

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'manque pnom ar' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and pnoma is null

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'manque ppere' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and PPERE is null

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'champ détaché null' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and DETACHE is null

      union
      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'APC_R INCONNU' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and APC_R = '0'

      union
      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'manque numero acte naissance' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and N_A_NAIS is null

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'matricule errone' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and (
          to_number(SUBSTR(PERSONNELS.MATRICULE, 5, 2)) < 1 or to_number(SUBSTR(PERSONNELS.MATRICULE, 5, 2)) > 58
              OR LENGTH(PERSONNELS.MATRICULE) <> 12
              or to_number(SUBSTR(PERSONNELS.MATRICULE, 1, 4)) < 1980 or
          to_number(SUBSTR(PERSONNELS.MATRICULE, 5, 2)) > 2023
          )

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'groupe sanguin' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and (PERSONNELS.GS < 1 or PERSONNELS.GS > 8 or PERSONNELS.GS is null)

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'numero ccp non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and (substr(PERSONNELS.CCP, length(PERSONNELS.CCP) - 2, 1) <> '/')

      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'numero de telephone non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and (length(PERSONNELS.PHONE) <> 10 or PERSONNELS.PHONE is null or substr(PERSONNELS.PHONE, 1, 1) <> 0 or
             substr(PERSONNELS.PHONE, 1, 2) not in (5, 6, 7))

      /*union

      select matricule , nom , pnom , r_grade.LIB_GRADE_AR, r_grade.GRADE ,  'email non conforme ou absent' obs  from PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
     where POSITION = 10
      and (length(PERSONNELS.MAIL) is null or PERSONNELS.MAIL not like '%@%')
     */
      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'sex non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and (PERSONNELS.SEX not in ('ذكر', 'أنثى'))
/*
 union

 select matricule , nom , pnom , r_grade.LIB_GRADE_AR, r_grade.GRADE ,  'a prevenir est vide' obs  from PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
where POSITION = 10
 and (PERSONNELS.PREVENIR_ABS is null )

 union

 select matricule , nom , pnom , r_grade.LIB_GRADE_AR, r_grade.GRADE ,  'a prevenir numero de telephone est vide' obs  from PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
where POSITION = 10
 and (PERSONNELS.PHONE_ABS is null )
*/
      union

      select matricule, nom, pnom, r_grade.LIB_GRADE_AR, r_grade.GRADE, 'adresse pro est vide' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and (PERSONNELS.ADRESSE_PRO is null)
/*
 union

 select matricule , nom , pnom , r_grade.LIB_GRADE_AR, r_grade.GRADE ,  'niveau non conforme' obs  from PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
where POSITION = 10
 and (PERSONNELS.NIVEAU in ('00','01','02','03','04','05','06','07','08','09') )


 union

 select
PERSONNELS.matricule ,
nom ,
pnom ,
r_grade.LIB_GRADE_AR, r_grade.GRADE ,
'taille est vide ou non conforme' obs
from
PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
left join INFO_PHYSIQUE on PERSONNELS.matricule = INFO_PHYSIQUE.matricule

where
POSITION = 10
and
( INFO_PHYSIQUE.TAILLE is null or INFO_PHYSIQUE.TAILLE not like '%.%' )

union

select
PERSONNELS.matricule ,
nom ,
pnom ,
r_grade.LIB_GRADE_AR, r_grade.GRADE ,
'info physique non conforme' obs
from
PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
left join INFO_PHYSIQUE on PERSONNELS.matricule = INFO_PHYSIQUE.matricule
where
POSITION = 10
and
INFO_PHYSIQUE.VISAGE is null
*/
      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'donnee mariage saisi et situation celibataire' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 0
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.MATRICULE is not null

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'marier sans information de mariage' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.MATRICULE is null

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'reference autorisation de mariage est vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.MATRICULE is not null
        and (EST_MARIER.REF_AUTO is null or EST_MARIER.REF_AUTO not like '%/%')

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'date reference autorisation de mariage est vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        and EST_MARIER.MATRICULE is not null
        AND PERSONNELS.GRADE <> 91
        and (EST_MARIER.D_REF_AUTO is null or EST_MARIER.D_REF_AUTO < '01/01/1960' or
             EST_MARIER.D_REF_AUTO > SYSDATE + 1)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'date reconaissance de mariage est vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.MATRICULE is not null
        and (EST_MARIER.D_REF_RECON is null or EST_MARIER.D_REF_RECON < '01/01/1960' or
             EST_MARIER.D_REF_RECON > SYSDATE + 1 or EST_MARIER.D_REF_RECON < EST_MARIER.D_REF_AUTO)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'reconaissance de mariage est vide ou non conforme' obs

      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        and EST_MARIER.MATRICULE is not null
        AND PERSONNELS.GRADE <> 91
        and (EST_MARIER.REF_RECON is null or EST_MARIER.REF_RECON not like '%/%')

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'n_acte_mariage est vide' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.MATRICULE is not null
        and (EST_MARIER.N_ACT_MARIAGE is null)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'date acte de mariage est vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        and EST_MARIER.MATRICULE is not null
        AND PERSONNELS.GRADE <> 91
        and (EST_MARIER.D_ACT is null or EST_MARIER.D_ACT < EST_MARIER.D_REF_AUTO or EST_MARIER.D_ACT < '01/01/1960' or
             EST_MARIER.D_ACT > SYSDATE + 1)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'date declaration sur lhonneur de mariage est vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        and EST_MARIER.MATRICULE is not null
        AND PERSONNELS.GRADE <> 91
        and (EST_MARIER.D_DEC_HONNEUR is null or EST_MARIER.D_DEC_HONNEUR < '01/01/1960' or
             EST_MARIER.D_DEC_HONNEUR > SYSDATE + 1)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'date demande d autorisation de mariage est vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        and EST_MARIER.MATRICULE is not null
        AND PERSONNELS.GRADE <> 91
        and (EST_MARIER.D_DEMANDE_AUTO_MAR is null or EST_MARIER.D_DEMANDE_AUTO_MAR < '01/01/1960' or
             EST_MARIER.D_DEMANDE_AUTO_MAR > SYSDATE + 1)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'apc de mariage est vide' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.MATRICULE is not null
        and (EST_MARIER.APC_MAR is null)

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'date de naissance epouse et vide ou non conforme' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
               left join CONJOIN on EST_MARIER.ID_CONJOIN = CONJOIN.ID_CONJOIN
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.matricule is not null
        and (CONJOIN.DN_EP is null or CONJOIN.DN_EP > '01/01/2005')


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'ppere epouse est vide' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
               left join CONJOIN on EST_MARIER.ID_CONJOIN = CONJOIN.ID_CONJOIN
      where POSITION = 10
        AND PERSONNELS.GRADE <> 91
        and situation = 1
        and EST_MARIER.matricule is not null
        and (CONJOIN.PPERE_EP is null)


      union


      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'nmere epouse est vide' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
               left join CONJOIN on EST_MARIER.ID_CONJOIN = CONJOIN.ID_CONJOIN
      where POSITION = 10
        AND PERSONNELS.GRADE <> 91
        and situation = 1
        and EST_MARIER.matricule is not null
        and (CONJOIN.NMERE_EP is null)


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'pmere epouse est vide' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MARIER on PERSONNELS.MATRICULE = EST_MARIER.MATRICULE
               left join CONJOIN on EST_MARIER.ID_CONJOIN = CONJOIN.ID_CONJOIN
      where POSITION = 10
        and situation = 1
        AND PERSONNELS.GRADE <> 91
        and EST_MARIER.matricule is not null
        and (CONJOIN.PMERE_EP is null)


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque acte engagement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE

      where POSITION = 10
        and PERSONNELS.GRADE not like ('9%')
        and r_grade.LIB_GRADE_FR not like '%CONTINGENT'
        and PERSONNELS.matricule not in (select matricule from a_signer)


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque duree engagement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join a_signer on a_signer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from a_signer where matricule = PERSONNELS.matricule)
        and a_signer.DUREE is null


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque type engagement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join a_signer on a_signer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from a_signer where matricule = PERSONNELS.matricule)
        and a_signer.TYPE_ENG is null

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque methode engagement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join a_signer on a_signer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from a_signer where matricule = PERSONNELS.matricule)
        and a_signer.METHOD_ENG is null

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque unité engagement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join a_signer on a_signer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from a_signer where matricule = PERSONNELS.matricule)
        and a_signer.UNITEE = '0'


/*********************/

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'LA DATE AVIS ENGAGEMENT EST NULL' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join a_signer on a_signer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from a_signer where matricule = PERSONNELS.matricule)
        and a_signer.d_avis_eng is null


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'LE NUMERO AVIS ENGAGEMENT EST NULL' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join a_signer on a_signer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from a_signer where matricule = PERSONNELS.matricule)
        and a_signer.avis_eng is null

/*****************************/


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   info avis  recrutement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_recrute on est_recrute.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_recrute where matricule = PERSONNELS.matricule)
        and (est_recrute.avis_recrut IS NULL or est_recrute.d_avis_recrut IS NULL)


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info recrutement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and PERSONNELS.GRADE like ('9%')
        and matricule not in (select matricule from est_recrute)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   unité  dans  recrutement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_recrute on est_recrute.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_recrute where matricule = PERSONNELS.matricule)
        and (est_recrute.UNITE IS NULL)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   GRADE  dans  recrutement' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_recrute on est_recrute.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_recrute where matricule = PERSONNELS.matricule)
        and (est_recrute.GRADE IS NULL)


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info grade' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE

      where POSITION = 10
        and r_grade.LIB_GRADE_FR not like '%CONTINGENT'
        and PERSONNELS.GRADE not like ('9%')
        and r_grade.LIB_GRADE_FR not like 'ELEVE%'
        and matricule not in (select matricule from est_nominer_g)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque ref nomination' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_nominer_g on est_nominer_g.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_nominer_g where matricule = PERSONNELS.matricule)
        and (est_nominer_g.ref_nomin is null or est_nominer_g.d_ref_nomin is null)


/*
 union
        select
            PERSONNELS.matricule ,
            nom ,
            pnom ,
            r_grade.LIB_GRADE_AR, r_grade.GRADE ,
            'erreur grade engagement ' obs
        from
            PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
                        left join est_nominer_g on est_nominer_g.matricule = PERSONNELS.matricule

        where
                POSITION = 10   and exists (select matricule from est_nominer_g where matricule=PERSONNELS.matricule)
          and( (est_nominer_g.matricule,est_nominer_g.GRADE )in (select matricule, grade from a_signer   ) )

*/

      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info ref stage' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_STAGIERE on EST_STAGIERE.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_STAGIERE where matricule = PERSONNELS.matricule)
        and (EST_STAGIERE.ref_stage is null or EST_STAGIERE.d_ref_stage is null)


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info ref stage' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_STAGIERE on EST_STAGIERE.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_STAGIERE where matricule = PERSONNELS.matricule)
        and (EST_STAGIERE.ref_f_stage is null or EST_STAGIERE.d_ref_f_stage is null)


      union


      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info stage ou etude' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE

      where POSITION = 10
        and r_grade.LIB_GRADE_FR not like '%CONTINGENT'
        and matricule not in (select matricule from EST_STAGIERE)
      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info mise en route' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE

      where POSITION = 10
        and r_grade.LIB_GRADE_FR not like '%CONTINGENT'
        and PERSONNELS.GRADE not like ('9%')
        and matricule not in (select matricule from mise_route)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque old unité dans mise en route' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join mise_route on mise_route.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from mise_route where matricule = PERSONNELS.matricule)
        and (mise_route.OLD_UNITE is null or mise_route.OLD_UNITE = '0')


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque new unité dans mise en route' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join mise_route on mise_route.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from mise_route where matricule = PERSONNELS.matricule)
        and (mise_route.NEW_UNITE is null or mise_route.NEW_UNITE = '0')


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info avis mutation dans mise en route' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join mise_route on mise_route.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from mise_route where matricule = PERSONNELS.matricule)
        and (mise_route.d_avis_mutation is null or mise_route.n_avis_mutation is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info  mise en route' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join mise_route on mise_route.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from mise_route where matricule = PERSONNELS.matricule)
        and (mise_route.d_m_route is null or mise_route.n_m_route is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque type fonction dans affectation' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_affect on est_affect.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_affect where matricule = PERSONNELS.matricule)
        and (est_affect.TYPE_FONCT is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque unité dans affectation' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_affect on est_affect.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_affect where matricule = PERSONNELS.matricule)
        and (est_affect.UNITE is null or est_affect.UNITE = '0')

/***********************************************/
      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info ref_decision' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_affect on est_affect.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_affect where matricule = PERSONNELS.matricule)
        and (est_affect.ref_decision is null or est_affect.d_ref_decision is null)


      union


      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info ref_cess_fonction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_affect on est_affect.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_affect where matricule = PERSONNELS.matricule)
        and (est_affect.ref_cess_fonction is null or est_affect.d_ref_cess_fonction is null)

      /*    select
              PERSONNELS.matricule ,
              nom ,
              pnom ,
              r_grade.LIB_GRADE_AR, r_grade.GRADE ,
              'manque info pca categrorie/degree' obs
          from
              PERSONNELS  left join r_grade on r_grade.GRADE = PERSONNELS.GRADE

          where
                  POSITION = 10 and   PERSONNELS.GRADE  like ('9%') and
                  matricule  not in ( select matricule from  info_Pca  )
          union
  */
      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info mutation' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE

      where POSITION = 10
        and r_grade.LIB_GRADE_FR not like '%CONTINGENT'
        and PERSONNELS.GRADE not like ('9%')
        and r_grade.LIB_GRADE_FR not like 'ELEVE%'
        and matricule not in (select matricule from EST_MUTER)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque old unité dans mutation' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MUTER on EST_MUTER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_MUTER where matricule = PERSONNELS.matricule)
        and EST_MUTER.OLD_UNITE is null

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info avis mutation' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MUTER on EST_MUTER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_MUTER where matricule = PERSONNELS.matricule)
        and (EST_MUTER.ref_mut is null or EST_MUTER.d_ref_mut is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque stage dans mutation "هل المعني ذاهب لتربص"' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MUTER on EST_MUTER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_MUTER where matricule = PERSONNELS.matricule)
        and EST_MUTER.stage is null


      union

      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque photo' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
      where POSITION = 10
        and matricule not in (select matricule from photos)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque autorité dans sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.AUTORITE is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque condition dans sanction "الظروف التي صاحبت إرتكاب الخطأ"' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.CONDITION is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque motif sanction dans sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.MOTIF_SANCTION is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque date debut arret dans sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.D_D_ARRET is null and est_sanctionne.CODE_SANCTION in ('4', '5', '6'))

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque date fin arret dans sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.D_F_ARRET is null and est_sanctionne.CODE_SANCTION in ('4', '5', '6'))

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque nbre de jour arret dans sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.JOURS is null and est_sanctionne.CODE_SANCTION in ('4', '5', '6'))

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque unité arret dans sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.UNITE is null and est_sanctionne.CODE_SANCTION in ('4', '5', '6'))


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info reference  sanction' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_sanctionne on est_sanctionne.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_sanctionne where matricule = PERSONNELS.matricule)
        and (est_sanctionne.ref_sanction is null or est_sanctionne.d_ref_sanction is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque chef unité  dans  NOTE_HDT' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_HDT on EST_NOTE_HDT.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_HDT where matricule = PERSONNELS.matricule)
        and (EST_NOTE_HDT.CHEF_UNITE is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque obs chef   dans  NOTE_HDT' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_HDT on EST_NOTE_HDT.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_HDT where matricule = PERSONNELS.matricule)
        and (EST_NOTE_HDT.OBS_CHEF is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque unité   dans  NOTE_HDT' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_HDT on EST_NOTE_HDT.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_HDT where matricule = PERSONNELS.matricule)
        and (EST_NOTE_HDT.UNITE is null or EST_NOTE_HDT.UNITE = '0')


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque fonction   dans  NOTE_HDT' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_HDT on EST_NOTE_HDT.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_HDT where matricule = PERSONNELS.matricule)
        and (EST_NOTE_HDT.FONCTION is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque fonction    dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.FONCTION is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque unité   dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.UNITE is null or EST_NOTE_OFF.UNITE = '0')

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque fonction chef   dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.FONCTION_CHEF is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque  chef   dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.FONCTION_CHEF is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque fonction chef   dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.CHEF is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque APPRECIATION chef   dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.APPR_CHEF is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque CAP_OFF chef   dans  NOTE_OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_OFF on EST_NOTE_OFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_OFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_OFF.CAP_OFF is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque unité   dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.UNITE is null or EST_NOTE_SOFF.UNITE = '0')

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque OBS CHEF   dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.OBS_CHEF is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque fonction   dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.fonction is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque  detail dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.detail is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque  CHEF   dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.CHEF is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque  CHEF UNITE  dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.CHEF_UNITE is null)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque  unite   dans  NOTE_SOUS OFF' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_SOFF on EST_NOTE_SOFF.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_SOFF where matricule = PERSONNELS.matricule)
        and (EST_NOTE_SOFF.unite = 0)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   UNITE  dans  NOTE_PCA' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_PCA on EST_NOTE_PCA.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_PCA where matricule = PERSONNELS.matricule)
        and (EST_NOTE_PCA.UNITE is null or EST_NOTE_PCA.UNITE = '0')

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   OBS  dans  NOTE_PCA' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_PCA on EST_NOTE_PCA.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_PCA where matricule = PERSONNELS.matricule)
        and (EST_NOTE_PCA.OBS IS NULL)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   fonction  dans  NOTE_PCA' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_NOTE_PCA on EST_NOTE_PCA.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_NOTE_PCA where matricule = PERSONNELS.matricule)
        and (EST_NOTE_PCA.FONCTION IS NULL)
      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque  derniere unité csn 51 dans mutation' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_MUTER on EST_MUTER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and EST_MUTER.UNITEE not in ('90203', '245008', '245002', '245009', '245010', '245001')
        and EST_MUTER.d_ref_mut in (select max(d_ref_mut) from EST_MUTER where matricule = PERSONNELS.matricule)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque   UNITE  dans  est_incorporer' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_incorporer on est_incorporer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_incorporer where est_incorporer.matricule = PERSONNELS.matricule)
        and (est_incorporer.UNITEE IS NULL)

      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info avis inco' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join est_incorporer on est_incorporer.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from est_incorporer where est_incorporer.matricule = PERSONNELS.matricule)
        and (est_incorporer.avis_inco IS NULL or est_incorporer.d_avis_inco IS NULL)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info reference decoration' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_DECORER on EST_DECORER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_DECORER where EST_DECORER.matricule = PERSONNELS.matricule)
        and (EST_DECORER.ref_act_deco is null or EST_DECORER.d_ref_act_deco is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info reference avis divorce' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_DIVORCER on EST_DIVORCER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_DIVORCER where EST_DIVORCER.matricule = PERSONNELS.matricule)
        and (EST_DIVORCER.ref_avis_div is null or EST_DIVORCER.d_ref_avis_div is null)


      union
      select PERSONNELS.matricule,
             nom,
             pnom,
             r_grade.LIB_GRADE_AR,
             r_grade.GRADE,
             'manque info reference bordereau envoi avis divorce' obs
      from PERSONNELS
               left join r_grade on r_grade.GRADE = PERSONNELS.GRADE
               left join EST_DIVORCER on EST_DIVORCER.matricule = PERSONNELS.matricule

      where POSITION = 10
        and exists (select matricule from EST_DIVORCER where matricule = PERSONNELS.matricule)
        and (EST_DIVORCER.ref_bord is null or EST_DIVORCER.d_ref_bord is null))
order by GRADE asc;

create table tmp_verification as select * from VV_VERIF_PERSONELS ;