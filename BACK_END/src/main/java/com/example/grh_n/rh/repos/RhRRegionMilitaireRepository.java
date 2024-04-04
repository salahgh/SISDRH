package com.example.grh_n.rh.repos;

import com.example.grh_n.rh.entities.REntities.RhRRegionMilitaire;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.lang.NonNullApi;

public interface RhRRegionMilitaireRepository extends PagingAndSortingRepository<RhRRegionMilitaire, Long> , CrudRepository<RhRRegionMilitaire , Long> {

    @Override
    @Query("select r from RhRRegionMilitaire r order by r.trie")
    Iterable<RhRRegionMilitaire> findAll();
}