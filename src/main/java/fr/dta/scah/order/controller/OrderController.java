package fr.dta.scah.order.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.dta.scah.order.model.Order;
import fr.dta.scah.order.service.OrderService;
import fr.dta.scah.security.service.SecurityService;

@RestController
@RequestMapping("/api/orders")
@Transactional
public class OrderController {
	
	@Autowired
	SecurityService securityService;
	
	@Autowired
	OrderService orderService;
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Long createOrder(@RequestBody Order order) {
//		System.out.println("WebService création order : " + order);
		order.setUser(securityService.getConnectedUser());
		return orderService.create(order).getId();
	}
	
//	@RequestMapping(value = "search/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
//	public Order getById(@PathVariable Long id) {
//		return orderService.getById(id);
//	}

//	
//	@RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
//	public void editOrder(@RequestBody Order order) {
//		//orderService.edit(order);
//	}
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE ) 
	public List<Order> getOrders() {
		return orderService.findAll();
	}
 }