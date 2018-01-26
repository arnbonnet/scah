package fr.dta.scah.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ScahExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler(NotUniqueCreationException.class)
    public ResponseEntity<Object> handleNotUniqueCreation(NotUniqueCreationException ex, WebRequest request) {
        HttpHeaders headers = new HttpHeaders();
        return handleExceptionInternal(ex, ex.getBindingResult().getAllErrors(), headers, HttpStatus.PRECONDITION_FAILED, request);
    }
    
    @ExceptionHandler(PreconditionalException.class)
    public ResponseEntity<Object> handlePreconditionalCreation(PreconditionalException ex, WebRequest request) {
        HttpHeaders headers = new HttpHeaders();
        return handleExceptionInternal(ex, ex.getBindingResult().getAllErrors(), headers, HttpStatus.PRECONDITION_FAILED, request);
    }
    
}

