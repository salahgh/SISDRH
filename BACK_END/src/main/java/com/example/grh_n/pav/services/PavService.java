package com.example.grh_n.pav.services;

import com.example.grh_n.pav.entities.*;
import com.example.grh_n.pav.entities.dto.PavDto;
import com.example.grh_n.pav.repos.*;
import com.querydsl.core.types.dsl.BooleanExpression;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@GraphQLApi
public class PavService {


    private final PavRepository pavRepository;
    private final CritereDePonderationRepository critereDePonderationRepository;
    private final NoteDiplomeRepository noteDiplomeRepository;
    private final SanctionsRepository sanctionsRepository;
    private final RFelicitationRepository rFelicitationRepository;
    private final SanctionsPavRepository sanctionsPavRepository;
    private final FelicitationsPavRepository felicitationsPavRepository;


    private Optional<CritereDePonderation> getClassification(Pav pav) {
        return this.findCritereDePonderation(pav.getChef(), pav.getPersonnel().getGrade().getGrade(), pav.getPersonnel().getPamOff2024().getPoste());
    }

    public PavService(PavRepository pavRepository, CritereDePonderationRepository critereDePonderationRepository, NoteDiplomeRepository noteDiplomeRepository, SanctionsRepository sanctionsRepository, RFelicitationRepository rFelicitationRepository, SanctionsPavRepository sanctionsPavRepository, FelicitationsPavRepository felicitationsPavRepository) {
        this.pavRepository = pavRepository;
        this.critereDePonderationRepository = critereDePonderationRepository;
        this.noteDiplomeRepository = noteDiplomeRepository;
        this.sanctionsRepository = sanctionsRepository;
        this.rFelicitationRepository = rFelicitationRepository;
        this.sanctionsPavRepository = sanctionsPavRepository;
        this.felicitationsPavRepository = felicitationsPavRepository;
    }

    @GraphQLMutation
    public Integer evaluatePav(String pavId) {
        Pav pav = pavRepository.findById(pavId).orElseThrow(() -> new EntityNotFoundException("not found"));
        int fonctionOuPosteEquipeOuProjete = 0;
        Optional<CritereDePonderation> classificationDeLaFonction = getClassification(pav);
        if (classificationDeLaFonction.isEmpty()) return -1;
        Integer dureeExcercice = pav.getDureeExcercice() / pav.getAncienneteDansLeGrade() * 150;
        fonctionOuPosteEquipeOuProjete = classificationDeLaFonction.get().getNote() + dureeExcercice;
        Integer note = ((pav.getNoteRegionale() * 2 + pav.getNoteArme()) / 3) / pav.getAncienneteDansLeGrade() * 150;
        Integer noteDiplome = pav.getNoteDiplome().getNote();
        int noteFelicitations = 0;
        for (FelicitationsPav felicitation : pav.getFelicitations()) {
            noteFelicitations = (int) (noteFelicitations + felicitation.getFelicitation().getNote() * felicitation.getNombre());
        }
        // todo ajouter l'unite du sud
        Integer noteNombreDePropostion = getNoteNombreDePropostion(pav);
        Integer ancienneteDansLeService = (2024 - Integer.parseInt(pav.getPersonnel().getMatricule().substring(0, 4))) * 15 / 32;
        Integer noteGlobale = dureeExcercice + fonctionOuPosteEquipeOuProjete + note + noteDiplome + noteFelicitations + noteNombreDePropostion + ancienneteDansLeService;
        pav.setNoteGlobale(noteGlobale);
        pavRepository.save(pav);
        return noteGlobale;
    }

    private Integer getNoteNombreDePropostion(Pav pav) {
        if (pav.getNombreDeProposition() == 1) return 7;
        if (pav.getNombreDeProposition() == 2) return 13;
        if (pav.getNombreDeProposition() >= 3) return 25;
        return 0;
    }

    @GraphQLQuery
    public Page<Pav> findAllPav(Pageable pageable, Long idGrade) {
        QPav pav = QPav.pav;
        BooleanExpression expression = pav.personnel.grade.grade.eq(idGrade);
        return pavRepository.findAll(expression, pageable);
    }

    @GraphQLQuery
    public Pav findById(String id) {
        return pavRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("no photos found for user "));
    }

    @GraphQLQuery
    public Pav findByMatricule(String matricule) {
        return pavRepository.findByMatricule(matricule);
    }

    @GraphQLMutation
    public Pav savePav(PavDto pavDto) {

        Pav pav = pavRepository.findByMatricule(pavDto.getMatricule());

        pavDto.getSanctionsPavs().forEach((sanctionDto -> {

            RSanction rSanction = sanctionsRepository.findById(sanctionDto.getIdSanction()).orElseThrow(() -> new EntityNotFoundException("not found"));

            SanctionsPavId sanctionsPavId = SanctionsPavId.builder()
                    .sanctionsId(sanctionDto.getIdSanction())
                    .pavId(pav.getId()).build();

            SanctionsPav sanctionsPav = SanctionsPav.builder()
                    .id(sanctionsPavId)
                    .pav(pav)
                    .sanctions(rSanction)
                    .nombre(sanctionDto.getNombre())
                    .build();
            sanctionsPavRepository.save(sanctionsPav);
        }));

        pavDto.getFelicitationsPavs().forEach((felicitationDto -> {

            RFelicitation felicitation = rFelicitationRepository.findById(felicitationDto.getIdFelicitation()).orElseThrow(() -> new EntityNotFoundException("not found"));

            FelicitationsPavId felicitationsPavId = FelicitationsPavId.builder()
                    .felicitationsId(felicitationDto.getIdFelicitation())
                    .pavId(pav.getId()).build();

            FelicitationsPav felicitationsPav = FelicitationsPav.builder()
                    .id(felicitationsPavId)
                    .pav(pav)
                    .felicitation(felicitation)
                    .nombre(felicitationDto.getNombre())
                    .build();
            felicitationsPavRepository.save(felicitationsPav);
        }));

        NoteDiplome noteDiplome = noteDiplomeRepository.findById(pavDto.getIdNoteDiplome()).orElseThrow(() -> new EntityNotFoundException("not found"));
        CritereDePonderation critereDePonderation = critereDePonderationRepository.findById(pavDto.getIdPonderation()).orElseThrow(() -> new EntityNotFoundException("not found"));

        pav.setAnne(pavDto.getAnne());
        pav.setAncienneteDansLeGrade(pavDto.getAncienneteDansLeGrade());
        pav.setChef(pavDto.isChef());
        pav.setNoteArme(pavDto.getNoteArme());
        pav.setDureeExcercice(pavDto.getDureeExcercice());
        pav.setNoteDiplome(noteDiplome);
        pav.setNoteGlobale(pavDto.getNoteGlobale());
        pav.setNoteRegionale(pavDto.getNoteRegionale());
        pav.setNombreDeProposition(pavDto.getNombreDeProposition());
        pav.setPonderation(critereDePonderation);
        pav.setDureeExcerciceUnite(pavDto.getDureeExcerciceUnite());

        return pavRepository.save(pav);
    }

    @GraphQLQuery
    public Optional<CritereDePonderation> findCritereDePonderation(boolean chef, Long grade, String poste) {
        QCritereDePonderation critereDePonderation = QCritereDePonderation.critereDePonderation;
        BooleanExpression expression =
                critereDePonderation.chef.eq(chef).and(critereDePonderation.grade.grade.eq(grade).and(critereDePonderation.poste.idPoste.eq(poste)));
        return critereDePonderationRepository.findOne(expression);
    }

    @GraphQLQuery
    public Page<CritereDePonderation> findAllCritereDePonderation(Pageable pageable) {
        return critereDePonderationRepository.findAll(pageable);
    }

    @GraphQLQuery
    public Page<NoteDiplome> findAllNoteDiplome(Pageable pageable) {
        return noteDiplomeRepository.findAll(pageable);
    }

    @GraphQLQuery
    public Optional<NoteDiplome> findNoteDiplome(Long idGrade, Integer index_) {
        QNoteDiplome qNoteDiplome = QNoteDiplome.noteDiplome;
        BooleanExpression expression = qNoteDiplome.grade.grade.eq(idGrade).and(qNoteDiplome.index_.eq(index_));
        return noteDiplomeRepository.findOne(expression);
    }

    @GraphQLQuery
    public Page<RSanction> findAllRSanctions(Pageable pageable) {
        return sanctionsRepository.findAll(pageable);
    }

    ;

    @GraphQLQuery
    public Page<RFelicitation> findAllFelicitions(Pageable pageable) {
        return rFelicitationRepository.findAll(pageable);
    }

    @GraphQLMutation
    public boolean deleteNote(String pavId) {
        Pav pav = pavRepository.findById(pavId).orElseThrow(() -> new EntityNotFoundException("not found"));
        pav.setChef(null);
        pav.setNoteGlobale(null);
        pav.setAncienneteDansLeGrade(null);
        pav.setDureeExcercice(null);
        pav.setNoteArme(null);
        pav.setNoteRegionale(null);
        pav.setNoteDiplome(null);
        pav.setPonderation(null);
        pav.setDureeExcerciceUnite(null);
        pav.setNombreDeProposition(null);
        pavRepository.save(pav);
        felicitationsPavRepository.deleteByPav(pav);
        sanctionsPavRepository.deleteByPav(pav);
        return true ;
    }

    @GraphQLMutation
    public void updateCostumSort(String pavId , Integer costumSort){
        Pav pav = this.findById(pavId);
        pav.setCostumSort(costumSort);
        pavRepository.save(pav);
    }
}
