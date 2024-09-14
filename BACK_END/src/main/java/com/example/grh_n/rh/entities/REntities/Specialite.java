package com.example.grh_n.rh.entities.REntities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "RH_R_SPECIALITE")
public class Specialite {

    @Id
    String id ;

    String libAr ;

    String libFr ;

}
