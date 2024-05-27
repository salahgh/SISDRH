package com.example.grh_n.security.user;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, String>, PagingAndSortingRepository<Role, String> {
    boolean existsByName(String name);

    Optional<Role> findByName(String name);

    Iterable<Role> findByNameContaining(String name, Sort sort);

    @Query("select u.personnel from Role r inner join r.users u where r.id = :roleId")
    List<DPersonnel> findPersonnelByRoleId(String roleId);

    @Query("select r from Role r inner join r.users u where u.id = :userName order by r.name")
    List<Role> findAllRolesByUser(String userName);
}

