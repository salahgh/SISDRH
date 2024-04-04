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
@Table(name = "R_COMMANDEMENT")
public class RCommandement {
    @Id
    @Column(name = "ID_COMMANDEMENT", nullable = false, length = 3)
    private String id;

    @Column(name = "LIB_COMMANDEMENT_AR", nullable = false, length = 250)
    private String libCommandementAr;

    @Column(name = "LIB_COMMANDEMENT_FR", nullable = false, length = 250)
    private String libCommandementFr;

}
