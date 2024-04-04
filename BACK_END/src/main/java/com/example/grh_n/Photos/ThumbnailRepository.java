package com.example.grh_n.Photos;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ThumbnailRepository extends CrudRepository<Thumbnail, Long> , QuerydslPredicateExecutor<Thumbnail> {

    Thumbnail findByPhotoAndThumbSize(Photo photo , int size) ;

    List<Thumbnail> findAllByThumbSizeIn(List<Integer> sizes);


}
