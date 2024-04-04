package com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Line {

   private String id_line;
   private String type;
   private BBox bbox;
   private String text;
   private Integer fsize;

   // Getters and setters
}
