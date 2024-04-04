package com.example.grh_n.pav.entities.dto;

import lombok.Data;

import java.util.List;

@Data
public class PavDto {

    private String id;
    private String matricule;
    private String idNoteDiplome;
    private String idPonderation;
    private List<FelicitationDto> felicitationsPavs;
    private List<SanctionDto> sanctionsPavs;
    private boolean chef;
    private int anne;
    private int noteGlobale;
    private int dureeExcercice;
    private int ancienneteDansLeGrade;
    private int noteRegionale;
    private int noteArme;
    private int nombreDeProposition;
    private int dureeExcerciceUnite;
}
