package com.example.grh_n.rh.servieces.ted;


import com.example.grh_n.rh.entities.REntities.ted.RhRTed;
import com.example.grh_n.rh.entities.REntities.ted.TedDto;
import com.example.grh_n.rh.repos.ted.RhRTedRepository;
import com.example.grh_n.rh.servieces.ArmeService;
import com.example.grh_n.rh.servieces.GradeService;
import com.example.grh_n.rh.servieces.HabilitationService;
import com.example.grh_n.rh.servieces.TypeStructureSnService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
@GraphQLApi
public class TedService {

    private final RhRTedRepository tedRepository;
    private final GradeService gradeService;
    private final AremementTedService aremementTedService;
    private final SpecialityTedService specialityTedService;
    private final ArmeService armeService;
    private final HabilitationService habilitationService;
    private final TypeStructureSnService typeStructureSnService;
    private final QualificationService qualificationService;

    public TedService(
            RhRTedRepository tedRepository,
            GradeService gradeService,
            AremementTedService aremementTedService,
            SpecialityTedService specialityTedService,
            ArmeService armeService,
            HabilitationService habilitationService,
            TypeStructureSnService typeStructureSnService,
            QualificationService qualificationService
    ) {
        this.tedRepository = tedRepository;
        this.gradeService = gradeService;
        this.aremementTedService = aremementTedService;
        this.specialityTedService = specialityTedService;
        this.armeService = armeService;
        this.habilitationService = habilitationService;
        this.typeStructureSnService = typeStructureSnService;
        this.qualificationService = qualificationService;
    }

    @GraphQLMutation
    public RhRTed createTed(TedDto tedDto) {

        RhRTed ted = RhRTed.builder()
                .catGrade(gradeService.getCatGradById(tedDto.getIdCatGrade()))
                .armementTed(aremementTedService.findById(tedDto.getIdArmementTed()))
                .specialiteTed(specialityTedService.findByhId(tedDto.getIdArmementTed()))
                .arme(armeService.armeById(tedDto.getIdArme()))
                .habilitation(habilitationService.findById(tedDto.getIdArmementTed()))
                .typeStructureSn(typeStructureSnService.findById(tedDto.getIdTypeStructureSn()))
                .qualification(qualificationService.findById(tedDto.getIdQualification()))
                .build();
        return tedRepository.save(ted);
    }

    @GraphQLQuery
    public RhRTed tedById(Long tedId) {
        return tedRepository.findById(tedId).orElseThrow(() -> new EntityNotFoundException("ted with id does not exist"));
    }

    @GraphQLMutation
    void deleteTed(Long id) {
        tedRepository.deleteById(id);
    }

}
