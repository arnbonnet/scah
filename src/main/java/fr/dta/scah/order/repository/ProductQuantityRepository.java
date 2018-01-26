package fr.dta.scah.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.dta.scah.order.model.ProductQuantity;

public interface ProductQuantityRepository extends JpaRepository<ProductQuantity, Long> {
	
	//public ProductQuantity findById(Long id);
}
