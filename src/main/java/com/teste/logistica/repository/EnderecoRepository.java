package com.teste.logistica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.logistica.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco,Long> {
    
}
