package com.codewitharjun.fullstackbackend.exception;

public class UsernameNotFoundException extends RuntimeException {
    public UsernameNotFoundException(String username) {
        super("Could not find user with username: " + username);
    }
}