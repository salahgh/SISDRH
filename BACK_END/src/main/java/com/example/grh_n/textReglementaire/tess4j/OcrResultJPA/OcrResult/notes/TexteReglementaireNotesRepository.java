package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.notes;

import com.example.grh_n.security.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TexteReglementaireNotesRepository extends CrudRepository<TexteReglementaireNote, String> , PagingAndSortingRepository<TexteReglementaireNote,String> {

    @Query("select text from TexteReglementaireNote text where text.owner.id = :ownerId order by text.dateCreation")
    Page<TexteReglementaireNote> getAllByOwner(String ownerId , Pageable pageable) ;

    @Query("select text from TexteReglementaireNote text where text.textReglemetaire.id = :textId order by text.dateCreation")
    Page<TexteReglementaireNote> getAllByText(String textId , Pageable pageable) ;

    @Query("select text from TexteReglementaireNote text where text.textReglemetaire.id = :textId and text.owner.id = :ownerId order by text.dateCreation" )
    Page<TexteReglementaireNote> getAllByTextAndOwner(String textId , String ownerId , Pageable pageable) ;


}
