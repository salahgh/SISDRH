package com.example.grh_n.recrutement;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "REC_R_EXERCICE")
public class Exercice {

    @Id
    String id;

}
