package com.entrenemos.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "entrenamientos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Entrenamiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;

    @Column(name = "imagen", length = 500)
    private String imagen;

    @ManyToMany
    @JoinTable(
            name = "entrenamiento_ejercicios",
            joinColumns = @JoinColumn(name = "entrenamiento_id"),
            inverseJoinColumns = @JoinColumn(name = "ejercicio_id")
    )
    private List<Ejercicio> ejercicios;

    @ManyToMany
    @JoinTable(
            name = "entrenamiento_usuarios",
            joinColumns = @JoinColumn(name = "entrenamiento_id"),
            inverseJoinColumns = @JoinColumn(name = "usuario_id")
    )
    private List<Usuario> usuariosAsignados;

    @ManyToMany
    @JoinTable(
            name = "entrenamiento_entrenadores",
            joinColumns = @JoinColumn(name = "entrenamiento_id"),
            inverseJoinColumns = @JoinColumn(name = "entrenador_id")
    )
    private List<Usuario> entrenadoresAsignados;

    @ManyToOne
    @JoinColumn(name = "creador_id")
    private Usuario creador;
}
