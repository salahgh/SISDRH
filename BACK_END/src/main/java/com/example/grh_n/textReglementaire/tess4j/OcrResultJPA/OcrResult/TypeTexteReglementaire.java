
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import lombok.*;
import jakarta.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "R_TYPE_TEXT_REGLEMENTAIRE")
public class TypeTexteReglementaire {

   @Id
   private String id;

   private String libTypeTexteAr;

   private String libTypeTexteFr;

}
