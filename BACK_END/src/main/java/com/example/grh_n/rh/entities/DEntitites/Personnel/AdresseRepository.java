package com.example.grh_n.rh.entities.DEntitites.Personnel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdresseRepository extends CrudRepository<Adresse, String> {

    @Query("select a from Adresse a where a.personnel.id =: personnelId ")
    List<Adresse> findAllAdressesByPersonnelId(String personnelId);
}