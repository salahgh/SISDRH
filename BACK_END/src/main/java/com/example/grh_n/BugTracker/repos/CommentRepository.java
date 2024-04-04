package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    // Additional methods if needed
}
