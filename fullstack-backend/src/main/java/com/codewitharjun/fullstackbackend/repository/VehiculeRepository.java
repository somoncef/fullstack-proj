package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehiculeRepository extends JpaRepository<Vehicle,Long> {


    List<Vehicle> findByRentedFalse();
}
