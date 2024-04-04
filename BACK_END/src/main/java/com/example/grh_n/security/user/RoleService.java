package com.example.grh_n.security.user;

import com.example.grh_n.security.user.DTOs.RoleDto;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
@GraphQLApi
@AllArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;
    private final PrivilegeRepository privilegeRepository ;


    @GraphQLQuery
    public Page<Role> getAllRolesPaged(Pageable pageable) {
        return roleRepository.findAll(pageable);
    }

    @GraphQLQuery
    public List<Role> findAllRoles() {
        return IteratorUtils.toList(roleRepository.findAll().iterator());
    }

    @GraphQLQuery
    public Optional<Role> findRoleById(String roleId) {
        return roleRepository.findById(roleId);
    }

    @GraphQLMutation
    public boolean addPrivilegeToRole(String roleId , String privilegeId){
        Role role = roleRepository.findById(roleId).orElseThrow(
                () -> new EntityNotFoundException("role with id " + roleId + " not found")
        ) ;
        Privilege privilege = privilegeRepository.findById(privilegeId).orElseThrow(
                () -> new EntityNotFoundException("privilege with id " + privilegeId + " does not exist")
        );
        role.getPrivileges().add(privilege) ;
        roleRepository.save(role);
        return true ;
    }

    @GraphQLMutation
    public boolean deletePrivilegeFromRole(String roleId , String privilegeId){
        Role role = roleRepository.findById(roleId).orElseThrow(
                () -> new EntityNotFoundException("role with id " + roleId + " not found")
        ) ;
        Privilege privilege = privilegeRepository.findById(privilegeId).orElseThrow(
                () -> new EntityNotFoundException("privilege with id " + privilegeId + " does not exist")
        );
        role.getPrivileges().remove(privilege) ;
        roleRepository.save(role);
        return true ;
    }

    @GraphQLMutation
    public Role createRole(RoleDto role) {

        if (roleRepository.existsByName(role.getName())) {
            throw new EntityExistsException("Role with name '" + role.getName() + "' already exists");
        }
        if (roleRepository.existsById(String.valueOf(role.getId()))) {
            throw new EntityExistsException("Role with id '" + role.getId() + "' already exists");
        }
        return roleRepository.save(Role.builder().name(role.getName()).description(role.getDescription()).id(String.valueOf(role.getId())).build());
    }

    public void deleteRole(Long roleId) {
        Role existingRole = roleRepository.findById(String.valueOf(roleId))
                .orElseThrow(() -> new EntityNotFoundException("Role with id '" + roleId + "' not found"));
        roleRepository.delete(existingRole);
    }
}
