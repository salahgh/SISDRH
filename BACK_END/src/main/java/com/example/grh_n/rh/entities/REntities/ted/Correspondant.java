package com.example.grh_n.rh.entities.REntities.ted;


import com.example.grh_n.rh.entities.REntities.RhRunite;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "TR_CORRESPONDANT")
public class Correspondant {

    @Id
    Long id;

    @MapsId(value = "id")
    @OneToOne
    @JoinColumn(name = "id")
    private RhRunite runite;

}
