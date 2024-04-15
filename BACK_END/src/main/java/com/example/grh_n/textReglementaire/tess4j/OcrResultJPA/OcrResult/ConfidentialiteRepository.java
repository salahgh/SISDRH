
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface ConfidentialiteRepository extends CrudRepository<Confidentialite, String> , QuerydslPredicateExecutor<Confidentialite> {
}
