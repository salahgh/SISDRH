package com.example.grh_n.gec;

import com.example.grh_n.gec.QCourrierAutorite;
import com.querydsl.core.types.dsl.BooleanExpression;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class CourrierAutoriteService {

    private final CourrierAutoriteRepository courrierAutoriteRepository;

    public CourrierAutoriteService(CourrierAutoriteRepository courrierAutoriteRepository) {
        this.courrierAutoriteRepository = courrierAutoriteRepository;
    }

    @GraphQLQuery
    public CourrierAutorite findCourrierAutoriteById(Long id) {
        return courrierAutoriteRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("courrier autorite with id " + id + " does not exist"));
    }

    @GraphQLQuery
    public Page<CourrierAutorite> findAllCourrierAutoriteByLib(String lib, Pageable pageable) {
        QCourrierAutorite courrierAutorite = QCourrierAutorite.courrierAutorite;
        BooleanExpression expression = courrierAutorite.rhRunite.libUniteeAr.like('%' + lib.toUpperCase() + "%")
                .or(courrierAutorite.rhRunite.libUniteeFr.like('%' + lib.toUpperCase() + "%"))
                .or(courrierAutorite.rhRunite.abreviationAr.like('%' + lib.toUpperCase() + "%"))
                .or(courrierAutorite.rhRunite.abreviationFr.like('%' + lib.toUpperCase() + "%"))
                .or(courrierAutorite.rhRunite.id.like('%' + lib.toUpperCase() + "%"));
        return courrierAutoriteRepository.findAll(expression, pageable);
    }

}
