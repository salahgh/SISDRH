package com.example.grh_n.rh.entities.REntities;

import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "R_SITUATION_FAMILIALE")
public class RSituationFamiliale {
    @Id
    @Column(name = "ID_SITUATION_FAMILIALE", nullable = false, length = 1)
    private String id;

    @Column(name = "LIB_SITUATION_FAMILIALE_AR", length = 256)
    private String libSituationFamilialeAr;

    @Column(name = "LIB_SITUATION_FAMILIALE_FR", length = 256)
    private String libSituationFamilialeFr;
}
