package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations;

import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@GraphQLApi
public class OcrResultRelationsService {

    private final OcrResultRelationsRepository ocrResultRelationsRepository ;

    public OcrResultRelationsService(OcrResultRelationsRepository ocrResultRelationsRepository) {
        this.ocrResultRelationsRepository = ocrResultRelationsRepository;
    }

    @GraphQLMutation
    public OcrResultRelation createOcrResultRelation(String subjectId , String objectId , String typeId) {

        OcrResultRelation ocrResultRelation = OcrResultRelation.builder()
                .id(OcrResultRelationKey.builder()
                        .subject(subjectId)
                        .object(objectId)
                        .typeRelation(typeId)
                        .build()
                )
                .build();
        return ocrResultRelationsRepository.save(ocrResultRelation) ;
    }

    @GraphQLMutation
    public boolean deleteOcrResultRelation (OcrResultRelationKey ocrResultRelationKey) {
        ocrResultRelationsRepository.delete(
                ocrResultRelationsRepository.findById(ocrResultRelationKey).orElseThrow(
                        () -> new EntityNotFoundException("relation with id " + ocrResultRelationKey + " does not exist")));
        return true ;
    }

    @GraphQLQuery
    public List<OcrResultRelation> getAllOcrResultRelatios(){
        return IteratorUtils.toList(ocrResultRelationsRepository.findAll().iterator());
    }

    @GraphQLQuery
    public OcrResultRelation getOcrResultRelation(OcrResultRelationKey ocrResultRelationKey){
        return ocrResultRelationsRepository.findById(ocrResultRelationKey).orElseThrow(
                () -> new EntityNotFoundException("ocrResultRelation with id " + ocrResultRelationKey + " does not exist")
        ) ;
    }
}
