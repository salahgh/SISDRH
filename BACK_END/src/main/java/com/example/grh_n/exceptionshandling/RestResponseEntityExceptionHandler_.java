package com.example.grh_n.exceptionshandling;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolationException;
import org.hibernate.id.IdentifierGenerationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RestResponseEntityExceptionHandler_ {

   String mainPackage = "com.example.grh_n";
Logger logger = LoggerFactory.getLogger(this.getClass()) ;

   @ExceptionHandler({
           EntityNotFoundException.class,
           EntityExistsException.class
   })
   @ApiResponse(content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleExceptions(Exception ex, HttpServletRequest request) {
      if (ex instanceof EntityNotFoundException) {
         List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
         return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.NOT_FOUND);
      } else if (ex instanceof EntityExistsException) {
         List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
         return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.CONFLICT);
      } else return ResponseEntity.notFound().build();
   }

   @ExceptionHandler(DataIntegrityViolationException.class)
   @ApiResponse(description = "Entity not found", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleDataIntegrityViolationException(DataIntegrityViolationException ex, HttpServletRequest request) {
      List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.CONFLICT);
   }

   @ExceptionHandler(ConstraintViolationException.class)
   @ApiResponse(description = "ConstraintViolationException", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleConstraintViolationException(ConstraintViolationException ex, HttpServletRequest request) {
      List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.CONFLICT);
   }


   @ExceptionHandler(IllegalArgumentException.class)
   @ApiResponse(description = "IllegalArgumentException", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException ex, HttpServletRequest request) {
      List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.BAD_REQUEST);
   }

   @ExceptionHandler(HttpMessageNotReadableException.class)
   @ApiResponse(description = "IllegalArgumentException", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleIllegalArgumentException(HttpMessageNotReadableException ex, HttpServletRequest request) {
      List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.BAD_REQUEST);
   }


   @ExceptionHandler(BadCredentialsException.class)
   @ApiResponse(description = "Entity not found", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleBadCredentialsException(BadCredentialsException ex, HttpServletRequest request) {
      logger.info("handleBadCredentialsException : " + ex.getMessage());
      List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.FORBIDDEN);
   }

   @ExceptionHandler(IdentifierGenerationException.class)
   @ApiResponse(description = "IdentifierGenerationException", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleIdentifierGenerationException(IdentifierGenerationException ex, HttpServletRequest request) {
      List<StackTraceElement> inCodeStackTrace = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      return getErrorResponseResponseEntity(request, inCodeStackTrace, ex.getMessage(), ex.getClass().getName(), HttpStatus.BAD_REQUEST);
   }

   @ExceptionHandler(BindException.class)
   @ApiResponse(description = "Entity not found", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleBindException(BindException ex, HttpServletRequest request) {
      String endpoint = request.getRequestURI();
      List<ErrorDetails> errorDetailsList = new ArrayList<>();
      ex.getBindingResult().getFieldErrors().forEach(error -> {
         String fieldName = error.getField();
         String errorMessage = error.getDefaultMessage();
         errorDetailsList.add(new ErrorDetails(fieldName, errorMessage));
      });
      List<StackTraceElement> stackTraceList = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      String methodName = "";
      if (stackTraceList.size() > 0) {
         methodName = stackTraceList.get(0).getMethodName();
      }
      List<StackTraceElementDto> stackTraceElementDtos = stackTraceList.stream().map(StackTraceElementDto::new).toList();
      ErrorResponse errorResponse = new ErrorResponse(endpoint, methodName, stackTraceElementDtos, errorDetailsList, ex.getClass().getName(), LocalDateTime.now());
      return ResponseEntity.badRequest().body(errorResponse);
   }

   @ExceptionHandler(MethodArgumentNotValidException.class)
   @ApiResponse(description = "Entity not found", content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
   public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex, HttpServletRequest request) {
      String endpoint = request.getRequestURI();
      String functionName = ex.getParameter().getMethod().getName();
      List<ErrorDetails> errorDetailsList = new ArrayList<>();
      ex.getBindingResult().getFieldErrors().forEach(error -> {
         String fieldName = error.getField();
         String errorMessage = error.getDefaultMessage();
         errorDetailsList.add(new ErrorDetails(fieldName, errorMessage));
      });
      List<StackTraceElement> stackTraceList = getInCodeStackTrace(List.of(ex.getStackTrace()), mainPackage);
      List<StackTraceElementDto> stackTraceElementDtos = stackTraceList.stream().map(StackTraceElementDto::new).toList();
      ErrorResponse errorResponse = new ErrorResponse(endpoint, functionName, stackTraceElementDtos, errorDetailsList, ex.getClass().getName(), LocalDateTime.now());
      return ResponseEntity.badRequest().body(errorResponse);
   }

   private List<StackTraceElement> getInCodeStackTrace(List<StackTraceElement> stackTraceElements, String packageName) {
      List<StackTraceElement> methods = new ArrayList<>();
      for (StackTraceElement element : stackTraceElements) {
         String className = element.getClassName();
         if (className.startsWith(packageName)) {
            methods.add(element);
         }
      }
      return methods;
   }

   private ResponseEntity<ErrorResponse> getErrorResponseResponseEntity(
           HttpServletRequest request,
           List<StackTraceElement> inCodeStakTrace,
           String message,
           String exceptionName,
           HttpStatus httpStatus) {
      String endpoint = request.getRequestURI();
      String methodName = "";
      if (inCodeStakTrace.size() > 0) {
         methodName = inCodeStakTrace.get(0).getMethodName();
      }

      List<StackTraceElementDto> stackTraceElementDtos = inCodeStakTrace.stream().map(StackTraceElementDto::new).toList();

      ErrorResponse errorResponse = new ErrorResponse(
              endpoint,
              methodName,
              stackTraceElementDtos,
              List.of(ErrorDetails.builder().message(message).fieldName("error").build()),
              exceptionName,
              LocalDateTime.now());
      return ResponseEntity.status(httpStatus).body(errorResponse);
   }
}




