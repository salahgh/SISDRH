package com.example.grh_n.dbdsn.entities.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Setter
@Getter
public class CountParCsn {

    String  csn ;
    Long count_ ;
    String c ;

    @QueryProjection
    public CountParCsn(
            String csn , Long count_ , String c
    ){
        this.csn = csn ;
        this.c = c ;
        this.count_ = count_ ;
    }

}
