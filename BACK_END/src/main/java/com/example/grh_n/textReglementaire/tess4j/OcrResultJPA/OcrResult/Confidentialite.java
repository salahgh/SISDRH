package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import com.example.grh_n.security.user.Habilitation;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table( name = "RH_R_CONFIDENTIALITE")
public class Confidentialite {

   // the id 1 2 3 is also the priority
   @Id
   private String id;
   private String libConfidentialiteAr;
   private String libConfidentialiteFr;

   @ManyToMany(mappedBy = "confidentialites", fetch = FetchType.LAZY)
   @ToString.Exclude
   private List<Habilitation> habilitations ;
}
