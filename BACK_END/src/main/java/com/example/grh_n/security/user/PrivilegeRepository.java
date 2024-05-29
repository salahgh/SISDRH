package com.example.grh_n.security.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface PrivilegeRepository extends CrudRepository<Privilege, String>,
        PagingAndSortingRepository<Privilege, String> {

    boolean existsByName(String name);

    Optional<Privilege> findByName(String name);

    @Query("select p from Privilege p inner join p.users u where u.id = :userName order by p.name")
    List<Privilege> findByUserName(String userName);

    Page<Privilege> findAllByNameContaining(String name, Pageable pageable);

    List<Privilege> findAllByNameContaining(String name);

    @Query("select p from Privilege p order by p.name")
    List<Privilege> findAllOrdered();

    @Query("select p from Privilege p order by p.name")
    List<Privilege> findAllByUserOrdered();

    @Query("select p from Privilege p where p.application.id = :applicationId order by p.name")
    List<Privilege> findAllByApplicationId(String applicationId);

    @Query("select p from Privilege p inner join p.roles role where role.id = :roleId order by p.id")
    List<Privilege> findByRoleId(String roleId);
}
