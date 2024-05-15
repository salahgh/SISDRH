package com.example.grh_n.rh.servieces.ted;


import com.example.grh_n.rh.entities.REntities.ted.RhRArmementTed;
import com.example.grh_n.rh.repos.ted.RhRArmementTedRepository;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class AremementTedService {

    private final RhRArmementTedRepository armementTedRepository;

    public AremementTedService(RhRArmementTedRepository armementTedRepository) {
        this.armementTedRepository = armementTedRepository;
    }

    RhRArmementTed findById(String id) {
        return armementTedRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("arement ted with id " + id + " does not exist")) ;
    }

}
