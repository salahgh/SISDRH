//package com.example.grh_n.audit;
//
//import com.example.grh_n.Personnel.DPersonnel;
//
//import org.javers.core.Changes;
//import org.javers.core.Javers;
//import org.javers.repository.jql.QueryBuilder;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@CrossOrigin
//public class AuditController {
//
//   private final Javers javers;
//
//   public AuditController(Javers javers) {
//      this.javers = javers;
//   }
//
//   @GetMapping("/products/snapshots")
//   public Changes getProductSnapshots() {
//      QueryBuilder jqlQuery = QueryBuilder.byClass(DPersonnel.class);
////      List<Object> shadowList = javers.findShadowsAndStream(jqlQuery.build()).collect(Collectors.toList()) ;
//       return javers.findChanges(jqlQuery.build());
//   }
//}
