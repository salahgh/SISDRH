package com.example.grh_n.pav.repos;

import com.example.grh_n.pam.entities.RhPoste;
import com.example.grh_n.pav.entities.CritereDePonderation;
import com.example.grh_n.rh.entities.REntities.RhRGrade;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CritereDePonderationRepository extends PagingAndSortingRepository<CritereDePonderation, String> , QuerydslPredicateExecutor<CritereDePonderation> , CrudRepository<CritereDePonderation,String> {

    CritereDePonderation findByChefAndAndPosteAndGrade(boolean chef , RhPoste poste , RhRGrade grade) ;

}