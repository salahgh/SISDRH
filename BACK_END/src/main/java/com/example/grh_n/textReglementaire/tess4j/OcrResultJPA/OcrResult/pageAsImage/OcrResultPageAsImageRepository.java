
package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface OcrResultPageAsImageRepository extends
        CrudRepository<OcrResultPageAsImage, OcrResultPageAsImageEmbeddedId>,
        PagingAndSortingRepository<OcrResultPageAsImage,OcrResultPageAsImageEmbeddedId> {

}
