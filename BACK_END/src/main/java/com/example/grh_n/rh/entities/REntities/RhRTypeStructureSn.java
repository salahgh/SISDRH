package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "RH_R_TYPE_STRUCTURE_SN")
public class RhRTypeStructureSn {
    @Id
    private String id;

    @OneToMany(mappedBy = "typeStructureSn")
    List<RhRStructureSn> structureSn ;

    @Column(name = "LIB_AR")
    private String libAr;

    @Column(name = "LIB_FR")
    private String libFr;

    @Column(name = "ABR_FR")
    private String AbrFr;

    @Column(name = "ABR_AR")
    private String AbrAr;

}
