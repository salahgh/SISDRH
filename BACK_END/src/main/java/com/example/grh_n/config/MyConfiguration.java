package com.example.grh_n.config;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.List;

@Configuration
public class MyConfiguration {

   @Bean
   @Order(Ordered.HIGHEST_PRECEDENCE)
   public CorsFilter corsFilter() {
      final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      final CorsConfiguration config = new CorsConfiguration();
      config.setAllowedOrigins(List.of("http://192.213.71.243:3090" ,"http://localhost:3000" , "http://localhost:5173"));
      config.setAllowCredentials(true);
      config.addAllowedHeader("*");
      config.addAllowedMethod("GET");
      config.addAllowedMethod("POST");
      config.addAllowedMethod("PUT");
      config.addAllowedMethod("OPTIONS");
      config.addAllowedMethod("PATCH");

      if (CollectionUtils.isNotEmpty(config.getAllowedOrigins())) {
         source.registerCorsConfiguration("/api/**", config);
         source.registerCorsConfiguration("/health", config);
         source.registerCorsConfiguration("/info", config);
         source.registerCorsConfiguration("/prometheus", config);
         source.registerCorsConfiguration("/swagger-ui/**", config);
         source.registerCorsConfiguration("/v3/api-docs/**", config);
         source.registerCorsConfiguration("/**", config);
         source.registerCorsConfiguration("/graphql", config);
         source.registerCorsConfiguration("/ws" , config);
      }
      return new CorsFilter(source);
   }
}
