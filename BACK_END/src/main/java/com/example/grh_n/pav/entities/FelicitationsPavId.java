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
public class FelicitationsPavId implements Serializable {
    private static final long serialVersionUID = -5294702905209571347L;
    @Size(max = 255)
    @NotNull
    @Column(name = "PAV_ID", nullable = false)
    private String pavId;

    @Size(max = 255)
    @NotNull
    @Column(name = "FELICITATIONS_ID", nullable = false)
    private String felicitationsId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        FelicitationsPavId entity = (FelicitationsPavId) o;
        return Objects.equals(this.pavId, entity.pavId) &&
                Objects.equals(this.felicitationsId, entity.felicitationsId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pavId, felicitationsId);
    }

}