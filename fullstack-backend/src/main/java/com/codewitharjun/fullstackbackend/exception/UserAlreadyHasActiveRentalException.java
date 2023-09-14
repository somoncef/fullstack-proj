package com.codewitharjun.fullstackbackend.exception;

public class UserAlreadyHasActiveRentalException extends RuntimeException {

    private final Long userId;

    public UserAlreadyHasActiveRentalException(Long userId) {
        super("u already rented a car check ur profile");
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }
}