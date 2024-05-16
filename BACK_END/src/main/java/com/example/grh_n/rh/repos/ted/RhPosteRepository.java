package com.example.grh_n.rh.repos.ted;

import com.example.grh_n.rh.entities.REntities.ted.RhPoste;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RhPosteRepository extends CrudRepository<RhPoste, String> {


    @Query("select poste from RhPoste poste order by poste.trie_")
    List<RhPoste> findAllOrdered();
}