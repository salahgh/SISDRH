package com.example.grh_n.gec;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CourrierAttachmentRepository extends CrudRepository<CourrierAttachment, String> {
    @Query("select a from CourrierAttachment a where a.courrier.id = :courrierId")
    List<CourrierAttachment> findAllByCourrierId(String courrierId);
}