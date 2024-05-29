package com.example.grh_n;


import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
@AllArgsConstructor
public class ApplicationService {

    private final ApplicationsRepository applicationsRepository ;

    @GraphQLQuery
    public List<Applications> findAllApplications() {
        return (List<Applications>) applicationsRepository.findAll();
    }
}
