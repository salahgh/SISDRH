package com.example.grh_n.gec;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CourrierAutoriteRepository extends CrudRepository<CourrierAutorite, Long> , QuerydslPredicateExecutor<CourrierAutorite> {


}