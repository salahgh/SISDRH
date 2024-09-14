package com.example.grh_n.rh.entities.REntities;


import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CodeGeoService {

    private final RhRCodeGeoRepository codeGeoRepository ;

    public CodeGeo findById(Long id){
        return codeGeoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("r_code_geo not found")) ;
    }

}
