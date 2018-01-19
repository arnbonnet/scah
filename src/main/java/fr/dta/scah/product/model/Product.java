package fr.dta.scah.product.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@SequenceGenerator(name = "seq_product", sequenceName = "seq_product", initialValue = 1, allocationSize = 1)
public class Product {
	
	@Id
	@GeneratedValue(generator = "seq_product")
	private Long id;
	
	@NotBlank
	private String title;
	
	private String description;
	
	private String image;
	
	private boolean activated = true;
	
	@Min(0)
	private int stock;
	
	@NotNull
	private float price;
	
	private int orders;
}
