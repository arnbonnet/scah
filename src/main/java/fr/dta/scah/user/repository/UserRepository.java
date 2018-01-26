package fr.dta.scah.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.dta.scah.user.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
