package com.example.grh_n.rh.repos;

import com.example.grh_n.rh.entities.REntities.RhRCommandement;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface RhRCommandementRepository extends CrudRepository<RhRCommandement, BigInteger> {
}