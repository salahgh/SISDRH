package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RTextDomaine {

    @Id
    String id ;

    String libAr ;
    String libFr ;


}
