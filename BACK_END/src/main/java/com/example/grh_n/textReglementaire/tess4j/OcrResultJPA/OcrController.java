package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA;

import com.example.grh_n.textReglementaire.tess4j.service.TerractService;

import com.google.gson.Gson;
import net.sourceforge.tess4j.TesseractException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/ocr")
@CrossOrigin
public class OcrController {

   @Autowired
   private TerractService ocrService;
   public void OCRService(TerractService ocrService) {
      this.ocrService = ocrService;
   }
   private final Logger logger = LoggerFactory.getLogger(this.getClass());

   @PostMapping
   public ResponseEntity<List<PdfFileUploadResponse>> generateOcrResult(
             @RequestParam List<MultipartFile> file
           , @RequestParam List<String> ocrResultEntityJpaRequestsJson
   )
           throws IOException, TesseractException {
      logger.info(ocrResultEntityJpaRequestsJson.toString());
      Gson gson = new Gson();
      List<OcrResultEntityJpaRequest> ocrResultEntityJpaRequests = new ArrayList<>();
      ocrResultEntityJpaRequestsJson.forEach(ocrResultEntityJpaRequestJson -> {
         OcrResultEntityJpaRequest ocrResultEntityJpaRequest = gson.fromJson(ocrResultEntityJpaRequestJson,
                 OcrResultEntityJpaRequest.class);
         logger.info(ocrResultEntityJpaRequest.getDateReference().toString());
         ocrResultEntityJpaRequests.add(ocrResultEntityJpaRequest);
      });

      List<PdfFileUploadResponse> pdfFileUploadResponseList = new ArrayList<>();
      for (int index = 0; index < file.size(); index++) {
         try {
            PdfFileUploadResponse response = ocrService.hundleUpload(file.get(index), ocrResultEntityJpaRequests.get(index));
            logger.info(response.toString());
            pdfFileUploadResponseList.add(response);
         } catch (IOException e) {
            e.printStackTrace();
         }
      }
      return ResponseEntity.ok().body(pdfFileUploadResponseList);
   }
}


