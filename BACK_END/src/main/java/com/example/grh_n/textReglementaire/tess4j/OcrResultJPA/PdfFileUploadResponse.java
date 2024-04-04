package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class PdfFileUploadResponse {
    String originalFilename ;
    String signature ;
    String status ;
}
