//package com.example.grh_n.exceptionshandling;
//

//import com.example.grh_n.tess4j.HOCRToJSON;

//import com.example.grh_n.tess4j.ElasticSearch.HOCRToJSON;

//import graphql.GraphQLError;
//import graphql.GraphqlErrorBuilder;
//import graphql.schema.DataFetchingEnvironment;
//import jakarta.persistence.EntityNotFoundException;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;
//import org.springframework.graphql.execution.ErrorType;
//import org.springframework.stereotype.Component;
//
//@Component
//public class CustomExceptionResolver extends DataFetcherExceptionResolverAdapter {
//
//    static Logger logger = LoggerFactory.getLogger(HOCRToJSON.class);
//
//    @Override
//    protected GraphQLError resolveToSingleError(Throwable ex, DataFetchingEnvironment env) {
//        logger.info("resolve to single error ...");
//        logger.info(ex.getMessage());
//        if (ex instanceof EntityNotFoundException) {
//            return GraphqlErrorBuilder.newError()
//                    .errorType(ErrorType.NOT_FOUND)
//                    .message(ex.getMessage())
//                    .path(env.getExecutionStepInfo().getPath())
//                    .location(env.getField().getSourceLocation())
//                    .build();
//        } else {
//            return null;
//        }
//    }

//}

//}

