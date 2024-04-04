package com.example.grh_n.reports;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "REPORTS_NAMES")
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReportsNames {

    @Id
    String fileName ;
    String nomAR ;
    String nomFR ;
    Integer _order ;
    String obs ;

}
