package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "R_SEX")
public class RSexEntitie {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "ID_SEX", nullable = false, length = 1)
    private String idSex;
    @Basic
    @Column(name = "LIB_SEX_AR", nullable = true, length = 15)
    private String libSexAr;
    @Basic
    @Column(name = "LIB_SEX_FR", nullable = true, length = 15)
    private String libSexFr;

    public String getIdSex() {
        return idSex;
    }

    public void setIdSex(String idSex) {
        this.idSex = idSex;
    }

    public String getLibSexAr() {
        return libSexAr;
    }

    public void setLibSexAr(String libSexAr) {
        this.libSexAr = libSexAr;
    }

    public String getLibSexFr() {
        return libSexFr;
    }

    public void setLibSexFr(String libSexFr) {
        this.libSexFr = libSexFr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RSexEntitie that = (RSexEntitie) o;
        return Objects.equals(idSex, that.idSex) && Objects.equals(libSexAr, that.libSexAr) && Objects.equals(libSexFr, that.libSexFr);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idSex, libSexAr, libSexFr);
    }
}
