
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Urgence {
   @Id
   private String id;

   private String libUrgenceAr;

   private String libUrgenceFr;
}
