package com.example.grh_n.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import java.time.LocalDateTime;
import java.util.Collection;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token ;
    private String nom ;
    private String pnom ;
    private String noma ;
    private String pnoma ;
    private String matricule ;
    private LocalDateTime expirationDate ;
    private Collection<? extends GrantedAuthority> GrantedAuthorities;
}
