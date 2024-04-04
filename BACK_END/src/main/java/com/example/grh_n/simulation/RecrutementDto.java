package com.example.grh_n.simulation;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@ToString
public class RecrutementDto {
    private Long id;
    Integer anneDeRecrutemnt;
    Integer nombre;
    TypeRecrutement typeRecrutement;
    Long simulationId ;
}
