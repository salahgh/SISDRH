package com.example.grh_n.rh.repos;

import com.example.grh_n.rh.entities.REntities.RhRStructureSn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RhRStructureSnRepository extends PagingAndSortingRepository<RhRStructureSn, String> , CrudRepository<RhRStructureSn , String> {
}