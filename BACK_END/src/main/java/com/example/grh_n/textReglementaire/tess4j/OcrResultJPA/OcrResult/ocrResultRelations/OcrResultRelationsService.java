package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
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
    private final OcrResultService ocrResultService ;
    private final OcrResultRelationTypeRepository ocrResultRelationTypeRepository;

    public OcrResultRelationsService(OcrResultRelationsRepository ocrResultRelationsRepository, OcrResultService ocrResultService,
                                     OcrResultRelationTypeRepository ocrResultRelationTypeRepository) {
        this.ocrResultRelationsRepository = ocrResultRelationsRepository;
        this.ocrResultService = ocrResultService;
        this.ocrResultRelationTypeRepository = ocrResultRelationTypeRepository;
    }

    @GraphQLMutation
    public OcrResultRelation createOcrResultRelation(String subjectId , String objectId , String relationTypeId) {

        OcrResultRelation ocrResultRelation = OcrResultRelation.builder()
                .id(OcrResultRelationKey.builder()
                        .subject(subjectId)
                        .object(objectId)
                        .relationType(relationTypeId)
                        .build()
                ).object(ocrResultService.findById(objectId))
                .subject(ocrResultService.findById(subjectId))
                .build();
        return ocrResultRelationsRepository.save(ocrResultRelation) ;
    }

    @GraphQLQuery
    public OcrResultRelation getOcrResultRelationById(OcrResultRelationKey ocrResultRelationKey){
        return ocrResultRelationsRepository.findById(ocrResultRelationKey).orElseThrow(
                () -> new EntityNotFoundException("ocrResultRelation with id " + ocrResultRelationKey + " does not exist")
        ) ;
    }

    @GraphQLQuery
    public List<OcrResultRelation> getOcrResultRelationBySubjectId(String subjectId){
        return ocrResultRelationsRepository.findBySubjectId(subjectId);
    }

    @GraphQLQuery
    public List<OcrResultRelation> getOcrResultRelationByObjectId(String objectId){
        return ocrResultRelationsRepository.findByObjectId(objectId);
    }

    @GraphQLQuery
    public List<OcrResultRelation> getAllOcrResultRelatios(){
        return IteratorUtils.toList(ocrResultRelationsRepository.findAll().iterator());
    }

    @GraphQLMutation
    public boolean deleteOcrResultRelation (OcrResultRelationKey ocrResultRelationKey) {
        ocrResultRelationsRepository.delete(
                ocrResultRelationsRepository.findById(ocrResultRelationKey).orElseThrow(
                        () -> new EntityNotFoundException("relation with id " + ocrResultRelationKey + " does not exist")));
        return true ;
    }

    @GraphQLQuery
    public List<OcrResultRelationType> getAllOcrResultRelatioTypes(){
        return IteratorUtils.toList(ocrResultRelationTypeRepository.findAll().iterator());
    }


}
