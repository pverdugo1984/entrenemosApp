import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Header } from "../../../shared/components/header/header";
import { BottomNav } from "../../../shared/components/bottom-nav/bottom-nav";
import { UserProfile } from "../../../shared/components/user-profile/user-profile";
import { AuthService } from "../../../core/services/auth.service";
import { Usuario } from "../../../shared/models/usuario";

@Component({
  selector: "app-perfil",
  imports: [CommonModule, Header, BottomNav, UserProfile],
  templateUrl: "./perfil.html",
  styleUrl: "./perfil.css",
})
export class Perfil implements OnInit {
  private authService = inject(AuthService);
  router = inject(Router);

  usuario: Usuario | null = null;
  loading = true;
  error: string | null = null;

  onFotoActualizada(usuario: Usuario): void {
    this.usuario = usuario;
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.loading = true;
    this.error = null;

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return;
    }

    this.authService.getCurrentUser().subscribe({
      next: (usuario: Usuario) => {
        this.usuario = usuario;
        this.loading = false;
      },
      error: (err: any) => {
        console.error("Error al cargar usuario:", err);
        this.error = "Error al cargar la información del usuario";
        this.loading = false;
      },
    });
  }

  formatearFecha(fecha?: string): string {
    if (!fecha) return "No disponible";
    try {
      const date = new Date(fecha);
      return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return fecha;
    }
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
