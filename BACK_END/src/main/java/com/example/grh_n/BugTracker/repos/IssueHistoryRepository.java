package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.IssueHistory;
import org.springframework.data.repository.CrudRepository;

public interface IssueHistoryRepository extends CrudRepository<IssueHistory, Long> {
    // Additional methods if needed
}
