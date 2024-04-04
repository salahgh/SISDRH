
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;


import com.example.grh_n.security.user.User;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.Folder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.access.prepost.PostFilter;

import java.util.List;
import java.util.Optional;

public interface OCRResultCrudRepository extends CrudRepository<OcrResultEntityJpa, String>, PagingAndSortingRepository<OcrResultEntityJpa, String> {

    List<OcrResultEntityJpa> getByOcrDone(String crudDone);


    @Query("SELECT r FROM OcrResultEntityJpa r where " +
            "(exists (select g from OcrResultUserGrant g where g.ocrResultEntityJpa.id = r.id and g.user.id = ?#{principal.username} and g.id.type = 'GRANT')" +
            "or r.confidentialite.libConfidentialiteFr IN " +
            "(SELECT c.libConfidentialiteFr FROM User u JOIN u.habilitation h JOIN h.confidentialites c " +
            "WHERE u.id = ?#{ principal.username })) and not exists (select g from OcrResultUserGrant g where g.ocrResultEntityJpa.id = r.id and g.user.id = ?#{principal.username} " +
            "and g.id.type = 'REVOKE')")
    Page<OcrResultEntityJpa> findAll_(Pageable pageable);

    @Query("SELECT p FROM OcrResultEntityJpa p where p.ocrDone = 'n'")
    Page<OcrResultEntityJpa> getWaitingPdfs(Pageable pageable);

    @Override
//    @PostAuthorize("returnObject == null || hasAuthority(returnObject.get().confidentialite.libConfidentialiteFr)")
    Optional<OcrResultEntityJpa> findById(String id);

    // confidentiality is never null

    @Query("SELECT r FROM OcrResultEntityJpa r where " +
            "(exists (select g from OcrResultUserGrant g where g.ocrResultEntityJpa.id = r.id and g.user.id = ?#{principal.username} and g.id.type = 'GRANT')" +
            "or r.confidentialite.libConfidentialiteFr IN " +
            "(SELECT c.libConfidentialiteFr FROM User u JOIN u.habilitation h JOIN h.confidentialites c " +
            "WHERE u.id = ?#{ principal.username })) and not exists (select g from OcrResultUserGrant g where g.ocrResultEntityJpa.id = r.id and g.user.id = ?#{principal.username} " +
            "and g.id.type = 'REVOKE') and :owner = r.owner")
    Page<OcrResultEntityJpa> findAllByOwner(User owner, Pageable pageable);

    //   confidentiality is never null

    @Query("SELECT r FROM OcrResultEntityJpa r where " +
            "(exists (select g from OcrResultUserGrant g where g.ocrResultEntityJpa.id = r.id and g.user.id = ?#{principal.username} and g.id.type = 'GRANT')" +
            "or r.confidentialite.libConfidentialiteFr IN " +
            "(SELECT c.libConfidentialiteFr FROM User u JOIN u.habilitation h JOIN h.confidentialites c " +
            "WHERE u.id = ?#{ principal.username })) and not exists (select g from OcrResultUserGrant g where g.ocrResultEntityJpa.id = r.id and g.user.id = ?#{principal.username} " +
            "and g.id.type = 'REVOKE') and :folder member of r.folders")
    Page<OcrResultEntityJpa> findAllPagedByFoldersContaining(Folder folder, Pageable pageable);

    @PostFilter("filterObject == null or filterObject.confidentialite == null or hasAuthority(filterObject.confidentialite.libConfidentialiteFr)")
    List<OcrResultEntityJpa> findAllByFoldersContaining(Folder folder);

    @PostFilter("filterObject == null or filterObject.confidentialite == null or hasAuthority(filterObject.confidentialite.libConfidentialiteFr)")
    List<OcrResultEntityJpa> findAllByIdIn(List<String> ids);

    Page<OcrResultEntityJpa> findByOcrResultUserGrantsIsNotEmpty(Pageable pageable);

    List<OcrResultEntityJpa> findAllByConfidentialite(Confidentialite confidentialite);

}
