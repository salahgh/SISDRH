package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "R_OCR_RESULT_RELATION_TYPE")
public class OcrResultRelationType {

    @Id
    private String id ;

    private String libTypeRelationAr ;

    private String libTypRelationFr ;

}
