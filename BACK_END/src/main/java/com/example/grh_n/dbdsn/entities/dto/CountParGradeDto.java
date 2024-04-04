package com.example.grh_n.dbdsn.entities.dto;

import com.querydsl.core.annotations.QueryProjection;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
public class CountParGradeDto {
    BigInteger g ;
    String grade ;
    Long count_ ;

    @QueryProjection
    public CountParGradeDto(
            BigInteger g , String grade , Long count_
    ){
        this.g = g ;
        this.grade = grade ;
        this.count_ = count_ ;
    }
}
