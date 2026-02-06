import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Header } from "../../../shared/components/header/header";
import { UserProfile } from "../../../shared/components/user-profile/user-profile";
import { ProgramCard } from "../../../shared/components/program-card/program-card";
import { BottomNav } from "../../../shared/components/bottom-nav/bottom-nav";
import { EntrenamientoService } from "../../../core/services/entrenamiento.service";
import { ProgresoService } from "../../../core/services/progreso.service";
import { AuthService } from "../../../core/services/auth.service";
import { Entrenamiento } from "../../../shared/models/entrenamiento.model";
import { Usuario } from "../../../shared/models/usuario";
import { Progreso } from "../../../shared/models/progreso.model";

@Component({
  selector: "app-home",
  imports: [CommonModule, Header, UserProfile, ProgramCard, BottomNav],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home implements OnInit {
  private entrenamientoService = inject(EntrenamientoService);
  private progresoService = inject(ProgresoService);
  private authService = inject(AuthService);
  router = inject(Router);

  programas: Entrenamiento[] = [];
  programasDestacados: Entrenamiento[] = [];
  usuario: Usuario | null = null;
  progresos: Progreso[] = [];
  loading = true;
  error: string | null = null;

  totalProgramas = 0;
  totalProgresos = 0;
  programasCompletados = 0;

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.loading = true;
    this.error = null;

    this.entrenamientoService.listar().subscribe({
      next: (programas) => {
        this.programas = programas;
        this.totalProgramas = programas.length;
        this.programasDestacados = programas.slice(0, 2);
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar los programas";
        this.loading = false;
      },
    });

    this.cargarUsuarioActual();
  }

  cargarUsuarioActual() {
    if (!this.authService.isAuthenticated()) {
      return;
    }

    this.authService.fetchCurrentUser().subscribe({
      next: (usuario: Usuario) => {
        this.usuario = usuario;
        if (usuario.id) {
          this.cargarProgresos(usuario.id);
        }
      },
      error: () => {
        this.usuario = null;
      },
    });
  }

  verTodosLosPlanes() {
    this.router.navigate(["/rutina"], { queryParams: { vista: "disponibles" } });
  }

  cargarProgresos(usuarioId: number) {
    this.progresoService.obtenerPorUsuario(usuarioId).subscribe({
      next: (progresos) => {
        this.progresos = progresos;
        this.totalProgresos = progresos.length;
        this.programasCompletados = Math.floor(progresos.length / 3);
      },
      error: () => {},
    });
  }

  get saludoPersonalizado(): string {
    const hora = new Date().getHours();
    if (hora < 12) return "Buenos días";
    if (hora < 18) return "Buenas tardes";
    return "Buenas noches";
  }

  verDetallePrograma(programa: Entrenamiento) {
    if (programa.id) {
      this.router.navigate(["/rutina", programa.id]);
    }
  }
}
