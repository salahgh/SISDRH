package com.example.grh_n.pav.entities;


import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Pav {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @OneToOne
    @JoinColumn(name = "personnel")
    private DPersonnel personnel;

    @OneToOne
    @JoinColumn(name = "idNoteDiplome")
    private NoteDiplome noteDiplome;

    @OneToOne
    @JoinColumn(name = "idPonderation")
    private CritereDePonderation ponderation ;

    @OneToMany(mappedBy = "pav")
    private List<FelicitationsPav> felicitations;

    @OneToMany(mappedBy = "pav")
    private List<SanctionsPav> sanctions;

    Boolean chef;
    Integer anne;
    Integer noteGlobale;
    Integer dureeExcercice;
    Integer ancienneteDansLeGrade;
    Integer noteRegionale;
    Integer noteArme;
    Integer nombreDeProposition;
    Integer dureeExcerciceUnite;
    Integer costumSort;
}
