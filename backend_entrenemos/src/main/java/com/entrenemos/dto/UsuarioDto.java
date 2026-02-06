package com.entrenemos.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UsuarioDto {
    private Long id;
    private String nombre;
    private String email;
    private String password;
    private String rol;
    private String telefono;
    private LocalDateTime fechaRegistro;
    private String fotoPerfil;
    private Long entrenadorId;
}
