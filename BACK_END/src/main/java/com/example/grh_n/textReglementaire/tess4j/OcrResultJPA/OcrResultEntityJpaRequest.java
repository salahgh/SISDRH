
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;


import lombok.*;

import java.io.Serializable;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class OcrResultEntityJpaRequest implements Serializable {
   private String originalFileName;
   private Date dateReference;
   private String reference;
   private String id;
   private TypeTexteReglementaireDto typeTexteReglementaire;
   private Integer idConfidentialite ;

   @AllArgsConstructor
   @NoArgsConstructor
   @Getter
   @Setter
   public static class TypeTexteReglementaireDto implements Serializable {
      private String id;
   }

}
