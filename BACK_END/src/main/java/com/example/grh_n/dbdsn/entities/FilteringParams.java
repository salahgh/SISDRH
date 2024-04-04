package com.example.grh_n.dbdsn.entities;


import lombok.*;

import java.math.BigInteger;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FilteringParams {

    String searchToken;
    List<BigInteger> grades;
    List<BigInteger> armes;
    String csn;
    List<Integer> suds ;
    List<String> postes ;
    String idStructure ;
    List<String> pam ;
    List<String> pav ;
    String formation;
    List<String> diplomesCiviles ;
    List<String> diplomesMilitaires ;
    String title ;
}
