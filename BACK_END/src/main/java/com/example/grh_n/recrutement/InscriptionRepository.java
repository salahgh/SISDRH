package com.example.grh_n.recrutement;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface InscriptionRepository extends CrudRepository<Inscription, String>, PagingAndSortingRepository<Inscription, String>, QuerydslPredicateExecutor<Inscription> {
}