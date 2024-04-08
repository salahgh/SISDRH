package com.example.grh_n.textReglementaire.tess4j.OCRJOB.job;

import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity.OcrResultEntityElastic_2;
import com.example.grh_n.textReglementaire.tess4j.service.TerractService;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class OcrJobService {

    @Autowired
    OcrResultService ocrResultService;
    @Autowired
    TerractService ocrService;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    public void executeOcrJob() {
        Page<OcrResultEntityJpa> ocrResultEntityJpaList = ocrResultService.getWaitingPdfs(
                PageRequest.of(0,10)
        );
        ocrResultEntityJpaList.forEach(this::doOcr);
    }

    public void executeOneJob(String PdfId) {
        OcrResultEntityJpa ocrResultEntityJpa = ocrResultService.findById(PdfId) ;
        doOcr(ocrResultEntityJpa);
    }

    public void doOcr (OcrResultEntityJpa ocrResultEntityJpa) {
        ocrResultEntityJpa.setExecutedAt(LocalDateTime.now());
        ocrResultEntityJpa.setOcrDone("c");
        ocrResultService.save(ocrResultEntityJpa);
        OcrResultEntityElastic_2 ocrResultEntityElastic_2;
        ocrResultEntityElastic_2 = ocrService.performOCR(ocrResultEntityJpa) ;
        try {
            OcrResultEntityElastic_2 ocrResultEntityElastic_2_ = ocrResultService.save(ocrResultEntityElastic_2);
        }catch (Exception e) {
            e.printStackTrace();
        }

        ocrResultEntityJpa.setOcrDone("o");
        ocrResultEntityJpa.setTerminatedAt(LocalDateTime.now());
        ocrResultService.save(ocrResultEntityJpa);
    }
}

