package com.veg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.veg.model.Vegetable;
@Repository
public interface VegetableInterface extends JpaRepository<Vegetable, Integer> {

}
