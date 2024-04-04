package com.example.grh_n.pav.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@Table(name = "PAV_R_SANCTIONS_PAV")
@NoArgsConstructor
@AllArgsConstructor
public class SanctionsPav {
    @EmbeddedId
    private SanctionsPavId id;

    @MapsId("pavId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "PAV_ID", nullable = false)
    private Pav pav;

    @MapsId("sanctionsId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "SANCTIONS_ID", nullable = false)
    private RSanction sanctions;

    @Column(name = "NOMBRE")
    private Long nombre;

}