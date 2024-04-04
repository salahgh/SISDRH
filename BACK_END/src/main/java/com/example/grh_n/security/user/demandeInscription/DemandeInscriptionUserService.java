package com.example.grh_n.security.user.demandeInscription;

import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@GraphQLApi
public class DemandeInscriptionUserService {

   @Autowired
   private DemandeInscriptionUserRepository demandeInscriptionUserRepository;

   @GraphQLQuery(name = "createDemandeInscription")
   public DemandeInscriptionUser save(DemandeInscriptionUser demandeInscriptionUser) {
      demandeInscriptionUser.setDateDemande(LocalDateTime.now());
      return demandeInscriptionUserRepository.save(demandeInscriptionUser);
   }

   @GraphQLQuery(name = "findeDemandeById")
   public DemandeInscriptionUser findById(String id) {
      return demandeInscriptionUserRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("demande n'existe pas " + id));
   }

   @GraphQLQuery(name = "findAllDemande")
   public List<DemandeInscriptionUser> findAll() {
      return IteratorUtils.toList(demandeInscriptionUserRepository.findAll().iterator());
   }

   @GraphQLQuery(name = "findAllDemandesPaged")
   public Page<DemandeInscriptionUser> findAll(Pageable pageable) {
      return demandeInscriptionUserRepository.findAll(pageable);
   }

   @GraphQLMutation(name = "deleteDemandeInscription")
   public void delete(DemandeInscriptionUser demandeInscriptionUser) {
      demandeInscriptionUserRepository.delete(demandeInscriptionUser);
   }

   @GraphQLQuery
   public List<DemandeInscriptionUser> findAllDemandeInscriptionRemaining() {
     return demandeInscriptionUserRepository.findByUserIsNull() ;
   }
}
