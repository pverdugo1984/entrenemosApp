package com.entrenemos.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EntrenamientoDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String imagen;
    private List<Long> ejerciciosIds;
    private List<EjercicioDto> ejercicios;
    private List<Long> usuariosIds;
    private List<Long> usuariosAsignadosIds;
    private List<Long> entrenadoresIds;
    private List<Long> entrenadoresAsignadosIds;
}
