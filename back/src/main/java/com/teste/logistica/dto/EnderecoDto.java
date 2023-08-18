package com.teste.logistica.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnderecoDto {
    private Long id;
    @NotNull
    @NotBlank(message = "latitude inválido")
    private Double  latitude;
    @NotNull
    @NotBlank(message = "longitude inválido")
    private Double  longitude;

 
    
    
}
