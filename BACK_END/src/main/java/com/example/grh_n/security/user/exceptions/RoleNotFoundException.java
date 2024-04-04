package com.example.grh_n.security.user.exceptions;

public class RoleNotFoundException extends RuntimeException {
    public RoleNotFoundException(String id) {
        super("Role not found with id : " + id);
    }
}
