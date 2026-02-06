package com.entrenemos.services;

import com.entrenemos.dto.UsuarioDto;
import com.entrenemos.entity.Rol;
import com.entrenemos.entity.Usuario;
import com.entrenemos.repository.RolRepository;
import com.entrenemos.repository.UsuarioRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository,
                              RolRepository rolRepository,
                              PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<UsuarioDto> listarUsuarios() {
        return usuarioRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private UsuarioDto mapToDto(Usuario u) {
        UsuarioDto dto = new UsuarioDto();
        dto.setId(u.getId());
        dto.setNombre(u.getNombre());
        dto.setEmail(u.getEmail());
        dto.setRol(u.getRol().getNombre());
        dto.setTelefono(u.getTelefono());
        dto.setFechaRegistro(u.getFechaRegistro());
        dto.setFotoPerfil(u.getFotoPerfil());

        if (u.getEntrenador() != null) {
            dto.setEntrenadorId(u.getEntrenador().getId());
        }

        return dto;
    }

    @Override
    public UsuarioDto guardarUsuario(UsuarioDto usuarioDTO) {
        Usuario usuario = new Usuario();
        usuario.setNombre(usuarioDTO.getNombre());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setPassword(passwordEncoder.encode(usuarioDTO.getPassword()));
        usuario.setTelefono(usuarioDTO.getTelefono());
        usuario.setFechaRegistro(LocalDateTime.now());

        Rol rol = rolRepository.findByNombre(usuarioDTO.getRol())
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        usuario.setRol(rol);

        if ("ATLETA".equalsIgnoreCase(usuarioDTO.getRol()) && usuarioDTO.getEntrenadorId() != null) {
            Usuario entrenador = usuarioRepository.findById(usuarioDTO.getEntrenadorId())
                    .orElseThrow(() -> new RuntimeException("Entrenador no encontrado"));
            usuario.setEntrenador(entrenador);
        }

        usuarioRepository.save(usuario);

        usuarioDTO.setId(usuario.getId());
        usuarioDTO.setFechaRegistro(usuario.getFechaRegistro());
        return usuarioDTO;
    }

    @Override
    public UsuarioDto obtenerUsuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return mapToDto(usuario);
    }

    @Override
    public UsuarioDto actualizarUsuario(Long id, UsuarioDto usuarioDto) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        usuario.setNombre(usuarioDto.getNombre());
        usuario.setEmail(usuarioDto.getEmail());
        usuario.setTelefono(usuarioDto.getTelefono());

        if (usuarioDto.getPassword() != null && !usuarioDto.getPassword().isBlank()) {
            usuario.setPassword(passwordEncoder.encode(usuarioDto.getPassword()));
        }

        if (usuarioDto.getFotoPerfil() != null) {
            usuario.setFotoPerfil(usuarioDto.getFotoPerfil());
        }

        Rol rol = rolRepository.findByNombre(usuarioDto.getRol())
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        usuario.setRol(rol);

        if ("ATLETA".equalsIgnoreCase(usuarioDto.getRol()) && usuarioDto.getEntrenadorId() != null) {
            Usuario entrenador = usuarioRepository.findById(usuarioDto.getEntrenadorId())
                    .orElseThrow(() -> new RuntimeException("Entrenador no encontrado"));
            usuario.setEntrenador(entrenador);
        } else {
            usuario.setEntrenador(null);
        }

        usuarioRepository.save(usuario);

        usuarioDto.setId(usuario.getId());
        usuarioDto.setFechaRegistro(usuario.getFechaRegistro());
        return usuarioDto;
    }

    @Override
    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public List<UsuarioDto> listarUsuariosPorEntrenadorEmail(String emailEntrenador) {
        Usuario entrenador = usuarioRepository.findByEmail(emailEntrenador)
                .orElseThrow(() -> new RuntimeException("Entrenador no encontrado"));

        return usuarioRepository.findByEntrenador(entrenador)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<UsuarioDto> listarUsuariosPorRol(String rol) {
        return usuarioRepository.findByRolNombre(rol)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void asignarEntrenador(Long usuarioId, Long entrenadorId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Usuario entrenador = usuarioRepository.findById(entrenadorId)
                .orElseThrow(() -> new RuntimeException("Entrenador no encontrado"));

        usuario.setEntrenador(entrenador);
        usuarioRepository.save(usuario);
    }
}
