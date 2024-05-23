package com.example.grh_n.rh.servieces.ted;


import com.example.grh_n.rh.entities.REntities.ted.RhRQualification;
import com.example.grh_n.rh.repos.RhRQualificationRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class QualificationService {

    private final RhRQualificationRepository rhRQualificationRepository;

    public QualificationService(RhRQualificationRepository rhRQualificationRepository) {
        this.rhRQualificationRepository = rhRQualificationRepository;
    }

    public RhRQualification findById(Long id) {
       return rhRQualificationRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("qualification with id " + id + " does not exist"));
    }

    @GraphQLQuery
    public List<RhRQualification> allQualifications(){
        return (List<RhRQualification>) rhRQualificationRepository.findAll();
    }

}
