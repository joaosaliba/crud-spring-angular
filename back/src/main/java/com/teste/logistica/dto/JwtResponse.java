package com.teste.logistica.dto;

import java.io.Serializable;

import lombok.Data;
@Data
public class JwtResponse implements Serializable {
	public static final String BEARER = "Bearer ";

	private final String token;
	private final String type =BEARER;

}
