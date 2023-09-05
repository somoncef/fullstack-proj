package com.codewitharjun.fullstackbackend.exception;

public class InvalidRentalDatesException extends RuntimeException {
    public InvalidRentalDatesException(String message) {
        super(message);
    }
}

