//package com.example.grh_n.candidat;
//
//import com.example.grh_n.candidat.projections.DTO.BacParSpecialiteDto;
//import com.example.grh_n.candidat.projections.DTO.DCandidatDto;
//import com.example.grh_n.candidat.projections.DTO.DCandidatDtoDetails;
//import com.example.grh_n.repositories.DCandidatRepository;
//import jakarta.persistence.EntityNotFoundException;
//import lombok.*;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.data.domain.PageImpl;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//import java.util.List;
//
//@Getter
//@Setter
//@Service
//public class DCandidatService {
//
//    final private DCandidatRepository dCandidatRepository;
//    final private Logger logger = LoggerFactory.getLogger(DCandidatService.class);
//
//    public DCandidatService(
//            DCandidatRepository dCandidatRepository
//    )
//    {
//        this.dCandidatRepository = dCandidatRepository;
//    }
//
//    public DCandidat findById(String id) throws RuntimeException {
//        logger.info(id);
//        return DCandidat.builder().build();
//    }
//
//    public PageImpl<DCandidatDto> search(
//            Pageable pageable,
//            String noma,
//            String pnoma,
//            String  ln,
//            List<String> specialites ,
//            List<String> sex) {
//       try {
//          Thread.sleep(1000);
//       } catch (InterruptedException e) {
//          e.printStackTrace();
//       }
//       return dCandidatRepository.sustomSearch(pageable ,noma ,pnoma ,ln,specialites , sex) ;
//    }
//
//    public List<BacParSpecialiteDto> getBacParSpecialite(){
//       try {
//          Thread.sleep(1000);
//       } catch (InterruptedException e) {
//          e.printStackTrace();
//       }
//       return dCandidatRepository.getBacParSpecialite() ;
//    }
//
//    public DCandidatDtoDetails getDCandidatDtoById(String id) {
//       try {
//          Thread.sleep(1000);
//       } catch (InterruptedException e) {
//          e.printStackTrace();
//       }
//       DCandidatDtoDetails dCandidatDtoDetails = dCandidatRepository.getDCandidatDtoById(id) ;
//       if(dCandidatDtoDetails == null) throw new EntityNotFoundException("candidate does not exist id : " + id) ;
//       return dCandidatDtoDetails;
//    }
//}
