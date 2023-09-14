package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Rental;
import com.codewitharjun.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByUsername(String username);

}
