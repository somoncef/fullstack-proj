package com.emsiprojmoncefandyousra.fullstackbackend.controller;

import com.emsiprojmoncefandyousra.fullstackbackend.exception.UserNotFoundException;
import com.emsiprojmoncefandyousra.fullstackbackend.model.Vehicle;
import com.emsiprojmoncefandyousra.fullstackbackend.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class VehiculeController {

    @Autowired
    private VehiculeRepository Vehiculerepository;

    @PostMapping("/Vehicle")
    Vehicle newVehicle(@RequestBody Vehicle newVehicle) {
        return Vehiculerepository.save(newVehicle);
    }

    @GetMapping("/Vehicles")
    List<Vehicle> getAllVehicles() {
        return Vehiculerepository.findAll();
    }

    @GetMapping("/VehiclesNotRented")
    List<Vehicle> getAllNotRentedVehicles() {
        return Vehiculerepository.findByRentedFalse();
    }


    @GetMapping("/Vehicle/{id}")
    Vehicle getVehicleById(@PathVariable Long id) {
        return Vehiculerepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/Vehicle/{id}")
    Vehicle updateVehicle(@RequestBody Vehicle newVehicle, @PathVariable Long id) {
        return Vehiculerepository.findById(id)
                .map(Vehicle -> {
                    Vehicle.setModel(newVehicle.getModel());
                    Vehicle.setYear(newVehicle.getYear());
                    Vehicle.setType(newVehicle.getType());
                    Vehicle.setCapacity(newVehicle.getCapacity());
                    Vehicle.setPricePerDay(newVehicle.getPricePerDay());
                    Vehicle.setImage(newVehicle.getImage());
                    Vehicle.setGear(newVehicle.getGear());
                    Vehicle.setRented(newVehicle.getRented());
                    Vehicle.setColor(newVehicle.getColor());
                    return Vehiculerepository.save(Vehicle);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/Vehicle/{id}")
    String deleteVehicle(@PathVariable Long id){
        if(!Vehiculerepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        Vehiculerepository.deleteById(id);
        return  "Vehicule with id "+id+" has been deleted success.";
    }

}
