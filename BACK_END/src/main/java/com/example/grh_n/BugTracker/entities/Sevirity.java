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
@Table(name = "BUG_R_SEVIRITY")
public class Sevirity {
    @Id
    private Long id;
    private String sevirityAR;
    private String sevirityFR;

    @OneToMany(mappedBy ="sevirity")
    private List<Issue> issues;

    // Getters and setters
}