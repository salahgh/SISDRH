package com.example.grh_n.security.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UserRepository_ extends
        CrudRepository<User,String>  ,
        PagingAndSortingRepository<User,String > ,
        QuerydslPredicateExecutor<User>
{

    @Query("select u from User u where u.id = :matricule")
    Optional<User> findByMatricule(String matricule);

    Page<User> findByOcrResultUserGrantsIsNotEmpty(Pageable pageable) ;

}
