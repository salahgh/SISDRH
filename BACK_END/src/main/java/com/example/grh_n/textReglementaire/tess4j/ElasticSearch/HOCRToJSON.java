package com.example.grh_n.textReglementaire.tess4j.ElasticSearch;

import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HOCRToJSON {
    static Logger logger = LoggerFactory.getLogger(HOCRToJSON.class);

    public static ObjectNode convert(String hocr) {

        // todo add more attibutes
        Document doc = Jsoup.parse(hocr);
        // Create a Jackson ObjectMapper object
        ObjectMapper mapper = new ObjectMapper();
        // Create a Jackson ObjectNode object
        ObjectNode json = mapper.createObjectNode();
        // Create a Jackson ArrayNode object
        ArrayNode pagesArray = mapper.createArrayNode();
        // Get the HOCR pages
        for (Element page : doc.select(".ocr_page")) {
            // Create a Jackson ObjectNode object for the page
            ObjectNode pageNode = mapper.createObjectNode();
            // Set the page properties
            pageNode.put("type" , "page") ;
            pageNode.put("id_page", page.id());
//            pageNode.put("image", page.attr("title").split("image ")[1].split(";")[0]);
            ObjectNode bbox = mapper.createObjectNode() ;
            String bboxString = page.attr("title").split("bbox ")[1].split(";")[0] ;
            getBBOX(pageNode, bbox, bboxString);
            // Create a Jackson ArrayNode object for the paragraphs
            ArrayNode paragraphsArray = mapper.createArrayNode();
            // Get the HOCR paragraphs
            for (Element paragraph : page.select(".ocr_par")) {
                // Create a Jackson ObjectNode object for the paragraph
                ObjectNode paragraphNode = mapper.createObjectNode();
                // Set the paragraph properties
                paragraphNode.put("type" , "paragraphe") ;
                paragraphNode.put("id_par", paragraph.id());
                paragraphNode.put("lang",paragraph.attr("lang")) ;

                bbox = mapper.createObjectNode() ;
                bboxString = paragraph.attr("title").split("bbox ")[1] ;
                getBBOX(paragraphNode, bbox, bboxString);
                // Create a Jackson ArrayNode object for the lines
                ArrayNode linesArray = mapper.createArrayNode();
                // Get the HOCR lines
                for (Element line : paragraph.select(".ocr_line")) {
                    // Create a Jackson ObjectNode object for the line
                    ObjectNode lineNode = mapper.createObjectNode();
                    // Set the line properties
                    lineNode.put("type" , "line");
                    lineNode.put("id_line", line.id());
                    bbox = mapper.createObjectNode() ;
                    bboxString = line.attr("title").split("bbox ")[1].split(";")[0] ;
                    getBBOX(lineNode, bbox, bboxString);
                    // Add the line node to the lines array

                    StringBuilder sb = new StringBuilder();
                    int numberOfWords = 1 ;
                    int sizesSum = 0 ;
                    for (Element word : line.select(".ocrx_word")) {
                        sb.append(word.text()).append(" ");
                        try {
                            sizesSum += Integer.parseInt(word.attr("title").split("; ")[2].split(" ")[1]);
                            numberOfWords += 1 ;
                        }catch (NumberFormatException e){
                            logger.info(e.getMessage());
                        }
                    }
                    lineNode.put("text", sb.toString());
                    lineNode.put("fsize" , sizesSum/numberOfWords) ;
                    linesArray.add(lineNode);
                }
                // Add the lines array to the paragraph node
                paragraphNode.set("lines", linesArray);
                // Add the paragraph node to the paragraphs array
                paragraphsArray.add(paragraphNode);
            }
            // Add the paragraphs array to the page node
            pageNode.set("paragraphs", paragraphsArray);
            // Add the page node to the pages array
            pagesArray.add(pageNode);
        }
        // Add the pages array to the root node
        json.set("pages", pagesArray);
        return json ;
    }

    private static void getBBOX(ObjectNode pageNode, ObjectNode bbox, String bboxString) {
        String[] strings_p = bboxString.split(" ");
        bbox.put("x1" , strings_p[0]);
        bbox.put("y1" , strings_p[1]);
        bbox.put("x2" , strings_p[2]);
        bbox.put("y2" , strings_p[3]);
        pageNode.set("bbox", bbox);
    }
}





