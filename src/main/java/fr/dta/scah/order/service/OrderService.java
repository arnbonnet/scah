package fr.dta.scah.order.service;

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

	public Order create(Order order) {
//		System.out.println("Ajout de l'order " + order);
		Order orderbdd = orderRepository.save(order);
//		System.out.println("Qui donne " + orderbdd);
		order.getQuantityProducts()
			.stream()
			.forEach(pq -> {
//				System.out.println("Ajout du produit " + qp);
				pq.setOrder(orderbdd);
				productQuantityRepository.save(pq);
			});
		return orderbdd;
	}
	
//	public Order getById(Long idOrder) {
//		Order order = orderRepository.findOne(idOrder);
//		return order;
//	}
	
//	public void create(Order order) {
//		orderRepository.saveAndFlush(order);
//		ProductQuantityService.saveAndFlush(order.getQuantityProducts());
//	}
	
//	public void edit(Order order) {
//		orderRepository.save(order);
//		ProductQuantityService.save(order.getQuantityProducts());
//	}
//	
//	public List<Order> findAll() {
//		List<Order> orders = orderRepository.findAll();
//		orders.stream()
//			.forEach(order -> order.getQuantityProducts().addAll(ProductQuantityService.findByOrderId(order.getId())));
//		return orders;
//	}
	
}
