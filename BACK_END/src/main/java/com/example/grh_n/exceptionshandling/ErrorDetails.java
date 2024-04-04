package com.example.grh_n.exceptionshandling;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class ErrorDetails {
   private String fieldName;
   private String message;
}
