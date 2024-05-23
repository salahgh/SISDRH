package com.example.grh_n.rh.servieces.ted;

import com.example.grh_n.rh.entities.REntities.ted.RhTedStructureInterne;
import com.example.grh_n.rh.repos.ted.RhTedStructureInterneRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class StructureInerneService {

    private final RhTedStructureInterneRepository repository ;

    public StructureInerneService(RhTedStructureInterneRepository repository) {
        this.repository = repository;
    }

    @GraphQLMutation
    public RhTedStructureInterne createRhTedStructureInterne(RhTedStructureInterne structureInterne){
        return repository.save(structureInterne);
    }

    @GraphQLQuery
    public RhTedStructureInterne findRhTedStructureInterneById(String id){
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("structure interne with id " + id + " does not exist"));
    }

}
