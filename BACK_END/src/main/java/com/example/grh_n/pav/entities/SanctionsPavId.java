package com.example.grh_n.pav.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SanctionsPavId implements Serializable {
    private static final long serialVersionUID = 8813784758297407485L;
    @Size(max = 255)
    @NotNull
    @Column(name = "PAV_ID", nullable = false)
    private String pavId;

    @Size(max = 255)
    @NotNull
    @Column(name = "SANCTIONS_ID", nullable = false)
    private String sanctionsId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        SanctionsPavId entity = (SanctionsPavId) o;
        return Objects.equals(this.pavId, entity.pavId) &&
                Objects.equals(this.sanctionsId, entity.sanctionsId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pavId, sanctionsId);
    }

}