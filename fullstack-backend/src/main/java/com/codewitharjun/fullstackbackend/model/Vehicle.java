package com.codewitharjun.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "\"Vehicle\"")
public class Vehicle {
    @Id
    @GeneratedValue
    private Long id;
    private String model;
    private Long year;
    private String type;
    private Integer capacity;
    private Float pricePerDay;
    private String gear;
    private String color;
    private String image;
    private Boolean rented = false;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getGear() {
        return gear;
    }

    public void setGear(String gear) {
        this.gear = gear;
    }

    public Boolean getRented() {
        return rented;
    }

    public void setRented(Boolean rented) {
        this.rented = rented;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Float getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(Float pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    private String brand;





}
