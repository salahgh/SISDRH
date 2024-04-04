package com.example.grh_n.dbdsn.entities;

import com.example.grh_n.rh.entities.REntities.RhRunite;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "FICHE_VOEUX")
public class FicheVoeux {

    @EmbeddedId
    FicheVoeuxId id ;

    @ManyToOne
    @MapsId("matricule")
    @JoinColumn(name = "matricule")
    PamOff2024 pamOff2024;

    @ManyToOne
    @JoinColumn(name = "unite_1")
    RhRunite rhRunite1;

    @ManyToOne
    @JoinColumn(name = "unite_2")
    RhRunite rhRunite2;

    @ManyToOne
    @JoinColumn(name = "unite_3")
    RhRunite rhRunite3;

    @Basic
    @Column(name = "OBS_1", nullable = true, length = 1000)
    private String obs1;
    @Basic
    @Column(name = "OBS_2", nullable = true, length = 1000)
    private String obs2;
    @Basic
    @Column(name = "OBS_3", nullable = true, length = 1000)
    private String obs3;
    @Basic
    @Column(name = "OBS_CHEF", nullable = true, length = 4000)
    private String obsChef;
    @Basic
    @Column(name = "OBS_SDRH", nullable = true, length = 4000)
    private String obsSdrh;
    @Basic
    @Column(name = "OBS_DSN", nullable = true, length = 4000)
    private String obsDsn;
    @Basic
    @Column(name = "OBS_BSN", nullable = true, length = 4000)
    private String obsBsn;
    @Basic
    @Column(name = "MV_CSN", nullable = false, length = 2)
    private String mvCsn;
    @Basic
    @Column(name = "OBS_DRSN", nullable = true, length = 4000)
    private String obsDrsn;

}
