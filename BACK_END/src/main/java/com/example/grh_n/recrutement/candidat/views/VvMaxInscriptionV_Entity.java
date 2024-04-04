//package com.example.grh_n.candidat.views;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import jakarta.persistence.*;
//import org.hibernate.annotations.GenerationTime;
//
//import java.sql.Date;
//
//
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@org.hibernate.annotations.Immutable
//@Table(name = "VV_MAX_INSCRIPTION")
//
//public class VvMaxInscriptionV_Entity {
//    @Id
//    @org.hibernate.annotations.Generated(value = GenerationTime.NEVER)
//    @Column(name = "ID_INSCRIPTION", nullable = false, length = 12)
//    private String idInscription;
//    @Basic
//    @Column(name = "ID_PERSONNEL", nullable = true, length = 10)
//    private String idPersonnel;
//    @Basic
//    @Column(name = "CODE_TYPE_RECRUTEMENT", nullable = false, length = 10)
//    private String codeTypeRecrutement;
//    @Basic
//    @Column(name = "CODE_UNITE", nullable = true, length = 7)
//    private String codeUnite;
//    @Basic
//    @Column(name = "ID_SITUATION_FAMILIALE", nullable = false, length = 1)
//    private String idSituationFamiliale;
//    @Basic
//    @Column(name = "ID_EXERCICE", nullable = false, length = 4)
//    private String idExercice;
//    @Basic
//    @Column(name = "ID_CANDIDAT", nullable = false, length = 10)
//    private String idCandidat;
//    @Basic
//    @Column(name = "ID_SESSION", nullable = false, length = 1)
//    private String idSession;
//    @Basic
//    @Column(name = "D_INSCIPTION", nullable = true)
//    private Date dInsciption;
//    @Basic
//    @Column(name = "OBSERVATION", nullable = true, length = 1024)
//    private String observation;
//}
