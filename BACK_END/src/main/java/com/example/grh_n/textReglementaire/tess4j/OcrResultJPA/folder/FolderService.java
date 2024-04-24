
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder;


import com.example.grh_n.BugTracker.entities.QStatus;
import com.example.grh_n.BugTracker.services.StatusCountDto;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserRepository_;
import com.example.grh_n.security.user.UserService;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.QOcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.QFolder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
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
import java.util.Objects;
import java.util.Optional;


@GraphQLApi
@Service
public class FolderService {

   private final FolderRepository folderRepository;
   private final UserService userService;
   final private Logger logger = LoggerFactory.getLogger(this.getClass());

   final private OcrResultService ocrResultService;

   public FolderService(FolderRepository folderRepository,
                        UserRepository_ userRepository,
                        OcrResultService ocrResultService,
                        UserService userService, OcrResultService ocrResultService1) {
      this.folderRepository = folderRepository;
      this.userService = userService;
      this.ocrResultService = ocrResultService1;
   }

   @GraphQLMutation
   public Folder createFolder(Folder folder, String username) {
      User authenticatedUser = userService.getByMatricule(username);
      folder.setOwner(authenticatedUser);
      folder.setCreatedDate(LocalDateTime.now());
      return folderRepository.save(folder);
   }

   @GraphQLQuery
   public Folder getFolder(Long folderId) {
      return folderRepository.findById(folderId).orElseThrow(() -> new EntityNotFoundException("Folder with id " + folderId + " not found"));
   }

   @GraphQLMutation
   public Long deleteFolder(Long folderId) {
      // todo security check
      // todo check for permissions and errors
      Folder folder = this.getFolder(folderId);
      folder.setPdfFiles(null);
      folderRepository.save(folder);
      folderRepository.deleteById(folderId);
      return folderId;
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
   public Optional<Folder> getFavoriteFolder(String userName) {
      // todo refine
      User user = userService.getByMatricule(userName);
      return folderRepository.findByDescriptionAndOwner("FAVORITE", user);
   }

   @GraphQLQuery
   public List<Folder> getOwnedFolders(String username_) {
      String username = SecurityContextHolder.getContext().getAuthentication().getName();
      if (!username.equals(username_))
         throw new IllegalArgumentException("Invalid username: " + username);
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
   public Folder deleteOcrResultsFromFolder(Long folderId, List<String> ocrResultIds) {
      Folder folder = this.getFolder(folderId);
      // todo security check
      List<OcrResultEntityJpa> ocrResultEntityJpaToBeDeleted = ocrResultService.findAllOcrResultByIds(ocrResultIds);
      List<OcrResultEntityJpa> ocrResultEntityJpas = folder.getPdfFiles();
      ocrResultEntityJpaToBeDeleted.forEach(ocrResultEntityJpas::remove);
      for (OcrResultEntityJpa i : ocrResultEntityJpas) {
         logger.info(i.getId());
         List<Folder> i_folders = i.getFolders();
         i_folders.remove(folder);
         i.setFolders(i_folders);
      }
//      folder.setPdfFiles(ocrResultEntityJpas);
      return folderRepository.save(folder);
   }

   @GraphQLMutation
   public Integer toggleFavorite(String ocrResultId) {

      String userName = SecurityContextHolder.getContext().getAuthentication().getName();
      Folder favoriteFolder = this.getFavoriteFolder(userName).orElseThrow(
              () -> new EntityNotFoundException("there is no favorite folder")
      );
      Optional<OcrResultEntityJpa> resultEntityJpa = favoriteFolder
              .getPdfFiles().stream().filter((item) -> item.getId().equals(ocrResultId)).findFirst();
      OcrResultEntityJpa entityJpa = ocrResultService.findById(ocrResultId);
      if (resultEntityJpa.isEmpty()) {
         List<OcrResultEntityJpa> pdfFiles = favoriteFolder.getPdfFiles();
         pdfFiles.add(entityJpa);
         favoriteFolder.setPdfFiles(pdfFiles);
         folderRepository.save(favoriteFolder);
         return 1;
      } else {
         List<OcrResultEntityJpa> pdfFiles = favoriteFolder.getPdfFiles();
         pdfFiles.remove(entityJpa);
         favoriteFolder.setPdfFiles(pdfFiles);
         folderRepository.save(favoriteFolder);
         return -1;
      }
   }

   @GraphQLQuery
   public Page<OcrResultEntityJpa> findAllOcrResultEntityByFoldersContaining(
           Long folderId,
           Pageable pageable
   ) {
      if (folderId == -1) {
         String userName = SecurityContextHolder.getContext().getAuthentication().getName();
         User user = userService.getByMatricule(userName);
         return ocrResultService.findAllByOwner(user, pageable);
      }
      if (folderId == -2) {
         return ocrResultService.findAll_(pageable);
      }
      Folder folder = folderRepository.findById(folderId).orElseThrow(() -> new EntityNotFoundException(
              "Folder not found for id " + folderId
      ));
      return ocrResultService.findAllPagedByFoldersContaining(folder, pageable);
   }

   @GraphQLMutation
   public Folder addOcrResultsToFolder(Long folderId, List<String> ocrResultIds) {
      Folder folder = this.getFolder(folderId);
      // todo security check
      List<OcrResultEntityJpa> ocrResultEntityJpaToBeAdded = ocrResultService.findAllOcrResultByIds(ocrResultIds);
      List<OcrResultEntityJpa> ocrResultEntityJpas = folder.getPdfFiles();
      ocrResultEntityJpas.addAll(ocrResultEntityJpaToBeAdded);
      folder.setPdfFiles(ocrResultEntityJpas);
      return folderRepository.save(folder);
   }

   @GraphQLQuery
   public boolean isFavorite(String ocrResultId , String userName){
      String loggedInUser = SecurityContextHolder.getContext().getAuthentication().getName();
      // todo security check
      Optional<Folder> favoriteFolder = this.getFavoriteFolder(loggedInUser);
      if (favoriteFolder.isEmpty()) {
         throw new EntityNotFoundException("there is no favorite folder");
      }
      Optional<OcrResultEntityJpa> resultEntityJpa = favoriteFolder.get()
              .getPdfFiles().stream().filter((item) -> item.getId().equals(ocrResultId)).findFirst();
      return resultEntityJpa.isPresent();
   }

//   @GraphQLQuery
//   public boolean isFavorite(String ocrResultId , String userName){
//
//      QFolder qFolder = QFolder.folder ;
//      QOcrResultEntityJpa qOcrResultEntityJpa = QOcrResultEntityJpa.ocrResultEntityJpa ;
//
//      JPAQuery<QStatus> query = new JPAQuery<QStatus>(em) ;
//
//       query
//              .from(qOcrResultEntityJpa)
//              .join(qFolder).on(qOcrResultEntityJpa..eq(issue.status))
//              .where(issue.project.id.eq(projectId))
//              .groupBy(status.id, status.statusFr, status.statusAr, status.statusAn)
//              .orderBy(status.id.asc())
//              .select(
//                      new QStatusCountDto(
//                              status.id,
//                              status.statusFr,
//                              status.statusAr,
//                              status.statusAn,
//                              issue.id.count()
//                      )
//              );
//      return statusCountDtos.fetch();
//
//      return resultEntityJpa.isPresent();
//   }

   @GraphQLMutation
   public boolean deletePdfFileFromFolder(String pdfId, Long folderId) {
      Folder folder = folderRepository.findById(folderId).orElseThrow(
              () -> new EntityNotFoundException("Folder " + folderId + " does not exist")
      );
      OcrResultEntityJpa pdfFile = ocrResultService.findById(pdfId);
      List<OcrResultEntityJpa> pdfFiles = folder.getPdfFiles();
      pdfFiles.remove(pdfFile);
      folder.setPdfFiles(pdfFiles);
      folderRepository.save(folder);
      return true;
   }
}
