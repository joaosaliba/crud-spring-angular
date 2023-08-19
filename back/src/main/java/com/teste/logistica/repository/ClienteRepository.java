package com.teste.logistica.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.teste.logistica.dto.ClienteDto;
import com.teste.logistica.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

  @Query("SELECT new com.teste.logistica.dto.ClienteDto(c) " +
      "FROM Cliente c " +
      "JOIN c.endereco " +
      "WHERE (:nome IS NULL OR c.nome LIKE %:nome%) " +
      "AND (:cnpj IS NULL OR c.cnpj = :cnpj)")
  Page<ClienteDto> findClientesList(Pageable page, @Param("nome") String nome, @Param("cnpj") String cnpj);

  @Query("select new  com.teste.logistica.dto.ClienteDto(c) from Cliente c join c.endereco where c.id =:id ")
  ClienteDto findClienteById(Long id);

}
