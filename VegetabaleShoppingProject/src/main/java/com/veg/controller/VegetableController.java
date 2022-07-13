package com.veg.controller;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.veg.model.Buyer;

import com.veg.model.Vegetable;
import com.veg.repository.BuyerRepo;

import com.veg.repository.VegetableInterface;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class VegetableController {
	@Autowired
     private VegetableInterface service;
	@Autowired
	private BuyerRepo repo;
	
	
	@GetMapping("view")
	@CrossOrigin(origins="http://localhost:4200")
    public List<Vegetable> viewrecord()	
	{
		
		return	service.findAll();
				
	}
	
	@PostMapping("insert")
	@CrossOrigin(origins="http://localhost:4200")
	public Vegetable insert(@RequestBody Vegetable veg)
	{
		return service.save(veg);
	}
	@PostMapping("update")
	@CrossOrigin(origins="http://localhost:4200")
	public Vegetable update(@RequestBody Vegetable veg)
	{
		return service.save(veg);
	}
	@PostMapping("delete")
	@CrossOrigin(origins="http://localhost:4200")
	public String delete(@RequestBody Vegetable id)
	{
		service.delete(id);
		return "delete";
	}
	
	@PostMapping("buyer")
	@CrossOrigin(origins="http://localhost:4200")
	public String check(@RequestBody Vegetable model,Buyer bmodel)
	{
	int id1=model.getId();
	int quantity1=model.getQuantity();
	int  quantity2=(int) oldid(id1);
	String name=oldname(id1);
	double price=oldprice(id1);
    int quantity3=quantity2-quantity1;
     double cost=price*quantity1;

     model.setQuantity(quantity3);
     model.setId(id1);
     model.setName(name);
     model.setPrice(price);
     service.save(model);
      bmodel.setId(id1);
      bmodel.setName(name);
      bmodel.setCost(cost);
      bmodel.setQuantity(quantity1);
      repo.save(bmodel);
		
				return "buyer";
	}
	public double oldid(int id)
	{
		@SuppressWarnings("deprecation")
		Vegetable veg=this.service.getById(id);
		return veg.getQuantity();
			
	}
	public String oldname(int id)
	{
		@SuppressWarnings("deprecation")
		Vegetable veg=this.service.getById( id);
		return veg.getName();
			
	}
	public double oldprice(int id)
	{
		@SuppressWarnings("deprecation")
		Vegetable veg=this.service.getById( id);
		return veg.getPrice();
			
	}
	
	@GetMapping("bill")
	@CrossOrigin(origins="http://localhost:4200")
    public List<Buyer> billrecord()	
	{
	
		repo.count();
		return repo.findAll();
				
	}
	@GetMapping("billing")
	@CrossOrigin(origins="http://localhost:4200")
	public Long total()
	
	{
		Long total=repo.total();
		System.out.println(total);
		return total;
		
	}
	
	@PostMapping("exit")
	@CrossOrigin(origins="http://localhost:4200")
	public     Object exit(@RequestBody Buyer id)
	{
		 
	         repo.deleteAll();
			 return "exit";
		
		
	}	
}
