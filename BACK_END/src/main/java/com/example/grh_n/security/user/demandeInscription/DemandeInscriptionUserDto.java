package com.example.grh_n.security.user.demandeInscription;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnelDto;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class DemandeInscriptionUserDto implements Serializable {

   private String id;
   private LocalDateTime dateDemande;
   private DPersonnelDto personnel;

}
