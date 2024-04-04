package com.example.grh_n.simulation;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@ToString
public class RecrutementV2Dto {
    Integer anneDeRecrutemnt;
    String FS_L ;
    String FS_M ;
    String EMP ;
    String FF ;
    Long simulationId ;
}
