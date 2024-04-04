package com.example.grh_n.BugTracker.entities;

import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Table(name = "BUG_COMMENT")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(precision = 4000)
    private String text;
    private LocalDateTime createdDate;
    @ManyToOne
    private User createdBy;
    @ManyToOne
    private Issue issue;

    // Getters and setters
}