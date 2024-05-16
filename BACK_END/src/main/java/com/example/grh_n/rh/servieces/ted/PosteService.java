package com.example.grh_n.rh.servieces.ted;


import com.example.grh_n.rh.entities.REntities.ted.RhPoste;
import com.example.grh_n.rh.repos.ted.RhPosteRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class PosteService {

    private final RhPosteRepository posteRepository;

    public PosteService(RhPosteRepository posteRepository) {
        this.posteRepository = posteRepository;
    }

    public RhPoste findById(String id) {
        return posteRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("poste with id " + id + " does not exist"));
    }

    @GraphQLQuery
    public List<RhPoste> allPostes(){
        return (List<RhPoste>) posteRepository.findAllOrdered();
    }

}
