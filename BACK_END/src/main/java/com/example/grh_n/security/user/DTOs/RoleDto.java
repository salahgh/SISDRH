package com.example.grh_n.security.user.DTOs;
import lombok.*;

import java.io.Serializable;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class RoleDto implements Serializable {

   private Long id;

   private String name;

   private String description;

}
