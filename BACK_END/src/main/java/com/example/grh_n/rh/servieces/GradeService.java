package com.example.grh_n.rh.servieces;


import com.example.grh_n.rh.entities.REntities.RhRCatGrade;
import com.example.grh_n.rh.entities.REntities.RhRGrade;
import com.example.grh_n.rh.repos.RhRCatGradeRepository;
import com.example.grh_n.rh.repos.RhRGradeRepository;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@GraphQLApi
public class GradeService {

    private final RhRGradeRepository rhRGradeRepository;
    private final RhRCatGradeRepository rhRCatGradeRepository;

    public GradeService(RhRGradeRepository rhRGradeRepository, RhRCatGradeRepository rhRCatGradeRepository) {
        this.rhRGradeRepository = rhRGradeRepository;
        this.rhRCatGradeRepository = rhRCatGradeRepository;
    }

    @GraphQLQuery
    public Optional<RhRGrade> getGradeById(Long gradeId) {
        return rhRGradeRepository.findById(gradeId);
    }

    @GraphQLQuery
    public List<RhRGrade> getAllGrades() {
        return (List<RhRGrade>) rhRGradeRepository.findAll();
    }

    @GraphQLQuery
    public RhRCatGrade getCatGradById(Long id) {
        return rhRCatGradeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("catGrade with id " + id + " does not exist"));
    }

    @GraphQLQuery
    public List<RhRCatGrade> getAllCatGrades() {
        return (List<RhRCatGrade>) rhRCatGradeRepository.findAll();
    }

}
