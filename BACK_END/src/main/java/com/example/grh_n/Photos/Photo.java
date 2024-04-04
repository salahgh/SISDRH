package com.example.grh_n.Photos;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import com.example.grh_n.rh.entities.REntities.RhRGrade;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "D_PHOTOS")
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @ToString.Exclude
    @Column(name = "DATA", nullable = false, length = 100000)
    private byte[] photoData;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DATE_TAKEN", nullable = false)
    private LocalDateTime dateTaken;

    @Column(name = "TRANSLATE_X")
    private Double translateX;

    @Column(name = "TRANSLATE_Y")
    private Double translateY;

    @Column(name = "LONGUEUR")
    private Double width ;

    @Column(name = "HAUTEUR")
    private Double height ;

    @Column(name = "ROTATION")
    private Double rotation ;

    // todo implement uniquness of the photo matricule + grade

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_personel", nullable = false)
    private DPersonnel personnel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_grade")
    private RhRGrade grade;

    @Column(name = "FORMAT")
    String format ;

    @ToString.Exclude
    @OneToMany(fetch = FetchType.LAZY , mappedBy = "photo" , cascade = CascadeType.ALL)
    private List<Thumbnail> thumbnails;

}
