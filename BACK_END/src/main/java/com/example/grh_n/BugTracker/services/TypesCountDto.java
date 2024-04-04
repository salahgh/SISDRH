package com.example.grh_n.BugTracker.services;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

import java.io.Serializable;

@Data
public class TypesCountDto implements Serializable {

    @QueryProjection
    public TypesCountDto(Long id, String typeAr, String typeFr, String typeAn, Long count_) {
        this.id = id;
        this.typeAr = typeAr;
        this.typeFr = typeFr;
        this.typeAn = typeAn;
        this.count_ = count_;
    }

    private final Long id;
    private final String typeAr;
    private final String typeFr;
    private final String typeAn;
    private final Long count_;
}
