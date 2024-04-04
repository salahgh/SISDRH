package com.example.grh_n.recrutement.candidat;

import lombok.Data;
import java.util.List;

@Data
public class DCandidatSearchRequest {

   private String noma ;

   private String pnoma ;

   private String ln ;

   private List<String> specialites ;
   private List<String> sex ;

}
