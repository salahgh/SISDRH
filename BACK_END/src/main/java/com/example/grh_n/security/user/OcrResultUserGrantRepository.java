package com.example.grh_n.security.user;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface OcrResultUserGrantRepository extends PagingAndSortingRepository<OcrResultUserGrant, OcrResultUserGrantKey> , CrudRepository<OcrResultUserGrant , OcrResultUserGrantKey> {

    @Override
    <S extends OcrResultUserGrant> S save(S entity);

    @Override
    void deleteById(OcrResultUserGrantKey ocrResultUserGrantKey);

    List<OcrResultUserGrant> findAllByOcrResultEntityJpa(OcrResultEntityJpa ocrResultEntityJpa) ;

    void deleteByOcrResultEntityJpa(OcrResultEntityJpa ocrResultEntityJpa) ;

}