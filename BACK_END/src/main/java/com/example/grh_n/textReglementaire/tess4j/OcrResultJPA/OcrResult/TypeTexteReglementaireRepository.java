
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;


import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface TypeTexteReglementaireRepository extends CrudRepository<TypeTexteReglementaire, String> , QuerydslPredicateExecutor<TypeTexteReglementaire> {
}
