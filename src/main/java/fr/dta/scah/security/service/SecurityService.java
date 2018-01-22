package fr.dta.scah.security.service;

import java.io.Serializable;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import fr.dta.scah.user.model.User;
import fr.dta.scah.user.repository.UserRepository;

@Service(value = "securityService")
public class SecurityService implements Serializable {
	
    private static final long serialVersionUID = -5202158449829327001L;
    
    @Autowired
    UserRepository userRepository;
    
    public User getConnectedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if(authentication == null) {
            return null;
        }
        
        org.springframework.security.core.userdetails.User u = (org.springframework.security.core.userdetails.User) authentication
                .getPrincipal();
        
        User user = userRepository.findByEmail(u.getUsername());

		Hibernate.initialize(user.getOrders());
        return user;
    }
}
