package com.entrenemos.repository;

import com.entrenemos.entity.PlanUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PlanUsuarioRepository extends JpaRepository<PlanUsuario, Long> {
    Optional<PlanUsuario> findByUsuarioIdAndActivoTrue(Long usuarioId);
    List<PlanUsuario> findByUsuarioId(Long usuarioId);
    List<PlanUsuario> findByActivoTrue();
}

