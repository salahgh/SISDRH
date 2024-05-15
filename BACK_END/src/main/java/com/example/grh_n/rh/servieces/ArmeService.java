package com.example.grh_n.rh.servieces;

import com.example.grh_n.rh.entities.REntities.RhRArme;
import com.example.grh_n.rh.entities.REntities.RhRCommandement;
import com.example.grh_n.rh.repos.RhRArmeRepository;
import com.example.grh_n.rh.repos.RhRCommandementRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
@GraphQLApi
public class ArmeService {

    private final RhRArmeRepository armeRepository;
    private final RhRCommandementRepository commandementRepository;

    public ArmeService(RhRArmeRepository armeRepository, RhRCommandementRepository commandementRepository) {
        this.armeRepository = armeRepository;
        this.commandementRepository = commandementRepository;
    }

    @GraphQLQuery
    public RhRArme armeById(Long armeId) {
        return armeRepository.findById(armeId).orElseThrow(() -> new EntityNotFoundException("RhArme with id " + armeId + " does not exist"));
    }

    @GraphQLQuery
    public Optional<RhRCommandement> getCommandementById(BigInteger id) {
        return commandementRepository.findById(id);
    }

    @GraphQLQuery
    public List<RhRArme> getAllArmes() {
        return (List<RhRArme>) armeRepository.findAll();
    }

    @GraphQLQuery
    public List<RhRArme> getTedArmes() {
        return armeRepository.allArmesTed() ;
    }

    @GraphQLQuery
    public List<RhRCommandement> getAllCommandements() {
        return (List<RhRCommandement>) commandementRepository.findAll();
    }
}