package fr.dta.scah.exception;

import org.springframework.validation.BindingResult;

public class NotUniqueCreationException extends RuntimeException {
	
	private static final long serialVersionUID = 9006358962102710410L;
	
	private String code;
	private String description;
	private BindingResult bindingResult;
	
	public NotUniqueCreationException(String code, String description, BindingResult bindingResult) {
		this.code = code;
		this.description = description;
		this.bindingResult = bindingResult;
	}

	public String getCode() {
		return code;
	}

	public String getDescription() {
		return description;
	}

	public BindingResult getBindingResult() {
		return bindingResult;
	}
		
}
