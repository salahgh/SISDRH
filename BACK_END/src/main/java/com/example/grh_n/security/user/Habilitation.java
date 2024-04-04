package com.example.grh_n.security.user;

import com.example.grh_n.rh.entities.REntities.ted.RhRTed;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.Confidentialite;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "RH_R_HABILITATION")
public class Habilitation {
    // the id 1 2 3 is also the priority
    @Id
    private String id;
    private String libHabilitationAr ;
    private String libHabilitationFr;
    private String abbreviation ;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "RH_R_HABIL_CONFIDEN",
            joinColumns = @JoinColumn(name = "habilitation_id"),
            inverseJoinColumns = @JoinColumn(name = "confidentialite_id"))
    private List<Confidentialite> confidentialites ;

    @OneToMany(mappedBy = "habilitation")
    @ToString.Exclude
    private List<User> users;

    @OneToMany(mappedBy = "habilitation")
    @ToString.Exclude
    private List<RhRTed> rTeds ;

    public void setrTeds(List<RhRTed> rTeds) {
        this.rTeds = rTeds;
    }

    public List<RhRTed> getrTeds() {
        return rTeds;
    }
}
