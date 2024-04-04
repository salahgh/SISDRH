
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage;


import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class OcrResultPageAsImage {

    @EmbeddedId
    private OcrResultPageAsImageEmbeddedId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_ocr_result", nullable = false, insertable = false, updatable = false)
    private OcrResultEntityJpa ocrResultEntityJpa;

    @Column(columnDefinition = "BLOB")
    private byte[] base64PngImage;
}
