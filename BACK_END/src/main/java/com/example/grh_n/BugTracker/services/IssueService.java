package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.entities.*;
import com.example.grh_n.BugTracker.entities.DTOs.AttachmentDto;
import com.example.grh_n.BugTracker.entities.DTOs.IssueInputDto;
import com.example.grh_n.BugTracker.repos.*;
import com.example.grh_n.notification.NotificationService;
import com.example.grh_n.notification.NotificationTypesEnum;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserService;
import com.querydsl.jpa.impl.JPAQuery;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.Base64Utils;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@GraphQLApi
public class IssueService {
    private final IssueRepository issueRepository;
    private final StatusRepository statusRepository;
    private final UserService userService;
    private final SevirityRepository sevirityRepository;
    private final PriorityRepository priorityRepository;
    private final IssueHistoryRepository issueHistoryRepository;
    private final ProjectService projectService;
    private final IssueTypeRepository issueTypeRepository;
    private final AttachmentRepository attachmentRepository;
    private final EntityManager em;
    private TagRepository tagRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    private final CommentRepository commentRepository;
    private final NotificationService notificationService;

    public IssueService(
            IssueRepository issueRepository,
            StatusRepository statusRepository,
            UserService userService,
            SevirityRepository sevirityRepository,
            PriorityRepository priorityRepository,
            IssueHistoryRepository issueHistoryRepository,
            ProjectService projectService, IssueTypeRepository issueTypeRepository, AttachmentRepository attachmentRepository, EntityManager em, TagRepository tagRepository,
            CommentRepository commentRepository, NotificationService notificationService) {
        this.issueRepository = issueRepository;
        this.statusRepository = statusRepository;
        this.userService = userService;
        this.sevirityRepository = sevirityRepository;
        this.priorityRepository = priorityRepository;
        this.issueHistoryRepository = issueHistoryRepository;
        this.projectService = projectService;
        this.issueTypeRepository = issueTypeRepository;
        this.attachmentRepository = attachmentRepository;
        this.em = em;
        this.tagRepository = tagRepository;
        this.commentRepository = commentRepository;
        this.notificationService = notificationService;
    }

    @GraphQLMutation
    public Issue createIssue(IssueInputDto issueInputDto) {

        // todo check for uniquness of the title

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUser(username);
        Status status = statusRepository.findById(1L).orElseThrow(() -> new EntityNotFoundException("not found"));
        Sevirity sevirity = sevirityRepository.findById(issueInputDto.getSevirityId()).orElseThrow(() -> new EntityNotFoundException("not found"));
        IssueType issueType = issueTypeRepository.findById(issueInputDto.getTypeId()).orElseThrow(() -> new EntityNotFoundException("not found"));
        Project project = projectService.getProjectById(issueInputDto.getProjectId())
                .orElseThrow(() -> new EntityNotFoundException(""));

        Issue issue = Issue.builder()
                .creator(user)
                .dateCreation(LocalDateTime.now())
                .status(status)
                .sevirity(sevirity)
                .title(issueInputDto.getTitle())
                .description(issueInputDto.getDescription())
                .issueType(issueType)
                .project(project)
                .build();

        List<Tag> tags = new java.util.ArrayList<>(Collections.emptyList());

        issueInputDto.getTagNames().forEach((tagName) -> {
            Optional<Tag> optionalTag = tagRepository.findByName(tagName);
            if (optionalTag.isPresent()) {
                tags.add(optionalTag.get());
            } else {
                Tag tagToBeCreated = Tag.builder().name(tagName).build();
                Tag createdTag = tagRepository.save(tagToBeCreated);
                tags.add(createdTag);
            }
        });
        issue.setTags(tags);
        Issue savedIssue = issueRepository.save(issue);

        if (issueInputDto.getAttachmentDtos() != null) {
            issueInputDto.getAttachmentDtos().forEach((attachmentDto -> {
                Attachment attachment = Attachment.builder()
                        .originalFileName(attachmentDto.getOriginalFileName())
                        .issue(savedIssue)
                        .size_(attachmentDto.getSize())
                        .fileData(Base64Utils.decode(attachmentDto.getBase64FileData().split(",")[1].getBytes()))
                        .mimeType(attachmentDto.getMimeType())
                        .build();
                attachmentRepository.save(attachment);
            }));
        }
        return savedIssue;
    }

    @GraphQLMutation
    public boolean addIssueTag(String tagname, Long issueId) {

        Optional<Tag> optionalTag = tagRepository.findByName(tagname);
        Issue issue = issueRepository.findById(issueId).orElseThrow(() -> new EntityNotFoundException("issueId " + issueId + "not found"));
        List<Tag> tags = issue.getTags();
        if (optionalTag.isPresent()) {
            tags.add(optionalTag.get());
            issue.setTags(tags);
        } else {
            Tag tagToBeCreated = Tag.builder().name(tagname).build();
            Tag createdTag = tagRepository.save(tagToBeCreated);
            tags.add(createdTag);
        }
        issueRepository.save(issue);
        return true;
    }

    @GraphQLQuery
    public Page<Issue> getAllIssues(Pageable pageRequest) {
        return issueRepository.findAll(pageRequest);
    }

    @GraphQLQuery
    public Page<Issue> getAllIssuesByProject(Pageable pageRequest, Long projectId) {
        return issueRepository.findAllByProjectId(pageRequest, projectId);
    }

    @GraphQLQuery
    public Page<Issue> getAllIssuesByUser(Pageable pageRequest, String userId) {
        return issueRepository.findAllByUserId(pageRequest, userId);
    }

    @GraphQLQuery
    public List<AttachmentDto> getAttachmentsByIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(() -> new EntityNotFoundException("issueId " + issueId + "not found"));
        List<AttachmentDto> attachmentDtos = new ArrayList<AttachmentDto>();
        issue.getAttachments().forEach((attachment -> {
            AttachmentDto attachmentDto = AttachmentDto.builder()
                    .mimeType(attachment.getMimeType())
                    .id(attachment.getId())
                    .originalFileName(attachment.getOriginalFileName())
                    .size(attachment.getSize_())
                    .issueId(attachment.getIssue().getId())
                    .base64FileData(
                            "data:" + attachment.getMimeType()
                                    + ";base64," + Base64Utils.encodeToString(attachment.getFileData())
                    )
                    .build();
            attachmentDtos.add(attachmentDto);
        }
        ));
        return attachmentDtos;
    }


    @GraphQLQuery
    public Optional<Issue> getIssueById(Long id) {
        Optional<Issue> optionalIssue = issueRepository.findById(id);
        logger.info(String.valueOf(id));
        logger.info(optionalIssue.get().getComments().toString());
        return optionalIssue;
    }

    @GraphQLMutation
    public Issue updateIssue(Long id, Issue updatedIssue) {
        if (issueRepository.existsById(id)) {
            updatedIssue.setId(id);
            return issueRepository.save(updatedIssue);
        } else {
            throw new EntityNotFoundException("issue with id " + updatedIssue.getId() + " does not exist");
        }
    }

    @GraphQLMutation
    public void deleteIssue(Long id) {
        if (issueRepository.existsById(id)) {
            issueRepository.deleteById(id);
        } else throw new EntityNotFoundException("issue with id " + id + " does not exist");
    }

    @GraphQLQuery
    public List<Sevirity> getAllSeverities() {
        return (List<Sevirity>) sevirityRepository.findAll();
    }

    @GraphQLQuery
    public Optional<Sevirity> getSevirityById(Long sevirityId) {
        return sevirityRepository.findById(sevirityId);
    }

    @GraphQLQuery
    public List<Priority> getAllPriorities() {
        return (List<Priority>) priorityRepository.findAll();
    }

    @GraphQLQuery
    public Optional<IssueType> getIssueTypeById(Long typeId) {
        return issueTypeRepository.findById(typeId);
    }

    @GraphQLQuery
    public List<IssueType> getAllIssueTypes() {
        return (List<IssueType>) issueTypeRepository.findAll();
    }

    @GraphQLQuery
    public Page<Issue> searchIssues(
            Long issueStatusId,
            Long issueTypeId,
            Long priorityId,
            Long projectId,
            Pageable pageable
    ) {

        logger.info("issueStatusId :" + issueStatusId);
        logger.info("issueTypeId " + issueTypeId);
        logger.info("priorityId " + priorityId);
        logger.info("projectId " + projectId);

        JPAQuery<Issue> query = new JPAQuery<Issue>(em);
        QIssue qIssue = QIssue.issue;

        if (issueStatusId == null) throw new IllegalArgumentException("issueStatusId is must not be null");
        if (issueTypeId == null) throw new IllegalArgumentException("issueTypeId is must not be null");
        if (priorityId == null) throw new IllegalArgumentException("priorityId is must not be null");
        if (projectId == null) throw new IllegalArgumentException("projectId is must not be null");

        query = query
                .from(qIssue);
        if (priorityId != -1) {
            query = query.where(qIssue.priority.id.eq(priorityId));
        }
        if (issueStatusId != -1) {
            query = query.where(qIssue.status.id.eq(issueStatusId));
        }
        if (issueTypeId != -1) {
            query = query.where(qIssue.issueType.id.eq(issueTypeId));
        }
        if (projectId != -1) {
            query = query.where(qIssue.project.id.eq(projectId));
        }

        query = query
                .select(qIssue)
                .orderBy(qIssue.dateCreation.desc())
        ;


//        pageable.getSort().get().forEach(
//                index -> {
//                    logger.info(index.getProperty());
//                    logger.info(index.getDirection().name());
//                    switch (index.getProperty()) {
//                        case "noma":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.noma.asc() : dCandidat.noma.desc());
//                            break;
//                        case "pnoma":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.pnoma.asc() : dCandidat.pnoma.desc());
//                            break;
//                        case "specialite":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qrSpecialite.idSpecialite.asc() : qrSpecialite.idSpecialite.desc());
//                            break;
//                        case "moyenne":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qVvDiplomeCandidatV_entity.moyenne.asc() : qVvDiplomeCandidatV_entity.moyenne.desc());
//                            break;
//                        case "ln":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.ln.codeApc.asc() : dCandidat.ln.codeApc.desc());
//                            break;
//                        case "lr":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.lr.codeApc.asc() : dCandidat.lr.codeApc.desc());
//                            break;
//                    }
//                }
//        );

        // odo pas plus d'une inscription a une date donne
        // todo chaque candidat doit avoir son bac sinon il n'apparaitera pas dans la liste
        return new PageImpl<Issue>(
                query
                        .limit(pageable.getPageSize())
                        .offset(pageable.getOffset())
                        .fetch(),
                pageable,
                query.fetchCount());
    }

    ;

    @GraphQLMutation
    public Comment createIssueComment(Long issueId, String text) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(() -> new EntityNotFoundException("issueId " + issueId + "not found"));
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUser(userName);
        Comment comment = Comment.builder()
                .text(text)
                .createdBy(user)
                .createdDate(LocalDateTime.now())
                .issue(issue)
                .build();
        commentRepository.save(comment);
        notificationService.createNotification(
                userName,
                issue ,
                NotificationTypesEnum.OWNED_ISSUE_COMMENTED
        );
        return comment;
    }

    @GraphQLMutation
    public boolean deleteIssueComment(Long commentId) {
        commentRepository.deleteById(commentId);
        return true;
    }

    @GraphQLMutation
    public Comment updateIssueComment(String text, Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new EntityNotFoundException("comment with id " + commentId + " not found"));
        comment.setText(text);
        return commentRepository.save(comment);
    }

    @GraphQLMutation
    public Issue updateIssueStatus(Long issueId, Long statusId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(() -> new EntityNotFoundException("issue not found " + issueId));
        Status status = statusRepository.findById(statusId).orElseThrow(() -> new EntityNotFoundException("status not found " + statusId));
        issue.setStatus(status);
        return issueRepository.save(issue);
    }

    @GraphQLMutation
    public Issue updateIssueType(Long issueId, Long typeId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(() -> new EntityNotFoundException("issue not found " + issueId));
        IssueType issueType = issueTypeRepository.findById(typeId).orElseThrow(() -> new EntityNotFoundException("type not found " + typeId));
        issue.setIssueType(issueType);
        return issueRepository.save(issue);
    }

    @GraphQLMutation
    public Issue updateIssueSevirity(Long issueId, Long sevirityId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(() -> new EntityNotFoundException("issueId not found " + issueId));
        Sevirity sevirity = sevirityRepository.findById(sevirityId).orElseThrow(() -> new EntityNotFoundException("sevirityId not found " + sevirityId));
        issue.setSevirity(sevirity);
        return issueRepository.save(issue);
    }

}
