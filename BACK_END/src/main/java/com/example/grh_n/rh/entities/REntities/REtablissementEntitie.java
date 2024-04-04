package com.example.grh_n.rh.entities.REntities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "R_ETABLISSEMENT")
public class REtablissementEntitie {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "ID_ETABLISSEMENT", nullable = false, length = 5)
    private String idEtablissement;
    @Basic
    @Column(name = "LIB_ETABLISSEMENT_AR", nullable = false, length = 256)
    private String libEtablissementAr;
    @Basic
    @Column(name = "LIB_ETABLISSEMENT_FR", nullable = true, length = 256)
    private String libEtablissementFr;
    @Basic
    @Column(name = "ABR_ETABLISSEMENT_AR", nullable = true, length = 150)
    private String abrEtablissementAr;
    @Basic
    @Column(name = "ABR_ETABLISSEMENT_FR", nullable = true, length = 150)
    private String abrEtablissementFr;

    public String getIdEtablissement() {
        return idEtablissement;
    }

    public void setIdEtablissement(String idEtablissement) {
        this.idEtablissement = idEtablissement;
    }

    public String getLibEtablissementAr() {
        return libEtablissementAr;
    }

    public void setLibEtablissementAr(String libEtablissementAr) {
        this.libEtablissementAr = libEtablissementAr;
    }

    public String getLibEtablissementFr() {
        return libEtablissementFr;
    }

    public void setLibEtablissementFr(String libEtablissementFr) {
        this.libEtablissementFr = libEtablissementFr;
    }

    public String getAbrEtablissementAr() {
        return abrEtablissementAr;
    }

    public void setAbrEtablissementAr(String abrEtablissementAr) {
        this.abrEtablissementAr = abrEtablissementAr;
    }

    public String getAbrEtablissementFr() {
        return abrEtablissementFr;
    }

    public void setAbrEtablissementFr(String abrEtablissementFr) {
        this.abrEtablissementFr = abrEtablissementFr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        REtablissementEntitie that = (REtablissementEntitie) o;
        return Objects.equals(idEtablissement, that.idEtablissement) && Objects.equals(libEtablissementAr, that.libEtablissementAr) && Objects.equals(libEtablissementFr, that.libEtablissementFr) && Objects.equals(abrEtablissementAr, that.abrEtablissementAr) && Objects.equals(abrEtablissementFr, that.abrEtablissementFr);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idEtablissement, libEtablissementAr, libEtablissementFr, abrEtablissementAr, abrEtablissementFr);
    }
}
