package com.example.grh_n.notification;


import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class NotificationDto {

    private Long id ;
    private LocalDateTime dateTime ;
    private NotificationType notificationType ;
    String userName ;
    String emitter ;
    private NotificationState state ;
    private String issueTitle ;
    private Long issueId ;
}
