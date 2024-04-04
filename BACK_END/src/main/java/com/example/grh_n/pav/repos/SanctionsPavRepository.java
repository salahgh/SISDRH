package com.example.grh_n.pav.repos;

import com.example.grh_n.pav.entities.Pav;
import com.example.grh_n.pav.entities.SanctionsPav;
import com.example.grh_n.pav.entities.SanctionsPavId;
import org.springframework.data.repository.CrudRepository;

public interface SanctionsPavRepository extends CrudRepository<SanctionsPav, SanctionsPavId> {

    public void deleteByPav(Pav pav);

}