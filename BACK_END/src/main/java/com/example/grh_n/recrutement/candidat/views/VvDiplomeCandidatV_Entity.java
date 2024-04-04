//package com.example.grh_n.candidat.views;
//
//import com.example.grh_n.entities.REntities.RDiplomeEntitie;
//import com.example.grh_n.entities.REntities.REtablissementEntitie;
//import com.example.grh_n.entities.REntities.RSpecialiteEntitie;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import jakarta.persistence.*;
//import org.hibernate.annotations.GenerationTime;
//
//import java.math.BigInteger;
//import java.time.LocalDate;
//
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@org.hibernate.annotations.Immutable
//@Table(name = "VV_DIPLOME_CANDIDAT", catalog = "")
//public class VvDiplomeCandidatV_Entity {
//
//    @Id
//    @org.hibernate.annotations.Generated(value = GenerationTime.NEVER)
//    @Column(name = "ID_INSCRIPTION", nullable = false, length = 12)
//    private String idInscription;
//    @Basic
//    @Column(name = "DATE_OBTENSION", nullable = true)
//    private LocalDate dateObtension;
//    @Basic
//    @Column(name = "MOYENNE", nullable = true, precision = 0)
//    private BigInteger moyenne;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "ID_R_DIPLOME", nullable = false)
//    private RDiplomeEntitie idRDiplome;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "ID_SPECIALITE", nullable = false)
//    private RSpecialiteEntitie idSpecialite;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "ID_ETABLISSEMENT", nullable = false)
//    private REtablissementEntitie idEtablissement;
//}
