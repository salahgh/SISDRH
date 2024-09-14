package com.example.grh_n.gec;

import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@GraphQLApi
public class CourrierService {

    private final CourrierRepository courrierRepository;
    private final CourrierAutoriteService autoriteService;
    private final TypeCourrierService typeCourrierService;
    private final CourrierAttachmentService attachmentService ;

    @GraphQLQuery
    Courrier findCourrierById(String id) {
        return courrierRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("courrier with id " + id + " does not exist"));
    }


    @GraphQLMutation
    public Courrier createCourrier(CourrierDto courrierDto) {

        CourrierAutorite courrierAutorite = autoriteService.findCourrierAutoriteById(courrierDto.courrierAutoriteId);
        TypeCourrier typeCourrier = typeCourrierService.findTypeCourrierById(courrierDto.typeCourrier);
        List<CourrierAutorite> courrierAutorites = courrierDto.destinataires.stream().map(autoriteService::findCourrierAutoriteById).toList();
        List<Courrier> references = courrierDto.references.stream().map(this::findCourrierById).toList();

        Courrier courrier = Courrier.builder()
                .reference(courrierDto.reference)
                .dateReference(courrierDto.dateReference)
                .referenceArrive(courrierDto.referenceArrive)
                .dateReferenceArrive(courrierDto.dateReferenceArrive)
                .autorite(courrierAutorite)
                .typeCourrier(typeCourrier)
                .destinataires(courrierAutorites)
                .references(references)
                .deadLine(courrierDto.deadLine)
                .answerRequired(courrierDto.answerRequired)
                .build();

        Courrier savedCourrier = courrierRepository.save(courrier);

        for (byte[] attachmentData : courrierDto.attachments) {
            attachmentService.createAttachment(attachmentData,savedCourrier);
        }

        return savedCourrier ;

    }

    @GraphQLMutation
    public void deleteCourrierById(String id){
        courrierRepository.deleteById(id);
    }

    @GraphQLMutation
    public Courrier addDestinataireToCourrier(Long destinataireId , String courrierId){
        CourrierAutorite courrierAutorite = autoriteService.findCourrierAutoriteById(destinataireId);
        // todo check if autorite existe deja dans les destinataires
        Courrier courrier = this.findCourrierById(courrierId);
        courrier.getDestinataires().add(courrierAutorite);
        return courrierRepository.save(courrier);
    }

    @GraphQLMutation
    public Courrier deleteDestinataireFromCourrier(Long destinataireId , String courrierId){
        CourrierAutorite courrierAutorite = autoriteService.findCourrierAutoriteById(destinataireId);
        // todo check if autorite existe deja dans les destinataires
        Courrier courrier = this.findCourrierById(courrierId);
        courrier.getDestinataires().remove(courrierAutorite);
        return courrierRepository.save(courrier);
    }

    @GraphQLMutation
    public Courrier addReferenceToCourrier(String referenceId , String courrierId){
        Courrier reference = this.findCourrierById(referenceId);
        // todo check if reference existe deja dans les destinataires
        Courrier courrier = this.findCourrierById(courrierId);
        courrier.getReferences().add(reference);
        return courrierRepository.save(courrier);
    }

    @GraphQLMutation
    public Courrier deleteReferenceFromCourrier(String referenceId , String courrierId){
        Courrier reference = this.findCourrierById(referenceId);
        // todo check if reference existe deja dans les destinataires
        Courrier courrier = this.findCourrierById(courrierId);
        courrier.getReferences().remove(reference);
        return courrierRepository.save(courrier);
    }

    @GraphQLMutation
    public CourrierAttachment addAttachmentToCourrier(byte[] data , String courrierId){
        Courrier courrier = this.findCourrierById(courrierId);
        return attachmentService.createAttachment(data,courrier);
    }


}
