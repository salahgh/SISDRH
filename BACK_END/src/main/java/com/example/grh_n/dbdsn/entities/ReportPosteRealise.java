package com.example.grh_n.dbdsn.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Getter
@Setter
@Table(name = "REPORT_POSTE_REALISE")
public class ReportPosteRealise {
    @Id
    @Column(name = "POSTE", nullable = true, length = 5)
    private String poste;
    @Basic
    @Column(name = "TED", nullable = true, precision = 0)
    private BigInteger ted;
    @Basic
    @Column(name = "REALISE_", nullable = true, precision = 0)
    private BigInteger realise;
    @Basic
    @Column(name = "POURCENTAGE", nullable = true, length = 4)
    private BigInteger pourcentage;
}
