package com.example.grh_n.rh.entities.REntities.ted;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RhTedFonction {

    @Id
    String id ;

    String libFonctionAr ;
    String libFonctionFr ;

    boolean isChef ;
    boolean isAdjoint ;

    @ManyToOne
    RhTedStructureInterne structureInterne ;

}
