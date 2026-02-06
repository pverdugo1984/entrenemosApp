package com.entrenemos.restcontroller;

import com.entrenemos.dto.EntrenamientoDto;
import com.entrenemos.entity.Entrenamiento;
import com.entrenemos.repository.EntrenamientoRepository;
import com.entrenemos.services.EntrenamientoService;
import com.entrenemos.services.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/entrenamientos")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class EntrenamientoImagenController {

    private final EntrenamientoRepository entrenamientoRepository;
    private final EntrenamientoService entrenamientoService;
    private final FileStorageService fileStorageService;

    @PreAuthorize("hasAnyRole('ADMIN', 'ENTRENADOR')")
    @PostMapping("/{id}/imagen")
    public ResponseEntity<?> subirImagen(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file) {
        
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "El archivo está vacío"));
            }

            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "El archivo debe ser una imagen"));
            }

            Entrenamiento entrenamiento = entrenamientoRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Entrenamiento no encontrado"));

            if (entrenamiento.getImagen() != null && !entrenamiento.getImagen().isEmpty()) {
                try {
                    fileStorageService.deleteFile(entrenamiento.getImagen());
                } catch (IOException e) {
                }
            }

            String imagenPath = fileStorageService.storeFile(file, "entrenamientos");

            entrenamiento.setImagen(imagenPath);
            entrenamientoRepository.save(entrenamiento);

            EntrenamientoDto dto = entrenamientoService.obtenerPorId(id);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Imagen del plan de entrenamiento actualizada correctamente");
            response.put("entrenamiento", dto);
            response.put("imagen", imagenPath);

            return ResponseEntity.ok(response);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Error al guardar la imagen: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Error: " + e.getMessage()));
        }
    }
}



