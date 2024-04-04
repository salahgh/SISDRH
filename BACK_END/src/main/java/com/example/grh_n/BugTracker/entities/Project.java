package com.example.grh_n.BugTracker.entities;

import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BUG_PROJECT")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String nameAr;
    private String description;

    @ManyToMany
    @JoinTable(
            name = "BUG_PROJECT_MEMBERS",
            joinColumns = @JoinColumn(name = "PROJECT_ID"),
            inverseJoinColumns = @JoinColumn(name = "USER_ID"))
    private List<User> members;

    @OneToMany(mappedBy = "project")
    private List<Issue> issues;

    // Getters and setters
}