package com.codewitharjun.fullstackbackend.exception;

import com.codewitharjun.fullstackbackend.exception.*;
import com.codewitharjun.fullstackbackend.model.CustomErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({
            InvalidRentalDatesException.class,
            UserAlreadyHasActiveRentalException.class,
            VehicleNotFoundException.class,
            VehicleAlreadyRentedException.class,
            UsernameNotFoundException.class,
            UserNotFoundException.class
    })
    public ResponseEntity<Object> handleCustomExceptions(Exception ex) {
        String errorMessage = ex.getMessage();
        CustomErrorResponse errorResponse = new CustomErrorResponse(errorMessage);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
