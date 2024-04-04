package com.example.grh_n.BugTracker.repos;

import com.example.grh_n.BugTracker.entities.Issue;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IssueRepository extends CrudRepository<Issue, Long> , PagingAndSortingRepository<Issue , Long> {

    @Query("select i from Issue i where i.project.id = :projectId")
    Page<Issue> findAllByProjectId(Pageable pageRequest , Long projectId);
    @Query("select i from Issue i where i.creator.id = :userId")
    Page<Issue> findAllByUserId(Pageable pageRequest, String userId);
    // Additional methods if needed
}
