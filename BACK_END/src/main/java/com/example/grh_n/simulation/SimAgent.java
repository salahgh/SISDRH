package com.example.grh_n.simulation;

import com.example.grh_n.rh.entities.REntities.RhRArme;
import com.example.grh_n.rh.entities.REntities.RhRGrade;
import jakarta.persistence.*;
import lombok.*;
import org.slf4j.Logger;

@Getter
@Setter
@NoArgsConstructor
@Builder
@ToString
@Entity
@Table(name = "SIM_AGENT")
@AllArgsConstructor
public class SimAgent implements Cloneable {

    @EmbeddedId
    private SimAgentId simAgentId;

    private String nom;

    private String pnom;

    private String noma;

    private String pnoma;

    private TypeRecrutement typeRecrutement ;

    private Integer class_ ;

    private Integer anneDeService ;

    private Integer age ;

    private Integer anicenneteGrade ;

    private Integer nombreDeProposition ;

    @ManyToOne
    @JoinColumn(name = "id_grade")
    private RhRGrade grade;

    @ManyToOne
    @JoinColumn(name = "id_arme")
    private RhRArme arme ;

    @ManyToOne
    private Simulation simulation ;

    public boolean shouldPromote() {
        return true ;
    }

    public void promote() {

    }

    public void step(MySimulation mySimulation , Logger logger){
        this.age = age + 1  ; this.anicenneteGrade = this.anicenneteGrade + 1 ; this.anneDeService = this.anneDeService + 1 ;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
