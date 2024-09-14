package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "R_SEX")
public class Sex {

    @Id
    @Column(name = "ID_SEX", nullable = false, length = 1)
    private String id;
    @Basic
    @Column(name = "LIB_SEX_AR", nullable = true, length = 15)
    private String libAr;
    @Basic
    @Column(name = "LIB_SEX_FR", nullable = true, length = 15)
    private String libFr;


}
