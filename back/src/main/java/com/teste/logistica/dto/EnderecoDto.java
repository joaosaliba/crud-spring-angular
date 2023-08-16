package com.teste.logistica.dto;

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
    private Double  latitude;
    @NotNull
    private Double  longitude;

 
    
    
}
