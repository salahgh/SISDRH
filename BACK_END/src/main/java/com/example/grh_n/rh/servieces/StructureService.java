package com.example.grh_n.rh.servieces;


import com.example.grh_n.rh.entities.REntities.RhRRegionMilitaire;
import com.example.grh_n.rh.entities.REntities.RhRStructureSn;
import com.example.grh_n.rh.repos.RhRRegionMilitaireRepository;
import com.example.grh_n.rh.repos.RhRStructureSnRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@GraphQLApi
@Service
@AllArgsConstructor
public class StructureService {

    final RhRStructureSnRepository rStructureSnRepository ;
    final RhRRegionMilitaireRepository regionMilitaireRepository ;
    @GraphQLQuery
    public List<RhRRegionMilitaire> getAllRegionsMilitaires() {
       return (List<RhRRegionMilitaire>) regionMilitaireRepository.findAll();
    }

    @GraphQLQuery
    public RhRStructureSn findRStructureSnById(String id){
        return rStructureSnRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("not found"));
    }

}
