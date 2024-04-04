package com.example.grh_n.BugTracker.entities;

import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BUG_R_STATUS")
public class Status {
    @Id
    private Long id;
    private String statusFr;
    private String statusAr;
    private String statusAn;

    @OneToMany(mappedBy = "status")
    private List<Issue> issueList;

    // Getters and setters
}