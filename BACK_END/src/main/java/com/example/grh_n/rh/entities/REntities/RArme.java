package com.example.grh_n.rh.entities.REntities;

import lombok.*;

import jakarta.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "R_ARME")
public class RArme {
    @Id
    @Column(name = "ID_ARME", nullable = false, length = 3)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ID_COMMANDEMENT", nullable = false)
    @ToString.Exclude
    private RCommandement idCommandement;

    @Column(name = "LIB_ARME_AR", nullable = false, length = 256)
    private String libArmeAr;

    @Column(name = "LIB_ARME_FR", nullable = false, length = 256)
    private String libArmeFr;
}
