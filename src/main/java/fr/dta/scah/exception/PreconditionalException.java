package fr.dta.scah.exception;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.PRECONDITION_FAILED)
public class PreconditionalException extends RuntimeException {

	private static final long serialVersionUID = 1515398236442853241L;

	private String code;
	private String description;
	private BindingResult bindingResult;
	
	public PreconditionalException(String code, String description, BindingResult bindingResult) {
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
