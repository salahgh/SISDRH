package com.example.grh_n.textReglementaire.tess4j.service;

import jakarta.validation.constraints.NotNull;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class PDFService {

    private final Logger logger = LoggerFactory.getLogger(PDFService.class);

    public BufferedImage convertPDFToImage(byte[] pdfBuffer, int pageNumber) throws IOException {
        PDDocument document = PDDocument.load(pdfBuffer);
        PDFRenderer pdfRenderer = new PDFRenderer(document);
        BufferedImage bufferedImage = pdfRenderer.renderImageWithDPI(pageNumber, 400, ImageType.RGB);
        document.close();
        return bufferedImage;
    }

    public List<PDDocument> splitPDFToPages(PDDocument document) {

        int page = 1;
        List<PDDocument> pages = new ArrayList<>();
        for (PDPage pdPage : document.getPages()) {
            // Create a new document for each page
            PDDocument newDocument = new PDDocument();
            // Add the current page to the new document
            newDocument.addPage(pdPage);
            pages.add(newDocument);
            // Close the new document
            page++;
        }
        // Close the input document
        return pages;
    }

    public String convertPDDocumentToBase64(@NotNull PDDocument pdDocument) {

        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            pdDocument.save(byteArrayOutputStream);
        } catch (IOException e) {
            e.printStackTrace();
            return " ";
        }
        return Base64.getEncoder().encodeToString(byteArrayOutputStream.toByteArray());
    }

    public String convertPDFPageToImage(@NotNull String s) {
        PDDocument pdDocument = null;
        try {
            pdDocument = PDDocument.load(Base64.getDecoder().decode(s.getBytes(StandardCharsets.UTF_8)));
        } catch (IOException e) {
            e.printStackTrace();
        }
        assert pdDocument != null;
        PDFRenderer pdfRenderer = new PDFRenderer(pdDocument);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            ImageIO.write(pdfRenderer.renderImageWithDPI(0, 400, ImageType.RGB), "JPEG", baos);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Base64.getEncoder().encodeToString(baos.toByteArray());
    }

    public Integer getNumberOfPapers(byte[] bytes) throws IOException {
        PDDocument pdDocument = PDDocument.load(bytes);
        Integer i = pdDocument.getNumberOfPages();
        pdDocument.close();
        return i;
    }
}
