package com.codewitharjun.fullstackbackend.controller;
import com.codewitharjun.fullstackbackend.exception.*;
import com.codewitharjun.fullstackbackend.model.Rental;
import com.codewitharjun.fullstackbackend.model.User;
import com.codewitharjun.fullstackbackend.model.Vehicle;
import com.codewitharjun.fullstackbackend.repository.RentalRepository;
import com.codewitharjun.fullstackbackend.repository.UserRepository;
import com.codewitharjun.fullstackbackend.repository.VehiculeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class RentalController {
    @Autowired
    private RentalRepository Rentalrepository;
    @Autowired
    private VehiculeRepository vehicleRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/Rental")
    Rental newRental(@RequestBody Rental newRental) {
        Date currentDate = new Date();
        if (newRental.getStartDate().before(currentDate) || newRental.getEndDate().before(newRental.getStartDate())) {
            throw new InvalidRentalDatesException("Rental dates should be in the future");
        }

        User user = newRental.getUser();

        List<Rental> activeRentals = Rentalrepository.findByUserAndEndDateAfter(user, currentDate);
        if (!activeRentals.isEmpty()) {
            throw new UserAlreadyHasActiveRentalException(user.getId());
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

    @GetMapping("/RentalsByUsername/{username}")
    List<Rental> getRentalsByUsername(@PathVariable String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

         return Rentalrepository.findByUser(user);
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
    String deleteRental(@PathVariable Long id) {
        Rental rental = Rentalrepository.findById(id)
                .orElseThrow(() -> new RentalNotFoundException(id));

        Vehicle vehicle = rental.getVehicle();
        if (vehicle != null) {
            vehicle.setRented(false);
            vehicleRepository.save(vehicle);
        }

        Rentalrepository.deleteById(id);

        return "Vehicle with id " + id + " has been deleted successfully.";
    }
}
