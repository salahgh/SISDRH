package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class TypeTextReglementaireCountDto {
    private String id;

    private String libTypeTexteAr;

    private String libTypeTexteFr;
    private Long count_ ;

    @QueryProjection
    public TypeTextReglementaireCountDto(String id, String libTypeTexteAr, String libTypeTexteFr , Long count_) {
        this.id = id;
        this.libTypeTexteAr = libTypeTexteAr;
        this.libTypeTexteFr = libTypeTexteFr;
        this.count_ = count_ ;
    }
}
