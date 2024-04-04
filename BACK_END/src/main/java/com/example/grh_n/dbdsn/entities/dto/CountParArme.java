package com.example.grh_n.dbdsn.entities.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
public class CountParArme {

    BigInteger idArme;
    String libArme;
    Long count_;

    @QueryProjection
    public CountParArme(
            BigInteger idArme , String libArme , Long count_
    ) {
        this.idArme = idArme ;
        this.libArme = libArme ;
        this.count_ = count_ ;
    }
}

