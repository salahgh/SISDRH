package com.example.grh_n.recrutement;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CandidatSearchDto {

    private String id;
    private LocalDate dateInsc;
    private LocalDate dnDebut;
    private LocalDate dnFin;
    private String token;
    private List<String> idSex;
    private List<String> wilayaNaissanceIds;
    private List<String> wilayaResidenceIds;
    private String telephone;
    private String email;
    private List<String> diplomeIds ;
    private List<String> specialiteIds;
    private String autreDiplome;
}
