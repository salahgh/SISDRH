package com.example.grh_n.simulation;

import jakarta.persistence.EntityNotFoundException;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

;import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class MySimulation {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final SimAgentRepository simAgentRepository;
    private final SimulationRepository simulationRepository;
    private List<SimAgent> agents = new ArrayList<>() ;
    private int numberOfSteps;
    private int currentStep = 1;

    public MySimulation(
            SimAgentRepository simAgentRepository,
            SimulationRepository simulationRepository,
            int numberOfSteps
    ) {
        this.simAgentRepository = simAgentRepository;
        this.simulationRepository = simulationRepository;
        this.numberOfSteps = numberOfSteps;
    }

    private List<SimAgent> loadAgents(){
        List<SimAgent> simAgents = new ArrayList<>() ;
        for (Integer i = 0; i < 20; i++) {
            SimAgent simAgent = SimAgent.builder()
                    .age(20)
                    .simAgentId(SimAgentId.builder().step(0).id(i.longValue()).build())
                    .anneDeService(1)
                    .anicenneteGrade(0)
                    .age(20)
                    .build();
            simAgentRepository.save(simAgent);
            simAgents.add(simAgent);
        }
        return simAgents ;
    }

    private List<SimAgent> loadAgentsFromDb(Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        return simulation.getSimAgents() ;
    }

    public void start(Long simulationId) {
//        this.setAgents(loadAgents());
        this.setAgents(loadAgentsFromDb(simulationId));
        startSimulation();
    }

    public void startSimulation() {
        for (int i = 1; i <= numberOfSteps; i++) {
            currentStep = i ;
            this.step(i);
        }
    }

    public void step(Integer step_) {
        for (Object agent : agents) {
            SimAgent simAgent = (SimAgent) agent;
            simAgent.step(this, logger);
            try {
                SimAgent simAgentResult = (SimAgent) simAgent.clone();
                simAgentResult.setSimAgentId(
                        SimAgentId.builder()
                                .id(simAgentResult.getSimAgentId().getId())
                                .step(step_)
                                .build());
                simAgentRepository.save(simAgentResult);
            } catch (CloneNotSupportedException e) {
                throw new RuntimeException(e);
            }
            simAgentRepository.save(simAgent);
        }
    }
}
