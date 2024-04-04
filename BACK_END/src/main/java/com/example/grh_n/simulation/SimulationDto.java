package com.example.grh_n.simulation;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SimulationDto {

        Long id;
        LocalDateTime dateDebut;
        LocalDateTime dateFin;
        String name;
        String description;
        Integer numberOfSteps;
}
