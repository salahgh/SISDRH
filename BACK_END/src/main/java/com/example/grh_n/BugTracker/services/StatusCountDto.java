package com.example.grh_n.BugTracker.services;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Data
public class StatusCountDto implements Serializable {

    @QueryProjection
    public StatusCountDto(Long id, String statusFr, String statusAn, String statusAr, Long count_) {
        this.id = id;
        this.statusFr = statusFr;
        this.statusAn = statusAn;
        this.statusAr = statusAr;
        this.count_ = count_;
    }

    private final Long id;
    private final String statusFr;
    private final String statusAn;
    private final String statusAr;
    private final Long count_;
}
