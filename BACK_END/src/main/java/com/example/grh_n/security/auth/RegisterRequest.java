package com.example.grh_n.security.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RegisterRequest {
   @NotBlank
   @Pattern.List({
//           @Pattern(regexp = "\\d{12}", message = "matricule doit contenir 12 chiffres"),
//           @Pattern(regexp = "(19[6-9]\\d|20[0-4]\\d)\\d{8}", message = "classe non valide"),
//           @Pattern(regexp = "\\d{4}(0[1-9]|[1-5]\\d)\\d{6}", message = "wilaya non valide"),
//           @Pattern(regexp = "\\d{6}([0-5])\\d{5}", message = "7 eme chiffre non valide"),
   })
   private String matricule;
   @NotBlank
   @Pattern.List({
           @Pattern(regexp = "(?=.*[a-z]).+", message = "01;Password must contain at least one lowercase letter"),
           @Pattern(regexp = "(?=.*[A-Z]).+", message = "02;Password must contain at least one uppercase letter"),
           @Pattern(regexp = "(?=.*\\d).+", message = "03;Password must contain at least one number"),
           @Pattern(regexp = "(?=.*[!@#$%^&*(),.?\":{}|<>]).+", message = "04;Password must contain at least one special character"),
           @Pattern(regexp = ".{8,}", message = "05;Password must be at least 8 characters long")
   })
   private String password;
}
