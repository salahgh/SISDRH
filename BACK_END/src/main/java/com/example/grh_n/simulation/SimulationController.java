package com.example.grh_n.simulation;

import com.example.grh_n.rh.entities.REntities.RhRGrade;
import com.example.grh_n.rh.repos.RhRArmeRepository;
import com.example.grh_n.rh.repos.RhRGradeRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@GraphQLApi
public class SimulationController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    private final SimulationRepository simulationRepository;
    private final SimAgentRepository simAgentRepository;
    private final RhRGradeRepository gradeRepository;
    private final RhRArmeRepository armeRepository;

    private final RecrutementRepository recrutementRepository ;

    private final MySimulation mySimulation;

    public SimulationController(SimulationRepository simulationRepository, SimAgentRepository simAgentRepository, RhRGradeRepository gradeRepository, RhRArmeRepository armeRepository, RecrutementRepository recrutementRepository) {
        this.simulationRepository = simulationRepository;
        this.simAgentRepository = simAgentRepository;
        this.gradeRepository = gradeRepository;
        this.armeRepository = armeRepository;
        this.recrutementRepository = recrutementRepository;
        this.mySimulation = new MySimulation(simAgentRepository, simulationRepository, 30);
    }

    @GraphQLMutation
    public boolean startSimulation(Long simulationId) {
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("simulation not found"));
        mySimulation.setNumberOfSteps(simulation.getNumberOfSteps());
        mySimulation.setCurrentStep(0);
        simulation.setDateDebut(LocalDateTime.now());
        simAgentRepository.deleteAll(simulation.getSimAgents());
        simulationRepository.save(simulation);
        mySimulation.start(simulationId);
        simulation.setDateFin(LocalDateTime.now());
        simulationRepository.save(simulation);
        return true;
    }

    @GraphQLMutation
    public void setNumberOfSteps(int steps, Long simulationId) {
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found"));
        simulation.setNumberOfSteps(steps);
        simulationRepository.save(simulation);
    }

    @GraphQLMutation
    public Simulation createSimulation(SimulationDto simulationDto) {
        Simulation simulation = Simulation.builder()
                .description(simulationDto.getDescription())
                .numberOfSteps(simulationDto.getNumberOfSteps())
                .name(simulationDto.getName())
                .build();
        simulationRepository.save(simulation);
        return simulation;
    }

    @GraphQLMutation
    public void deleteSimulation(Long simulationId) {
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found"));
        simAgentRepository.deleteAll(simulation.getSimAgents());
        simulationRepository.deleteById(simulationId);
    }

    @GraphQLQuery
    public Simulation getSimulationById(Long simulationId) {
        return simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found"));
    }

    @GraphQLQuery
    public List<Simulation> getSimulations() {
        return (List<Simulation>) simulationRepository.findAll();
    }

    @GraphQLMutation
    public SimAgent createSimAgent(SimAgentDto simAgentDto) {

        RhRGrade grade = gradeRepository.findById(simAgentDto.getIdGrade()).orElseThrow(() -> new EntityNotFoundException("grade nto found"));
//        RhRArme arme = armeRepository.findById(simAgentDto.getIdArme()).orElseThrow(() -> new EntityNotFoundException("arme not found")) ;
        Simulation simulation = simulationRepository.findById(simAgentDto.getIdSimulation()).orElseThrow(() -> new EntityNotFoundException("not found"));
        logger.info(simAgentDto.toString());
        SimAgent simAgent = SimAgent.builder()
                .simAgentId(SimAgentId.builder().id(simAgentDto.getSimAgentId().getId()).step(0).build())
                .anicenneteGrade(simAgentDto.getAnicenneteGrade())
                .anneDeService(simAgentDto.getAnneDeService())
                .typeRecrutement(simAgentDto.getTypeRecrutement())
                .age(simAgentDto.getAge())
                .class_(simAgentDto.getClass_())
                .noma(simAgentDto.getPnom())
                .pnoma(simAgentDto.getPnoma())
                .nom(simAgentDto.getNom())
                .pnom(simAgentDto.getPnom())
                .nombreDeProposition(simAgentDto.getNombreDeProposition())
                .simulation(simulation)
//                .arme(arme)
                .grade(grade)
                .build();
        simAgentRepository.save(simAgent);
        return simAgent;
    }

    @GraphQLMutation
    public void deleteSimAgent(SimAgentId simAgentId) {
        simAgentRepository.deleteById(simAgentId);
    }

    @GraphQLQuery
    public Page<SimAgent> getSimAgentsByStepAndSimulation(Integer step, Long simulationId, Pageable pageable) {
        return simAgentRepository.findByStepAndSimulation(step, simulationId, pageable);
    }



}
