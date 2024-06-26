package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder;

import com.example.grh_n.security.user.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface FolderRepository extends CrudRepository<Folder, Long> , PagingAndSortingRepository<Folder,Long> {

    List<Folder> findByOwner(User owner);
    Optional<Folder> findByDescriptionAndOwner(String description , User owner);

}
