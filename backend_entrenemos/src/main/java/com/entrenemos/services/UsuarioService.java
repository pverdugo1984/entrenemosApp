package com.entrenemos.services;

import com.entrenemos.dto.UsuarioDto;
import java.util.List;

public interface UsuarioService {

    List<UsuarioDto> listarUsuarios();
    UsuarioDto guardarUsuario(UsuarioDto usuarioDto);
    UsuarioDto obtenerUsuario(Long id);
    UsuarioDto actualizarUsuario(Long id, UsuarioDto usuarioDto);
    void eliminarUsuario(Long id);
    List<UsuarioDto> listarUsuariosPorEntrenadorEmail(String emailEntrenador);
    List<UsuarioDto> listarUsuariosPorRol(String rol);
    void asignarEntrenador(Long usuarioId, Long entrenadorId);
}