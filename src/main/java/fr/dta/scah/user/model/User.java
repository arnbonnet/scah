package fr.dta.scah.user.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import fr.dta.scah.order.model.Order;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="_user")
@Getter
@Setter
@SequenceGenerator(name = "seq_user", sequenceName = "seq_user", initialValue = 1, allocationSize = 1)
public class User {
	
	@Id
	@GeneratedValue(generator = "seq_user")
	private Long id;
	
	@NotBlank
	private String firstname;
	
	@NotBlank
	private String lastname;
	
	@NotBlank
	@Email
	private String email;
	
	private boolean admin = false;
	
	@OneToMany(mappedBy="user")
	private List<Order> orders = new ArrayList<>();
	
	@NotBlank
	private String password;
	
}
