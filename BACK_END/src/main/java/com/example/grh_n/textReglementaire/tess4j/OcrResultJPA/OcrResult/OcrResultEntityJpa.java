
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;


import com.example.grh_n.security.user.OcrResultUserGrant;
import com.example.grh_n.security.user.User;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImage;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.ocrResultRelations.OcrResultRelation;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.Folder;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.ocrResultPinned.OcrResultPinned;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "ocr_result")
//@EntityListeners(AuditingEntityListener.class)
public class OcrResultEntityJpa {

   @Id
   private String id;

   @Column(name = "pdf_" , columnDefinition = "BLOB")
   private byte[] pdf;

   @Column(name = "OriginalFileName")
   private String originalFileName;

   private LocalDate dateReference ;

   private String reference ;

   @OneToMany(mappedBy = "ocrResultEntityJpa")
   private List<OcrResultUserGrant> ocrResultUserGrants;

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "type")
   private TypeTexteReglementaire typeTexteReglementaire ;

   @OneToMany(mappedBy = "ocrResultEntityJpa")
   List<OcrResultPageAsImage> ocrResultPagesAsImages ;

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "confidentialite")
   private Confidentialite confidentialite ;

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "urgence")
   private Urgence urgence ;

   @OneToOne(mappedBy = "ocrResult", cascade = CascadeType.ALL, orphanRemoval = true)
   private OcrResultPinned ocrResultPinned;

   @OneToMany(mappedBy = "subject")
   private List<OcrResultRelation> subjects ;

   @OneToMany(mappedBy = "object")
   private List<OcrResultRelation> objects ;

   @Column(name = "ocr_done")
   private String ocrDone;

   private LocalDateTime executedAt;

   private LocalDateTime terminatedAt;

   private Integer numberOfPapers;

   private LocalDateTime createdDate;

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "owner")
   private User owner ;

   @ManyToMany(fetch = FetchType.LAZY)
   @JoinTable(
           name = "PDF_FOLDER_OCR_RESULT",
           joinColumns = @JoinColumn(name = "PDF_ID"),
           inverseJoinColumns = @JoinColumn(name = "FOLDER_ID"))
   @ToString.Exclude
   private Set<Folder> folders ;

   @Override
   public int hashCode() {
      return getClass().hashCode();
   }


}
