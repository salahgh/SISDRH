package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface OcrResultRelationsRepository extends CrudRepository<OcrResultRelation, OcrResultRelationKey>, PagingAndSortingRepository<OcrResultRelation, OcrResultRelationKey> {

    @Query("select relation from OcrResultRelation relation where relation.subject.id = :subjectId")
    List<OcrResultRelation> findBySubjectId(String subjectId);

    @Query("select relation from OcrResultRelation relation where relation.subject.id = :objectId")
    List<OcrResultRelation> findByObjectId(String objectId);

}