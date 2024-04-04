package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.entities.QIssue;
import com.example.grh_n.BugTracker.entities.QIssueType;
import com.example.grh_n.BugTracker.entities.QStatus;
import com.example.grh_n.BugTracker.entities.Status;
import com.example.grh_n.BugTracker.repos.StatusRepository;
import com.querydsl.jpa.impl.JPAQuery;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityManager;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@GraphQLApi
public class StatusService {
    private final StatusRepository statusRepository;
    private final EntityManager em;

    public StatusService(StatusRepository statusRepository, EntityManager em) {
        this.statusRepository = statusRepository;
        this.em = em;
    }
    // Other dependencies as needed

    @GraphQLQuery
    public List<Status> getAllStatus() {
        return (List<Status>) statusRepository.findAll();
    }

    @GraphQLQuery
    public Optional<Status> getSatusById(Long satusId) {
        return statusRepository.findById(satusId);
    }

    @GraphQLQuery
    public List<StatusCountDto> getAllStatuseCount(Long projectId) {

        QStatus status = QStatus.status;
        QIssue issue = QIssue.issue;

        JPAQuery<QStatus> query = new JPAQuery<QStatus>(em) ;

        JPAQuery<StatusCountDto> statusCountDtos = query
                .from(status)
                .join(issue).on(status.eq(issue.status))
                .where(issue.project.id.eq(projectId))
                .groupBy(status.id, status.statusFr, status.statusAr, status.statusAn)
                .orderBy(status.id.asc())
                .select(
                        new QStatusCountDto(
                                status.id,
                                status.statusFr,
                                status.statusAr,
                                status.statusAn,
                                issue.id.count()
                        )
                );
        return statusCountDtos.fetch();
    }

    @GraphQLQuery
    public List<TypesCountDto> getAllIssueTypesCount(@NotNull Long projectId) {

        if(projectId == null) throw new IllegalArgumentException("projectId must not be null") ;

        QIssue issue = QIssue.issue ;
        QIssueType issueType = QIssueType.issueType ;

        JPAQuery<QIssueType> query = new JPAQuery<>(em) ;

        return query
                .from(issueType)
                .join(issue).on(issueType.id.eq(issue.issueType.id))
                .where(issue.project.id.eq(projectId))
                .groupBy(issueType.id, issueType.typeAn, issueType.typeAr, issueType.typeFr)
                .orderBy(issueType.id.asc())
                .select(
                        new QTypesCountDto(
                                issueType.id,
                                issueType.typeAr,
                                issueType.typeFr,
                                issueType.typeAn,
                                issue.id.count()
                        )
                ).fetch();
    }
}


