
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder;


import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserRepository_;
import com.example.grh_n.security.user.UserService;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@GraphQLApi
@Service
public class FolderService {

   private final OcrResultService ocrResultService;
   private final FolderRepository folderRepository;
   private final UserService userService;
   final private Logger logger = LoggerFactory.getLogger(this.getClass());

   public FolderService(FolderRepository folderRepository,
                        UserRepository_ userRepository,
                        OcrResultService ocrResultService,
                        UserService userService) {
      this.folderRepository = folderRepository;
      this.ocrResultService = ocrResultService;
      this.userService = userService;
   }

   @GraphQLMutation
   public Folder createFolder(Folder folder , String username) {
      User authenticatedUser = userService.getByMatricule(username) ;
      folder.setOwner(authenticatedUser);
      folder.setCreatedDate(LocalDateTime.now());
      return folderRepository.save(folder);
   }

   @GraphQLMutation
   public boolean deleteFolder(Long folderId , String username) {
      User authenticatedUser = userService.getByMatricule(username);
      // todo check for permissions and errors
      Folder folder = folderRepository.findById(folderId).orElseThrow(() -> new EntityNotFoundException("Folder not found"));
      Set<OcrResultEntityJpa> pdfFiles = folder.getPdfFiles();
      for (OcrResultEntityJpa pdfFile : pdfFiles) {
         pdfFile.getFolders().remove(folder);
         ocrResultService.save(pdfFile);
      }
      folderRepository.delete(folder);
      return true;
   }

   @GraphQLQuery
   public Page<Folder> getAllFoldersPaged(
           Pageable pageable) {
      return folderRepository.findAll(pageable);
   }

   @GraphQLQuery
   public List<Folder> getAllFolders() {
      return (List<Folder>) folderRepository.findAll();
   }

   @GraphQLQuery
   public Folder getFolder(Long folderId) {
      Optional<Folder> folder = folderRepository.findById(folderId);
      if (folder.isPresent()) {
         return folder.get();
      } else {
         throw new EntityNotFoundException("Folder with id " + folderId + " not found");
      }
   }
   @GraphQLQuery
   public Folder getFavoriteFolder(String userName) {
      // todo refine
      String username_ = SecurityContextHolder.getContext().getAuthentication().getName();
      User user = userService.getByMatricule(username_);
      return folderRepository.findByDescriptionAndOwner("FAVORITE",user);
   }

   @GraphQLQuery
   public List<Folder> getOwnedFolders(String username_) {
      String username = SecurityContextHolder.getContext().getAuthentication().getName();
      if(!username.equals(username_))
         throw new IllegalArgumentException("Invalid username: " + username) ;
      User user = userService.getByMatricule(username);
      List<Folder> folderList = folderRepository.findByOwner(user);
      Folder folder = Folder.builder()
              .id((long) -1.0)
              .description("OWNED")
              .name("قمت بتحميلها")
              .build();
      folderList.add(folder);
      return folderList;
   }

   public List<Folder> getGrantedFolders(String username) {
      // todo get the current user
      User owner = userService.getByMatricule(username);
      return owner.getFoldersGranted();
//        return new ArrayList<>() ;
   }

   public List<Folder> getGrantedToFolders(String username) {
      // todo get the current user
      return new ArrayList<>();
   }


   // todo only the owner of the folder can grant access to his folders
   @GraphQLMutation
   public void grantFolderAccessToUser(Long folderId, String username) {
      User userGranted = userService.getByMatricule(username);
      Folder folder = folderRepository.findById(folderId).orElseThrow(
              () -> new EntityNotFoundException("folder with id " + folderId + " does not exist")
      );
      // todo check if this folder is owned by the current user
      folder.getUsersGranted().add(userGranted);
      userGranted.getFoldersGranted().add(folder);
      folderRepository.save(folder);
   }

   @GraphQLMutation
   public void revokeFolderAccessToUser(Long folderId, String username) {
      User userRevoked = userService.getByMatricule(username);
      // todo this folder should be owned by the current user
      Folder folder = folderRepository.findById(folderId).orElseThrow(
              () -> new EntityNotFoundException("folder with id " + folderId + " does not exist")
      );
      folder.getUsersGranted().remove(userRevoked);
      userRevoked.getFoldersGranted().remove(folder);
      folderRepository.save(folder);
   }

   @GraphQLMutation
   public Folder addOcrResultsToFolder(Long folderId, List<String> ocrResultIds) {
      Folder folder = this.getFolder(folderId);
      logger.info("Adding OCR results " + ocrResultIds.toString() + " to folder " + folder.getId());
      // todo security check
      List<OcrResultEntityJpa> ocrResultEntityJpaToBeAdded = ocrResultService.findAllOcrResultByIds(ocrResultIds);
      Set<OcrResultEntityJpa> ocrResultEntityJpas = folder.getPdfFiles();
      ocrResultEntityJpas.addAll(ocrResultEntityJpaToBeAdded);
      for(OcrResultEntityJpa i : ocrResultEntityJpas)
      {
         logger.info(i.getId());
         Set<Folder> i_folders = i.getFolders() ;
         i_folders.add(folder);
         i.setFolders(i_folders);
      }
//      folder.setPdfFiles(ocrResultEntityJpas);
      return folderRepository.save(folder);
   }

   @GraphQLMutation
   public Folder deleteOcrResultsFromFolder(Long folderId, List<String> ocrResultIds) {
      Folder folder = this.getFolder(folderId);
      logger.info("removig OCR results " + ocrResultIds.toString() + " from folder " + folder.getId());
      // todo security check
      List<OcrResultEntityJpa> ocrResultEntityJpaToBeDeleted = ocrResultService.findAllOcrResultByIds(ocrResultIds);
      Set<OcrResultEntityJpa> ocrResultEntityJpas = folder.getPdfFiles();
      ocrResultEntityJpaToBeDeleted.forEach(ocrResultEntityJpas::remove);
      for(OcrResultEntityJpa i : ocrResultEntityJpas)
      {
         logger.info(i.getId());
         Set<Folder> i_folders = i.getFolders() ;
         i_folders.remove(folder);
         i.setFolders(i_folders);
      }
//      folder.setPdfFiles(ocrResultEntityJpas);
      return folderRepository.save(folder);
   }
}
