package com.example.grh_n.rh.entities.REntities;

import lombok.*;
import jakarta.persistence.*;

import java.util.List;

@Builder
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "RH_R_STRUCTURE_SN")
@AllArgsConstructor
public class RhRStructureSn {
    @Id
    @Column(name = "CODE_STRUCTURE_SN", nullable = false, length = 4)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_TYPE_STRUCTURE_SN")
    private RhRTypeStructureSn typeStructureSn;

    @ManyToOne
    @JoinColumn(name = "ID_PERE")
    private RhRStructureSn pere ;

    @OneToMany(mappedBy = "pere")
    private List<RhRStructureSn> fils;

    @ManyToOne
    @JoinColumn(name = "ID_UNITE")
    private RhRunite runite ;
}
