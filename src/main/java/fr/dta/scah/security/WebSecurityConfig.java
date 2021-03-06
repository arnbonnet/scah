package fr.dta.scah.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;

import fr.dta.scah.security.service.AuthenticationService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, proxyTargetClass = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
    @Autowired
    AuthenticationService authentificationService;   
    @Autowired
	RestAuthenticationEntryPoint restAuthenticationEntryPoint;
	@Autowired
	RestAccessDeniedHandler restAccessDeniedHandler;
	@Autowired
	RestAuthenticationSuccessHandler restAuthenticationSuccessHandler;
	@Autowired
	RestAuthenticationFailureHandler restAuthenticationFailureHandler;
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
    	http.sessionManagement().and().authorizeRequests()
		
		.and().exceptionHandling()
		//Definit le message si non autorisé a accéder a un ws
		.authenticationEntryPoint(restAuthenticationEntryPoint).accessDeniedHandler(restAccessDeniedHandler)
		.and().formLogin()
		.loginProcessingUrl("/authenticate")
			//Definit le message si l'authentification réussi
				.successHandler(restAuthenticationSuccessHandler).permitAll()
		    //Definit le message si l'authentification échoue
				.failureHandler(restAuthenticationFailureHandler)
			.usernameParameter("username")
			.passwordParameter("password").permitAll()
			
		.and().logout().logoutUrl("/logout")
		.logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler())
		.permitAll()
		.and().httpBasic().and().csrf().disable();
       
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(authentificationService).passwordEncoder(passwordEncoder());
    }
}
