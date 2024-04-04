package com.example.grh_n.security.auth;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnelDto;
import com.example.grh_n.rh.entities.DEntitites.Personnel.PersonnelsService;
import com.example.grh_n.security.config.JwtService;
import com.example.grh_n.security.user.DTOs.UserDto;
import com.example.grh_n.security.user.Habilitation;
import com.example.grh_n.security.user.HabilitationRepository;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserService;
import com.example.grh_n.security.user.demandeInscription.DemandeInscriptionUser;
import com.example.grh_n.security.user.demandeInscription.DemandeInscriptionUserRepository;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.Folder;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.FolderService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@GraphQLApi
public class AuthenticationService {

    private final UserService userService;
    private final HabilitationRepository habilitationRepository;
    private final FolderService folderService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PersonnelsService personnelsService;
    private final DemandeInscriptionUserRepository demandeRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final ModelMapper modelMapper = new ModelMapper();

    public ResponseEntity<DPersonnelDto> register(@Valid RegisterRequest registerRequest) {

        DPersonnel personnel = personnelsService.getPersonnelByMatricule(registerRequest.getMatricule());
        boolean demandeExiste = demandeRepository.existsById(registerRequest.getMatricule());
        if (demandeExiste)
            throw new EntityExistsException("demande already exists matricule =" + registerRequest.getMatricule());
        DemandeInscriptionUser demande = DemandeInscriptionUser.builder()
                .id(registerRequest.getMatricule())
                .dateDemande(LocalDateTime.now())
                .personnel(personnel)
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .build();
        demandeRepository.save(demande);
        //todo change the AuthenticationResponse to demandeResponse
        DPersonnelDto dPersonnelDto = modelMapper.map(personnel, DPersonnelDto.class);
        return ResponseEntity.ok().body(dPersonnelDto);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {

        User user;
        try {
            user = userService.getByMatricule(authenticationRequest.getMatricule());
        } catch (EntityNotFoundException e) {
            DemandeInscriptionUser existingDemande = demandeRepository.findById(authenticationRequest.getMatricule())
                    .orElseThrow(() -> new EntityNotFoundException("demande n'existe pas"));
            LocalDateTime currentDate = existingDemande.getDateDemande();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");
            String formattedDate = currentDate.format(formatter);
            throw new EntityNotFoundException("votre demande n'est pas encore valide. date de la demande : " + formattedDate);
        }
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getMatricule(),
                        authenticationRequest.getPassword()
                )
        );
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .nom(user.getPersonnel().getNom())
                .pnom(user.getPersonnel().getPnom())
                .noma(user.getPersonnel().getNoma())
                .pnoma(user.getPersonnel().getPnoma())
                .GrantedAuthorities(user.getAuthorities())
                .matricule(user.getPersonnel().getMatricule())
                .build();
        // todo refine
    }

    @GraphQLMutation(name = "validateUserDemande")
    public UserDto authorizeUser(String matricule) {

        DPersonnel personnel = personnelsService.getPersonnelByMatricule(matricule);
        DemandeInscriptionUser demandeInscriptionUser = demandeRepository.findByPersonnel(personnel)
                .orElseThrow(() -> new EntityNotFoundException("demande non trouve matricule =" + matricule));
       Habilitation habilitation = habilitationRepository.findById("3").orElseThrow(
               () -> new EntityNotFoundException("habilitation avec id 3 not found")
       );

        User createdUser = User.builder()
                .locked("n")
                .id(matricule)
                .personnel(personnel)
                .password(demandeInscriptionUser.getPassword())
                .demandeInscription(demandeInscriptionUser)
                .habilitation(habilitation)
                .build();

        createdUser = userService.createUser(createdUser);
        Folder favoriteFolder = Folder.builder()
                .name("المفضلة")
                .description("FAVORITE")
                .build();
        folderService.createFolder(favoriteFolder, createdUser.getUsername());
        Folder forReadLater = Folder.builder()
                .name("للقراءة لاحقا")
                .description("FORREAD")
                .build();


        folderService.createFolder(forReadLater, createdUser.getUsername());
        return modelMapper.map(createdUser, UserDto.class);
    }

    public ResponseEntity<String> refreshJwtToken(String currentToken) {
        // Check if the user has been inactive for a specified duration
        String username = jwtService.extractMatricule(currentToken);
//        if (jwtService.isUserInactive(username)) {
//            // User is inactive, force reauthentication or handle as needed
//            return ResponseEntity.badRequest().body("User inactive. Please reauthenticate.");
//        }

        // User is active, refresh the token
        String refreshedToken = jwtService.refreshJwtToken(currentToken);

        return ResponseEntity.ok(refreshedToken);
    }
}
