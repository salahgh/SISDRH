package com.example.grh_n.security.user;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class OcrResultUserGrantKeyInput {
    private String OcrResultId ;
    private String userId ;
    private UserGrants type ;
}
