package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigInteger;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Table(name = "RH_R_CODE_GEO")
public class RhRCodeGeo {

    @Id
    @Column(name = "ID", nullable = false)
    private Long id;
    @Basic
    @Column(name = "LIB_APC_FR", nullable = true)
    private String libApcFr;
    @Basic
    @Column(name = "LIB_APC_AR", nullable = true)
    private String libApcAr;


    // todo a revoir les tables wilaya et transit
    @Column(name = "LIB_WILAYA", nullable = true)
    private String libWilaya;

    @Column(name = "TRANS", nullable = true)
    private String trans;

    @OneToMany(mappedBy = "lieuUnite")
    @ToString.Exclude
    private List<RhRunite> runites ;

}
