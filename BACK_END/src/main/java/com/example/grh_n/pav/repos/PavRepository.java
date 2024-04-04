package com.example.grh_n.pav.repos;

import com.example.grh_n.pav.entities.Pav;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PavRepository extends PagingAndSortingRepository<Pav, String> , CrudRepository<Pav , String>  , QuerydslPredicateExecutor<Pav> {

    @Query("select e from Pav e where e.personnel.matricule = :matricule" )
    public Pav findByMatricule(String matricule);
}