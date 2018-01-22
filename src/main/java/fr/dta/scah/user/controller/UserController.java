package fr.dta.scah.user.controller;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
	public Long createUser(@RequestBody @Valid User user) {
		
		userService.create(user);
		
		return user.getId();
	}
	
	@RequestMapping(value="connectedUser", method = RequestMethod.GET)
	public User getConnectedUser() {
		return securityService.getConnectedUser();
	}
}
