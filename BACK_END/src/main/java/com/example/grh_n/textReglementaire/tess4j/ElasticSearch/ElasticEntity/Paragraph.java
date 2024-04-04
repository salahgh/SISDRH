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
public class Paragraph {

   private String id_par;
   private String type;
   private String lang;
   private BBox bbox;
   private List<Line> lines;
}
