package com.example.grh_n.config;

import org.javers.spring.auditable.AuthorProvider;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SimpleAuthorProvider implements AuthorProvider {

   @Override
   public String provide() {
      return "salah";
   }

//   @Bean
//   public AuthorProvider provideJaversAuthor() {
//      return new SimpleAuthorProvider();
//   }

}

