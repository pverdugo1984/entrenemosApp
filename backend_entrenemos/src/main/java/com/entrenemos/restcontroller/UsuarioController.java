package com.entrenemos.restcontroller;

import com.entrenemos.dto.UsuarioDto;
import com.entrenemos.services.UsuarioService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN','ENTRENADOR')")
    public List<UsuarioDto> listar() {
        return usuarioService.listarUsuarios();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public UsuarioDto guardar(@RequestBody UsuarioDto usuarioDto) {
        return usuarioService.guardarUsuario(usuarioDto);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public UsuarioDto obtenerPorId(@PathVariable Long id) {
        return usuarioService.obtenerUsuario(id);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public UsuarioDto actualizar(@PathVariable Long id, @RequestBody UsuarioDto usuarioDto) {
        return usuarioService.actualizarUsuario(id, usuarioDto);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void eliminar(@PathVariable Long id) {
        usuarioService.eliminarUsuario(id);
    }

    @GetMapping("/entrenadores")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UsuarioDto> listarEntrenadores() {
        return usuarioService.listarUsuariosPorRol("ENTRENADOR");
    }

    @PutMapping("/{usuarioId}/asignar-entrenador/{entrenadorId}")
    @PreAuthorize("hasRole('ADMIN')")
    public void asignarEntrenador(
            @PathVariable Long usuarioId,
            @PathVariable Long entrenadorId) {
        usuarioService.asignarEntrenador(usuarioId, entrenadorId);
    }
}