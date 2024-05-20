package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.notes;


import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CreateNoteDto {

        private String id;

        private String text ;

        private String ownerId ;

        String textReglemetaireId ;

        private LocalDateTime dateCreation ;

}
