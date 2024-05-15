package com.example.grh_n.rh.entities.REntities.ted;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TedDto {

    private Long Id ;

    private Integer nombre;

    private String observation ;

    private String idHabilitation;

    private Long idQualification ;

    private Long idArme ;


    private String idSpecialiteTed ;

    private String idArmementTed ;

    // todo voir le cas du off superieur !!!
    private Long idCatGrade ;

    private String idTypeStructureSn ;

}






