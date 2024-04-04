package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.entities.Tag;
import com.example.grh_n.BugTracker.repos.TagRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@GraphQLApi
public class TagService {
    @Autowired
    private TagRepository tagRepository;

    @GraphQLQuery
    public List<Tag> getAllTags(){
        return (List<Tag>) tagRepository.findAll();
    }

    @GraphQLQuery
    public Tag getTag(Long tagId){
        return tagRepository.findById(tagId).orElseThrow(() -> new EntityNotFoundException(""));
    }

}
