package com.example.grh_n.rh.entities.DEntitites.Personnel;

import com.example.grh_n.Photos.Photo;
import com.example.grh_n.dbdsn.entities.PamOff2024;
import com.example.grh_n.rh.entities.REntities.ted.RhPoste;
import com.example.grh_n.rh.entities.REntities.RhRArme;
import com.example.grh_n.rh.entities.REntities.RhRGrade;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "D_PERSONNELS")
public class DPersonnel {
    @Id
    @Column(name = "ID_PERSONNEL", nullable = false, length = 12)
    private String id;

    @Column(name = "MATRICULE", unique = true, nullable = false)
    private String matricule;
    @Column(name = "NOM")
    private String nom;

    @OneToOne(mappedBy = "personnel" , optional = true)
    PamOff2024 pamOff2024;

    @Column(name = "PNOM")
    private String pnom;

    @Column(name = "NOMA")
    private String noma;

    @Column(name = "PNOMA")
    private String pnoma;

    @OneToMany(mappedBy = "personnel", fetch = FetchType.LAZY)
    private List<Photo> photos = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_grade")
    private RhRGrade grade;

    @ManyToOne
    @JoinColumn(name = "id_arme")
    private RhRArme arme;

    @ManyToOne
    @JoinColumn(name = "poste")
    private RhPoste poste ;

    @OneToMany(mappedBy = "personnel")
    List<Adresse> adresses ;


//    @OneToOne(mappedBy = "personnel" , fetch = FetchType.LAZY)
//    private User user;
//
//    @OneToOne(mappedBy = "personnel" , fetch = FetchType.LAZY)
//    private DemandeInscriptionUser demandeInscriptionUser;

}
