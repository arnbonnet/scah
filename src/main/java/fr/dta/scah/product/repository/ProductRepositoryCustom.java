package fr.dta.scah.product.repository;

import java.util.List;

import fr.dta.scah.product.model.Product;

public interface ProductRepositoryCustom {
	public abstract List<Product> findByCriteria(String title, String category, Integer stock, Float price, Integer orders, Boolean activated);
}