package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;


import com.example.grh_n.rh.entities.REntities.RhRunite;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class RTextAutorite {

    @Id
    Long id ;

    @OneToOne
    @MapsId("id")
    @JoinColumn(name = "id")
    RhRunite rhRunite ;

}
