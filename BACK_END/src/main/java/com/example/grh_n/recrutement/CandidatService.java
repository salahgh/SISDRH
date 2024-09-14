package com.example.grh_n.recrutement;


import com.example.grh_n.recrutement.QInscription;
import com.querydsl.core.types.dsl.BooleanExpression;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@GraphQLApi
public class CandidatService {

    private final InscriptionRepository inscriptionRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public CandidatService( InscriptionRepository inscriptionRepository) {
        this.inscriptionRepository = inscriptionRepository;
    }

    @GraphQLQuery
    public Inscription getCandidatById(String id) {
        return inscriptionRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("candidt with id " + id + " not found"));
    }

    @GraphQLMutation
    public void deleteCandidatById(String id) {
        inscriptionRepository.deleteById(id);
    }

    @GraphQLQuery
    public Page<Inscription> searchCandidat(CandidatSearchDto candidatSearchDto, Pageable pageable) {

        logger.info(candidatSearchDto.toString());
        logger.info(pageable.toString());

        QInscription qInscription = QInscription.inscription;

        BooleanExpression booleanExpression;

        if (candidatSearchDto.getDnDebut() == null) candidatSearchDto.setDnDebut(LocalDate.parse("1970-01-01"));
        if (candidatSearchDto.getDnFin() == null) candidatSearchDto.setDnFin(LocalDate.parse("2050-01-01"));

        booleanExpression = qInscription.
                dn.between(candidatSearchDto.getDnDebut(), candidatSearchDto.getDnFin());

        if (candidatSearchDto.getToken() != null && !candidatSearchDto.getToken().isEmpty()) {
            booleanExpression = booleanExpression.and(qInscription.nom.contains(candidatSearchDto.getToken())
                    .or(qInscription.noma.contains(candidatSearchDto.getToken()))
                    .or(qInscription.pnom.contains(candidatSearchDto.getToken()))
                    .or(qInscription.pnoma.contains(candidatSearchDto.getToken()))
                    .or(qInscription.id.contains(candidatSearchDto.getToken())));
        }

        if (candidatSearchDto.getDateInsc() != null) {
            booleanExpression = booleanExpression.and(qInscription.dateInsc.eq(candidatSearchDto.getDateInsc()));
        }

        if (candidatSearchDto.getWilayaNaissanceIds() != null && !candidatSearchDto.getWilayaNaissanceIds().isEmpty()) {
            booleanExpression = booleanExpression.and(qInscription.wn.id.in(candidatSearchDto.getWilayaNaissanceIds()));
        }

        if (candidatSearchDto.getWilayaResidenceIds() != null && !candidatSearchDto.getWilayaResidenceIds().isEmpty()) {
            booleanExpression = booleanExpression.and(qInscription.lr.wilaya.id.in(candidatSearchDto.getWilayaResidenceIds()));
        }

        if (candidatSearchDto.getTelephone() != null) {
            booleanExpression = booleanExpression.and(qInscription.telephone.contains(candidatSearchDto.getTelephone()));
        }

        if (candidatSearchDto.getEmail() != null) {
            booleanExpression = booleanExpression.and(qInscription.email.contains(candidatSearchDto.getEmail()));
        }

        if(candidatSearchDto.getIdSex() != null && !candidatSearchDto.getIdSex().isEmpty()){
            booleanExpression = booleanExpression.and(qInscription.sex.id.in(candidatSearchDto.getIdSex()));
        }

        return inscriptionRepository.findAll(booleanExpression, pageable);

    }
}
