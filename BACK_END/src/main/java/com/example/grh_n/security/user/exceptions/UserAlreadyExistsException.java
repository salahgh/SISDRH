package com.example.grh_n.security.user.exceptions;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException(String matricule) {
        super("User already exists with matricule : " + matricule);
    }
}
