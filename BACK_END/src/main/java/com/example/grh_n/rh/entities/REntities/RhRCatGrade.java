package com.example.grh_n.rh.entities.REntities;

import com.example.grh_n.rh.entities.REntities.ted.RhRTed;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@ToString
@Table(name = "RH_R_CAT_GRADE")
public class RhRCatGrade {
    @Basic
    @Id
    @Column(name = "CAT_GRADE", nullable = false, length = 2)
    private String catGrade;
    @Basic
    @Column(name = "LIB_CAT_GRADE_AR", nullable = true, length = 40)
    private String libCatGradeAr;
    @Basic
    @Column(name = "LIB_CAT_GRADE_FR", nullable = true, length = 40)
    private String libCatGradeFr;
    @Basic
    @Column(name = "CAT", nullable = true)
    private String cat;
    @Basic
    @Column(name = "LIB_CAT_AR", nullable = true, length = 50)
    private String libCatAr;
    @Basic
    @Column(name = "LIB_CAT_FR", nullable = true, length = 50)
    private String libCatFr;

    @OneToMany(mappedBy = "rhRCatGrade")
    @ToString.Exclude
    private List<RhRGrade> rGrades ;

    @OneToMany(mappedBy = "catGrade")
    @ToString.Exclude
    private List<RhRTed> rTeds ;

    public void setrTeds(List<RhRTed> rTeds) {
        this.rTeds = rTeds;
    }

    public List<RhRTed> getrTeds() {
        return rTeds;
    }

    public void setrGrades(List<RhRGrade> rGrades) {
        this.rGrades = rGrades;
    }

    public List<RhRGrade> getrGrades() {
        return rGrades;
    }

    @Override
    public int hashCode() {
        int result = catGrade != null ? catGrade.hashCode() : 0;
        result = 31 * result + (libCatGradeAr != null ? libCatGradeAr.hashCode() : 0);
        result = 31 * result + (libCatGradeFr != null ? libCatGradeFr.hashCode() : 0);
        result = 31 * result + (cat != null ? cat.hashCode() : 0);
        result = 31 * result + (libCatAr != null ? libCatAr.hashCode() : 0);
        result = 31 * result + (libCatFr != null ? libCatFr.hashCode() : 0);
        return result;
    }
}
