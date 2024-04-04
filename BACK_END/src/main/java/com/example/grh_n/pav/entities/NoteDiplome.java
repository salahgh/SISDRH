package com.example.grh_n.pav.entities;

import com.example.grh_n.rh.entities.REntities.RhRGrade;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoteDiplome {

    @Id
    String id;

    @OneToOne
    @JoinColumn(name = "idGrade")
    RhRGrade grade;

    Integer note ;

    Integer index_ ;

    String lib ;

}
