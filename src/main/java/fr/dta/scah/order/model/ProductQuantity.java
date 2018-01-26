package fr.dta.scah.order.model;

import java.io.Serializable;

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
public class ProductQuantity implements Serializable {

	private static final long serialVersionUID = -5570336403163517683L;

	@Id
	@GeneratedValue(generator = "seq_product_quantity")
	private Long id;
	
	@Min(1)
	private int quantity;
	
	@ManyToOne
	private Order order;
	
	@ManyToOne
	private Product product;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	public String toString() {
		return "[QTE "
				+ this.id
				+ " : " + this.quantity
				+ " / " + (this.order==null?null:this.order.getId())
				+ " / " + (this.product==null?null:this.product.getId())
				+ "]";
	}
	
}
