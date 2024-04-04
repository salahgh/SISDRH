package com.example.grh_n.export;

import com.example.grh_n.Photos.PhotoService;
import com.example.grh_n.Photos.Thumbnail;
import com.example.grh_n.Photos.ThumbnailRepository;
import com.example.grh_n.dbdsn.entities.FilteringParams;
import com.example.grh_n.dbdsn.entities.PamOff2024;
import com.example.grh_n.dbdsn.service.PamOff2024Service;
import com.example.grh_n.pav.services.PavService;
import jakarta.persistence.EntityNotFoundException;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
public class ExportService {
    private final ThumbnailRepository thumbnailRepository ;
    private final PamOff2024Service pamOff2024Service ;
    private final PhotoService photoService ;

    public ExportService(ThumbnailRepository thumbnailRepository, PamOff2024Service pamOff2024Service, PhotoService photoService, PavService pavService) {
        this.thumbnailRepository = thumbnailRepository;
        this.pamOff2024Service = pamOff2024Service;
        this.photoService = photoService;
    }

    public byte[] exportPhotos(List<Integer> sizes , FilteringParams filteringParams){

//        List<Thumbnail> imageList = thumbnailRepository.findAllByThumbSizeIn(sizes.stream().map(Integer::parseInt).collect(Collectors.toList()));
        List<String> matricules = pamOff2024Service.getSearechQuery(filteringParams).fetch().stream().map((PamOff2024::getMatricule)).toList();
        List<Thumbnail> imageList = photoService.findThumbnailBySizeInAndMatriculeIn(sizes,matricules);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        HttpHeaders headers ;
        try (ZipOutputStream zipOut = new ZipOutputStream(baos)) {
            for (Thumbnail thumbnail : imageList) {
                if (thumbnail.getThumbData() != null) {
                    ZipEntry zipEntry = new ZipEntry(
                            thumbnail.getPhoto().getPersonnel().getMatricule()
                                    + "_" + thumbnail.getThumbSize() + "." + thumbnail.getPhoto().getFormat());
                    zipOut.putNextEntry(zipEntry);
                    zipOut.write(thumbnail.getThumbData());
                    zipOut.closeEntry();
                }
            }
            zipOut.close();

            // Return the ZIP file as a ResponseEntity
            return baos.toByteArray();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


    public byte[] exportDataToExcel(FilteringParams filteringParams) throws IOException {

        List<PamOff2024> pamOff2024s_ = pamOff2024Service.getSearechQuery(filteringParams).fetch() ;
        if(pamOff2024s_ == null || pamOff2024s_.isEmpty()){
            throw new EntityNotFoundException("no data");
        }
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("YourEntity Data");
        // Create header row
        Row header = sheet.createRow(0);
        header.createCell(1).setCellValue("NOMA");
        header.createCell(2).setCellValue("PNOMA");
        header.createCell(3).setCellValue("GRADE");
        header.createCell(4).setCellValue("G");
        header.createCell(5).setCellValue("ENS");
        header.createCell(6).setCellValue("ARME");
        header.createCell(7).setCellValue("LIB_ARME_AR");
        header.createCell(8).setCellValue("CSN");
        header.createCell(9).setCellValue("STRUCTURE_SN");
        header.createCell(10).setCellValue("N_MUTATION");
        header.createCell(11).setCellValue("DUREE_N");
        header.createCell(12).setCellValue("FONCTION");
        header.createCell(13).setCellValue("ENS_FONCTION");
        header.createCell(14).setCellValue("DUREE_S");
        header.createCell(15).setCellValue("N_DUREE_S");
        header.createCell(16).setCellValue("POSTE");
        header.createCell(17).setCellValue("TRIE_");
        header.createCell(18).setCellValue("PROMOTION_NUMBER");
        header.createCell(19).setCellValue("DUREE_FONCT");
        header.createCell(20).setCellValue("DIP_CIV");
        header.createCell(21).setCellValue("DIP_MIL");
        header.createCell(22).setCellValue("CODE_DIP_CIV");
        header.createCell(23).setCellValue("CODE_DIP_MIL");
        header.createCell(24).setCellValue("FORMATION");
        header.createCell(25).setCellValue("OBS");
        // Set header cell values based on your entity fields

        int rowNum = 1;
        for (PamOff2024 entity : pamOff2024s_) {
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(entity.getMatricule());
            row.createCell(1).setCellValue(entity.getNoma());
            row.createCell(2).setCellValue(entity.getPnoma());
            row.createCell(3).setCellValue(entity.getGrade());
            row.createCell(4).setCellValue(entity.getG().doubleValue());
            row.createCell(5).setCellValue(entity.getEns().doubleValue());
            row.createCell(6).setCellValue(entity.getArme().doubleValue());
            row.createCell(7).setCellValue(entity.getLibArmeAr());
            row.createCell(8).setCellValue(entity.getCsn());
            row.createCell(9).setCellValue(entity.getStructureSn().getRunite().getLibUniteeAr());
            row.createCell(10).setCellValue(entity.getNMutation().doubleValue());
            row.createCell(11).setCellValue(entity.getDureeN().doubleValue());
            row.createCell(12).setCellValue(entity.getFonction());
            row.createCell(14).setCellValue(entity.getDureeS());
            row.createCell(15).setCellValue(entity.getNDureeS().doubleValue());
            row.createCell(16).setCellValue(entity.getPoste());
            row.createCell(17).setCellValue(entity.getTrieAnciennete());
            if(entity.getPromotionNumber() != null){
                            row.createCell(18).setCellValue(entity.getPromotionNumber());
            }
            row.createCell(19).setCellValue(entity.getDUREE_FONCT());
            row.createCell(20).setCellValue(entity.getDip_civ());
            row.createCell(21).setCellValue(entity.getDip_mil());
            row.createCell(22).setCellValue(entity.getCode_dip_civ());
            row.createCell(23).setCellValue(entity.getCode_dip_mil());
            row.createCell(24).setCellValue(entity.getFormation());
            row.createCell(25).setCellValue(entity.getObs());
            // Set cell values based on your entity fields
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        outputStream.close();
        return outputStream.toByteArray();
    }
}
