package com.teste.logistica.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teste.logistica.dto.ClienteDto;
import com.teste.logistica.service.ClienteService;

@RequestMapping("cliente")
@RestController
public class ClienteController {
     @Autowired
     ClienteService clienteService;
     
    @PostMapping
    public ResponseEntity register(@RequestBody ClienteDto clienteDto){
     clienteService.addCliente(clienteDto);
        return ResponseEntity.ok("");
    }

    @GetMapping
    public ResponseEntity getAll(  @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size){
         Pageable paging = PageRequest.of(page, size);
        Page<ClienteDto> clientList =clienteService.getAll(paging);
        return ResponseEntity.ok(clientList);
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable ("id") Long id){
        ClienteDto client =clienteService.findById(id);
        return ResponseEntity.ok(client);
    }
      @DeleteMapping("/{id}")
    public ResponseEntity deleteById(@PathVariable ("id") Long id){
      clienteService.deleteById(id);
        return ResponseEntity.ok("Deletado");
    }
}
