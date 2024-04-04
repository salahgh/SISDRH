package com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document(indexName = "ocr_index" , createIndex = false)
public class OcrResultEntityElastic_2 {

    @Id
    private String id;

    private String originalFileName ;

    @Field(type = FieldType.Date)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateReference ;

    private String reference ;

    private String libTypeTexteAr;

    private String libTypeTexteFr;

    private String libConfidentialiteAr;

    private String libConfidentialiteFr;

    private String libUrgenceAr;

    private String libUrgenceFr;

    private Integer numberOfPapers;

    private String owner ;

    private List<Page> pages = new ArrayList<>();
}


