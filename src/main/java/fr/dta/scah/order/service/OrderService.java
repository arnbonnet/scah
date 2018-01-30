package fr.dta.scah.order.service;

import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.dta.scah.order.model.Order;
import fr.dta.scah.order.repository.OrderRepository;
import fr.dta.scah.order.repository.ProductQuantityRepository;

@Service
@Transactional
public class OrderService {
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	ProductQuantityRepository productQuantityRepository;
	
	@Autowired
	ProductQuantityService productQuantityService;

	public Order create(Order order) {
		Order orderbdd = orderRepository.save(order);
		order.getQuantityProducts()
			.stream()
			.forEach(pq -> {
				pq.setOrder(orderbdd);
				productQuantityRepository.save(pq);
			});
		return orderbdd;
	}
	
	public List<Order> findAllOfUserWithProducts(Long id) {
		return orderRepository.findAllOfUserWithProducts(id);
	}

	public List<Order> findAll() {
		return orderRepository.findAll();
	}
	
}
