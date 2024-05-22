package com.example.grh_n.rh.entities.REntities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Getter
@Setter
@Table(name = "RH_R_UNITE")
public class RhRunite {

    @Id
    @Column(name = "ID", nullable = false, precision = 0)
    private String id;

    @Column(name = "LIB_UNITEE_FR", nullable = true)
    private String libUniteeFr;

    @Column(name = "LIB_UNITEE_AR", nullable = true)
    private String libUniteeAr;

   @ManyToOne
   @JoinColumn(name = "ID_REGION")
   private RhRRegionMilitaire regionMilitaire ;

    @Column(name = "ABREVIATION_AR", nullable = true)
    private String abreviationAr;

    @Column(name = "ABREVIATION_FR", nullable = true)
    private String abreviationFr;

    @ManyToOne
    @JoinColumn(name = "LIEU_UNITE")
    private RhRCodeGeo lieuUnite ;

    @Column(name = "DESSOUTE", nullable = true, length = 1)
    private String dessoute;

}
