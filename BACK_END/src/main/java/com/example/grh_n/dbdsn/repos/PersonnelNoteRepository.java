package com.example.grh_n.dbdsn.repos;

import com.example.grh_n.dbdsn.entities.PersonnelNote;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface PersonnelNoteRepository extends
        PagingAndSortingRepository<PersonnelNote, Long> ,
        CrudRepository<PersonnelNote , Long> ,
        QuerydslPredicateExecutor<PersonnelNote>
{

}