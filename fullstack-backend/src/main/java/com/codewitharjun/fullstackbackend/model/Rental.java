package com.codewitharjun.fullstackbackend.model;
import javax.persistence.*;
import java.util.Date;
import java.util.concurrent.TimeUnit;



@Entity
@Table(name = "\"Rental\"")
public class Rental {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;
    private Date startDate;
    private Date endDate;
    private Double totalCost;
    private Boolean status;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public void calculateTotalCost() {
        if (startDate == null || endDate == null || vehicle == null || vehicle.getPricePerDay() == null) {
            return;
        }

        long diffInMilliseconds = endDate.getTime() - startDate.getTime();
        long diffInDays = TimeUnit.MILLISECONDS.toDays(diffInMilliseconds);
            setTotalCost((double) (vehicle.getPricePerDay() * diffInDays));
    }
}
