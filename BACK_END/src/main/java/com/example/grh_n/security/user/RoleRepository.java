package com.example.grh_n.security.user;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, String>, PagingAndSortingRepository<Role, String> {
    boolean existsByName(String name);

    Optional<Role> findByName(String name);

    Iterable<Role> findByNameContaining(String name, Sort sort);


}

