package com.entrenemos.restcontroller;

import com.entrenemos.dto.UsuarioDto;
import com.entrenemos.services.UsuarioService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coach")
@CrossOrigin(origins = "*")
public class CoachController {

    private final UsuarioService usuarioService;

    public CoachController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping("/mis-usuarios")
    public List<UsuarioDto> misUsuarios(Authentication authentication) {
        String emailEntrenador = authentication.getName();
        return usuarioService.listarUsuariosPorEntrenadorEmail(emailEntrenador);
    }

    @GetMapping("/usuarios")
    public List<UsuarioDto> todosUsuarios() {
        return usuarioService.listarUsuariosPorRol("ATLETA");
    }
}