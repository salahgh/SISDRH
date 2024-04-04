package com.example.grh_n.reports;

import com.example.grh_n.dbdsn.entities.FilteringParams;
import com.example.grh_n.dbdsn.entities.PamOff2024;
import com.example.grh_n.dbdsn.service.PamOff2024Service;
import com.example.grh_n.pav.entities.Pav;
import com.example.grh_n.pav.services.PavService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.data.JsonDataSource;
import net.sf.jasperreports.engine.export.ooxml.JRDocxExporter;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@GraphQLApi
public class ReportsService {

    final private Logger logger = LoggerFactory.getLogger(this.getClass());
    final DataSource dataSource;
    final ReportsNamesRepository namesRepository ;
    final PamOff2024Service pamOff2024Service ;
    final PavService pavService ;

    public byte[] getReport(
            ReportNames reportName,
            ReportFormats format,
            ReportsSubFolder subFolder) throws JRException, SQLException {
        String reportHome = System.getenv("REPORTS_HOME");
        String fileName = reportHome + "/" + subFolder + "/" + reportName + ".jasper";
        File initialFile = new File(fileName);
        JasperReport jasperReport = (JasperReport) JRLoader.loadObject(initialFile);


        JasperPrint print = JasperFillManager.fillReport(jasperReport, new HashMap<>(), dataSource.getConnection());

        switch (format) {
            case WORD -> {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                JRDocxExporter exporter = new JRDocxExporter();
                exporter.setExporterInput(new SimpleExporterInput(print));
                exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(baos));
                exporter.exportReport();
                return baos.toByteArray();
            }
            default -> {
                return JasperExportManager.exportReportToPdf(print);
            }
        }
    }

    public byte[] getReportPam(
            ReportFormats format , FilteringParams filteringParams , Map<String, Object> parameters ) throws JRException, SQLException, JsonProcessingException {

        String reportHome = System.getenv("REPORTS_HOME");
        String fileName = reportHome + "/" + ReportsSubFolder.pam + "/" + ReportNames.listPam + ".jasper";
        File initialFile = new File(fileName);
        JasperReport jasperReport = (JasperReport) JRLoader.loadObject(initialFile);
        List<PamOff2024> listPam = pamOff2024Service.findListPam(filteringParams) ;
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(listPam);
        JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters, jrBeanCollectionDataSource);

        switch (format) {
            case WORD -> {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                JRDocxExporter exporter = new JRDocxExporter();
                exporter.setExporterInput(new SimpleExporterInput(print));
                exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(baos));
                exporter.exportReport();
                return baos.toByteArray();
            }
            default -> {
                return JasperExportManager.exportReportToPdf(print);
            }
        }
    }

    public byte[] getReportPav(
            ReportFormats format , Integer sort , Long gradeId, Map<String, Object> parameters ) throws JRException, SQLException, JsonProcessingException {

        PageRequest page = PageRequest.ofSize(2000).withPage(0) ;

        switch (sort){
            case 1 : page = page.withSort(Sort.Direction.ASC , "costumSort") ; break;
            case 2 : page = page.withSort(Sort.Direction.ASC , "noteGlobale") ; break;
            case 3 : page = page.withSort(Sort.Direction.ASC , "personnel.pamOff2024.trieAnciennete") ; break;
        }

        logger.info(page.toString());

        String reportHome = System.getenv("REPORTS_HOME");
        String fileName = reportHome + "/" + ReportsSubFolder.pam + "/" + ReportNames.listPav + ".jasper";
        File initialFile = new File(fileName);
        JasperReport jasperReport = (JasperReport) JRLoader.loadObject(initialFile);
        Page<Pav> pavPage = pavService.findAllPav(page,gradeId);
        logger.info(pavPage.toList().toString());
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(pavPage.toList());
        JasperPrint print = JasperFillManager.fillReport(jasperReport, parameters, jrBeanCollectionDataSource);

        switch (format) {
            case WORD -> {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                JRDocxExporter exporter = new JRDocxExporter();
                exporter.setExporterInput(new SimpleExporterInput(print));
                exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(baos));
                exporter.exportReport();
                return baos.toByteArray();
            }
            default -> {
                return JasperExportManager.exportReportToPdf(print);
            }
        }
    }




    @GraphQLQuery
    public ReportsNames findReportById(ReportNames name){
        return namesRepository.findById(name.name()).orElseThrow(() -> new EntityNotFoundException("report does nto exist"));
    }

    @GraphQLQuery
    public List<ReportsNames> allReports(){
        return (List<ReportsNames>) namesRepository.findAll(Sort.by("_order").ascending());
    }

}
