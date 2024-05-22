package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;


import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.RTextAutorite;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.RTextAutoriteRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class AutoriteService {

    private final RTextAutoriteRepository autoriteRepository ;

    public AutoriteService(RTextAutoriteRepository autoriteRepository) {
        this.autoriteRepository = autoriteRepository;
    }

    @GraphQLQuery
    public List<RTextAutorite> findAllTextAutorities() {
        return (List<RTextAutorite>) autoriteRepository.findAll();
    }
}
