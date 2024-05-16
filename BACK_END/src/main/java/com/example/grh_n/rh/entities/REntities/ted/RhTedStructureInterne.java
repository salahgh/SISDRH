package com.example.grh_n.rh.entities.REntities.ted;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RhTedStructureInterne {

    @Id
    String id ;
    String libStructureAr ;
    String libStructureFr ;

    @ManyToOne
    RhTedStructureInterne pere ;

    @ManyToOne
    RhTedNum tedNum ;

    @ManyToOne
    RhTedTypeStructureInterne typeStructureInterne ;

    @OneToMany(mappedBy = "pere")
    List<RhTedStructureInterne> fils ;

}
