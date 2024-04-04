package com.example.grh_n.repositories;


import com.example.grh_n.security.auth.AuthenticationService;
import com.example.grh_n.security.config.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class test {

    final AuthenticationService authenticationService ;
    final JwtService jwtService ;






}
