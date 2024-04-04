package com.example.grh_n.rh.entities.REntities.ted;

import com.example.grh_n.rh.entities.REntities.RhRArme;
import com.example.grh_n.rh.entities.REntities.RhRCatGrade;
import com.example.grh_n.rh.entities.REntities.RhRTypeStructureSn;
import com.example.grh_n.security.user.Habilitation;
import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class RhRTed {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id ;

    private Integer nombre;

    private String observation ;

    @ManyToOne
    @JoinColumn(name = "ID_HABILITATION")
    private Habilitation habilitation;

    @ManyToOne
    @JoinColumn(name = "ID_QUALIFICATION")
    private RhRQualification qualification ;

    @ManyToOne
    @JoinColumn(name = "ID_ARME")
    private RhRArme arme ;

    @ManyToOne
    @JoinColumn(name = "ID_SPECIALITE_TED")
    private RhRSpecialiteTed specialiteTed ;

    @ManyToOne
    @JoinColumn(name = "ID_ARMEMENT")
    private RhRArmementTed armementTed ;


    // todo voir le cas du off superieur !!!
    @ManyToOne
    @JoinColumn(name = "ID_CAT_GRADE")
    private RhRCatGrade catGrade ;

    @ManyToOne
    @JoinColumn(name = "ID_TYPE_STRUCTURE_SN")
    private RhRTypeStructureSn typeStructureSn ;


}
