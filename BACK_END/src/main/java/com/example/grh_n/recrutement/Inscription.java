package com.example.grh_n.recrutement;

import com.example.grh_n.rh.entities.REntities.CodeGeo;
import com.example.grh_n.rh.entities.REntities.Sex;
import com.example.grh_n.rh.entities.REntities.Wilaya;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "REC_D_INSCRIPTION")
public class Inscription {

    @Id
    String id ;

    @ManyToOne
    Candidat candidat ;

    @OneToMany(mappedBy = "inscription")
    List<CandidatDiplome> diplomes;

    @ManyToOne
    Exercice exercice ;

    @ManyToOne
    TypeRecrutemnt typeRecrutemnt ;

    @Size(max = 255)
    @Column(name = "diplomesautre_dip")
    private String autreDiplome;

    @Column(name = "date_insc")
    private LocalDate dateInsc;

    @ManyToOne
    Wilaya wr;

    @Size(max = 255)
    @Column(name = "id_insadresse")
    private String adresse;

    @Size(max = 255)
    @Column(name = "id_instele")
    private String telephone;

    @Size(max = 255)
    @Column(name = "id_insmail")
    private String email;

    @Size(max = 255)
    @Column(name = "id_insnom")
    private String nom;

    @Size(max = 255)
    @Column(name = "id_insprenom")
    private String pnom;

    @Size(max = 255)
    @Column(name = "id_insnom_ar")
    private String noma;

    @Size(max = 255)
    @Column(name = "id_insprenom_ar")
    private String pnoma;

    @Column(name = "id_insdate_naissance")
    private LocalDate dn;

    @ManyToOne
    Sex sex;

    @ManyToOne
    Wilaya wn;

    @Size(max = 255)
    @Column(name = "id_insnom_pr")
    private String ppere;

    @Column(name = "id_insdate_np")
    private LocalDate pereDn;

    @ManyToOne
    Wilaya wnPere;

    @Size(max = 255)
    @Column(name = "id_insnom_mere")
    private String nmere;

    @Size(max = 255)
    @Column(name = "id_insprenom_mere")
    private String pmere;

    @ManyToOne
    Wilaya wnMere;

    @Column(name = "id_insdate_nm")
    private LocalDate mereDn;

    @ManyToOne
    Nationalite nationalite;

}