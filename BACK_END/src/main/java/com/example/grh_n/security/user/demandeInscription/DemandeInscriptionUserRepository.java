package com.example.grh_n.security.user.demandeInscription;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface DemandeInscriptionUserRepository extends
        CrudRepository<DemandeInscriptionUser, String>,
        PagingAndSortingRepository<DemandeInscriptionUser, String>
{
   Optional<DemandeInscriptionUser> findByPersonnel(DPersonnel personnel);

   List<DemandeInscriptionUser> findByUserIsNull() ;

}
