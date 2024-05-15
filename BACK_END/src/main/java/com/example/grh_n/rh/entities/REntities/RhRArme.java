package com.example.grh_n.rh.entities.REntities;

import com.example.grh_n.rh.entities.REntities.ted.RhRTed;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigInteger;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "RH_R_ARME")
public class RhRArme {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "LIB_ARME_FR", nullable = true, length = 60)
    private String libArmeFr;

    @Column(name = "LIB_ARME_AR", nullable = true, length = 60)
    private String libArmeAr;

    @ManyToOne
    @JoinColumn(name = "id_commandement")
    private RhRCommandement commandement ;

    @Getter
    @Setter
    @OneToMany(mappedBy = "arme")
    @ToString.Exclude
    private List<RhRTed> rTeds ;

    @Column(nullable = true , name = "isTed")
    private String isTed ;

}
