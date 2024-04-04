package com.example.grh_n.security.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;


public interface PrivilegeRepository extends CrudRepository<Privilege, String>,
        PagingAndSortingRepository<Privilege, String> {

    boolean existsByName(String name);

    Optional<Privilege> findByName(String name);

    Page<Privilege> findAllByNameContaining(String name, Pageable pageable);

    List<Privilege> findAllByNameContaining(String name);

}
