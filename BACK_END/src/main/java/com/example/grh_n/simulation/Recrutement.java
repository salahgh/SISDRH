package com.example.grh_n.simulation;


import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "SIM_RECRUTEMENT")
public class Recrutement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    Integer anneDeRecrutemnt;
    Integer nombre;
    TypeRecrutement typeRecrutement;
    @ManyToOne
    Simulation simulation;

}
