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
@Table(name = "R_GROUPAGE")
public class RGroupage {
    @Id
    @Column(name = "ID_GROUPAGE", nullable = false, length = 1)
    private String id;

    @Column(name = "LIB_GROUPAGE", length = 150)
    private String libGroupage;

}
