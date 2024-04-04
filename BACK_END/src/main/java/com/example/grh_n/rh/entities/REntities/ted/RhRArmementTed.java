package com.example.grh_n.rh.entities.REntities.ted;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigInteger;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "RH_R_ARMEMENT_TED")
public class RhRArmementTed {

    @Id
    @Column(name = "id", nullable = false)
    private BigInteger id;

    @Column(name = "LIB_ARMEMENT_FR", nullable = true, length = 60)
    private String libArmementFr;

    @Column(name = "LIB_ARMEMENT_AR", nullable = true, length = 60)
    private String libArmementAr;

    // many to many association with specialite ou diplome

    @OneToMany(mappedBy = "armementTed")
    @ToString.Exclude
    private List<RhRTed> rTeds ;

    public void setrTeds(List<RhRTed> rTeds) {
        this.rTeds = rTeds;
    }

    public List<RhRTed> getrTeds() {
        return rTeds;
    }

}
