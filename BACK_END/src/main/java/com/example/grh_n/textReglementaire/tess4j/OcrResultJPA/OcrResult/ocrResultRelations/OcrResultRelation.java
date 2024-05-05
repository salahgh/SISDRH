package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OcrResultRelation {

    // todo implment the the chain of relations

    @EmbeddedId
    private OcrResultRelationKey id;

    @ManyToOne
    @JoinColumn(name = "relationType", insertable = false, updatable = false)
    private OcrResultRelationType relationType;

    @ManyToOne
    @JoinColumn(name = "subject", insertable = false, updatable = false)
    private OcrResultEntityJpa subject;

    @ManyToOne
    @JoinColumn(name = "object", insertable = false, updatable = false)
    private OcrResultEntityJpa object;

}
