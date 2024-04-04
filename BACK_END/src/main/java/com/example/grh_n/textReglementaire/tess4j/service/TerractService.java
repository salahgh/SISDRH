package com.example.grh_n.textReglementaire.tess4j.service;

import com.example.grh_n.Photos.ThumbnailSize;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserService;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity.OcrResultEntityElastic_2;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.HOCRToJSON;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.*;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.*;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.*;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImage;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImageEmbeddedId;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImageRepository;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResultEntityJpaRequest;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.PdfFileUploadResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import jakarta.persistence.EntityNotFoundException;
import net.sourceforge.tess4j.*;
import org.apache.commons.codec.binary.Base64;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.imgscalr.Scalr;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.time.LocalDateTime;
import java.time.ZoneId;

//todo monitor the progress of the ocr

@Service
public class TerractService {

   private final OcrResultService ocrResultService;
   private final OcrResultPageAsImageRepository ocrResultPageAsImageRepository;
   private final PDFService pdfService;
   private final UserService userService;
   private final ConfidentialiteRepository confidentialiteRepository ;
   private final com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.TypeTexteReglementaireRepository TypeTexteReglementaireRepository;

   Logger logger = LoggerFactory.getLogger(this.getClass());

   private final String outputFolderPath = "src/main/resources/ocrOutput/";

   public TerractService
           (
                   OcrResultService ocrResultService,
                   OcrResultPageAsImageRepository ocrResultPageAsImageRepository,
                   PDFService pdfService,
                   UserService userService,
                   ConfidentialiteRepository confidentialiteRepository, TypeTexteReglementaireRepository typeTexteReglementaireRepository
           ) {
      this.ocrResultService = ocrResultService;
      this.ocrResultPageAsImageRepository = ocrResultPageAsImageRepository;
      this.pdfService = pdfService;
      this.userService = userService;
      this.confidentialiteRepository = confidentialiteRepository;
      this.TypeTexteReglementaireRepository = typeTexteReglementaireRepository;
   }

      public OcrResultEntityElastic_2 performOCR (OcrResultEntityJpa ocrResultEntityJpa){

         logger.info("performOCR...");

         Tesseract instance = new Tesseract();
         instance.setDatapath(System.getenv("TESSDATA"));
         instance.setLanguage("ara+fra");
         instance.setVariable("tessedit_create_hocr", "1");
         instance.setVariable("hocr_font_info", "1");
         // todo change the conversion and check the name of the attribute
         instance.setVariable("--oem", "2");

         String fileName = ocrResultEntityJpa.getId().substring(0, 5) + ' ' + ocrResultEntityJpa.getOriginalFileName().substring(0, ocrResultEntityJpa.getOriginalFileName().length() - 4);
         byte[] pdfBuffer = ocrResultEntityJpa.getPdf();

         String hocrResult = null;
//        File pdfFile = new File(outputFolderPath + fileName + ".pdf");
         File pdfFile = new File("./" + fileName + ".pdf");
         try (FileOutputStream fos = new FileOutputStream(pdfFile)) {
            fos.write(pdfBuffer);
            logger.info("file written to " + fileName + ".pdf");
         } catch (IOException e) {
            logger.info("error while writing pdf file. message : {}", e.getMessage());
         }

         try {
            logger.info("ocr...");
            hocrResult = instance.doOCR(pdfFile);
            logger.info("cor_done");
         } catch (TesseractException e) {
            logger.info("tesseract error no results. message : {} ", e.getMessage());
         }

         FileWriter writer = null;
         try {

            writer = new FileWriter("./" + fileName + ".html");
         } catch (IOException ex) {
            logger.info("error opning the writer for html file. message : {} ", ex.getMessage());
         }

         try {
            assert hocrResult != null;
            assert writer != null;
            logger.info("write html");
            writer.write(hocrResult);
         } catch (IOException e) {
            logger.info("error writing html file. message : {} ", e.getMessage());
         }

         ObjectNode s = HOCRToJSON.convert(hocrResult);

         logger.info("result converted to json succesfully ...");

         try {
            writer.close();
         } catch (IOException e) {
            logger.info("error closing the file writer {}", e.getMessage());
         }

         try {
            writer = new FileWriter("./" + fileName + ".json");
         } catch (IOException ex) {
            logger.info("error opening the writer for json file. message : {} ", ex.getMessage());
         }

         try {
            writer.write(s.toString());
         } catch (IOException e) {
            logger.info("error  writing json file. message : {} ", e.getMessage());
         }

         try {
            writer.close();
         } catch (IOException e) {
            logger.info("error closing the file writer {}", e.getMessage());
         }

         ObjectMapper mapper = new ObjectMapper();
         OcrResultEntityElastic_2 ocrResultEntityElastic_2 = mapper.convertValue(s, OcrResultEntityElastic_2.class);
         logger.info("json converted to entity successfully ...");
         ocrResultEntityElastic_2.setId(ocrResultEntityJpa.getId());
         ocrResultEntityElastic_2.setOriginalFileName(ocrResultEntityJpa.getOriginalFileName());
         ocrResultEntityElastic_2.setDateReference(ocrResultEntityJpa.getDateReference());
         ocrResultEntityElastic_2.setReference(ocrResultEntityJpa.getReference());

         ocrResultEntityElastic_2.setLibTypeTexteAr(ocrResultEntityJpa.getTypeTexteReglementaire().getLibTypeTexteAr());
         ocrResultEntityElastic_2.setLibTypeTexteFr(ocrResultEntityJpa.getTypeTexteReglementaire().getLibTypeTexteFr());
         if (ocrResultEntityJpa.getConfidentialite() != null) {
            ocrResultEntityElastic_2.setLibConfidentialiteAr(ocrResultEntityJpa.getConfidentialite().getLibConfidentialiteAr());
            ocrResultEntityElastic_2.setLibConfidentialiteFr(ocrResultEntityJpa.getConfidentialite().getLibConfidentialiteFr());
         }
         if (ocrResultEntityJpa.getUrgence() != null) {
            ocrResultEntityElastic_2.setLibUrgenceAr(ocrResultEntityJpa.getUrgence().getLibUrgenceAr());
            ocrResultEntityElastic_2.setLibUrgenceFr(ocrResultEntityJpa.getUrgence().getLibUrgenceFr());
         }

         ocrResultEntityElastic_2.setNumberOfPapers(ocrResultEntityJpa.getNumberOfPapers());

         try (PDDocument document = PDDocument.load(ocrResultEntityJpa.getPdf())) {
            PDFRenderer renderer = new PDFRenderer(document);

            for (int pageIndex = 0; pageIndex < ocrResultEntityJpa.getNumberOfPapers(); pageIndex++) {
               BufferedImage image = renderer.renderImageWithDPI(pageIndex, 300); // Set the desired DPI
               for (ThumbnailSize size : ThumbnailSize.values()) {
                  BufferedImage resizedImage = Scalr.resize(image, Scalr.Method.ULTRA_QUALITY, Scalr.Mode.AUTOMATIC, size.getSize());
                  ByteArrayOutputStream baos = new ByteArrayOutputStream();
                  ImageIO.write(resizedImage, "jpg", baos);
                  byte[] imageBytes = baos.toByteArray();
                  baos.flush();
                  baos.close();
                  String base64Image = Base64.encodeBase64String(imageBytes);
                  OcrResultPageAsImageEmbeddedId ocrResultPageAsImageEmbeddedId = OcrResultPageAsImageEmbeddedId.builder()
                          .ocrResultId(ocrResultEntityJpa.getId())
                          .size(size.getSize())
                          .pageIndex(pageIndex)
                          .build();
                  ocrResultPageAsImageRepository.save(OcrResultPageAsImage.builder()
                          .id(ocrResultPageAsImageEmbeddedId)
                          .base64PngImage(base64Image.getBytes())
                          .build());
               }
               ByteArrayOutputStream baos = new ByteArrayOutputStream();
               ImageIO.write(image, "jpg", baos);
               byte[] imageBytes = baos.toByteArray();
               baos.flush();
               baos.close();
               String base64Image = Base64.encodeBase64String(imageBytes);
               OcrResultPageAsImageEmbeddedId ocrResultPageAsImageEmbeddedId = OcrResultPageAsImageEmbeddedId.builder()
                       .ocrResultId(ocrResultEntityJpa.getId())
                       .size(-1)
                       .pageIndex(pageIndex)
                       .build();

               ocrResultPageAsImageRepository.save(OcrResultPageAsImage.builder()
                       .id(ocrResultPageAsImageEmbeddedId)
                       .base64PngImage(base64Image.getBytes())
                       .build());
            }
         } catch (IOException e) {
            throw new RuntimeException(e);
         }
         logger.info("ocr_result ......");
         return ocrResultEntityElastic_2;

      }

      public PdfFileUploadResponse hundleUpload (
              MultipartFile file,
              OcrResultEntityJpaRequest ocrResultEntityJpaRequest
   ) throws IOException {
         String fileSignatue = OcrResultService.generateSignature(file.getBytes());
         OcrResultEntityJpa ocrResultEntityJpa = ocrResultService.findById(fileSignatue);
         PdfFileUploadResponse pdfFileUploadResponse = new PdfFileUploadResponse();
         pdfFileUploadResponse.setOriginalFilename(file.getOriginalFilename());
         pdfFileUploadResponse.setSignature(fileSignatue);
         String userName = SecurityContextHolder.getContext().getAuthentication().getName();
         User user = userService.getByMatricule(userName);
         if (ocrResultEntityJpa != null) {
            pdfFileUploadResponse.setStatus("ALREADY_EXIST");
         } else {
            // todo deside how to store the pages based on the front end requirements
            OcrResultEntityJpa ocrResultEntityJpa_ = new OcrResultEntityJpa();
            ocrResultEntityJpa_.setOcrDone("n");
            ocrResultEntityJpa_.setId(fileSignatue);
            ocrResultEntityJpa_.setPdf(file.getBytes());
            ocrResultEntityJpa_.setOriginalFileName(file.getOriginalFilename());
            ocrResultEntityJpa_.setNumberOfPapers(pdfService.getNumberOfPapers(file.getBytes()));
            ocrResultEntityJpa_.setOwner(user);
            ocrResultEntityJpa_.setCreatedDate(LocalDateTime.now());
            ocrResultEntityJpa_.setReference(ocrResultEntityJpaRequest.getReference());
            ocrResultEntityJpa_.setDateReference(
                    ocrResultEntityJpaRequest.getDateReference().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
            );
            TypeTexteReglementaire typeTexteReglementaire = TypeTexteReglementaireRepository.findById(
                    ocrResultEntityJpaRequest.getTypeTexteReglementaire().getId()).orElseThrow(
                    () -> new EntityNotFoundException("type texte reglementaire not found")
            );
            Confidentialite confidentialite = confidentialiteRepository.findById(String.valueOf(ocrResultEntityJpaRequest.getIdConfidentialite()))
                            .orElseThrow(() -> new EntityNotFoundException("confidentialite with id " + ocrResultEntityJpaRequest.getIdConfidentialite() + " not found")) ;
            ocrResultEntityJpa_.setConfidentialite(confidentialite);
            ocrResultEntityJpa_.setTypeTexteReglementaire(typeTexteReglementaire);
            pdfFileUploadResponse.setStatus("SUCCESS");
            ocrResultService.save(ocrResultEntityJpa_);
         }
         return pdfFileUploadResponse;
      }
   }


