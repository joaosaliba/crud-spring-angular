package com.teste.logistica.dto;

import javax.validation.constraints.Size;

import org.springframework.lang.Nullable;

import com.teste.logistica.model.Cliente;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClienteDto {
    @Nullable
    private Long id;

    @Size(max = 200)
    private String nome;

    @Size(max = 14)
    private String cnpj;

    private EnderecoDto endereco;
    
    public ClienteDto(Cliente c ){
        this.cnpj = c.getCnpj();
        this.id = c.getId();
        this.nome = c.getNome();
        this.endereco = new EnderecoDto(c.getEndereco().getId(),c.getEndereco().getLatitude() , c.getEndereco().getLongitude());
    }
    
}
