import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuariosService } from "../../../core/services/usuarios.service";
import { Usuario } from "../../../shared/models/usuario";

@Component({
  selector: "app-coach-usuarios",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  cargando = false;
  error: string | null = null;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarMisAtletas();
  }

  cargarMisAtletas(): void {
    this.cargando = true;
    this.error = null;

    this.usuariosService.listarMisUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err: any) => {
        this.error = err.error?.message || "Error al cargar mis atletas";
        this.cargando = false;
      }
    });
  }
}