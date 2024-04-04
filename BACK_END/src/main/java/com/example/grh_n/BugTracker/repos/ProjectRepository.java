package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> , PagingAndSortingRepository<Project , Long> {
    // Additional methods if needed
}
