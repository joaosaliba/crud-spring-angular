package com.teste.logistica.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teste.logistica.dto.UserDto;
import com.teste.logistica.enums.EnumRole;
import com.teste.logistica.model.Role;
import com.teste.logistica.model.User;
import com.teste.logistica.repository.RoleRepository;
import com.teste.logistica.repository.UserRepository;

@Service
public class UserService {
        @Autowired
     private UserRepository userRepository;
         @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

  

    public void saveUser(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        // encrypt the password using spring security
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        Role role = roleRepository.findByName(EnumRole.ROLE_ADMIN).orElse(null);
        if(role == null){
            role = checkRoleExist();
        }
        user.setRoles(Arrays.asList(role));
        
        userRepository.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByUsername(email).orElse(null);
    }

    public List<UserDto> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map((user) -> mapToUserDto(user))
                .collect(Collectors.toList());
    }

    private UserDto mapToUserDto(User user){
        UserDto userDto = new UserDto();
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        return userDto;
    }

    private Role checkRoleExist(){
        Role role = new Role();
        role.setName(EnumRole.ROLE_ADMIN);
        return roleRepository.save(role);
    }
    
}
