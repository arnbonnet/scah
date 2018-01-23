package fr.dta.scah.product.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import fr.dta.scah.AbstractRepository;
import fr.dta.scah.exception.StorageException;
import fr.dta.scah.product.model.Product;
import fr.dta.scah.product.repository.ProductRepository;
import fr.dta.scah.product.repository.ProductRepositoryCustom;

@Service
@Transactional
public class ProductService extends AbstractRepository<Product> implements ProductRepositoryCustom {
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
	
	public Product getById(Long id) {
		return productRepository.findById(id);
	}

	public void editProduct(Product product) {
		productRepository.save(product);
	}
	
	@Override
	public List<Product> findByCriteria(String title, String category, Integer stock, Float price, Integer orders) {
		
		Criteria crit = getSession().createCriteria(Product.class);
		
		if (!StringUtils.isEmpty(title)) {
			crit.add(Restrictions.like("title", "%"+title+"%"));
		}
		if (!StringUtils.isEmpty(category)) {
			crit.add(Restrictions.eq("category", category));
		}
		if (stock != null) {
			crit.add(Restrictions.eq("stock", stock));
		}
		if (price != null) {
			crit.add(Restrictions.eq("price", price));
		}
		if (orders != null) {
			crit.add(Restrictions.eq("orders", orders));
		}
		
		List<Product> searchResult = crit.list();
		
		return searchResult;
	}

	public void remove(Long id) {
		productRepository.delete(id);
}
		public boolean store(long id, MultipartFile file) {

		String filename = StringUtils.cleanPath(file.getOriginalFilename());

		try {
			File convFile = new File(".\\src\\main\\webapp\\app\\images\\"+id+"\\" + file.getOriginalFilename());
		    convFile.getParentFile().mkdirs();
		    convFile.createNewFile();
		    
		    FileOutputStream fos = new FileOutputStream(convFile); 
		    fos.write(file.getBytes());
		    fos.close();
		    
			if (file.isEmpty()) {
				throw new StorageException("Failed to store empty file " + filename);
			}
			
			if (filename.contains("..")) {
				// This is a security check
				throw new StorageException(
						"Cannot store file with relative path outside current directory " + filename);
			}
			return true;
			
		} catch (IOException e) {
			throw new StorageException("Failed to store file " + filename, e);
			
			
		}		
	}
}
