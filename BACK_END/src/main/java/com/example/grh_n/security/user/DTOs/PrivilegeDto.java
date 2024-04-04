package com.example.grh_n.security.user.DTOs;

import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PrivilegeDto implements Serializable {
    private Long id;
    private String name;
    private String description ;
}
