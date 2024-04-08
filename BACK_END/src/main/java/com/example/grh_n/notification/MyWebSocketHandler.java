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

    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // Handle a new WebSocket connection

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
        // Echo the message back to the client
        session.sendMessage(message);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {

    }


    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        // Handle WebSocket connection closing
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        userRegistry.removeUserSession(userName);
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }
}
