package com.example.grh_n.BugTracker.entities;

import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BUG_ISSUE")
@Builder
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String title;

    @Column(precision = 5000)
    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime dateCreation;

    @ManyToOne
    private User creator;

    @ManyToOne
    private User assignee;

    @ManyToOne
    private Status status ;

    @ManyToOne
    private Sevirity sevirity ;

    @ManyToOne
    private Priority priority ;

    @ManyToOne
    private IssueType issueType ;

    @ManyToOne
    private Project project;

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments;

    @OneToMany(mappedBy = "issue")
    private List<Attachment> attachments;

    @ManyToMany
    private List<Tag> tags;

    @OneToMany(mappedBy = "issue")
    private List<IssueHistory> history;

    // Getters and setters
}