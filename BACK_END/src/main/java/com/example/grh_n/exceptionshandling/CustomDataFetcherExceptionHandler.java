//package com.example.grh_n.exceptionshandling;
//
//import graphql.execution.DataFetcherExceptionHandler;
//import graphql.execution.DataFetcherExceptionHandlerParameters;
//import graphql.execution.DataFetcherExceptionHandlerResult;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.util.concurrent.CompletableFuture;
//
//public class CustomDataFetcherExceptionHandler implements DataFetcherExceptionHandler {
//    Logger logger = LoggerFactory.getLogger(this.getClass());
//
//    @Override
//    public DataFetcherExceptionHandlerResult onException(DataFetcherExceptionHandlerParameters handlerParameters) {
//        logger.info("ddddd");
//        return DataFetcherExceptionHandler.super.onException(handlerParameters);
//    }
//
//    @Override
//    public CompletableFuture<DataFetcherExceptionHandlerResult> handleException(DataFetcherExceptionHandlerParameters handlerParameters) {
//        logger.info("ddddd");
//        return DataFetcherExceptionHandler.super.handleException(handlerParameters);
//    }
//}
