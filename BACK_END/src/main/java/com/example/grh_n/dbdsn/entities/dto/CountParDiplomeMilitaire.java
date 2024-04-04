package com.example.grh_n.dbdsn.entities.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class CountParDiplomeMilitaire {

    private String codeDipMil;
    private String abrAr;
    private String abrFr;
    private String libAr;
    private String libFr;
    private Long count_;

    @QueryProjection
    public CountParDiplomeMilitaire(
            String codeDipMil,
            String abrAr,
            String abrFr,
            String libAr,
            String libFr,
            Long count_
    ) {
        this.codeDipMil = codeDipMil;
        this.abrAr = abrAr;
        this.abrFr = abrFr;
        this.libAr = libAr;
        this.libFr = libFr;
        this.count_ = count_;
    }
}

