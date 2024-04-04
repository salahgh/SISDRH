package com.example.grh_n.notification;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

public class MyWebSocketHandler extends TextWebSocketHandler {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final UserSessionsRegistry userRegistry ;

    public MyWebSocketHandler(UserSessionsRegistry userRegistry) {
        this.userRegistry = userRegistry;
        logger.info("contructor for MyWebSocketHandler");
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // Handle a new WebSocket connection
        logger.info("afterConnectionEstablished");
        logger.info(session.toString());
        String userName = SecurityContextHolder.getContext().getAuthentication().getName() ;
        userRegistry.addUserSession(userName , session);
    }

    public void sendToAClient(String message , String userName) throws IOException {
        WebSocketSession session = userRegistry.getUserSession(userName);
        session.sendMessage(new TextMessage(message.getBytes()));
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        // Handle incoming messages
        logger.info("handling a message");
        logger.info("Received message: " + message.getPayload());
        // Echo the message back to the client
        session.sendMessage(message);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        logger.info(exception.toString());
    }


    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        // Handle WebSocket connection closing
        logger.info("afterConnectionClosed");
        logger.info("WebSocket connection closed: " + session.getId());
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        userRegistry.removeUserSession(userName);
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }
}
