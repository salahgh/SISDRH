package com.example.grh_n.notification;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "NotificationType")
public class NotificationType {

    @Id
    private String id ;
    private String libAr ;
    private String libFr ;

}
