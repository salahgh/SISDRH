package com.example.grh_n.reports;

import com.example.grh_n.dbdsn.entities.FilteringParams;
import com.example.grh_n.dbdsn.service.PamOff2024Service;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.JRException;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.HashMap;

@Service
@AllArgsConstructor
@GraphQLApi
public class ReportController {
    final ReportsService reportsService;
    final PamOff2024Service pamOff2024Service ;
    @GraphQLQuery
    public String getReport(ReportNames reportName, ReportFormats format , ReportsSubFolder reportsSubFolder) throws JRException, SQLException {
        return Base64.encodeBase64String(reportsService.getReport(reportName, format , reportsSubFolder));
    }

    @GraphQLQuery
    public String getReportPam(ReportFormats format , FilteringParams filteringParams) throws JRException, SQLException, JsonProcessingException {
        HashMap<String ,Object> map = new HashMap<>() ;
        return Base64.encodeBase64String(reportsService.getReportPam(format ,filteringParams,map));
    }

}
