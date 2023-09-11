package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.model.LoginRequest;
import com.codewitharjun.fullstackbackend.model.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.codewitharjun.fullstackbackend.security.JwtTokenProvider;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);


        String token = jwtTokenProvider.generateToken(String.valueOf(authentication));


        LoginResponse response = new LoginResponse();
        response.setToken(token);
        response.setUsername(loginRequest.getUsername());

        return ResponseEntity.ok(response);
    }
}
