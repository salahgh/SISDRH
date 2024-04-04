package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.ocrResultPinned;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "OcrResultPinned")
public class OcrResultPinned {

    @Id
    private String id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ocr_result_id")
    private OcrResultEntityJpa ocrResult;
}
