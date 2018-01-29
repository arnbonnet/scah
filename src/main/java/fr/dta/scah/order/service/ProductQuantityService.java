package fr.dta.scah.order.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.dta.scah.order.model.ProductQuantity;
import fr.dta.scah.order.repository.ProductQuantityRepository;

@Service
@Transactional
public class ProductQuantityService {
	
	@Autowired
	ProductQuantityRepository productQuantityRepository;

	public List<ProductQuantity> findProductQuantityByOrderId(Long id) {
		List<ProductQuantity> pql = productQuantityRepository.findAll();
		pql.stream().filter(pq -> id == pq.getOrder().getId()).collect(Collectors.toList());
		return pql;
	}
	
}
