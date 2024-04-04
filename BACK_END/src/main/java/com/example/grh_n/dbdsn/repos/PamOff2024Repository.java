package com.example.grh_n.dbdsn.repos;

import com.example.grh_n.dbdsn.entities.PamOff2024;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.math.BigInteger;
import java.util.List;

public interface PamOff2024Repository extends CrudRepository<PamOff2024, String>, PagingAndSortingRepository<PamOff2024 ,String> {

//    @Query("select pam from PamOff2024 pam where pam.matricule like :pamOff2024")
//    Page<PamOff2024> searchAll(
//            PamOff2024 pamOff2024 ,
//            Pageable pageable ,
//            String matricule ,
//            String noma ,
//            String pnoma ,
//            List<BigInteger> grades ,
//            List<BigInteger> armes ,
//            String csn
//    );


}