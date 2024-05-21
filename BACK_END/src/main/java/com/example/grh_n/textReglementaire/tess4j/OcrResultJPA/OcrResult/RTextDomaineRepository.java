package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RTextDomaineRepository extends CrudRepository<RTextDomaine, String> , PagingAndSortingRepository<RTextDomaine,String > {
}