package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;


@Data
public class OcrResultUpdateDto {
    String id ;
    String reference ;
    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate dateReference ;
    String idTypeTextReglementaire ;
    String originalFileName ;
    String isConfidentialite ;
    String idDomaine ;
    String idAutorite ;
    String ocrDone;
}
