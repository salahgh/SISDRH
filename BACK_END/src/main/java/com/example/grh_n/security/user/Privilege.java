package com.example.grh_n.security.user;

import com.example.grh_n.Applications;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

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
    private List<User> users ;

    @ManyToMany(mappedBy = "privileges", fetch = FetchType.LAZY)
    private List<Role> roles ;

    @ManyToOne
    Applications application;

}
