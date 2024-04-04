package com.example.grh_n.security.user.exceptions;

public class PrivilegeNotFoundException extends RuntimeException {
    public PrivilegeNotFoundException(Long id) {
        super("Privilege not found with id : " + id);
    }
}
