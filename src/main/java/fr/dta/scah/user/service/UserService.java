package fr.dta.scah.user.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fr.dta.scah.user.model.User;
import fr.dta.scah.user.repository.UserRepository;

@Service
@Transactional
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	public void create(User user) {
		//cryptage du mot de passe
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		userRepository.save(user);
	}
	
	public void edit(User user) {
		userRepository.saveAndFlush(user);
	}
}
