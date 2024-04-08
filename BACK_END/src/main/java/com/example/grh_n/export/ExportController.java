package com.example.grh_n.export;

import com.example.grh_n.dbdsn.entities.FilteringParams;
import com.example.grh_n.pav.services.PavService;
import com.example.grh_n.reports.ReportFormats;
import com.example.grh_n.reports.ReportsService;
import net.sf.jasperreports.engine.JRException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/images")
public class ExportController {

    private final ExportService exportService;
    private final ReportsService reportsService;
    private final PavService pavService;

    public ExportController(ExportService photoExportService, ReportsService reportsService, PavService pavService) {
        this.exportService = photoExportService;
        this.reportsService = reportsService;
        this.pavService = pavService;
    }

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @PostMapping("/exportPhotos")
    public ResponseEntity<byte[]> exportImagesToZip(@RequestBody ExportImagesToZipRequestBody requestBody) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", "photos " + LocalDateTime.now() + " .zip");
        return new ResponseEntity<>(
                exportService.exportPhotos(
                        requestBody.getSizes().stream().map(Integer::parseInt).toList(),
                        requestBody.getFilteringParams()),
                headers,
                HttpStatus.OK
        );
    }

    @PostMapping("/exportToExcel")
    public ResponseEntity<byte[]> exportToExcel(@RequestBody FilteringParams filteringParams) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", "export " + LocalDateTime.now() + " .xlsx");
        return new ResponseEntity<>(
                exportService.exportDataToExcel(filteringParams),
                headers,
                HttpStatus.OK
        );
    }

    @PostMapping("/exportToPdf")
    public ResponseEntity<byte[]> exportToPdf(@RequestBody FilteringParams filteringParams) throws IOException, JRException, SQLException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        Map<String, Object> paramaters = new HashMap<>();
        paramaters.put("title", filteringParams.getTitle());
        headers.setContentDispositionFormData("attachment", "export " + LocalDateTime.now() + " .xlsx");
        return new ResponseEntity<>(
                reportsService.getReportPam(ReportFormats.PDF, filteringParams, paramaters),
                headers,
                HttpStatus.OK
        );
    }

    @PostMapping("/exportToPdfListPav")
    public ResponseEntity<byte[]> exportToPdfListPav(
            @RequestParam Long gradId,
            @RequestParam String title ,
            @RequestParam Integer sort
            ) throws IOException, JRException, SQLException {

        // todo passing the pageable object as params



        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        Map<String,Object> paramaters = new HashMap<>();
        paramaters.put("title" , title);
        headers.setContentDispositionFormData("attachment", "export " + LocalDateTime.now() + " .pdf");
        return new ResponseEntity<>(
                reportsService.getReportPav(ReportFormats.PDF , sort , gradId , paramaters) ,
                headers ,
                HttpStatus.OK
        );

    }


}
