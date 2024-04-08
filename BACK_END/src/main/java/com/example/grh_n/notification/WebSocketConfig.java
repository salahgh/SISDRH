package com.example.grh_n.notification;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.nio.file.AccessDeniedException;

@Configuration
@EnableWebSocket
@EnableWebSocketMessageBroker
@CrossOrigin
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    @CrossOrigin
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Configure the message broker
        config.enableSimpleBroker("/notification"); // Use "/topic" to broadcast messages to all subscribers
        config.setApplicationDestinationPrefixes("/app"); // Use "/app" as the application destination prefix
    }

    @Override
    @CrossOrigin
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Register the WebSocket endpoint for clients to connect to
        registry.addEndpoint("/ws")
                .setAllowedOrigins("*");


        // Enable SockJS for fallback options
    }

    @MessageMapping("/private/{recipient}")
    @CrossOrigin
    public void subscribeToPrivateMessages(@DestinationVariable String recipient) throws AccessDeniedException {
        String authenticatedUser = getAuthenticatedUser();
        if (authenticatedUser.equals(recipient)) {
        } else {
            throw new AccessDeniedException("You are not authorized to access this private destination.");
        }
    }

    private String getAuthenticatedUser() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
