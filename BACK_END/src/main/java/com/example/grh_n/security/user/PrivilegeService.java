package com.example.grh_n.security.user;

import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@GraphQLApi
public class PrivilegeService {

   private final PrivilegeRepository privilegeRepository;

   public PrivilegeService(PrivilegeRepository privilegeRepository) {
      this.privilegeRepository = privilegeRepository;
   }

   @GraphQLQuery
   public Page<Privilege> getAllPrivilegesByNamePaged(Pageable pageable , String name) {
      return privilegeRepository.findAllByNameContaining(name ,pageable);
   }

   @GraphQLQuery
   public List<Privilege> getAllPrivilegesByName(String name) {
      return privilegeRepository.findAllByNameContaining(name);
   }

   @GraphQLQuery
   public Page<Privilege> getAllPrivilegesPaged(Pageable pageable) {
      return privilegeRepository.findAll(pageable) ;
   }

   @GraphQLQuery
   public List<Privilege> getAllPrivileges() {
      return IteratorUtils.toList(privilegeRepository.findAll().iterator()) ;
   }


   @GraphQLQuery
   public Privilege getPrivilegeById(Long PrivilegeId) {
      return privilegeRepository.findById(String.valueOf(PrivilegeId))
              .orElseThrow(() -> new EntityNotFoundException("Privilege not found with id: " + PrivilegeId));
   }
}

