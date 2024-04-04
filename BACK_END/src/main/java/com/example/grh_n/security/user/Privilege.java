package com.example.grh_n.security.user;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "A_Privilege")
public class Privilege {
    @Id
    private String id;

    private String name;

    private String description ;

    @ManyToMany(mappedBy = "privileges", fetch = FetchType.LAZY)
    private Set<User> users = new HashSet<>();

    @ManyToMany(mappedBy = "privileges", fetch = FetchType.LAZY)
    private Set<Role> roles = new HashSet<>();

}
