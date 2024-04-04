package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "R_DIPLOME_CIVILE")
public class RDiplomeCivile {

    @Id
    @Size(max = 254)
    @Column(name = "CODE_DIP_CIV", length = 254)
    private String codeDipCiv;

    @Size(max = 20)
    @Column(name = "ABR_AR", length = 20)
    private String abrAr;

    @Size(max = 254)
    @Column(name = "ABR_FR", length = 254)
    private String abrFr;

    @Size(max = 254)
    @Column(name = "LIB_AR", length = 254)
    private String libAr;

    @Size(max = 254)
    @Column(name = "LIB_FR", length = 254)
    private String libFr;

}