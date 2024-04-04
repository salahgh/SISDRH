package com.example.grh_n.simulation;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecrutementRepository extends CrudRepository<Recrutement, Long> {

    List<Recrutement> findByAnneDeRecrutemntAndSimulation(Integer anneDeRecrutement , Simulation simulation);
    List<Recrutement> findBySimulation(Simulation simulation , Pageable pageable) ;
    List<Recrutement> findByTypeRecrutementAndSimulation(TypeRecrutement typeRecrutement , Simulation simulation) ;
    List<Recrutement> findByTypeRecrutementAndAnneDeRecrutemntAndSimulation(Integer anneDeRecrutement , TypeRecrutement typeRecrutement ,Simulation simulation) ;

}