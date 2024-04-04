package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder;

import com.example.grh_n.security.user.User;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "PDF_FOLDER" ,uniqueConstraints = @UniqueConstraint(columnNames = {"name", "owner"}))

public class Folder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

   private LocalDateTime createdDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private User owner ;

    @Column(name = "NAME", nullable = false)
    private String name;

   private String description;

   private String color;

    @ManyToMany(mappedBy = "folders" , fetch = FetchType.LAZY)
    private Set<OcrResultEntityJpa> pdfFiles ;

    @ManyToMany(mappedBy = "foldersGranted")
    private Set<User> usersGranted;

}
