package com.example.grh_n.security.user.demandeInscription;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "A_DEMANDE_INSCRIPTION_USER")
public class DemandeInscriptionUser {

   @Id
   @Column(name = "id")
   private String id;

   @Column
   private LocalDateTime dateDemande;

   @Column
   private String password;

   @OneToOne()
   @JoinColumn(name = "personnel_id")
   private DPersonnel personnel;

   @OneToOne(mappedBy = "demandeInscription")
   private User user ;

}
