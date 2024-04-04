package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations;

import jakarta.persistence.Embeddable;
import lombok.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OcrResultRelationKey implements Serializable {


    private String typeRelation ;
    private String subject ;
    private String object ;

}
