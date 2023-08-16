package com.teste.logistica.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="endereco")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Endereco {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Double  latitude;

        @Column
    private Double  longitude;

    @JoinColumn()
    @OneToOne()
    private Cliente cliente;

}
