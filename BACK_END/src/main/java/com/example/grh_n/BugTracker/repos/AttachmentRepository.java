package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Attachment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AttachmentRepository extends CrudRepository<Attachment, Long> , PagingAndSortingRepository<Attachment , Long> {
    // Additional methods if needed
}
