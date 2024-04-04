package com.example.grh_n.rh.entities.REntities;

import com.example.grh_n.rh.entities.REntities.ted.RhRTed;
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
@ToString
@Table(name = "RH_R_REGION_MILITAIRE")
public class RhRRegionMilitaire {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "LIB_REGION_FR", nullable = true)
    private String libRegionFr;

    @Column(name = "LIB_REGION_AR", nullable = true)
    private String libRegionAr;

    @Column(name = "LIB_ABR_REGION_FR", nullable = true)
    private String libAbrRegionFr;

    @Column(name = "LIB_ABR_REGION_AR", nullable = true)
    private String libAbrRegionAr;

    @Column(name = "TRIE_", nullable = true)
    private String trie;

    @OneToMany(mappedBy = "regionMilitaire")
    @ToString.Exclude
    private List<RhRunite> runites ;


}
