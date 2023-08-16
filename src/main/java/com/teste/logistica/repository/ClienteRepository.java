package com.teste.logistica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.logistica.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {
    
}
