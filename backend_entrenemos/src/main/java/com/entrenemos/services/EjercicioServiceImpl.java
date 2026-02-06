package com.entrenemos.services;

import com.entrenemos.dto.EjercicioDto;
import com.entrenemos.entity.Ejercicio;
import com.entrenemos.entity.Entrenamiento;
import com.entrenemos.repository.EjercicioRepository;
import com.entrenemos.repository.EntrenamientoRepository;
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
public class EjercicioServiceImpl implements EjercicioService{

    private final EjercicioRepository ejercicioRepository;
    private final EntrenamientoRepository entrenamientoRepository;

    @Override
    @Transactional
    public EjercicioDto crear(EjercicioDto dto){
        Ejercicio e = Ejercicio.builder()
                .nombre(dto.getNombre())
                .descripcion(dto.getDescripcion())
                .tipo(dto.getTipo())
                .videoUrl(dto.getVideoUrl())
                .repeticiones(dto.getRepeticiones())
                .peso(dto.getPeso())
                .build();
        e = ejercicioRepository.save(e);
        vincularAEntrenamientos(e, dto.getEntrenamientosIds());
        return mapToDto(e);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EjercicioDto> listar(){
        return ejercicioRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public EjercicioDto obtenerPorId(Long id){
        Ejercicio e = ejercicioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ejercicio no encontrado"));
        return mapToDto(e);
    }

    @Override
    @Transactional
    public EjercicioDto actualizar(Long id, EjercicioDto dto){
        Ejercicio e = ejercicioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ejercicio no encontrado"));
        
        e.setNombre(dto.getNombre());
        e.setDescripcion(dto.getDescripcion());
        e.setTipo(dto.getTipo());
        e.setVideoUrl(dto.getVideoUrl());
        e.setRepeticiones(dto.getRepeticiones());
        e.setPeso(dto.getPeso());
        
        e = ejercicioRepository.save(e);
        actualizarVínculosConEntrenamientos(e, dto.getEntrenamientosIds());
        return mapToDto(e);
    }

    @Override
    @Transactional
    public  void eliminar(Long id){
        Ejercicio ejercicio = ejercicioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ejercicio no encontrado"));
        
        List<Entrenamiento> entrenamientos = entrenamientoRepository.findAll();
        for (Entrenamiento entrenamiento : entrenamientos) {
            if (entrenamiento.getEjercicios() != null && entrenamiento.getEjercicios().contains(ejercicio)) {
                entrenamiento.getEjercicios().remove(ejercicio);
                entrenamientoRepository.save(entrenamiento);
            }
        }
        
        ejercicioRepository.deleteById(id);
    }

    private void vincularAEntrenamientos(Ejercicio ejercicio, List<Long> entrenamientosIds) {
        if (entrenamientosIds != null && !entrenamientosIds.isEmpty()) {
            List<Entrenamiento> entrenamientos = entrenamientoRepository.findAllById(entrenamientosIds);
            if (entrenamientos.size() != entrenamientosIds.size()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Algunos entrenamientos no existen");
            }
            
            for (Entrenamiento entrenamiento : entrenamientos) {
                if (entrenamiento.getEjercicios() == null) {
                    entrenamiento.setEjercicios(Collections.emptyList());
                }
                if (!entrenamiento.getEjercicios().contains(ejercicio)) {
                    entrenamiento.getEjercicios().add(ejercicio);
                    entrenamientoRepository.save(entrenamiento);
                }
            }
        }
    }

    private void actualizarVínculosConEntrenamientos(Ejercicio ejercicio, List<Long> entrenamientosIds) {
        List<Entrenamiento> todosLosEntrenamientos = entrenamientoRepository.findAll();
        for (Entrenamiento entrenamiento : todosLosEntrenamientos) {
            if (entrenamiento.getEjercicios() != null && entrenamiento.getEjercicios().contains(ejercicio)) {
                entrenamiento.getEjercicios().remove(ejercicio);
                entrenamientoRepository.save(entrenamiento);
            }
        }
        vincularAEntrenamientos(ejercicio, entrenamientosIds);
    }

    private EjercicioDto mapToDto(Ejercicio e) {
        List<Long> entrenamientosIds = entrenamientoRepository.findAll()
                .stream()
                .filter(ent -> ent.getEjercicios() != null && ent.getEjercicios().contains(e))
                .map(Entrenamiento::getId)
                .collect(Collectors.toList());

        return EjercicioDto.builder()
                .id(e.getId())
                .nombre(e.getNombre())
                .descripcion(e.getDescripcion())
                .repeticiones(e.getRepeticiones())
                .peso(e.getPeso())
                .tipo(e.getTipo())
                .videoUrl(e.getVideoUrl())
                .entrenamientosAsignadosIds(entrenamientosIds)
                .build();
    }
}
