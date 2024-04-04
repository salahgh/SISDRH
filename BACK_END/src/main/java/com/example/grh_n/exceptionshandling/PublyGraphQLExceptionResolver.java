//package com.example.grh_n.exceptionshandling;
//
//import graphql.ErrorClassification;
//import graphql.GraphQLError;
//import graphql.GraphqlErrorBuilder;
//import graphql.schema.DataFetchingEnvironment;
//import jakarta.persistence.EntityNotFoundException;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.core.NestedExceptionUtils;
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;
//import org.springframework.stereotype.Component;
//import org.springframework.validation.BindException;
//import org.springframework.validation.FieldError;
//
//import java.util.Map;
//
//@Component
//@Order(Ordered.HIGHEST_PRECEDENCE)
//public class PublyGraphQLExceptionResolver extends DataFetcherExceptionResolverAdapter {
//
//    private static final Logger log = LoggerFactory.getLogger(PublyGraphQLExceptionResolver.class);
//
//    @Override
//    protected GraphQLError resolveToSingleError(Throwable ex, DataFetchingEnvironment env) {
//        logger.info("resolve to single error");
//        Throwable t = NestedExceptionUtils.getMostSpecificCause(ex);
//        if (t instanceof EntityNotFoundException) {
//            return GraphqlErrorBuilder.newError(env)
//                    .errorType(ErrorClassification.errorClassification("myErrorClassification"))
//                    .message(t.getMessage())
//                    .build();
//        }
//
//        if (ex instanceof BindException bindException) {
//            FieldError fieldError = bindException.getFieldError();
//            if (fieldError != null && "nodeId".equals(fieldError.getObjectName())) {
//                var id = String.valueOf(fieldError.getRejectedValue());
//                return GraphqlErrorBuilder.newError(env)
//                        .message("Could not parse id " + id)
//                        .extensions(Map.of("id", id))
//                        .errorType(ErrorClassification.errorClassification("dfd"))
//                        .build();
//            }
//        }
//
//        return null;
//    }

//}

//}

