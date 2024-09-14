package com.example.grh_n.rh.entities.DEntitites.Personnel;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "RH_R_TYPE_ADRESSE")
public class TypeAdresse {

    @Id
    String id ;

    String libAr;

}
