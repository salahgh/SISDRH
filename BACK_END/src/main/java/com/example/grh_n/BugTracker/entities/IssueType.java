package com.example.grh_n.BugTracker.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BUG_R_TYPE")
public class IssueType {
    @Id
    private Long id;
    private String typeAr;
    private String typeFr;

    private String typeAn ;

    @OneToMany(mappedBy ="issueType")
    private List<Issue> issues;

    // Getters and setters
}