package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Tag;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TagRepository extends CrudRepository<Tag, Long> {
    // Additional methods if needed
    Optional<Tag> findByName(String tagName) ;
}

