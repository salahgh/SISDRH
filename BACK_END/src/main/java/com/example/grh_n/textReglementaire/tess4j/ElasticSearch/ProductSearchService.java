package com.example.grh_n.textReglementaire.tess4j.ElasticSearch;

import co.elastic.clients.elasticsearch._types.FieldValue;
import co.elastic.clients.elasticsearch._types.SortOrder;
import co.elastic.clients.json.JsonData;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity.OcrIndexElasticRepository;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity.OcrResultEntityElastic_2;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.Confidentialite;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.TypeTexteReglementaire;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.client.elc.NativeQueryBuilder;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.core.query.SourceFilter;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@GraphQLApi
@RestController
@RequestMapping("/elastic_")
@CrossOrigin
public class ProductSearchService {

    private static final String OCR_INDEX = "ocr_index";
    private final ElasticsearchOperations operations;
    private final OcrIndexElasticRepository ocrIndexElasticRepository_;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    private final Integer PAGE_SIZE_LIMIt = 100;

    private final OcrResultService ocrResultService ;

    public ProductSearchService(ElasticsearchOperations operations, OcrIndexElasticRepository myElasticSearchRepository2, OcrResultService ocrResultService) {
        this.operations = operations;

        ocrIndexElasticRepository_ = myElasticSearchRepository2;
        this.ocrResultService = ocrResultService;
    }

    // todo see the posssiblity for eliminating the content field from the elastic result
    // todo see the possiblity for eliminating the content from the backend


    @GraphQLQuery(name = "ocrResultElasticById")
    public OcrResultEntityElastic_2 findByid(String fileId){
       return ocrIndexElasticRepository_.findById(fileId).orElseThrow(
               () -> new EntityNotFoundException("pdf file with id =  " +  fileId +" does not exist")
       ) ;
    }

    @PostMapping
    public SearchHits<OcrResultEntityElastic_2> findElasticOcrResultsAllCriterias(
            @RequestBody ElasticSearchInput elasticSearchInput
    ) {

        if (elasticSearchInput.getSize() > PAGE_SIZE_LIMIt || elasticSearchInput.getInnerSize() > PAGE_SIZE_LIMIt) {
            throw new IllegalArgumentException("page too big");
        }

        if(elasticSearchInput.getIsConfidentialite().isEmpty()){
            List<String> confidentialities = ocrResultService.getAllConfidentialites().stream().map(Confidentialite::getLibConfidentialiteFr).toList();
            elasticSearchInput.setIsConfidentialite(
                    confidentialities
            );
        }

        if(elasticSearchInput.getIdsTypeTextReglementaire().isEmpty()){
            elasticSearchInput.setIdsTypeTextReglementaire(
                    ocrResultService.getAllTypeTexteReglementaires().stream().map(TypeTexteReglementaire::getLibTypeTexteFr).toList()
            );
        }


        logger.info(elasticSearchInput.toString());

        PageRequest hitsPageable = PageRequest.of(elasticSearchInput.getPage() , elasticSearchInput.getSize()) ;
        PageRequest innerHitsPageable = PageRequest.of(elasticSearchInput.getInnerPage() , elasticSearchInput.getInnerSize());

        logger.info(elasticSearchInput.toString());

        Query searchQuery = new NativeQueryBuilder()
                .withQuery(
                        q -> q
                                .bool(b -> b
                                        .must(m -> m
                                                .wildcard(mq -> mq
                                                        .field("reference")
                                                        .value("*" + elasticSearchInput.reference + "*")
                                                )
                                        )
                                        .must(ddd -> ddd
                                                .terms(m -> m
                                                        .field("libTypeTexteFr")
                                                        .terms(mq -> mq.value(elasticSearchInput.getIdsTypeTextReglementaire().stream().map(FieldValue::of).collect(Collectors.toList())))
                                                )
                                        )
                                        .must(ddd -> ddd
                                                .terms(m -> m
                                                        .field("libConfidentialiteFr")
                                                        .terms(mq -> mq.value(elasticSearchInput.getIsConfidentialite().stream().map(FieldValue::of).collect(Collectors.toList())))
                                                )
                                        )
                                        .must(m2 -> m2
                                                .range(rq -> rq
                                                        .field("dateReference")
                                                        .gte(JsonData.fromJson("\"" + elasticSearchInput.dateReferenceDebut.toString() + "\""))
                                                        .lte(JsonData.fromJson("\"" + elasticSearchInput.dateReferenceFin.toString() + "\""))
                                                )
                                        )
                                        .must(m -> m
                                                .nested(n -> n
                                                        .path("pages.paragraphs.lines")
                                                        .query(nq -> nq
                                                                .bool(nb -> nb
                                                                        .should(s1 -> s1
                                                                                .wildcard(w -> w
                                                                                        .field("pages.paragraphs.lines.text")
                                                                                        .caseInsensitive(true)
                                                                                        .value("*" + elasticSearchInput.searchToken + "*")
                                                                                )
                                                                        )
//                                                                        .should(s2 -> s2
//                                                                                .fuzzy(f -> f
//                                                                                        .field("pages.paragraphs.lines.text")
//                                                                                        .value(elasticSearchInput.searchToken)
//                                                                                        .fuzziness("1")
//                                                                                )
//                                                                        )
                                                                        .should(s3 -> s3
                                                                                .matchPhrase(mf -> mf
                                                                                        .field("pages.paragraphs.lines.text")
                                                                                        .query(elasticSearchInput.searchToken)
                                                                                )
                                                                        )
                                                                )
                                                        )
                                                        .innerHits(builder -> builder
                                                                .name("pages.paragraphs.lines")
                                                                .from((int) innerHitsPageable.getOffset())
                                                                .size(innerHitsPageable.getPageSize())
                                                                .sort(s -> s
                                                                        .field(fsb -> fsb
                                                                                .order(SortOrder.Asc)
                                                                                .field("pages.paragraphs.lines.id")
                                                                        )
                                                                )

                                                        )
                                                )
                                        )
                                )

                )
                .withPageable(hitsPageable)
                .withSort(s -> s.field(fb -> fb.field("dateReference").order(SortOrder.Desc)))
                .withSourceFilter(new SourceFilter() {
                    @Override
                    public String[] getIncludes() {
                        return new String[0];
                    }

                    @Override
                    public String[] getExcludes() {
                        return new String[]{"pages"};
                    }
                })
                .build();
        SearchHits<OcrResultEntityElastic_2> searchHits = operations.search(searchQuery, OcrResultEntityElastic_2.class, IndexCoordinates.of("ocr_index"));
        logger.info(String.valueOf(searchHits.getTotalHits()));

        return searchHits;
    }

}


