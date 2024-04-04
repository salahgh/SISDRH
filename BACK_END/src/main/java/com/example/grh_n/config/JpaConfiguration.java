package com.example.grh_n.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;

@Configuration
public class JpaConfiguration {

   @Bean
   public DataSource dataSource() {

      return DataSourceBuilder.create()
              .url(
                      "jdbc:oracle:thin:@"
                              + System.getenv("DB_HOST")
                              + ":"
                              + System.getenv("DB_PORT")
                              + ":"
                              + System.getenv("DB_SID"))
              .username(System.getenv("DB_USERNAME"))
              .password(System.getenv("DB_PASSWORD"))
              .build();
//
//      return DataSourceBuilder.create()
//              .driverClassName("org.postgresql.Driver")
//              .url("jdbc:postgresql://localhost:5432/grhn_nest")
//              .username("postgres")
//              .password("majmajBS13..")
//              .build();
//
//      return DataSourceBuilder.create()
//              .url(
//                      "jdbc:oracle:thin:@192.213.71.244:1521:SIRHDSN"
//                              + System.getenv("DB_HOST")
//                              + ":"
//                              + System.getenv("DB_PORT")
//                              + ":"
//                              + System.getenv("DB_SID"))
//              .username(System.getenv("DB_USERNAME"))
//              .password(System.getenv("DB_PASSWORD"))
//              .build();
   }

//   @Bean
//   public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
//      LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();
//      emf.setDataSource(dataSource);
//      // Set other JPA configuration properties
//      // emf.setJpaProperties(jpaProperties);
//      return emf;
//   }
//
//   @Bean
//   public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
//      JpaTransactionManager transactionManager = new JpaTransactionManager();
//      transactionManager.setEntityManagerFactory(entityManagerFactory);
//      return transactionManager;
//   }
}
