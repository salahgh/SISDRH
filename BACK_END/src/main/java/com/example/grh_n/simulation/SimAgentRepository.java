package com.example.grh_n.simulation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SimAgentRepository extends CrudRepository<SimAgent, SimAgentId> , PagingAndSortingRepository<SimAgent , SimAgentId> {

    @Query("select a from SimAgent a where a.simAgentId.step = :step and a.simulation.id = :simulationId")
    Page<SimAgent> findByStepAndSimulation(Integer step ,Long simulationId , Pageable pageable);

}