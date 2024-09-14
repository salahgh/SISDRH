package com.example.grh_n.gec;

import com.example.grh_n.rh.entities.REntities.RhRunite;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "GEC_R_COURIER_AUTORITE")
public class CourrierAutorite {

    @Id
    Long id ;

    @OneToOne
    @MapsId("id")
    @JoinColumn(name = "id")
    RhRunite rhRunite ;


}
