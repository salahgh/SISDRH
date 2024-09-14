package com.example.grh_n.gec;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "GEC_COURRIER")
public class Courrier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id;
    String reference;
    LocalDate dateReference;
    String referenceArrive;
    LocalDate dateReferenceArrive;

    @ManyToOne
    CourrierAutorite autorite ;

    @ManyToOne
    TypeCourrier typeCourrier ;

    @ManyToMany
    @JoinTable(
            name = "GEC_COURRIER_DESTINATAIRE",
            joinColumns = @JoinColumn(name = "COURRIER_ID"),
            inverseJoinColumns = @JoinColumn(name = "DESTINATAIRE_ID"))
    List<CourrierAutorite> destinataires ;

    @ManyToMany
    @JoinTable(
            name = "GEC_COURRIER_REFERENCE",
            joinColumns = @JoinColumn(name = "COURRIER_ID"),
            inverseJoinColumns = @JoinColumn(name = "REFERENCE_ID"))
    List<Courrier> references;

    @OneToMany(mappedBy = "courrier")
    List<CourrierAttachment> attachments;

    LocalDate deadLine ;

    boolean answerRequired ;

}
