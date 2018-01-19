package fr.dta.scah.order;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import fr.dta.scah.user.model.User;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="_order")
@Getter
@Setter
@SequenceGenerator(name = "seq_order", sequenceName = "seq_order", initialValue = 1, allocationSize = 1)
public class Order {	
	
	@Id
	@GeneratedValue(generator = "seq_order")
	private Long id;
	
	@NotNull
	private LocalDate date;
	
	@NotNull
	private float totalPrice;
	
	@NotBlank
	private String orderNumber;

	@ManyToOne
	private User user;
	
	@OneToMany(mappedBy="order")
	private List<ProductQuantity> quantityProducts = new ArrayList<>();
	
}
