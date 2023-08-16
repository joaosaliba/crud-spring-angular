package com.teste.logistica.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.logistica.dto.UserDto;
import com.teste.logistica.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {
  
    private UserService userService;

    @PostMapping()
    public ResponseEntity register(@RequestBody UserDto userDto){
        userService.saveUser(userDto);
        return ResponseEntity.ok("");
    }

    
}
