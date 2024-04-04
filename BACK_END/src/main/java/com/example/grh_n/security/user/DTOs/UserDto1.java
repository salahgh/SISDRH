package com.example.grh_n.security.user.DTOs;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnelDto;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class UserDto1 implements Serializable {
   private  String id;
   private DPersonnelDto personnel;
}
