//package com.example.grh_n.security.user;
//
//import com.example.grh_n.security.user.DTOs.PrivilegeDto;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.web.PagedResourcesAssembler;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.modelmapper.ModelMapper;
//
//@RestController
//@RequestMapping("/privileges")
//public class PrivilegeController {
//
//   private final PrivilegeService privilegeService;
//   ModelMapper modelMapper = new ModelMapper() ;
//   private final PagedResourcesAssembler<PrivilegeDto> pagedResourcesAssembler;
//
//   @Autowired
//   public PrivilegeController(PrivilegeService privilegeService, PagedResourcesAssembler<PrivilegeDto> pagedResourcesAssembler) {
//      this.privilegeService = privilegeService;
//      this.pagedResourcesAssembler = pagedResourcesAssembler;
//   }
//
//   @GetMapping("/{id}")
//   public ResponseEntity<PrivilegeDto> getPrivilegeById(@PathVariable Long id) {
//      Privilege privilege = privilegeService.getPrivilegeById(id);
//      return ResponseEntity.ok(modelMapper.map(privilege, PrivilegeDto.class));
//   }
//
//
//}
