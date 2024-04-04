package com.example.grh_n.notification;

import com.example.grh_n.BugTracker.entities.Issue;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@GraphQLApi
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final NotificationTypeRepository notificationTypeRepository;

    public NotificationService(
            NotificationRepository notificationRepository,
            SimpMessagingTemplate simpMessagingTemplate,
            UserService userService,
            NotificationTypeRepository notificationTypeRepository) {
        this.notificationRepository = notificationRepository;
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.userService = userService;
        this.notificationTypeRepository = notificationTypeRepository;
    }

    public void sendToUser(Notification notification, String userName) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String json = objectMapper.writeValueAsString(notification);
            simpMessagingTemplate.convertAndSendToUser(userName, "/notification/201143005895" + userName, json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

//    @Scheduled(fixedDelay = 3000)
//    public void send() {
////        ObjectMapper objectMapper = new ObjectMapper();
////        String usrName = SecurityContextHolder.getContext().getAuthentication().getName();
////        simpMessagingTemplate.convertAndSendToUser("201143005895", "/notification", "hi");
//        simpMessagingTemplate.send("/notification/201143005895", MessageBuilder.createMessage("hi".getBytes(), new MessageHeaders(null)));
//    }

    public void createNotification(
            String emitterUserName,
            Issue issue ,
            NotificationTypesEnum notificationTypesEnum
    ) {

        NotificationType notificationType = notificationTypeRepository.findById(NotificationTypesEnum.OWNED_ISSUE_COMMENTED.name())
                .orElseThrow(() -> new EntityNotFoundException("not found"));

        Notification notification = Notification
                .builder()
                .state(NotificationState.NEW)
                .notificationType(notificationType)
                .owner(userService.getUser(issue.getCreator().getUsername()))
                .dateTime(LocalDateTime.now())
                .emmitter(userService.getUser(emitterUserName))
                .issue(issue)
                .build();

        notificationRepository.save(notification);

        NotificationDto notificationDto = NotificationDto.builder()
                .id(notification.getId())
                .notificationType(notification.getNotificationType())
                .dateTime(notification.getDateTime())
                .state(notification.getState())
                .userName(notification.getOwner().getUsername())
                .emitter(notification.getEmmitter().getUsername())
                .issueId(issue.getId())
                .issueTitle(issue.getTitle())
                .build();

        String destination = "/notification/" + issue.getCreator().getUsername();
        logger.info(destination);
        simpMessagingTemplate.convertAndSend(destination, notificationDto);
    }

    @GraphQLQuery
    public Page<Notification> allNotifications(Pageable pageable, String userName) {
        String loggedInUser = SecurityContextHolder.getContext().getAuthentication().getName();
        // todo security check for the logged in user
        User user = userService.getUser(userName);
        return notificationRepository.findByOwner(user , pageable);
    }

    @GraphQLMutation
    public void changeNotificationState(NotificationState notificationState , Long notificationId){
        Notification notification = notificationRepository.findById(notificationId).orElseThrow(() -> new EntityNotFoundException("notification not found"));
        notification.setState(notificationState);
        notificationRepository.save(notification);
    }

}
