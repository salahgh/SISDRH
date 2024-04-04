package com.example.grh_n.dbdsn.service;


import com.example.grh_n.dbdsn.entities.PamOff2024;
import com.example.grh_n.dbdsn.entities.PersonnelNote;
import com.example.grh_n.dbdsn.entities.QPersonnelNote;
import com.example.grh_n.dbdsn.repos.PamOff2024Repository;
import com.example.grh_n.dbdsn.repos.PersonnelNoteRepository;
import com.example.grh_n.security.user.PrivilegesEnum;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserRepository_;
import com.example.grh_n.security.user.UserService;
import com.querydsl.core.types.dsl.BooleanExpression;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
@GraphQLApi
public class PsersonnelNoteService {

    final PersonnelNoteRepository personnelNoteRepository;
    final UserService userService;
    Logger logger = LoggerFactory.getLogger(this.getClass());
    private final PamOff2024Service pamOff2024Service;
    private final UserRepository_ userRepository_;
    private final PamOff2024Repository pamOff2024Repository;

    public PsersonnelNoteService(PersonnelNoteRepository personnelNoteRepository, UserService userService, PamOff2024Service PamOff2024Service,
                                 UserRepository_ userRepository_,
                                 PamOff2024Repository pamOff2024Repository) {
        this.personnelNoteRepository = personnelNoteRepository;
        this.userService = userService;
        this.pamOff2024Service = PamOff2024Service;
        this.userRepository_ = userRepository_;
        this.pamOff2024Repository = pamOff2024Repository;
    }

    @GraphQLQuery
    public PersonnelNote findPersonnelNoteById(Long id) {
        // todo security check has role admin or can see the person and can see the notes and he is the owner or shared
        User loggedInUser = userService.getLoggedInUser();
        PersonnelNote personnelNote = personnelNoteRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("note not found")
        );
        if(userService.hasAuthoritie(PrivilegesEnum.PERSONNEL_NOTES_SEE_ALL.name() , loggedInUser)){
            return personnelNote ;
        }else{
            if(personnelNote.getUser().getId().equals(loggedInUser.getId()) ||
            personnelNote.getAuthorizedUsers().stream().anyMatch(user -> user.getId().equals(loggedInUser.getId()))){
                return personnelNote ;
            }else {
                throw new EntityNotFoundException("not foud");
            }
        }
    }

    @GraphQLQuery
    public List<PersonnelNote> findPersonnelNotes() {
        // todo security check has role admin
        return (List<PersonnelNote>) personnelNoteRepository.findAll();
    }

    // todo think of auto generation code using java introspection

    @GraphQLQuery
    public Page<PersonnelNote> findAllPersonnelNotesPaged(PersonnelNoteSearchParams searchParams, Pageable pageable) {
        logger.info(searchParams.toString());
        // todo security check has role admin
        User loggedInUser = userService.getLoggedInUser();
        QPersonnelNote qPersonnelNote = QPersonnelNote.personnelNote;
        BooleanExpression booleanExpression = null;
        if (Objects.equals(searchParams.getOwnership(), "1")) {
            booleanExpression = qPersonnelNote.user.id.eq(loggedInUser.getId());
        }
        if (Objects.equals(searchParams.getOwnership(), "2")) {
            booleanExpression = qPersonnelNote.authorizedUsers.contains(loggedInUser);
        }
        if (Objects.equals(searchParams.getOwnership(), "3") && userService.hasAuthoritie(PrivilegesEnum.PERSONNEL_NOTES_SEE_ALL.name(),loggedInUser)) {
            booleanExpression = (qPersonnelNote.user.id.eq(loggedInUser.getId()).or(qPersonnelNote.authorizedUsers.contains(loggedInUser))).not();
        }
        if (Objects.equals(searchParams.getOwnership(), "4") && userService.hasAuthoritie(PrivilegesEnum.PERSONNEL_NOTES_SEE_ALL.name(),loggedInUser)) {
            booleanExpression = qPersonnelNote.id.eq(qPersonnelNote.id);
        }
        if(searchParams.getOwnership().equals("4") && !userService.hasAuthoritie(PrivilegesEnum.PERSONNEL_NOTES_SEE_ALL.name(),loggedInUser)){
            booleanExpression = (qPersonnelNote.user.id.eq(loggedInUser.getId()).or(qPersonnelNote.authorizedUsers.contains(loggedInUser)));
        }
        if (searchParams.getSearchToken() != null) {
            assert booleanExpression != null;
            booleanExpression = booleanExpression.and(
                    qPersonnelNote.user.id.like("%" + searchParams.getSearchToken() + "%")
                            .or(qPersonnelNote.user.personnel.pnoma.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.user.personnel.noma.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.user.personnel.pnom.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.user.personnel.pnom.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.pamOff2024.personnel.matricule.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.pamOff2024.personnel.pnoma.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.pamOff2024.personnel.noma.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.pamOff2024.personnel.pnom.like("%" + searchParams.getSearchToken() + "%"))
                            .or(qPersonnelNote.pamOff2024.personnel.pnom.like("%" + searchParams.getSearchToken() + "%"))
            );
        }
        assert booleanExpression != null;
        return personnelNoteRepository.findAll(booleanExpression, pageable);
    }

    @GraphQLQuery
    public List<PersonnelNote> findPersonnelNotesByUserAndPersonnel(String userId, String personnelId, boolean includeAllNotes) {
        // todo security logged in user
        User loggedInUser = userService.getLoggedInUser();
        // todo chek userName and userId
        QPersonnelNote qPersonnelNote = QPersonnelNote.personnelNote;
        BooleanExpression booleanExpression ;
        if ( userService.hasAuthoritie(PrivilegesEnum.PERSONNEL_NOTES_SEE_ALL.name() , loggedInUser ) && includeAllNotes) {
            booleanExpression = qPersonnelNote.pamOff2024.matricule.eq(personnelId) ;
        } else {
            booleanExpression = qPersonnelNote.pamOff2024.matricule.eq(personnelId).and(
                    qPersonnelNote.user.id.eq(userId)
                            .or(qPersonnelNote.authorizedUsers.contains(loggedInUser))
            );
        }
        return (List<PersonnelNote>) personnelNoteRepository.findAll(booleanExpression);
    }

    @GraphQLQuery
    public Page<PersonnelNote> findPersonnelNotesByUser(String userId, Pageable pageable) {
        // todo security logged in user
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUser(userId);
        // todo chek userName and userId
        QPersonnelNote qPersonnelNote = QPersonnelNote.personnelNote;
        BooleanExpression booleanExpression = qPersonnelNote.user.id.eq(userId)
                .or(qPersonnelNote.authorizedUsers.contains(user));
        return personnelNoteRepository.findAll(booleanExpression, pageable);
    }

    @GraphQLMutation
    public boolean updatePersonnelNoteGrantedUsers(List<String> userIds, Long PsesonnelNoteId) {
        // todo think of implmenting optimistic updates the granted users should be returened or the note ?
        // does appolo update the cache automatically or it should be given a function that knows how to update the cache
        List<User> users = userService.findByIds(userIds);
        PersonnelNote note = this.findPersonnelNoteById(PsesonnelNoteId);
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if (username.equals(note.getUser().getUsername())) {
            // the logged in user is the owner
            note.setAuthorizedUsers(users);
            personnelNoteRepository.save(note);
            return true;
        } else {
            // todo throw the right exception
            throw new IllegalArgumentException("not allowed");
        }
    }

    @GraphQLMutation
    public void createPersonnelNote(PersonnelNote note) {
        note.setDateCreation(LocalDateTime.now());
        User user = userService.getByMatricule(note.getUser().getId());
        PamOff2024 pamOff2024 = pamOff2024Service.findPamOff2024ById(note.getPamOff2024().getMatricule());
        note.setUser(user);
        note.setPamOff2024(pamOff2024);
        personnelNoteRepository.save(note);
    }

    @GraphQLMutation
    public void deletePersonnelNote(Long id) {
        personnelNoteRepository.deleteById(id);
    }

    @GraphQLMutation
    public boolean deleteAuthorizedUser(Long noteId, String userName) {
        // todo sucurity check
        String loggedInUser = SecurityContextHolder.getContext().getAuthentication().getName();
        PersonnelNote personnelNote = this.findPersonnelNoteById(noteId);
        boolean tmp = personnelNote.getAuthorizedUsers().removeIf((user) -> Objects.equals(user.getId(), userName));
        if (tmp) {
            updatePersonnelNote(personnelNote);
            return true;
        } else {
            throw new EntityNotFoundException("user with id " + userName + " not found");
        }

    }

    @GraphQLMutation
    public void updatePersonnelNote(PersonnelNote note) {
        personnelNoteRepository.save(note);
    }

    @GraphQLMutation
    public void updatePersonnelNoteContent(String noteContent , Long personnelNoteId) {
        // todo security check ...
        PersonnelNote personnelNote = this.findPersonnelNoteById(personnelNoteId);
        personnelNote.setObservation(noteContent);
        personnelNoteRepository.save(personnelNote);
    }

}
