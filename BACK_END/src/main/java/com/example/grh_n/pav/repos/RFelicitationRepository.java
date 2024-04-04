package com.example.grh_n.pav.repos;

import com.example.grh_n.pav.entities.RFelicitation;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RFelicitationRepository extends PagingAndSortingRepository<RFelicitation, String>, CrudRepository<RFelicitation, String>, QuerydslPredicateExecutor<RFelicitation> {
}