package com.codewitharjun.fullstackbackend.repository;
import java.util.Date;
import java.util.List;
import com.codewitharjun.fullstackbackend.model.Rental;
import com.codewitharjun.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental,Long> {

    List<Rental> findByUserId(Long userId);

    List<Rental> findByUser(User user);

    List<Rental> findByUserAndEndDateAfter(User user, Date currentDate);}
