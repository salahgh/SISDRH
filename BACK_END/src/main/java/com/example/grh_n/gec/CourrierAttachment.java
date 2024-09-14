package com.example.grh_n.gec;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "GEC_ATTACHMENT")
public class CourrierAttachment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String id;

    @Column(name = "pdf_" , columnDefinition = "BLOB")
    private byte[] pdf;

    @ManyToOne
    Courrier courrier ;

}
