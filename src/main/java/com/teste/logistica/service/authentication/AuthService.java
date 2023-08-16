package com.teste.logistica.service.authentication;

import com.teste.logistica.dto.LoginDto;

public interface AuthService {
    String login(LoginDto loginDto);
    
}
