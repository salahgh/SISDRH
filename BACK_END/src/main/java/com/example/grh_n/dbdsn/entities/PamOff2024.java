package com.example.grh_n.dbdsn.entities;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import com.example.grh_n.rh.entities.REntities.RDiplomeCivile;
import com.example.grh_n.rh.entities.REntities.RDiplomeMilitaire;
import com.example.grh_n.rh.entities.REntities.RhRStructureSn;
import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigInteger;
import java.util.List;

@Entity
@Getter
@Table(name = "PAM_OFF_2024")
public class PamOff2024 {
    @Id
    @Column(name = "MATRICULE", length = 50)
    private String matricule;

    @OneToMany(mappedBy = "pamOff2024")
    List<DemandeRadiation> demandeRadiations;

    @OneToMany(mappedBy = "pamOff2024")
    List<FicheVoeux> ficheVoeuxes;

    @OneToMany(mappedBy = "pamOff2024")
    List<PersonnelNote> personnelNotes;

    @ManyToOne(optional = true)
    @JoinColumn(name = "code_dip_mil")
    RDiplomeMilitaire dipmil;

    @ManyToOne(optional = true)
    @JoinColumn(name = "code_dip_civ")
    RDiplomeCivile dipcivil;

    @OneToOne(optional = true)
    @MapsId
    @JoinColumn(name = "MATRICULE")
    DPersonnel personnel;

    @Basic
    @Column(name = "NOMA", nullable = true, length = 50)
    private String noma;
    @Basic
    @Column(name = "PNOMA", nullable = true, length = 50)
    private String pnoma;
    @Basic
    @Column(name = "GRADE", nullable = true, length = 40)
    private String grade;
    @Basic
    @Column(name = "G", nullable = false, precision = 0)
    private BigInteger g;
    @Basic
    @Column(name = "ENS", nullable = true, precision = 0)
    private BigInteger ens;
    @Basic
    @Column(name = "arme", nullable = true, precision = 0)
    private BigInteger arme;
    @Basic
    @Column(name = "LIB_ARME_AR", nullable = true, length = 60)
    private String libArmeAr;
    @Basic
    @Column(name = "CSN", nullable = true, length = 91)
    private String csn;

    @ManyToOne
    @JoinColumn(name = "C")
    RhRStructureSn structureSn;

    @Basic
    @Column(name = "N_MUTATION", nullable = true, precision = 0)
    private BigInteger nMutation;

    @Basic
    @Column(name = "DUREE_N", nullable = true, precision = 0)
    private BigInteger dureeN;

    @Basic
    @Column(name = "FONCTION", nullable = true, length = 100)
    private String fonction;
    @Basic
    @Column(name = "ENS_FONCTION", nullable = true, precision = 0)
    private BigInteger ensFonction;

    @Basic
    @Column(name = "DUREE_S", nullable = true, length = 51)
    private String dureeS;

    @Basic
    @Column(name = "N_DUREE_S", nullable = true, length = 51)
    private Integer nDureeS;

    @Basic
    @Column(name = "poste", nullable = true, length = 51)
    private String poste;

    @Basic
    @Column(name = "tri_", nullable = true, length = 51)
    private String trieAnciennete;

    @Basic
    @Column(name = "PROP", nullable = true, length = 51)
    private Integer promotionNumber;

    @Basic
    @Column(name = "DUREE_FONCT", nullable = true, length = 51)
    private String DUREE_FONCT;

    @Basic
    @Column(name = "dip_civ", nullable = true, length = 51)
    private String dip_civ;

    @Basic
    @Column(name = "dip_mil", nullable = true, length = 51)
    private String dip_mil;

    @Basic
    @Column(name = "code_dip_civ", nullable = true, length = 51 , insertable = false , updatable = false)
    private String code_dip_civ;

    @Basic
    @Column(name = "code_dip_mil", nullable = true, length = 51 , insertable = false , updatable = false)
    private String code_dip_mil;

    @Basic
    @Column(name = "formation", nullable = true, length = 51)
    private String formation;

    @Basic
    @Column(name = "obs", nullable = true, length = 51)
    private String obs;
}
