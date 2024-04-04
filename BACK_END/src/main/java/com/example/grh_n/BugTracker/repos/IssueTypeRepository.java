package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.IssueType;
import org.springframework.data.repository.CrudRepository;

public interface IssueTypeRepository extends CrudRepository<IssueType, Long> {
}