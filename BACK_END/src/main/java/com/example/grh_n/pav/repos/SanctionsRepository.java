package com.example.grh_n.pav.repos;

import com.example.grh_n.pav.entities.RSanction;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SanctionsRepository extends PagingAndSortingRepository<RSanction, String>, CrudRepository<RSanction, String>, QuerydslPredicateExecutor<RSanction> {
}