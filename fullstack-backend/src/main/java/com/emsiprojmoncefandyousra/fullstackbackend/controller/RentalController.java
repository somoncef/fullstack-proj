package com.emsiprojmoncefandyousra.fullstackbackend.controller;
import com.emsiprojmoncefandyousra.fullstackbackend.exception.InvalidRentalDatesException;
import com.emsiprojmoncefandyousra.fullstackbackend.exception.VehicleAlreadyRentedException;
import com.emsiprojmoncefandyousra.fullstackbackend.exception.VehicleNotFoundException;
import com.emsiprojmoncefandyousra.fullstackbackend.model.Rental;
import com.emsiprojmoncefandyousra.fullstackbackend.model.Vehicle;
import com.emsiprojmoncefandyousra.fullstackbackend.repository.RentalRepository;
import com.emsiprojmoncefandyousra.fullstackbackend.repository.VehiculeRepository;

import com.emsiprojmoncefandyousra.fullstackbackend.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class RentalController {
    @Autowired
    private RentalRepository Rentalrepository;
    @Autowired
    private VehiculeRepository vehicleRepository;

    @PostMapping("/Rental")
    Rental newRental(@RequestBody Rental newRental) {
        Date currentDate = new Date();
        if (newRental.getStartDate().before(currentDate) || newRental.getEndDate().before(currentDate)) {
            throw new InvalidRentalDatesException("Rental dates should be in the future");
        }
        Long vehicleId = newRental.getVehicle().getId();
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new VehicleNotFoundException(vehicleId));

        if (vehicle.getRented()) {
            throw new VehicleAlreadyRentedException(vehicleId);
        }

        vehicle.setRented(true);
        vehicleRepository.save(vehicle);

        newRental.calculateTotalCost();
        return Rentalrepository.save(newRental);
    }

    @GetMapping("/Rentals")
    List<Rental> getAllRentals() {
        return Rentalrepository.findAll();
    }

    @GetMapping("/RentalsByUser/{userId}")
    List<Rental> getRentalsByUser(@PathVariable Long userId) {
        return Rentalrepository.findByUserId(userId);
    }

    @DeleteMapping("/Rental/{id}")
    String deleteRental(@PathVariable Long id){
        if(!Rentalrepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        Rentalrepository.deleteById(id);
        return  "Vehicule with id "+id+" has been deleted success.";
    }
}
