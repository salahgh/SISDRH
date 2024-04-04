package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Priority;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

public interface PriorityRepository extends CrudRepository<Priority, Long>, JpaSpecificationExecutor<Priority> {
}