package com.example.grh_n.rh.entities.DEntitites.Personnel;

import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PersonnelsService {

    @Autowired
    private DPersonnelRepository personnelsRepository;

    private final ModelMapper modelMapper = new ModelMapper() ;

    public DPersonnelDto getPersonnelByMatriculeDto(String matricule) throws DPersonnelNotFoundException {
        return modelMapper.map(
                personnelsRepository.findByMatricule(matricule).orElseThrow(() -> new DPersonnelNotFoundException(matricule)),
                DPersonnelDto.class
        );
    }

    public DPersonnel getPersonnelByMatricule(String matricule) throws EntityNotFoundException {
        return
                personnelsRepository.findByMatricule(matricule).orElseThrow(() -> new EntityNotFoundException(matricule));
   }

    public void createPersonnel(DPersonnelDto dPersonnelDto) {
        DPersonnel personnel = modelMapper.map(dPersonnelDto , DPersonnel.class) ;
        personnelsRepository.save(personnel);
    }

    public void updatePersonnel(DPersonnelDto dPersonnelDto) {
        DPersonnel personnel =modelMapper.map(dPersonnelDto , DPersonnel.class) ;
        personnelsRepository.save(personnel);
    }

    public void deletePersonnel(DPersonnel personnel) {
        personnelsRepository.delete(personnel);
    }

    public Page<DPersonnelDto> findAll(Pageable pageable) {
        Page<DPersonnel> dPersonnelPage = personnelsRepository.findAll(pageable) ;
        return dPersonnelPage.map( (dpersonel) -> modelMapper.map(dpersonel,DPersonnelDto.class));
    }
}
