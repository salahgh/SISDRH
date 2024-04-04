//package com.example.grh_n.exceptionshandling;
//
//import graphql.execution.DataFetcherExceptionHandler;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.boot.autoconfigure.graphql.GraphQlSourceBuilderCustomizer;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration(proxyBeanMethods = false)
//class GraphQlConfig {
//    Logger logger = LoggerFactory.getLogger(this.getClass());
//
//    private final DataFetcherExceptionHandler dataFetcherExceptionHandler;
//
//    GraphQlConfig(DataFetcherExceptionHandler dataFetcherExceptionHandler) {
//        this.dataFetcherExceptionHandler = dataFetcherExceptionHandler;
//    }
//
//    @Bean
//    public GraphQlSourceBuilderCustomizer sourceBuilderCustomizer() {
//        logger.info("bean source builder customize is called ...");
//        return (builder) ->
//                builder.configureGraphQl(graphQlBuilder ->
//                        graphQlBuilder.defaultDataFetcherExceptionHandler(dataFetcherExceptionHandler).build()).build();
//    }
//
//    @Bean
//    public DataFetcherExceptionHandler exceptionHandler(){
//        logger.info("data fetcher exception handler exeption is being created");
//        return new CustomDataFetcherExceptionHandler();
//    }
//}
//
