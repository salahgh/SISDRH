package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.notes;

import com.example.grh_n.security.user.User;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TexteReglementaireNote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 2000)
    private String text ;

    @ManyToOne
    User owner ;

    @ManyToOne
    OcrResultEntityJpa textReglemetaire ;

    private LocalDateTime dateCreation ;

}
