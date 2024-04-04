package com.example.grh_n.dbdsn.entities;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class DemandeRadiation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id ;

    LocalDate dateDemande ;

    @ManyToOne
    PamOff2024 pamOff2024 ;
}
