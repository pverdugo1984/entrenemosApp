package com.entrenemos.services;

import com.entrenemos.dto.EjercicioDto;
import com.entrenemos.dto.EntrenamientoDto;
import com.entrenemos.entity.Ejercicio;
import com.entrenemos.entity.Entrenamiento;
import com.entrenemos.entity.Usuario;
import com.entrenemos.repository.EjercicioRepository;
import com.entrenemos.repository.EntrenamientoRepository;
import com.entrenemos.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EntrenamientoServiceImpl implements EntrenamientoService{

    private final EntrenamientoRepository entrenamientoRepository;
    private final EjercicioRepository ejercicioRepository;
    private final UsuarioRepository usuarioRepository;

    @Override
    @Transactional
    public EntrenamientoDto crear(EntrenamientoDto dto, Long creadorId) {
        validarFechas(dto);

        Usuario creador = creadorId != null ? usuarioRepository.findById(creadorId)
                .orElse(null) : null;

        Entrenamiento e = Entrenamiento.builder()
                .nombre(dto.getNombre())
                .descripcion(dto.getDescripcion())
                .fechaInicio(dto.getFechaInicio())
                .fechaFin(dto.getFechaFin())
                .imagen(dto.getImagen())
                .creador(creador)
                .build();

        vincularEjercicios(e, dto.getEjerciciosIds());
        vincularUsuarios(e, dto.getUsuariosIds());
        vincularEntrenadores(e, dto.getEntrenadoresIds());

        Entrenamiento saved = entrenamientoRepository.save(e);
        return mapToDto(saved);
    }

    @Override
    @Transactional
    public EntrenamientoDto actualizar(Long id, EntrenamientoDto dto) {
        validarFechas(dto);

        Entrenamiento e = entrenamientoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Entrenamiento no encontrado"));

        e.setNombre(dto.getNombre());
        e.setDescripcion(dto.getDescripcion());
        e.setFechaInicio(dto.getFechaInicio());
        e.setFechaFin(dto.getFechaFin());
        e.setImagen(dto.getImagen());

        vincularEjercicios(e, dto.getEjerciciosIds());
        vincularUsuarios(e, dto.getUsuariosIds());
        vincularEntrenadores(e, dto.getEntrenadoresIds());

        Entrenamiento updated = entrenamientoRepository.save(e);
        return mapToDto(updated);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EntrenamientoDto> listar() {
        return entrenamientoRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public EntrenamientoDto obtenerPorId(Long id) {
        return entrenamientoRepository.findById(id)
                .map(this::mapToDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Entrenamiento no encontrado"));
    }

    @Override
    @Transactional
    public void eliminar(Long id) {
        if (!entrenamientoRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Entrenamiento no encontrado");
        }
        entrenamientoRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EntrenamientoDto> listarPorUsuario(Long usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado"));
        
        return entrenamientoRepository.findAll()
                .stream()
                .filter(e -> e.getUsuariosAsignados() != null && 
                           e.getUsuariosAsignados().contains(usuario))
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<EntrenamientoDto> listarPorEntrenador(Long entrenadorId) {
        Usuario entrenador = usuarioRepository.findById(entrenadorId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Entrenador no encontrado"));
        
        List<Usuario> usuariosDelEntrenador = usuarioRepository.findByEntrenador(entrenador);
        
        return entrenamientoRepository.findAll()
                .stream()
                .filter(e -> {
                    if (e.getCreador() != null && e.getCreador().getId().equals(entrenadorId)) {
                        return true;
                    }
                    if (e.getEntrenadoresAsignados() != null && !e.getEntrenadoresAsignados().isEmpty()) {
                        boolean estaAsignado = e.getEntrenadoresAsignados().stream()
                                .anyMatch(ent -> ent.getId().equals(entrenadorId));
                        if (estaAsignado) {
                            return true;
                        }
                    }
                    if (e.getUsuariosAsignados() != null && !e.getUsuariosAsignados().isEmpty()) {
                        return e.getUsuariosAsignados().stream()
                                .anyMatch(usuariosDelEntrenador::contains);
                    }
                    return false;
                })
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private void validarFechas(EntrenamientoDto dto) {
        if (dto.getFechaFin() != null && dto.getFechaInicio() != null &&
                dto.getFechaFin().isBefore(dto.getFechaInicio())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fecha fin no puede ser anterior a fecha inicio");
        }
    }

    private void vincularEjercicios(Entrenamiento e, List<Long> ejerciciosIds) {
        if (ejerciciosIds != null && !ejerciciosIds.isEmpty()) {
            List<Ejercicio> ejercicios = ejercicioRepository.findAllById(ejerciciosIds);
            if (ejercicios.size() != ejerciciosIds.size()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Algunos ejercicios no existen");
            }
            e.setEjercicios(ejercicios);
        } else {
            e.setEjercicios(Collections.emptyList());
        }
    }

    private void vincularUsuarios(Entrenamiento e, List<Long> usuariosIds) {
        if (usuariosIds != null && !usuariosIds.isEmpty()) {
            List<Usuario> usuarios = usuarioRepository.findAllById(usuariosIds);
            if (usuarios.size() != usuariosIds.size()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Algunos usuarios no existen");
            }
            e.setUsuariosAsignados(usuarios);
        } else {
            e.setUsuariosAsignados(Collections.emptyList());
        }
    }

    private void vincularEntrenadores(Entrenamiento e, List<Long> entrenadoresIds) {
        if (entrenadoresIds != null && !entrenadoresIds.isEmpty()) {
            List<Usuario> entrenadores = usuarioRepository.findAllById(entrenadoresIds);
            if (entrenadores.size() != entrenadoresIds.size()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Algunos entrenadores no existen");
            }
            e.setEntrenadoresAsignados(entrenadores);
        } else {
            e.setEntrenadoresAsignados(Collections.emptyList());
        }
    }

    private EntrenamientoDto mapToDto(Entrenamiento e) {
        List<EjercicioDto> ejercicios = e.getEjercicios() != null ? e.getEjercicios().stream()
                .map(ex -> EjercicioDto.builder()
                        .id(ex.getId())
                        .nombre(ex.getNombre())
                        .repeticiones(ex.getRepeticiones())
                        .peso(ex.getPeso())
                        .build())
                .collect(Collectors.toList()) : Collections.emptyList();

        List<Long> usuariosAsignadosIds = e.getUsuariosAsignados() != null ?
                e.getUsuariosAsignados().stream().map(Usuario::getId).toList() :
                Collections.emptyList();

        List<Long> entrenadoresAsignadosIds = e.getEntrenadoresAsignados() != null ?
                e.getEntrenadoresAsignados().stream().map(Usuario::getId).toList() :
                Collections.emptyList();

        return EntrenamientoDto.builder()
                .id(e.getId())
                .nombre(e.getNombre())
                .descripcion(e.getDescripcion())
                .fechaInicio(e.getFechaInicio())
                .fechaFin(e.getFechaFin())
                .imagen(e.getImagen())
                .ejercicios(ejercicios)
                .ejerciciosIds(e.getEjercicios() != null ?
                        e.getEjercicios().stream().map(Ejercicio::getId).toList() :
                        Collections.emptyList())
                .usuariosAsignadosIds(usuariosAsignadosIds)
                .entrenadoresAsignadosIds(entrenadoresAsignadosIds)
                .build();
    }
}
