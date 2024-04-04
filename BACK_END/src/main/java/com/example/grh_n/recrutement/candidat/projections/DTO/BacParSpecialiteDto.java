package com.example.grh_n.recrutement.candidat.projections.DTO;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;

@Getter
public class BacParSpecialiteDto {

    private final String lib_specialite ;
    private final String id_specialte ;
    private final Long count ;

    @QueryProjection
    public BacParSpecialiteDto(String lib_specialite, String id_specialte, Long count) {
        this.lib_specialite = lib_specialite;
        this.id_specialte = id_specialte;
        this.count = count;
    }
}
