package fr.dta.scah.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.dta.scah.product.model.Product;
import fr.dta.scah.product.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> findAll(){
		return productRepository.findAll();
	}
}
