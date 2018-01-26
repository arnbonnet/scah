package fr.dta.scah.user.service;

import java.sql.SQLException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fr.dta.scah.order.model.Order;
import fr.dta.scah.order.service.OrderService;
import fr.dta.scah.user.model.User;
import fr.dta.scah.user.repository.UserRepository;

@Service
@Transactional
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	OrderService orderService;
	
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	public void create(User user) throws SQLException {
		//cryptage du mot de passe
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		userRepository.save(user);
	}
	
	public void edit(User user) {
		userRepository.saveAndFlush(user);
	}
	
	public List<Order> findAllOfUserWithProducts(Long id){
		return orderService.findAllOfUserWithProducts(id);
	}
}
