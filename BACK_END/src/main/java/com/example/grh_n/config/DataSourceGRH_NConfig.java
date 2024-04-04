//package com.example.grh_n.config;
//
//import jakarta.persistence.EntityManagerFactory;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.sql.DataSource;
//
//@Configuration
//@EnableTransactionManagement
//public class DataSourceGRH_NConfig {
//
//    @Primary
//    @Bean(name = "dataSourcegrhn")
//    @ConfigurationProperties(prefix = "spring.datasourcegrhn")
//    public DataSource dataSource(){
//        return DataSourceBuilder.create()
//                .url(
//                        "jdbc:oracle:thin:@"
//                                + System.getenv("DB_HOST")
//                                + ":"
//                                + System.getenv("DB_PORT")
//                                + ":"
//                                + System.getenv("DB_SID"))
//                .username(System.getenv("DB_USERNAME"))
//                .password(System.getenv("DB_PASSWORD"))
//                .build();
//    }
//
//    @Primary
//    @Bean(name = "entityManagerFactory")
//    public LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean(
//        EntityManagerFactoryBuilder builder ,
//        @Qualifier("dataSourcegrhn") DataSource dataSourceDBDSN)
//    {
//                return builder.dataSource(dataSourceDBDSN)
//                        .packages("com.example.grh_n")
//                        .persistenceUnit("default")
//                        .build();
//    }
//
//    @Primary
//    @Bean(name = "transactionManagerGRH_N")
//    public PlatformTransactionManager transactionManager(
//            @Qualifier("entityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactory
//    ){
//        return new JpaTransactionManager((EntityManagerFactory) entityManagerFactory);
//    }
//
//}
