package com.example.grh_n.Photos;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotoRepository extends CrudRepository<Photo, Long> {

    List<Photo> findByThumbnailsEmpty() ;

    List<Photo> findByPersonnelOrderByDateTakenDesc(DPersonnel personnel) ;

    boolean existsByPersonnel(DPersonnel personnel) ;

}

