package com.example.grh_n.rh.entities.REntities.ted;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "RH_TED_R_QUALIFICATION")
public class RhRQualification {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "LIB_QUALIFICATION_AR", nullable = false, length = 60)
    private String libQualificationAr;

    @Column(name = "LIB_QUALIFICATION_FR", nullable = true, length = 60)
    private String libQualificatinFr;

    @Column(name = "TRI", nullable = true)
    private Long tri;

    @OneToMany(mappedBy = "qualification")
    @ToString.Exclude
    private List<RhRTed> rTeds ;

    public void setrTeds(List<RhRTed> rTeds) {
        this.rTeds = rTeds;
    }

    public List<RhRTed> getrTeds() {
        return rTeds;
    }

    // todo relation many to many avec les diplomes ou specialite

}
