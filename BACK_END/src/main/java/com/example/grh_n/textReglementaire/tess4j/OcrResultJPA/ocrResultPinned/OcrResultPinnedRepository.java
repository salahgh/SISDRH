package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.ocrResultPinned;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;


public interface OcrResultPinnedRepository extends CrudRepository<OcrResultPinned, String> {

    @Override
    @PreAuthorize("hasAuthority(#entity.ocrResult.confidentialite.libConfidentialiteFr)")
    <S extends OcrResultPinned> S save(S entity);

    @Override
    @Query("SELECT p FROM OcrResultPinned p join p.ocrResult r WHERE r.confidentialite.libConfidentialiteFr IN " +
            "(SELECT c.libConfidentialiteFr FROM User u JOIN u.habilitation h JOIN h.confidentialites c " +
            "WHERE u.id = ?#{ principal.username } )")
    Iterable<OcrResultPinned> findAll();

//    @Override
//    void deleteById(String s);
}
