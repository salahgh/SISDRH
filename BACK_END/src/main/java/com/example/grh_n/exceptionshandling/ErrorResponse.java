package com.example.grh_n.exceptionshandling;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class ErrorResponse {
   private String endpoint;
   private String functionName;
   private List<StackTraceElementDto> inCodeStackTrace ;
   private List<ErrorDetails> errors;
   private String exception ;
   private LocalDateTime localDateTime;
}
