package com.example.grh_n.security.user;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OcrResultUserGrant {

    @EmbeddedId
    private OcrResultUserGrantKey id ;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private User user ;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("OcrResultId")
    @JoinColumn(name = "OcrResultId")
    private OcrResultEntityJpa ocrResultEntityJpa ;

}
