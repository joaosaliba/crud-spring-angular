package com.teste.logistica.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.logistica.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}