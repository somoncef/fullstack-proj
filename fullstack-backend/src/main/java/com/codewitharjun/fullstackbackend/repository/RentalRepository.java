package com.codewitharjun.fullstackbackend.repository;
import java.util.List;
import com.codewitharjun.fullstackbackend.model.Rental;
 import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental,Long> {

    List<Rental> findByUserId(Long userId);

}
