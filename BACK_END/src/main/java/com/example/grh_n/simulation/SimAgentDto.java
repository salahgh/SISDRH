package com.example.grh_n.simulation;



import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@ToString
public class SimAgentDto {

    private SimAgentId simAgentId;

    private String nom;

    private String pnom;

    private String noma;

    private String pnoma;

    private TypeRecrutement typeRecrutement;

    private Integer class_;

    private Integer anneDeService;

    private Integer age;

    private Integer anicenneteGrade;

    private Integer nombreDeProposition;

    private Long idGrade;

    private Long idArme;

    private Long idSimulation;
}
