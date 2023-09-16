package com.codewitharjun.fullstackbackend.exception;

public class RentalNotFoundException extends RuntimeException{
    public RentalNotFoundException(Long id){
        super("Could not found the rental with id "+ id);
    }
}

