package com.example.grh_n.Photos;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "D_THUMBNAIL")
public class Thumbnail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PHOTO_ID")
    private Photo photo;

    @Column(nullable = false)
    private int thumbSize;

    @Column(name = "DATA")
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] thumbData;

}

