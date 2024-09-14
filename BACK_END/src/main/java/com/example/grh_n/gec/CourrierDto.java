package com.example.grh_n.gec;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CourrierDto {

    String reference;
    LocalDate dateReference;
    String referenceArrive;
    LocalDate dateReferenceArrive;
    Long courrierAutoriteId ;
    String typeCourrier ;
    List<Long> destinataires ;
    List<String> references ;
    List<byte[]> attachments;
    LocalDate deadLine ;
    boolean answerRequired ;


}
