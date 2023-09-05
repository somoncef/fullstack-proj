package com.emsiprojmoncefandyousra.fullstackbackend.repository;

import com.emsiprojmoncefandyousra.fullstackbackend.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehiculeRepository extends JpaRepository<Vehicle,Long> {


    List<Vehicle> findByRentedFalse();
}
