package com.example.grh_n.pav.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@Table(name = "PAV_R_FELICITATIONS_PAV")
@NoArgsConstructor
@AllArgsConstructor
public class FelicitationsPav {
    @EmbeddedId
    private FelicitationsPavId id;

    @MapsId("pavId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "PAV_ID", nullable = false)
    private Pav pav;

    @MapsId("felicitationsId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "FELICITATIONS_ID", nullable = false)
    private RFelicitation felicitation;

    @Column(name = "NOMBRE")
    private Long nombre;

}