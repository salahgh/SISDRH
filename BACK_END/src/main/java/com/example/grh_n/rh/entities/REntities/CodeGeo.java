package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Table(name = "RH_R_CODE_GEO")
public class CodeGeo {

    @Id
    @Column(name = "ID", nullable = false)
    private String id;
    @Basic
    @Column(name = "LIB_APC_FR", nullable = true)
    private String libApcFr;
    @Basic
    @Column(name = "LIB_APC_AR", nullable = true)
    private String libApcAr;

    @ManyToOne
    Wilaya wilaya ;

//    @Column(name = "TRANS", nullable = true)
//    private String trans;



}
