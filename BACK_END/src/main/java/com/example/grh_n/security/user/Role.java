package com.example.grh_n.security.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
   private Set<Privilege> privileges ;

   @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER)
   private Set<User> users ;

   @ManyToMany(fetch = FetchType.EAGER)
   @JoinTable(
           name = "A_role_composite",
           joinColumns = @JoinColumn(name = "role_id"),
           inverseJoinColumns = @JoinColumn(name = "composite_role_id"))
   private Set<Role> compositeRoles ;

   @Override
   public String toString() {
      return "Role{" +
              "id='" + id + '\'' +
              ", name='" + name + '\'' +
              '}';
   }

}
