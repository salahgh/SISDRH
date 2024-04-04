
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage;


import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode
@Embeddable
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class OcrResultPageAsImageEmbeddedId implements Serializable {

   @Column(name = "id_ocr_result")
   private String ocrResultId;

   @Column(name = "page_index")
   private Integer pageIndex;

   @Column(name = "size_")
   private Integer size;

}
