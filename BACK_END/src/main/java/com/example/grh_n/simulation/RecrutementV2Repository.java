package com.example.grh_n.simulation;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecrutementV2Repository extends CrudRepository<RecrutementV2, Integer> {

    List<RecrutementV2> findByAnneDeRecrutemntAndSimulation(Integer anneDeRecrutement , Simulation simulation);
    List<RecrutementV2> findBySimulation(Simulation simulation , Pageable pageable) ;

//    List<RecrutementV2> findByTypeRecrutementAndSimulation(TypeRecrutement typeRecrutement , Simulation simulation) ;
//    List<RecrutementV2> findByTypeRecrutementAndAnneDeRecrutemntAndSimulation(Integer anneDeRecrutement , TypeRecrutement typeRecrutement ,Simulation simulation) ;

}




