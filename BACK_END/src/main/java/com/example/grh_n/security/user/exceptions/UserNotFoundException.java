package com.example.grh_n.security.user.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String matricule) {
        super("User not found with matricule : " + matricule);
    }
}






