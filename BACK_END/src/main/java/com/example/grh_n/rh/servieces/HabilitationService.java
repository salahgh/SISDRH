package com.example.grh_n.rh.servieces;

import com.example.grh_n.security.user.Habilitation;
import com.example.grh_n.security.user.HabilitationRepository;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class HabilitationService {

    private final HabilitationRepository habilitationRepository;

    public HabilitationService(HabilitationRepository habilitationRepository) {
        this.habilitationRepository = habilitationRepository;
    }

    public Habilitation findById(String id) {
        return habilitationRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("habilitaion with id " + id + " not found"));
    }

}
