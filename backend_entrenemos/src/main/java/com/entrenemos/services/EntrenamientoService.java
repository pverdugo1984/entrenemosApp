package com.entrenemos.services;

import com.entrenemos.dto.EntrenamientoDto;

import java.util.List;

public interface EntrenamientoService {
    EntrenamientoDto crear(EntrenamientoDto entrenamientoDto, Long creadorId);
    EntrenamientoDto actualizar(Long id, EntrenamientoDto entrenamientoDto);
    List<EntrenamientoDto> listar();
    List<EntrenamientoDto> listarPorUsuario(Long usuarioId);
    List<EntrenamientoDto> listarPorEntrenador(Long entrenadorId);
    EntrenamientoDto obtenerPorId(Long id);
    void eliminar(Long id);
}
