package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@Table(name = "R_DIPLOME_MILITAIRE")
@NoArgsConstructor
@AllArgsConstructor
public class RDiplomeMilitaire {

    @Id
    @Column(name = "CODE_DIP_MIL", length = 254)
    private String codeDipMil;

    @Column(name = "LIB_AR", length = 254)
    private String libAr;

    @Column(name = "LIB_FR", length = 254)
    private String libFr;

    @Column(name = "ABR_AR", length = 20)
    private String abrAr;

    @Column(name = "ABR_FR", length = 20)
    private String abrFr;

}