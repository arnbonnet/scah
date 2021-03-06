package fr.dta.scah.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fr.dta.scah.exception.StorageFileNotFoundException;
import fr.dta.scah.product.model.Product;
import fr.dta.scah.product.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	ProductService productService;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Product> getProducts() {
		return productService.findAll();
	}

	//@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void addProducts(@RequestBody Product product) {
		productService.addProduct(product);
	}
	
	//@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public void editProducts(@RequestBody Product product) {
		productService.editProduct(product);
	}
	
	@RequestMapping(value = "search", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Product> getByCriteria(@RequestParam(required = false) String title,
			@RequestParam(required = false) String category, @RequestParam(required = false) Integer stock,
			@RequestParam(required = false) Float price, @RequestParam(required = false) Integer orders, 
			@RequestParam(required = false) Boolean activated) {
		return productService.findByCriteria(title, category, stock, price, orders, activated);
	}

	@RequestMapping(value = "search/{id}", method = RequestMethod.GET)
	public Product getById(@PathVariable Long id) {
		return productService.getById(id);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public boolean remove(@PathVariable Long id) {
		return productService.remove(id);
	}

	
	@RequestMapping(value="delete", method = RequestMethod.POST)
	public void removeMultiple(@RequestBody List<Long> ids) {
		productService.removeMultiple(ids);
	}
	
	//gestion de l'upload des images
	@RequestMapping(value="upload", method = RequestMethod.POST)
    public String handleFileUpload(@RequestParam MultipartFile file) {
		productService.store(file);
		return "{\"name\":\""+file.getOriginalFilename()+"\"}";
    }

	//gestion des exceptions du aux erreurs de l'upload des images
	@ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }
}
