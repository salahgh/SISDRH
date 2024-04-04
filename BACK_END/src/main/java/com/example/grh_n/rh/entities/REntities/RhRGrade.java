package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigInteger;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Getter
@Setter
@Table(name = "RH_R_GRADE")
public class RhRGrade {
    @Basic
    @Id
    @Column(name = "GRADE", nullable = false, precision = 0)
    private Long grade;
    @Basic
    @Column(name = "LIB_GRADE_FR", nullable = true, length = 40)
    private String libGradeFr;
    @Basic
    @Column(name = "LIB_GRADE_AR", nullable = true, length = 40)
    private String libGradeAr;

    @Basic
    @Column(name = "LIB_GRADE_AR_DET", nullable = true, length = 40)
    private String libGradeArDetermine;

    @Basic
    @Column(name = "ABR_GRADE_AR", nullable = true, length = 40)
    private String abrGradeAr;
    @Basic
    @Column(name = "ABR_GRADE_FR", nullable = true, length = 40)
    private String abrGradeFr;

    @ManyToOne
    @JoinColumn(name = "CAT_GRADE")
    private RhRCatGrade rhRCatGrade ;

    @Basic
    @Column(name = "GRADE_INF", nullable = true, precision = 0)
    private BigInteger gradeInf;

}
