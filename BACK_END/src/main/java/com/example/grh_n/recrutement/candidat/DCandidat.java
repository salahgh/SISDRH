//package com.example.grh_n.recrutement.candidat;
//import com.example.grh_n.recrutement.entities.DEntities.DCandidatInscription;
//import com.example.grh_n.entities.DEntities.DContact;
//import com.example.grh_n.entities.REntities.RCodeGeoEntitie;
//import com.example.grh_n.entities.REntities.RSexEntitie;
//import lombok.*;
//import jakarta.persistence.*;
//import java.time.LocalDate;
//import java.util.Set;
//
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//@Entity
//@Table(name = "D_CANDIDAT")
//public class DCandidat {
//    @Id
//    @Column(name = "ID_CANDIDAT", nullable = false, length = 10)
//    private String id;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "LN", nullable = false)
//    private RCodeGeoEntitie ln;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "ID_SEX", nullable = false)
//    @ToString.Exclude
//    private RSexEntitie RSexEntitie;
//
//    @Column(name = "NOMA", nullable = false, length = 50)
//    private String noma;
//
//    @Column(name = "PNOMA", nullable = false, length = 50)
//    private String pnoma;
//
//    @Column(name = "NOM", nullable = false)
//    private String nom;
//
//    @Column(name = "PNOM", nullable = false)
//    private String pnom;
//
//    @Column(name = "DN", nullable = false)
//    private LocalDate dn;
//
//    @Column(name = "PPERE", nullable = false)
//    private String ppere;
//
//    @Column(name = "NMERE", nullable = false)
//    private String nmere;
//
//    @Column(name = "PMERE", nullable = false)
//    private String pmere;
//
//    @Column(name = "ADRESSE", nullable = false)
//    private String adresse;
//
//    @OneToMany(mappedBy = "idCandidat")
//    private Set<DCandidatInscription> dCandidatInscriptions ;
//
//    @OneToMany(mappedBy = "idCandidat")
//    private Set<DContact> dContacts ;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "LR", nullable = false)
//    private RCodeGeoEntitie lr;
//
//    @Column(name = "PHOTO")
//    private byte[] photo;
//
//
//
//}
