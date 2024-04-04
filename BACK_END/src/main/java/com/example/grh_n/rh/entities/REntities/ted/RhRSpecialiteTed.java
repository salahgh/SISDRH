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
@Table(name = "RH_R_SPECIALITE_TED")
public class RhRSpecialiteTed {

    @Id
    @Column(name = "id", nullable = false)
    private BigInteger id;

    @Column(name = "LIB_SPECIALITE_FR", nullable = true, length = 60)
    private String libSpecialiteFr;

    @Column(name = "LIB_SPECIALITE_AR", nullable = true, length = 60)
    private String libSpecialiteAr;

    // many to many association with specialite ou diplome

    @OneToMany(mappedBy = "specialiteTed")
    @ToString.Exclude
    private List<RhRTed> rTeds ;

    public void setrTeds(List<RhRTed> rTeds) {
        this.rTeds = rTeds;
    }

    public List<RhRTed> getrTeds() {
        return rTeds;
    }

}
