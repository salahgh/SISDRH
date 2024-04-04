package com.example.grh_n.BugTracker.entities.DTOs;

import com.example.grh_n.BugTracker.entities.Sevirity;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class IssueInputDto {
    private String title ;
    private String description ;
    private Long sevirityId ;

    private Long typeId ;
    private List<String> tagNames ;
    private Long ProjectId ;
    private List<AttachmentDto> attachmentDtos ;
}
