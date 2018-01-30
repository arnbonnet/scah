package fr.dta.scah.user.controller;

import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.postgresql.util.PSQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.MediaType;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.dta.scah.exception.NotUniqueCreationException;
import fr.dta.scah.exception.PreconditionalException;
import fr.dta.scah.order.model.Order;
import fr.dta.scah.security.service.SecurityService;
import fr.dta.scah.user.model.User;
import fr.dta.scah.user.service.UserService;

@RestController
@RequestMapping("/api/users")
@Transactional
public class UserController {
	
	@Autowired
	UserService userService;

	@Autowired
	SecurityService securityService;
	
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Long createUser(@RequestBody @Valid User user, BindingResult bindingResult) throws SQLException {
		
		if (bindingResult.hasErrors()) {
			System.out.println(bindingResult.getErrorCount());
			for (ObjectError e : bindingResult.getAllErrors()) {
				System.out.println(e.getCode() + " " + e.getDefaultMessage());
				createCreationException(e.getCode(), "Votre numéro de téléphone doit provenir de france métropolitaine (10 chiffres)", user);
			}
		}
		
		try {
			userService.create(user);
		} catch (DataIntegrityViolationException e) {
			createCreationException("Unique", "Cet email est déjà utilisé", user);
		}
		
		return user.getId();
	}
	
	public void createCreationException(String code, String description, User user) {
		BindingResult bindingResult = new BeanPropertyBindingResult(user, user.getClass().getSimpleName());
        String[] codes = new String[1];
        codes[0] = code;
        bindingResult.addError(new ObjectError(user.getClass().getSimpleName(), codes, null, description));
        
		if("Size".equals(code)) {
			throw new PreconditionalException(code, description, bindingResult);
		} else { // email
			throw new NotUniqueCreationException(code, description, bindingResult);
		}
	}

	@RequestMapping(value="connectedUser", method = RequestMethod.GET)
	public User getConnectedUser() {
		return securityService.getConnectedUser();
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public Long editUser(@RequestBody @Valid User user) {
		userService.edit(user);
		return user.getId();
	}

	@RequestMapping(value = "/orders", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE ) 
	public List<Order> getUserOrders() {
		User user = securityService.getConnectedUser();
		return user!=null ? userService.findAllOfUserWithProducts(user.getId()): Collections.<Order>emptyList();
	}

}
