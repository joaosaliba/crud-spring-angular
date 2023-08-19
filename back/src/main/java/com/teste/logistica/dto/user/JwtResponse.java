package com.teste.logistica.dto.user;

import java.io.Serializable;

import lombok.Data;
@Data
public class JwtResponse implements Serializable {
	public static final String BEARER = "Bearer ";

	private final String token;
	private final String type =BEARER;

}
