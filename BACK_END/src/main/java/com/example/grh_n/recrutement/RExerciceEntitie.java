package com.example.grh_n.recrutement;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "R_EXERCICE")
public class RExerciceEntitie {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "ID_EXERCICE", nullable = false, length = 4)
    private String idExercice;
    @Basic
    @Column(name = "LIB_EXERCICE", nullable = false, length = 20)
    private String libExercice;

    public String getIdExercice() {
        return idExercice;
    }

    public void setIdExercice(String idExercice) {
        this.idExercice = idExercice;
    }

    public String getLibExercice() {
        return libExercice;
    }

    public void setLibExercice(String libExercice) {
        this.libExercice = libExercice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RExerciceEntitie that = (RExerciceEntitie) o;
        return Objects.equals(idExercice, that.idExercice) && Objects.equals(libExercice, that.libExercice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idExercice, libExercice);
    }
}
