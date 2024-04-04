package com.example.grh_n.dbdsn.entities.dto;

import com.querydsl.core.annotations.QueryProjection;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
public class CountParPostes {
    String  poste ;
    Long count_ ;
    Integer trie_ ;

    @QueryProjection
    public CountParPostes(
            String poste , Long count_ , Integer trie_
    ){
        this.poste = poste ;
        this.count_ = count_ ;
        this.trie_ = trie_ ;
    }
}
