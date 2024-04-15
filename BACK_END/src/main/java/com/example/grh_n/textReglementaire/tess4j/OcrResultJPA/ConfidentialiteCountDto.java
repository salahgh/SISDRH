package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;

import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

import java.util.List;

@Builder
@Data
public class ConfidentialiteCountDto {

    private String id;
    private String libConfidentialiteAr;
    private String libConfidentialiteFr;
    private Long count_ ;

    @QueryProjection
    public ConfidentialiteCountDto(String id, String libConfidentialiteAr, String libConfidentialiteFr, Long count_) {
        this.id = id;
        this.libConfidentialiteAr = libConfidentialiteAr;
        this.libConfidentialiteFr = libConfidentialiteFr;
        this.count_ = count_;
    }
}

