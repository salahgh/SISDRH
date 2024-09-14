package com.example.grh_n.recrutement;


import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Entity
@Table(name = "REC_D_CANDIDAT")
public class Candidat {

    @Id
    @Size(max = 255)
    @Column(name = "id")
    private String id;


}