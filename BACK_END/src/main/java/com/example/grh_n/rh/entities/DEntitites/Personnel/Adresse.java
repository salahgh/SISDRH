package com.example.grh_n.rh.entities.DEntitites.Personnel;

import com.example.grh_n.rh.entities.REntities.CodeGeo;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "RH_D_ADRESSES")
@Builder
public class Adresse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id;

    @ManyToOne
    CodeGeo apc;

    @ManyToOne
    TypeAdresse typeAdresse;

    @ManyToOne
    DPersonnel personnel;

    LocalDate dateDebut;

    LocalDate dateFin;

    String libAdresse;

}
