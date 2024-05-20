package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.notes;

import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserService;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@GraphQLApi
@Service
public class TexteReglementaireNotesService {

    private final TexteReglementaireNotesRepository notesRepository;
    private final OcrResultService ocrResultService;
    private final UserService userService;

    public TexteReglementaireNotesService(
            TexteReglementaireNotesRepository notesRepository,
            OcrResultService ocrResultService1,
            UserService userService
    ) {
        this.notesRepository = notesRepository;
        this.ocrResultService = ocrResultService1;
        this.userService = userService;
    }

    @GraphQLMutation
    public TexteReglementaireNote createTextReglementaireNote(CreateNoteDto note) {

        OcrResultEntityJpa ocrResultEntityJpa = ocrResultService.findById(note.getTextReglemetaireId());
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        User owner = userService.getByMatricule(userName);

        return notesRepository.save(TexteReglementaireNote.builder()
                .textReglemetaire(ocrResultEntityJpa)
                .text(note.getText())
                .dateCreation(LocalDateTime.now())
                .owner(owner)
                .build());
    }

    @GraphQLQuery
    public TexteReglementaireNote getTexteReglementaireNoteById(String id) {
        return notesRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("TexteReglementaireNote with id " + id + " does not exist")) ;
    }

    @GraphQLQuery
    public Page<TexteReglementaireNote> getTexteReglementaireNoteByOwner(String userName, PageRequest pageable) {
        return notesRepository.getAllByOwner(userName,pageable);
    }

    @GraphQLQuery
    public Page<TexteReglementaireNote> getTextReglementaireNoteByText(String ocrResultId , PageRequest pageable){
        return notesRepository.getAllByText(ocrResultId,pageable);
    }

    @GraphQLQuery
    public Page<TexteReglementaireNote> notesByTextIdAndOwnerId(String ocrResultId , String userName , PageRequest pageable) {
        return notesRepository.getAllByTextAndOwner(ocrResultId ,userName , pageable) ;
    }

    @GraphQLMutation
    public TexteReglementaireNote updateTextNote(String text , String noteId){
        TexteReglementaireNote texteReglementaireNote = this.getTexteReglementaireNoteById(noteId);
        texteReglementaireNote.setText(text);
        return notesRepository.save(texteReglementaireNote);
    }

    @GraphQLMutation
    public void deleteTexteReglementaireNote(String id){
        notesRepository.deleteById(id);
    }

}
