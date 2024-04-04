package com.example.grh_n.notification;

import com.example.grh_n.BugTracker.entities.Issue;
import com.example.grh_n.security.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "Notification")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;
    private LocalDateTime dateTime ;
    @ManyToOne
    private NotificationType notificationType ;
    @ManyToOne
    private User owner ;

    @ManyToOne
    private User emmitter ;

    @ManyToOne
    private Issue issue ;

    private NotificationState state ;

}

