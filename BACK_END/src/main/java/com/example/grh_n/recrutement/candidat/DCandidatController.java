//package com.example.grh_n.candidat;
//
//import com.example.grh_n.candidat.projections.DTO.BacParSpecialiteDto;
//import com.example.grh_n.candidat.projections.DTO.DCandidatDto;
//import com.example.grh_n.candidat.projections.DTO.DCandidatDtoDetails;
//import jakarta.validation.Valid;
//import jakarta.validation.constraints.NotNull;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.web.PagedResourcesAssembler;
//import org.springframework.hateoas.EntityModel;
//import org.springframework.hateoas.PagedModel;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import java.util.List;
//
//@RestController
//@CrossOrigin
//public class DCandidatController {
//
//   private final DCandidatService dCandidatService;
//   private final Logger logger = LoggerFactory.getLogger(DCandidatController.class);
//   private final PagedResourcesAssembler<DCandidatDto> pagedResourcesAssembler;
//
//   public DCandidatController(DCandidatService dCandidatService, PagedResourcesAssembler<DCandidatDto> pagedResourcesAssembler) {
//      this.dCandidatService = dCandidatService;
//      this.pagedResourcesAssembler = pagedResourcesAssembler;
//   }
//
//   @GetMapping("dCandidats/search/getCandidatDiplomes")
//   ResponseEntity<PagedModel<EntityModel<DCandidatDto>>> getCandidatDiplomes(
//           Pageable pageable ,
//           @Valid DCandidatSearchRequest request
//   ) {
//      logger.info(pageable.toString());
//      logger.info(request.toString());
//      return new ResponseEntity<>(pagedResourcesAssembler.toModel(
//              dCandidatService.search(
//                      pageable,
//                      request.getNoma(),
//                      request.getPnoma(),
//                      request.getLn(),
//                      request.getSpecialites(),
//                      request.getSex()
//              )), HttpStatus.OK);
//   }
//
//   @GetMapping("dCandidats/search/getBacParSpecialite")
//   ResponseEntity<List<BacParSpecialiteDto>> getBacParSpecialite() {
//      return ResponseEntity.ok().body(dCandidatService.getBacParSpecialite());
//   }
//
//   @GetMapping("dCandidats/search/getDCandidatDtoById/{id}")
//   ResponseEntity<DCandidatDtoDetails> getDCandidatDtoById(@PathVariable @NotNull String id) {
//      logger.info(id);
//      return ResponseEntity.ok().body(dCandidatService.getDCandidatDtoById(id));
//   }
//
//}
