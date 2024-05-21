package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.RTextDomaine;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.RTextDomaineRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class DomaineService {

    private final RTextDomaineRepository domaineRepository ;

    public DomaineService(RTextDomaineRepository domaineRepository) {
        this.domaineRepository = domaineRepository;
    }

    @GraphQLQuery
    public List<RTextDomaine> findAllDomaines(){
        return (List<RTextDomaine>) domaineRepository.findAll();
    }
}
