package com.example.grh_n.pav.repos;

import com.example.grh_n.pav.entities.FelicitationsPav;
import com.example.grh_n.pav.entities.FelicitationsPavId;
import com.example.grh_n.pav.entities.Pav;
import org.springframework.data.repository.CrudRepository;

public interface FelicitationsPavRepository extends CrudRepository<FelicitationsPav, FelicitationsPavId> {

    public void deleteByPav(Pav pav);

}