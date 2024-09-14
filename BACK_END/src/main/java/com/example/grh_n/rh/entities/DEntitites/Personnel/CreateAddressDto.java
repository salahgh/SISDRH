package com.example.grh_n.rh.entities.DEntitites.Personnel;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class CreateAddressDto {

    String id ;

    Long idApc;

    String typeAddress;

    String idPersonnel;

    LocalDate dateDebut;

    LocalDate dateFin;

    String libAddress;

}
