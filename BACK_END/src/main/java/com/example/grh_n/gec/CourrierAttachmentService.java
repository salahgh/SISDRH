package com.example.grh_n.gec;


import com.example.grh_n.BugTracker.entities.Attachment;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@GraphQLApi
@Service
@AllArgsConstructor
public class CourrierAttachmentService {

    private final CourrierAttachmentRepository courrierAttachmentRepository;

    public CourrierAttachment createAttachment(byte[] data , Courrier courrier){
        return courrierAttachmentRepository.save(
                CourrierAttachment.builder()
                        .pdf(data)
                        .courrier(courrier)
                        .build()
        );
    }

    @GraphQLQuery
    public List<CourrierAttachment> findAllAttachmentsByCourrierId(String courrierId){
        return courrierAttachmentRepository.findAllByCourrierId(courrierId);
    }

    @GraphQLMutation
    public void deleteAttachmentById(String attachmentId){
        courrierAttachmentRepository.deleteById(attachmentId);
    }


}
