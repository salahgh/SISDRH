package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Status;
import org.springframework.data.repository.CrudRepository;

public interface StatusRepository extends CrudRepository<Status, Long> {
}