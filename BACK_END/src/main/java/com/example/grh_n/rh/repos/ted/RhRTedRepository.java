package com.example.grh_n.rh.repos.ted;

import com.example.grh_n.rh.entities.REntities.ted.RhRTed;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RhRTedRepository extends CrudRepository<RhRTed, Long> , PagingAndSortingRepository<RhRTed, Long> {



}