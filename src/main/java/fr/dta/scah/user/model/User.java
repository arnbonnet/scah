package fr.dta.scah.user.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import fr.dta.scah.order.model.Order;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="_user")
@Getter
@Setter
@SequenceGenerator(name = "seq_user", sequenceName = "seq_user", initialValue = 1, allocationSize = 1)
public class User implements Serializable {

	private static final long serialVersionUID = 6770263927699538355L;

	@Id
	@GeneratedValue(generator = "seq_user")
	private Long id;
	
	@NotBlank
	private String firstname;
	
	@NotBlank
	private String lastname;
	
	private String address;
	
	@Size(min=10, max=10)
	private String phone;
	
	@NotBlank
	@Email
	private String email;
	
	@NotBlank
	private String password;
	
	private boolean admin = false;
	
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Order> orders = new ArrayList<>();
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
}
