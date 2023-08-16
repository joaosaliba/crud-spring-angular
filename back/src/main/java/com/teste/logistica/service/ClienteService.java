package com.teste.logistica.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.teste.logistica.dto.ClienteDto;
import com.teste.logistica.dto.EnderecoDto;
import com.teste.logistica.model.Cliente;
import com.teste.logistica.model.Endereco;
import com.teste.logistica.repository.ClienteRepository;
import com.teste.logistica.repository.EnderecoRepository;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;
    @Autowired
    EnderecoRepository enderecoRepository;

    @Transactional
    public void addCliente(ClienteDto clienteDto) {
        Cliente cliente = new Cliente();
        if(Objects.nonNull(clienteDto.getId())){
            cliente.setId(clienteDto.getId());
        }
        cliente.setCnpj(clienteDto.getCnpj());
        cliente.setNome(clienteDto.getNome());
       cliente= clienteRepository.save(cliente);

        Endereco endereco = new Endereco();
        EnderecoDto enderecoDto = clienteDto.getEndereco();
        if(Objects.nonNull(enderecoDto.getId())){
            endereco.setId(enderecoDto.getId());
        }
        endereco.setLatitude(enderecoDto.getLatitude());
        endereco.setLongitude(enderecoDto.getLongitude());
        endereco.setCliente(cliente);
        enderecoRepository.save(endereco);

    }

    public Page<ClienteDto> getAll(Pageable page) {
        return clienteRepository.findClientesList(page);
    }

    public ClienteDto findById(Long id) {
       return clienteRepository.findClienteById(id);
    }

    public void deleteById(Long id) {
         clienteRepository.deleteById(id);
    }
    
}
