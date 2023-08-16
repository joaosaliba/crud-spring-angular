package com.teste.logistica.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="cliente")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 200)
    private String nome;

    @Column(unique = true)
    @Size(max = 14)
    private String cnpj;


    @OneToOne(mappedBy = "cliente" ,cascade = CascadeType.ALL)
    private Endereco endereco;
    
    
}
