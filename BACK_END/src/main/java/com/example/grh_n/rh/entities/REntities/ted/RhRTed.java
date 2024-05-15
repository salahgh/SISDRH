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
@Table(name = "RH_TED_R")
public class RhRTed {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id ;

    private Integer nombre;

    private String observation ;

    @ManyToOne
    private Habilitation habilitation;

    @ManyToOne
    private RhRQualification qualification ;

    @ManyToOne
    private RhRArme arme ;

    @ManyToOne
    private RhRSpecialiteTed specialiteTed ;

    @ManyToOne
    private RhRArmementTed armementTed ;

    // todo voir le cas du off superieur !!!
    @ManyToOne
    @JoinColumn(name = "ID_CAT_GRADE")
    private RhRCatGrade catGrade ;

    @ManyToOne
    @JoinColumn(name = "ID_TYPE_STRUCTURE_SN")
    private RhRTypeStructureSn typeStructureSn ;
}
