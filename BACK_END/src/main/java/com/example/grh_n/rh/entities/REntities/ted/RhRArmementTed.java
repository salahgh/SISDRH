package com.example.grh_n.rh.entities.REntities.ted;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "RH_TED_R_ARMEMENT")
public class RhRArmementTed {

    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "LIB_ARMEMENT_FR", nullable = true, length = 60)
    private String libArmementFr;

    @Column(name = "LIB_ARMEMENT_AR", nullable = true, length = 60)
    private String libArmementAr;

    // many to many association with specialite ou diplome

    @OneToMany(mappedBy = "armementTed")
    @ToString.Exclude
    private List<RhRTed> rTeds ;


}
