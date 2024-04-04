package com.example.grh_n.pav.entities;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "PAV_R_FELICITATION")
public class RFelicitation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id;

    String autorite ;

    Integer note ;

}
