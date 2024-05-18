package com.example.grh_n.rh.entities.REntities.ted;


import com.example.grh_n.rh.entities.REntities.RhRTypeStructureSn;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class RhTedNum {

    @Id
    String id ;

    String referenceText ;
    String dateRefText ;
    String intituleTed ;
    String nombreUnite ;

    @OneToOne(mappedBy = "tedNum")
    RhRTypeStructureSn typeStructureSn ;

    @OneToMany(mappedBy = "tedNum")
    List<RhTedStructureInterne> rhTedStructureInternes ;



}
