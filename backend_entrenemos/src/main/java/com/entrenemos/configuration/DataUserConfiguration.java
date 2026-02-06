package com.entrenemos.configuration;

import com.entrenemos.entity.Rol;
import com.entrenemos.entity.Usuario;
import com.entrenemos.repository.RolRepository;
import com.entrenemos.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataUserConfiguration {

    @Bean
    CommandLineRunner initRoles(RolRepository rolRepository) {
        return args -> {
            if (rolRepository.findAll().isEmpty()) {
                rolRepository.save(new Rol(null, "ADMIN"));
                rolRepository.save(new Rol(null, "ENTRENADOR"));
                rolRepository.save(new Rol(null, "ATLETA"));
            }
        };
    }
    @Bean
    CommandLineRunner crearAdmin(
            UsuarioRepository usuarioRepository,
            RolRepository rolRepository,
            PasswordEncoder passwordEncoder
    ) {
        return args -> {

            if (usuarioRepository.findByEmail("admin@gmail.com").isEmpty()) {

                Usuario admin = new Usuario();
                admin.setNombre("Admin");
                admin.setEmail("admin@gmail.com");
                admin.setPassword(passwordEncoder.encode("1234"));
                admin.setTelefono("600000000");
                admin.setFechaRegistro(java.time.LocalDateTime.now());

                Rol rolAdmin = rolRepository.findByNombre("ADMIN")
                        .orElseThrow(() -> new RuntimeException("Rol ADMIN no existe"));

                admin.setRol(rolAdmin);

                usuarioRepository.save(admin);
            }
        };
    }
}
