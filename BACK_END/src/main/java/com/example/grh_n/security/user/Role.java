package com.example.grh_n.security.user;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "A_ROLE")
public class Role {

   @Id
   private String id;

   private String name;

   private String description;

   @ManyToMany(fetch = FetchType.EAGER)
   @JoinTable(
           name = "A_role_privilege",
           joinColumns = @JoinColumn(name = "role_id"),
           inverseJoinColumns = @JoinColumn(name = "privilege_id"))
   private List<Privilege> privileges ;

   @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER)
   private List<User> users ;

   @ManyToMany(fetch = FetchType.EAGER)
   @JoinTable(
           name = "A_role_composite",
           joinColumns = @JoinColumn(name = "role_id"),
           inverseJoinColumns = @JoinColumn(name = "composite_role_id"))
   private List<Role> compositeRoles ;

}
