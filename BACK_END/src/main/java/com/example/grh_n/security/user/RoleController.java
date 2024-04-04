package com.example.grh_n.security.user;

import com.example.grh_n.security.user.DTOs.RoleDto;
import com.example.grh_n.security.user.exceptions.RoleAlreadyExistsException;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@CrossOrigin
@RequestMapping("/roles")
@Tag(name = "Roles", description = "API operations related to roles")
public class RoleController {

   private final RoleService roleService;
   private final ModelMapper modelMapper = new ModelMapper();
   private final Logger logger = LoggerFactory.getLogger(RoleController.class);

   public RoleController(RoleService roleService) {
      this.roleService = roleService;
   }

}
