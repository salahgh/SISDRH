package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.entities.Attachment;
import com.example.grh_n.BugTracker.entities.DTOs.AttachmentDto;
import com.example.grh_n.BugTracker.entities.Issue;
import com.example.grh_n.BugTracker.repos.AttachmentRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Base64Utils;

import java.util.List;

@Service
@GraphQLApi
public class AttachmentService {
    @Autowired
    private AttachmentRepository attachmentRepository;

    @GraphQLQuery
    public AttachmentDto getAttachmentById(Long id) {
        Attachment attachment = attachmentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("not found"));

        return AttachmentDto.builder()
                .mimeType(attachment.getMimeType())
                .id(attachment.getId())
                .originalFileName(attachment.getOriginalFileName())
                .size(attachment.getSize_())
                .issueId(attachment.getIssue().getId())
                .base64FileData(
                        "data:" + attachment.getMimeType()
                                + ";base64," + Base64Utils.encodeToString(attachment.getFileData())
                )
                .build();
    }


    @GraphQLMutation
    public Attachment updateAttachment(Long id, Attachment updatedAttachment) {
        if (attachmentRepository.existsById(id)) {
            updatedAttachment.setId(id);
            return attachmentRepository.save(updatedAttachment);
        }
        return null; // Handle appropriate error response
    }

    @GraphQLMutation
    public void deleteAttachment(Long id) {
        attachmentRepository.deleteById(id);
    }
}
