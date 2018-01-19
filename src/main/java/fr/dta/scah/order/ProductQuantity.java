package fr.dta.scah.order;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Min;

import fr.dta.scah.product.model.Product;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@SequenceGenerator(name = "seq_product_quantity", sequenceName = "seq_product_quantity", initialValue = 1, allocationSize = 1)
public class ProductQuantity {
	
	@Id
	@GeneratedValue(generator = "seq_product_quantity")
	private Long id;
	
	@Min(1)
	private int quantity;
	
	@ManyToOne
	private Order order;
	
	@ManyToOne
	private Product product;
}
