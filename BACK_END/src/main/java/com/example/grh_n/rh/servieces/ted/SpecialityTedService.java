package com.example.grh_n.rh.servieces.ted;


import com.example.grh_n.rh.entities.REntities.ted.RhRQualification;
import com.example.grh_n.rh.entities.REntities.ted.RhRSpecialiteTed;
import com.example.grh_n.rh.repos.ted.RhRSpecialiteTedRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class SpecialityTedService {
    private final RhRSpecialiteTedRepository rhRSpecialiteTedRepository;

    public SpecialityTedService(RhRSpecialiteTedRepository rhRSpecialiteTedRepository) {
        this.rhRSpecialiteTedRepository = rhRSpecialiteTedRepository;
    }

    public RhRSpecialiteTed findByhId(String id) {
        return rhRSpecialiteTedRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("RhRSpecialiteTed with id " + id + " does not exist"));
    }

    @GraphQLQuery
    public List<RhRSpecialiteTed> allSpecialitesTed(){
        return (List<RhRSpecialiteTed>) rhRSpecialiteTedRepository.findAll();
    }


}
