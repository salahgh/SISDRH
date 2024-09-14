package com.example.grh_n.recrutement;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "REC_R_TYPE_RECRUTEMENT")
public class TypeRecrutemnt {

    @Id
    String id ;

}
