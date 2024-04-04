package com.example.grh_n.rh.entities.DEntitites.Personnel;

import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@JaversSpringDataAuditable
public interface DPersonnelRepository extends CrudRepository<DPersonnel, String> , PagingAndSortingRepository<DPersonnel,String> {
    Optional<DPersonnel> findByMatricule(String matricule);
    List<DPersonnel> findByPhotos_Empty();
}

