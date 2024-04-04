package com.example.grh_n.security.user.DTOs;

import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnelDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDto implements Serializable {
    private  String id;
    private  String locked;
    private  List<RoleDto> roles;
    private  List<PrivilegeDto> privileges;
    private  List<PrivilegeDto> privileges_restriction;
    private  DPersonnelDto personnel;
}
