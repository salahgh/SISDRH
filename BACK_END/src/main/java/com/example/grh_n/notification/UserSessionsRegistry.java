package com.example.grh_n.notification;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashMap;
import java.util.Map;

@Component
public class UserSessionsRegistry {
    private final Map<String, WebSocketSession> userSessions = new HashMap<>();

    public void addUserSession(String username, WebSocketSession session) {
        userSessions.put(username, session);
    }

    public WebSocketSession getUserSession(String username) {
        return userSessions.get(username);
    }

    public void removeUserSession(String username) {
        userSessions.remove(username);
    }
}
