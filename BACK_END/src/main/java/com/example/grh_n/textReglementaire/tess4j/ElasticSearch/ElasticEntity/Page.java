package com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Page {

    private String id_page;
    private String type;
    private BBox bbox;
    private List<Paragraph> paragraphs;

}
