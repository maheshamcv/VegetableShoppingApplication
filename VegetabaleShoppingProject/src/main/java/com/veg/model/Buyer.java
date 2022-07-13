package com.veg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="buyer")
public class Buyer {
	@Id
	@Column(name="id")
    private	int id;
	private	String name;
	private	int quantity;
	private double cost;
	public Buyer() {
		// TODO Auto-generated constructor stub
	}
	public Buyer(int id, String name, int quantity, double cost) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.cost = cost;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	@Override
	public String toString() {
		return "Buyer [id=" + id + ", name=" + name + ", quantity=" + quantity + ", cost=" + cost + "]";
	}
	
	
	
}
