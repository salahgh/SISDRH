package com.example.grh_n.rh.servieces.ted;


import com.example.grh_n.rh.entities.REntities.ted.RhTedFonction;
import com.example.grh_n.rh.repos.ted.RhTedFonctionRepository;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class FonctionService {
    private final RhTedFonctionRepository fonctionRepository;
    public FonctionService(RhTedFonctionRepository fonctionRepository) {
        this.fonctionRepository = fonctionRepository;
    }
    public RhTedFonction fonctionById(String id) {
        return fonctionRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("fonction with id " + id + " not found"));
    }
}
