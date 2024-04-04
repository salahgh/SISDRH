package com.example.grh_n.BugTracker.entities;

import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Table(name = "BUG_ATTACHMNT")
public class Attachment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String originalFileName;
    private String mimeType;
    @Column(name = "fileData" , columnDefinition = "BLOB")
    private byte[] fileData;
    private Long size_ ;
    @ManyToOne
    private Issue issue;

    // Getters and setters
}