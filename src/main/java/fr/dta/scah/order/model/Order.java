package fr.dta.scah.order.model;

import java.io.Serializable;
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

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import fr.dta.scah.user.model.User;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="_order")
@Getter
@Setter
@SequenceGenerator(name = "seq_order", sequenceName = "seq_order", initialValue = 1, allocationSize = 1)
public class Order implements Serializable {	

	private static final long serialVersionUID = 857227294723514986L;

	@Id
	@GeneratedValue(generator = "seq_order")
	private Long id;
	
	@NotNull
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonSerialize(using = LocalDateSerializer.class)
	private LocalDate date;
	
	@NotNull
	private float totalPrice;
	
	@NotBlank
	private String orderNumber;

	@ManyToOne
	private User user;
	
	@OneToMany(mappedBy="order")
	private List<ProductQuantity> quantityProducts = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<ProductQuantity> getQuantityProducts() {
		return quantityProducts;
	}

	public void setQuantityProducts(List<ProductQuantity> quantityProducts) {
		this.quantityProducts = quantityProducts;
	}
	
}
