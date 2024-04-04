package com.example.grh_n.recrutement;

import lombok.*;

import jakarta.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "R_DECISION")
public class RDecision {
    @Id
    @Column(name = "CODE_DECISION", nullable = false)
    private Boolean id ;

    @Column(name = "LIB_DECISION_AR", nullable = false, length = 256)
    private String libDecisionAr;

    @Column(name = "LIB_DECISION_FR", nullable = false, length = 256)
    private String libDecisionFr;



}
