package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RTextAutoriteRepository extends CrudRepository<RTextAutorite , String> , PagingAndSortingRepository<RTextAutorite,String> {
}