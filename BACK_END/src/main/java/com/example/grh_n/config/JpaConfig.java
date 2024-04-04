package com.example.grh_n.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.core.context.SecurityContextHolder;

@Configuration
@EnableJpaAuditing
@PropertySources({
//        @PropertySource("classpath:additional-config.properties"),
        @PropertySource("classpath:additional-config.properties"),
})
public class JpaConfig {

   @Bean
   public AuditorAware<String> auditorAware() {
      return () -> java.util.Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication().getName());
   }


//
//   @Bean
//   public MethodValidationPostProcessor methodValidationPostProcessor() {
//      return new MethodValidationPostProcessor();
//   }

}

