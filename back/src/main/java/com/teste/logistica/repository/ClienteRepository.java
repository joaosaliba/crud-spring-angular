package com.teste.logistica.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.teste.logistica.dto.ClienteDto;
import com.teste.logistica.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {

      @Query("select new  com.teste.logistica.dto.ClienteDto(c) from Cliente c join c.endereco ")
     Page<ClienteDto> findClientesList(Pageable page);
     
      @Query("select new  com.teste.logistica.dto.ClienteDto(c) from Cliente c join c.endereco where c.id =:id ")
    ClienteDto findClienteById(Long id);
    
}
