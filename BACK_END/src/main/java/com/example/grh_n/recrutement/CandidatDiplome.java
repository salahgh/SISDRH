package com.example.grh_n.recrutement;


import com.example.grh_n.rh.entities.REntities.RDiplomeCivile;
import com.example.grh_n.rh.entities.REntities.Specialite;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "REC_CANDIDAT_DIPLOME")
public class CandidatDiplome {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id;

    @ManyToOne
    Inscription inscription;

    @ManyToOne
    @JoinColumn(name = "diplome_id")
    RDiplomeCivile diplomeCivile;

    @ManyToOne
    Specialite specialite;

    Integer anne;

    Float moyenne;

    @Size(max = 255)
    @Column(name = "diplomesecole")
    private String diplomesecole;

}
