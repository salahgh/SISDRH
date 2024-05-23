package com.example.grh_n.rh.servieces;

import com.example.grh_n.rh.entities.REntities.RhRTypeStructureSn;
import com.example.grh_n.rh.repos.RhRTypeStructureSnRepository;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class TypeStructureSnService {

    private final RhRTypeStructureSnRepository rhRTypeStructureSnRepository;

    public TypeStructureSnService(RhRTypeStructureSnRepository rhRTypeStructureSnRepository) {
        this.rhRTypeStructureSnRepository = rhRTypeStructureSnRepository;
    }
    public RhRTypeStructureSn findById(String id) {
        return rhRTypeStructureSnRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("RhRTypeStructureSn with id " + id + " does not exist"));
    }

}
