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
@Table(name = "BUG_R_PRIORITY")
public class Priority {
    @Id
    private Long id;
    private String priorityAR;
    private String priorityFR;

    @OneToMany(mappedBy ="priority")
    private List<Issue> issues;

    // Getters and setters
}