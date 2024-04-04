package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigInteger;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "RH_R_COMMANDEMENT")
public class RhRCommandement {
    @Id
    @Column(name = "ID", nullable = false)
    private BigInteger id;

    @Column(nullable = false)
    private String libCommandementAr;

    @Column(nullable = true)
    private String libCommandementFr;

    @OneToMany(mappedBy =  "commandement" )
    private List<RhRArme> rArmes ;
}
