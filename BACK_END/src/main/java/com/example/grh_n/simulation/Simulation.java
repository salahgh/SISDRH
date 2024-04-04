package com.example.grh_n.simulation;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
@Table(name = "SIM_SIMULATION")
public class Simulation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    LocalDateTime dateDebut;
    LocalDateTime dateFin;
    String name;
    String description;
    Integer numberOfSteps;
    @OneToMany(mappedBy = "simulation")
    List<SimAgent> simAgents;

    @OneToMany(mappedBy = "simulation")
    List<Recrutement> recrutements ;
}
