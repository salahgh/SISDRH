package com.example.grh_n.export;


import com.example.grh_n.dbdsn.entities.FilteringParams;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ExportImagesToZipRequestBody {
    List<String> sizes ;
    FilteringParams filteringParams ;
}
