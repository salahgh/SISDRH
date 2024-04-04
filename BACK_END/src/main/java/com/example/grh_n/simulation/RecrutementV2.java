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
@Table(name = "SIM_RECRUTEMENT_V2")
public class RecrutementV2 {

    @Id
    Integer anneDeRecrutemnt;
    String FS_L ;
    String FS_M ;
    String EMP ;
    String FF ;
    @ManyToOne
    Simulation simulation;


}

