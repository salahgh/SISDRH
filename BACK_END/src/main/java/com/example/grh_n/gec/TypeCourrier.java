package com.example.grh_n.gec;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "GEC_R_TYPE_COURRIER")
public class TypeCourrier {

    @Id
    String id;

    String libAr ;
    String libFr ;

}

