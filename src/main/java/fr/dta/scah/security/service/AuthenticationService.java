package fr.dta.scah.security.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import fr.dta.scah.user.model.User;
import fr.dta.scah.user.repository.UserRepository;

@Component
public class AuthenticationService implements UserDetailsService {
	
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(final String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            List<GrantedAuthority> rules = this.getUserCredentials(user);
            return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), rules);
        }
        throw new UsernameNotFoundException("email.not.found");
    }
    
    public List<GrantedAuthority> getUserCredentials(User user) {
        
        List<GrantedAuthority> rules = new ArrayList<>();
        if(user.isAdmin()) {
        	rules.add(new SimpleGrantedAuthority("ADMIN"));        	
        } else {
        	rules.add(new SimpleGrantedAuthority("USER"));
        }
        return rules;
    }
}

