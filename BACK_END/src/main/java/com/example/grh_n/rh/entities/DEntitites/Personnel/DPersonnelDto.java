package com.example.grh_n.rh.entities.DEntitites.Personnel;

import lombok.*;
import java.io.Serializable;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DPersonnelDto implements Serializable {
    private  String id;
    private  String matricule;
    private  String nom;
    private  String pnom;
    private  String noma;
    private  String pnomA;
}
