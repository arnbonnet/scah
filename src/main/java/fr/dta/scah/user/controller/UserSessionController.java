package fr.dta.scah.user.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/session")
public class UserSessionController {

	@RequestMapping(method = RequestMethod.GET)
	public User getSession(Authentication authentication) {
		if (authentication != null) {
			return (User) authentication.getPrincipal();
		}
		return null;
	}

}
