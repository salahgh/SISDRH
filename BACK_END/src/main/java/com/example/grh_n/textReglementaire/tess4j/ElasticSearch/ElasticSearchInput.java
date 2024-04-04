package com.example.grh_n.textReglementaire.tess4j.ElasticSearch;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.* ;

import java.time.LocalDate;
import java.util.List ;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ElasticSearchInput {

   @JsonFormat(pattern = "yyyy-MM-dd")
   LocalDate dateReferenceDebut ;
   @JsonFormat(pattern = "yyyy-MM-dd")
   LocalDate dateReferenceFin ;
   String reference ;
   String searchToken ;
   List<String> idsTypeTextReglementaire ;
   List<String> isConfidentialite ;
   Integer page ;
   Integer size ;
   Integer innerPage ;
   Integer innerSize;
}
