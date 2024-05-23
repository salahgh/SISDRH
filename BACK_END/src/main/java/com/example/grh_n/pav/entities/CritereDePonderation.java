package com.example.grh_n.pav.entities;

import com.example.grh_n.rh.entities.REntities.ted.RhPoste;
import com.example.grh_n.rh.entities.REntities.RhRGrade;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CritereDePonderation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id ;

    @ManyToOne
    RhPoste poste ;

    @ManyToOne
    RhRGrade grade ;

    boolean chef ;

    Integer note ;

}
