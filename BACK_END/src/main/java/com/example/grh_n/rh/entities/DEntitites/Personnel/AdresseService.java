package com.example.grh_n.rh.entities.DEntitites.Personnel;


import com.example.grh_n.rh.entities.REntities.CodeGeo;
import com.example.grh_n.rh.entities.REntities.CodeGeoService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
@AllArgsConstructor
public class AdresseService {

    private final AdresseRepository adresseRepository;
    private final TypeAdresseRepository typeAdresseRepository;
    private final PersonnelsService personnelsService;
    private final CodeGeoService codeGeoService ;

    @GraphQLQuery
    List<Adresse> findAllAdressesByPersonnelId(String personnelId) {
        return adresseRepository.findAllAdressesByPersonnelId(personnelId);
    }

    @GraphQLQuery
    Adresse findAdresseById(String id){
        return adresseRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("not found"));
    }

    public TypeAdresse findTypeAdresseById(String typeAdresse) {
        return typeAdresseRepository.findById(typeAdresse).orElseThrow(() -> new EntityNotFoundException("type adresse not found"));
    }

    @GraphQLMutation
    public Adresse addAdresseToPersonnel(CreateAddressDto adresseDto) {

        DPersonnel personnel = personnelsService.getPersonnelByMatricule(adresseDto.idPersonnel);
        TypeAdresse typeAdresse = findTypeAdresseById(adresseDto.typeAddress);
        CodeGeo codeGeo = codeGeoService.findById(adresseDto.getIdApc());

        Adresse adresse = Adresse.builder()
                .apc(codeGeo)
                .personnel(personnel)
                .typeAdresse(typeAdresse)
                .dateDebut(adresseDto.dateDebut)
                .dateFin(adresseDto.dateFin)
                .libAdresse(adresseDto.libAddress)
                .build();

        return adresseRepository.save(adresse);
    }

    @GraphQLMutation
    public Adresse updateAdresse(CreateAddressDto adresseDto){

        Adresse adresse = findAdresseById(adresseDto.id);

        TypeAdresse typeAdresse = findTypeAdresseById(adresseDto.typeAddress);
        CodeGeo codeGeo = codeGeoService.findById(adresseDto.getIdApc());
        adresse.setApc(codeGeo);
        adresse.setTypeAdresse(typeAdresse);
        adresse.setDateDebut(adresseDto.dateDebut);
        adresse.setDateFin(adresseDto.dateFin);
        adresse.setLibAdresse(adresseDto.libAddress);

        return adresseRepository.save(adresse);
    }

    @GraphQLMutation
    public void deleteAdresseById(String id){
        adresseRepository.deleteById(id);
    }

}
