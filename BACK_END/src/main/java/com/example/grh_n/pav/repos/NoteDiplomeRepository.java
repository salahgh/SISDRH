package com.example.grh_n.pav.repos;

import com.example.grh_n.pav.entities.NoteDiplome;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NoteDiplomeRepository extends PagingAndSortingRepository<NoteDiplome, String> , CrudRepository<NoteDiplome,String> , QuerydslPredicateExecutor<NoteDiplome> {
}