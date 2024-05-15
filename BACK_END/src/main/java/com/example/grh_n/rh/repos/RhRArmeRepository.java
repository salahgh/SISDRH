package com.example.grh_n.rh.repos;

import com.example.grh_n.rh.entities.REntities.RhRArme;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface RhRArmeRepository extends CrudRepository<RhRArme, Long> {
    @Query("select arme from RhRArme arme where arme.isTed = '1' ")
    List<RhRArme> allArmesTed();
}