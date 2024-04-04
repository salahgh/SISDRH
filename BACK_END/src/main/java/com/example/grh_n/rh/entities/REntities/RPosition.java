package com.example.grh_n.rh.entities.REntities;

import lombok.*;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "R_POSITION")
public class RPosition {
    @Id
    @Column(name = "ID_POSITION", nullable = false, length = 2)
    private String id;

    @Column(name = "LIB_TYPE_PIECE_AR", length = 150)
    private String libTypePieceAr;

    @Column(name = "LIB_TYPE_PIECE_FR", length = 150)
    private String libTypePieceFr;

}
