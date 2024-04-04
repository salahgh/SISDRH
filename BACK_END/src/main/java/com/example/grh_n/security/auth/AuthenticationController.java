package com.example.grh_n.security.auth;
import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnelDto;
import com.example.grh_n.security.user.DTOs.UserDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service ;
    Logger logger = LoggerFactory.getLogger(this.getClass()) ;

    @PostMapping("/register")
    public ResponseEntity<DPersonnelDto> register(
            @RequestBody @Valid RegisterRequest registerRequest
    ){
        return service.register(registerRequest);
    }

    @PostMapping("/authorizeUser")
    public ResponseEntity<UserDto> authorizeUser(@RequestParam String matricule){
        return ResponseEntity.ok().body(service.authorizeUser(matricule));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authenticationRequest
            ){
        return ResponseEntity.ok(service.authenticate(authenticationRequest)) ;
    }

}
