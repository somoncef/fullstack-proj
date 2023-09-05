package com.codewitharjun.fullstackbackend.exception;

public class VehicleAlreadyRentedException extends RuntimeException {
    public VehicleAlreadyRentedException(Long vehicleId) {
        super("Vehicle with ID " + vehicleId + " is already rented");
    }
}