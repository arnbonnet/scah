package fr.dta.scah.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.dta.scah.product.model.Product;

public interface ProductRepository  extends JpaRepository<Product, Long>{
	
}
