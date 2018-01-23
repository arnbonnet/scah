package fr.dta.scah.product.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.dta.scah.product.model.Product;
import fr.dta.scah.product.repository.ProductRepository;

@Service
@Transactional
public class ProductService {
	@PersistenceContext
	private EntityManager em;
	
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> findAll() {
		return productRepository.findAll();
	}
	
	public void addProduct(Product product) {
		productRepository.save(product);
	}
	
	public List<Product> getByTitle(String title) {
		System.out.println(title);
		title = "%" + title + "%";
		TypedQuery<Product> query = em.createQuery("select p from Product p where p.title like :productTitle", Product.class)
				.setParameter("productTitle", title);
		return query.getResultList();
	}
	
	public Product getById(Long id) {
		return productRepository.findById(id);
	}

	public void editProduct(Product product) {
		productRepository.save(product);
	}
}
