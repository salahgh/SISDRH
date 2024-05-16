package com.example.grh_n.rh.entities.REntities.ted;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RhPoste {
    @Id
    String idPoste ;
    Integer trie_ ;

}
