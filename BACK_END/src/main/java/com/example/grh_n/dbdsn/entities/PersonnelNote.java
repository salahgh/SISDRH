package com.example.grh_n.dbdsn.entities;


import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "D_PERSONNEL_NOTE")
public class PersonnelNote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @ManyToOne
    PamOff2024 pamOff2024;
    @ManyToOne
    User user;
    @ManyToMany
    @JoinTable(name = "A_AUTHORIZED_USERS")
    List<User> authorizedUsers;
    LocalDateTime dateCreation;
    @Lob
    String observation;
    String color;

    // todo ui prefrences should be in a separate module

}
