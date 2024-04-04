package com.example.grh_n.security.user;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class OcrResultUserGrantKey implements Serializable {

    private String OcrResultId ;
    private String userId ;
    private String type ;

}
