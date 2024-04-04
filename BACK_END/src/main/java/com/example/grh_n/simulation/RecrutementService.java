package com.example.grh_n.simulation;

import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class RecrutementService {

    private final RecrutementRepository recrutementRepository ;
    private final SimulationRepository simulationRepository;
    private final RecrutementV2Repository recrutementV2Repository;

    public RecrutementService(RecrutementRepository recrutementRepository,
                              SimulationRepository simulationRepository,
                              RecrutementV2Repository recrutementV2Repository) {
        this.recrutementRepository = recrutementRepository;
        this.simulationRepository = simulationRepository;
        this.recrutementV2Repository = recrutementV2Repository;
    }

    @GraphQLMutation
    public Recrutement createRecrutement(RecrutementDto recrutementDto){
        Simulation simulation = simulationRepository.findById(recrutementDto.getSimulationId()).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        Recrutement recrutement = Recrutement.builder()
                .id(recrutementDto.getId())
                .typeRecrutement(recrutementDto.getTypeRecrutement())
                .anneDeRecrutemnt(recrutementDto.anneDeRecrutemnt)
                .nombre(recrutementDto.nombre)
                .simulation(simulation)
                .build();
        return recrutementRepository.save(recrutement) ;
    }

    @GraphQLMutation
    public RecrutementV2 createRecrutementV2(RecrutementV2Dto recrutementV2Dto){
        Simulation simulation = simulationRepository.findById(recrutementV2Dto.getSimulationId()).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        RecrutementV2 recrutementV2 = RecrutementV2.builder()
                .anneDeRecrutemnt(recrutementV2Dto.getAnneDeRecrutemnt())
                .FF(recrutementV2Dto.FF)
                .FS_L(recrutementV2Dto.FS_L)
                .FS_M(recrutementV2Dto.FS_M)
                .EMP(recrutementV2Dto.EMP)
                .simulation(simulation)
                .build();
        return recrutementV2Repository.save(recrutementV2) ;
    }

    @GraphQLMutation
    public void deleteRecrutement(Long recrutementId){
        recrutementRepository.deleteById(recrutementId);
    }

    @GraphQLMutation
    public void deleteRecrutementV2(Integer recrutementId){
        recrutementV2Repository.deleteById(recrutementId);
    }

    @GraphQLMutation
    public void updateRecrutemntNombre(Integer nomber , Long recrutemntId){
        Recrutement recrutement = recrutementRepository
                .findById(recrutemntId).orElseThrow(() -> new EntityNotFoundException("not found"));
        recrutement.setNombre(nomber);
        recrutementRepository.save(recrutement) ;
    }

    @GraphQLMutation
    public void updateRecrutemntV2(RecrutementV2Dto recrutementV2Dto){
        RecrutementV2 recrutementV2 = recrutementV2Repository
                .findById(recrutementV2Dto.getAnneDeRecrutemnt()).orElseThrow(() -> new EntityNotFoundException("not found"));
        recrutementV2.setFF(recrutementV2.getFF());
        recrutementV2.setFS_L(recrutementV2.getFS_L());
        recrutementV2.setFS_M(recrutementV2.FS_M);
        recrutementV2.setEMP(recrutementV2.EMP);
        recrutementV2Repository.save(recrutementV2) ;
    }

    @GraphQLQuery
    public List<Recrutement> getAllRecrutemnts(){
        return (List<Recrutement>) recrutementRepository.findAll();
    }

    @GraphQLQuery
    public List<RecrutementV2> getAllRecrutemntsV2(){
        return (List<RecrutementV2>) recrutementV2Repository.findAll();
    }

    @GraphQLQuery
    public List<Recrutement> getAllRecrutemntsBySimulation(Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        Sort sort = Sort.by(Sort.Order.by("anneDeRecrutemnt"));
        return (List<Recrutement>) recrutementRepository.findBySimulation(simulation ,PageRequest.of(0 , 100 , sort));
    }

    @GraphQLQuery
    public List<RecrutementV2> getAllRecrutemntsV2BySimulation(Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        Sort sort = Sort.by(Sort.Order.by("anneDeRecrutemnt"));
        return recrutementV2Repository.findBySimulation(simulation ,PageRequest.of(0 , 100 , sort));
    }

    @GraphQLQuery
    public List<Recrutement> getRecrutementByClass(Integer class_ , Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        return recrutementRepository.findByAnneDeRecrutemntAndSimulation(class_,simulation) ;
    }

    @GraphQLQuery
    public List<RecrutementV2> getRecrutementV2ByClass(Integer class_ , Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        return recrutementV2Repository.findByAnneDeRecrutemntAndSimulation(class_,simulation) ;
    }

    @GraphQLQuery
    public List<Recrutement> getRecrutementByTypeRecrutement(TypeRecrutement typeRecrutement , Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        return recrutementRepository.findByTypeRecrutementAndSimulation(typeRecrutement,simulation) ;
    }
    @GraphQLQuery
    public List<Recrutement> getRecrutementByTypeRecrutementAndClass(TypeRecrutement typeRecrutement , Integer classe_ , Long simulationId){
        Simulation simulation = simulationRepository.findById(simulationId).orElseThrow(() -> new EntityNotFoundException("not found")) ;
        return recrutementRepository.findByTypeRecrutementAndAnneDeRecrutemntAndSimulation(classe_ ,typeRecrutement ,simulation) ;
    }
}
