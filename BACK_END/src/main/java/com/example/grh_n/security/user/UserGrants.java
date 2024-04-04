package com.example.grh_n.security.user;

import lombok.Getter;

@Getter
public enum UserGrants {

    GRANT("GRANT"),
    REVOKE("REVOKE") ,
    NO("NO") ;

    private final String displayName;

    UserGrants(String displayName) {
        this.displayName = displayName;
    }

}
