package com.veg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.veg.model.Buyer;

@Repository
public interface BuyerRepo extends JpaRepository<Buyer, Integer>{
@Query(value="select sum(cost) from Buyer")
public Long  total();



}
