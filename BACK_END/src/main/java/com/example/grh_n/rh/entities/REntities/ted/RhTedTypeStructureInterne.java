package com.example.grh_n.rh.entities.REntities.ted;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RhTedTypeStructureInterne {

    @Id
    String id ;

    String libAr ;
    String libFr ;

    @OneToMany(mappedBy = "typeStructureInterne")
    List<RhTedStructureInterne> tedStructureInternes ;

}
