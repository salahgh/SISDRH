package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.ocrResultPinned;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OCRResultCrudRepository;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@GraphQLApi
public class OcrResultPinnedService {

    private final OcrResultPinnedRepository ocrResultPinnedRepository;
    private final OCRResultCrudRepository ocrResultCrudRepository ;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    public OcrResultPinnedService(OcrResultPinnedRepository ocrResultPinnedRepository, OCRResultCrudRepository ocrResultCrudRepository) {
        this.ocrResultPinnedRepository = ocrResultPinnedRepository;
        this.ocrResultCrudRepository = ocrResultCrudRepository;
    }

    @GraphQLMutation(name = "pinOcrResult")
    public OcrResultPinned save(String ocrResultId) {
        logger.info(ocrResultId);
        OcrResultEntityJpa ocrResultEntityJpa = ocrResultCrudRepository.findById(ocrResultId)
                .orElseThrow(() -> new EntityNotFoundException("entity ocr result with id " + ocrResultId + " not found")) ;
        logger.info("entity found");
        OcrResultPinned ocrResultPinned = OcrResultPinned.builder()
                        .ocrResult(ocrResultEntityJpa)
                        .id(ocrResultId)
                        .build() ;
        logger.info("saving  ...");
        logger.info(ocrResultPinned.getId());
        ocrResultPinnedRepository.save(ocrResultPinned) ;
        return ocrResultPinned ;
    }

//   @GraphQLQuery(name = "findPinnedOcrResult")
//   public Optional<OcrResultPinned> findById(String id) {
//      return ocrResultPinnedRepository.findById(id);
//   }

    @GraphQLQuery(name = "findPinnedOcrResults")
    public List<OcrResultPinned> findAll() {
        Iterable<OcrResultPinned> iterable = ocrResultPinnedRepository.findAll();
        List<OcrResultPinned> resultList = new ArrayList<>();
        iterable.forEach(resultList::add);
        return resultList;
    }

    @GraphQLMutation(name = "unpinOcrResult")
    public void deleteById(String id) {
        ocrResultPinnedRepository.deleteById(id);
    }

    // Add other methods as needed for manipulating the entity
}
