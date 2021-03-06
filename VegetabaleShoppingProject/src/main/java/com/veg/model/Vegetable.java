package com.veg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vegetable")
public class Vegetable {
	@Id
	@Column(name="id")
    private	int id;
	private	String name;
	private	int quantity;
	private double price;
	public Vegetable() {
		// TODO Auto-generated constructor stub
	}
	public Vegetable(int id, String name, int quantity, double price) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
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
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Vegetable [id=" + id + ", name=" + name + ", quantity=" + quantity + ", price=" + price + "]";
	}
	
}