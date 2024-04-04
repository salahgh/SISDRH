//
//package com.example.grh_n.recrutement.candidat.projections.DTO;
//
//import com.example.grh_n.entities.REntities.*;
//import com.querydsl.core.annotations.QueryProjection;
//import lombok.Data;
//
//import java.io.Serializable;
//import java.math.BigInteger;
//import java.time.LocalDate;
//
//@Data
//public class DCandidatDtoDetails implements Serializable {
//
//    private final String id;
//    private final String noma;
//    private final String pnoma;
//    private final BigInteger moyenne;
//    private final RSexEntitie RSexEntitie;
//    private final RCodeGeoEntitie ln;
//    private final RCodeGeoEntitie lr;
//    private final LocalDate dateObtention ;
//    private final LocalDate dn;
//    private final RDiplomeEntitie idRDiplome;
//    private final RSpecialiteEntitie idRspecialite;
//    private final REtablissementEntitie rEtablissement;
//    private final String adresse ;
//
//    @QueryProjection
//    public DCandidatDtoDetails(
//            String id,
//            String noma,
//            String pnoma,
//            BigInteger moyenne,
//            RSexEntitie RSexEntitie,
//            RCodeGeoEntitie ln,
//            RCodeGeoEntitie lr,
//            LocalDate dateObtention,
//            LocalDate dn,
//            RDiplomeEntitie idRDiplome,
//            RSpecialiteEntitie idRspecialite,
//            REtablissementEntitie rEtablissement,
//            String adresse
//            ) {
//
//        this.id = id;
//        this.noma = noma;
//        this.pnoma = pnoma;
//        this.moyenne = moyenne;
//        this.RSexEntitie = RSexEntitie;
//        this.ln = ln;
//        this.lr = lr;
//        this.dateObtention = dateObtention;
//        this.dn = dn;
//        this.idRDiplome = idRDiplome;
//        this.idRspecialite = idRspecialite;
//        this.rEtablissement = rEtablissement;
//        this.adresse = adresse;
//    }
//}
//
//
