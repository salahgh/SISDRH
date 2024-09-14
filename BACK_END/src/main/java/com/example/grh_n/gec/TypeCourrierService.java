package com.example.grh_n.gec;


import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@GraphQLApi
@Service
@AllArgsConstructor
public class TypeCourrierService {

    private final TypeCourrierRepository typeCourrierRepository;

    @GraphQLQuery
    public TypeCourrier findTypeCourrierById(String id){
        return typeCourrierRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("entity not found"));
    }

    @GraphQLQuery
    public List<TypeCourrier> findAllTypeCourrier(){
        return (List<TypeCourrier>) typeCourrierRepository.findAll();
    }

}
