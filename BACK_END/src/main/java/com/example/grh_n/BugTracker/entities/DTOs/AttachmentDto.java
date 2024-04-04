
package com.example.grh_n.BugTracker.entities.DTOs;

import com.example.grh_n.BugTracker.entities.Issue;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class AttachmentDto {
    private Long id;
    private String originalFileName;
    private String mimeType;
    private String base64FileData;
    private Long issueId;
    private Long size;
}
