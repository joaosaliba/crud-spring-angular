package com.teste.logistica;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teste.logistica.controller.ClienteController;
import com.teste.logistica.dto.ClienteDto;
import com.teste.logistica.service.ClienteService;

public class ClienteControllerTest {

    @Mock
    private ClienteService clienteService;

    @InjectMocks
    private ClienteController clienteController;

    private MockMvc mockMvc;
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(clienteController).build();
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testGetAll() throws Exception {
        // Prepare data
        PageRequest pageRequest = PageRequest.of(0, 10);
        when(clienteService.getAll(pageRequest, null, null)).thenReturn(new PageImpl<>(new ArrayList<>()));

        // Perform GET request
        mockMvc.perform(get("/cliente"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$.content").isArray());

        // Verify that the service method was called
        verify(clienteService).getAll(pageRequest, null, null);
    }

    @Test
    public void testRegister() throws Exception {
        ClienteDto clientDto = new ClienteDto(); // Create a sample DTO

        // Perform POST request
        mockMvc.perform(post("/cliente")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(clientDto)))
                .andExpect(status().isCreated());

        // Verify that the service method was called
        verify(clienteService).addCliente(clientDto);
    }

    // Testar cadastro com informações inválidas.
    @Test
    public void testRegisterWithInvalidInfo() throws Exception {
        ClienteDto clientDto = new ClienteDto(); // Criar um DTO com informações inválidas
        clientDto.setCnpj("00000000000");
        clientDto.setNome(null);
        // Executar requisição POST
        mockMvc.perform(post("/cliente")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(clientDto)))
                .andExpect(status().isBadRequest());

        // Verificar que o método de serviço não foi chamado
        verify(clienteService, never()).addCliente(clientDto);
    }

    // Testar exclusão de um cliente.
    @Test
    public void testDeleteCliente() throws Exception {
        Long clientId = 1L;

        // Executar requisição DELETE
        mockMvc.perform(delete("/cliente/" + clientId))
                .andExpect(status().isAccepted());

        // Verificar que o método de serviço foi chamado para exclusão
        verify(clienteService).deleteById(clientId);
    }

    @Test
    public void testEditClienteInfo() throws Exception {
        Long clientId = 1L;
        ClienteDto updatedClientDto = new ClienteDto(); // Criar um DTO com informações atualizadas
        updatedClientDto.setId(clientId);
        updatedClientDto.setCnpj("00000000000000");
        updatedClientDto.setNome("Teste");

        // Executar requisição PUT
        mockMvc.perform(post("/cliente/")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(updatedClientDto)))
                .andExpect(status().isCreated());

        // Verificar que o método de serviço foi chamado com as informações atualizadas
        verify(clienteService).addCliente(updatedClientDto);
    }
}
