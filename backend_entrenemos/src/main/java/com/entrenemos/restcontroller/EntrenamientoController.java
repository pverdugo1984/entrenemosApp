package com.entrenemos.restcontroller;

import com.entrenemos.dto.EntrenamientoDto;
import com.entrenemos.entity.Usuario;
import com.entrenemos.repository.UsuarioRepository;
import com.entrenemos.services.EntrenamientoService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entrenamientos")
@RequiredArgsConstructor
public class EntrenamientoController {

    private final EntrenamientoService entrenamientoService;
    private final UsuarioRepository usuarioRepository;

    @PreAuthorize("hasAnyRole('ADMIN', 'ENTRENADOR')")
    @PostMapping
    public EntrenamientoDto crear(@RequestBody EntrenamientoDto dto, Authentication authentication) {
        Usuario creador = usuarioRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return entrenamientoService.crear(dto, creador.getId());
    }

    @GetMapping
    public List<EntrenamientoDto> listar(Authentication authentication) {
        if (authentication == null) {
            return entrenamientoService.listar();
        }
        
        if (authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
            return entrenamientoService.listar();
        }
        
        if (authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ENTRENADOR"))) {
            Usuario entrenador = usuarioRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            return entrenamientoService.listarPorEntrenador(entrenador.getId());
        }
        
        Usuario usuario = usuarioRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return entrenamientoService.listarPorUsuario(usuario.getId());
    }

    @GetMapping("/{id}")
    public EntrenamientoDto obtener(@PathVariable Long id) {
        return entrenamientoService.obtenerPorId(id);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'ENTRENADOR')")
    @PutMapping("/{id}")
    public EntrenamientoDto actualizar(@PathVariable Long id, @RequestBody EntrenamientoDto dto) {
        return entrenamientoService.actualizar(id, dto);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'ENTRENADOR')")
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        entrenamientoService.eliminar(id);
    }

    @GetMapping("/mis-programas")
    public List<EntrenamientoDto> misProgramas(Authentication authentication) {
        Usuario usuario = usuarioRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return entrenamientoService.listarPorUsuario(usuario.getId());
    }
}
