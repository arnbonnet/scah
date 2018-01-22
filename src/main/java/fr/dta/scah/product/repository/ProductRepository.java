package fr.dta.scah.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import fr.dta.scah.product.model.Product;

public interface ProductRepository  extends JpaRepository<Product, Long>{
	
	
	public List<Product> findByTitle(@Param("title") String title);
	
	public List<Product> findByCategory(String category);
}
