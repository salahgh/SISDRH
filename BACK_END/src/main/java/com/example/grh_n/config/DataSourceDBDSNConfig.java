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
//public class DataSourceDBDSNConfig {
//
//    // todo use other tools for passwor prividing and protecting
//    @Primary
//    @Bean(name = "dataSourceDBDSN")
//    @ConfigurationProperties(prefix = "spring.datasourcedbdsn")
//    public DataSource dataSource(){
//        return DataSourceBuilder.create()
//                .url("jdbc:oracle:thin:@192.213.71.242:1521:DBDSN")
//                .username(System.getenv("GRHDSN"))
//                .password(System.getenv("FGkfjHjfBVxsUJ@2025"))
//                .build();
//    }
//
//    @Primary
//    @Bean(name = "entityManagerFactoryDBDSN")
//    public LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean(
//        EntityManagerFactoryBuilder builder ,
//        @Qualifier("dataSourceDBDSN") DataSource dataSourceDBDSN)
//    {
//                return builder.dataSource(dataSourceDBDSN)
//                        .packages("com.example.dbdsn")
//                        .persistenceUnit("persistenceUnitDBDSN")
//                        .build();
//    }
//
//    @Primary
//    @Bean(name = "transactionManagerDBSN")
//    public PlatformTransactionManager transactionManager(
//            @Qualifier("entityManagerFactoryDBDSN") LocalContainerEntityManagerFactoryBean entityManagerFactory
//    ){
//        return new JpaTransactionManager((EntityManagerFactory) entityManagerFactory);
//    }
//
//}
