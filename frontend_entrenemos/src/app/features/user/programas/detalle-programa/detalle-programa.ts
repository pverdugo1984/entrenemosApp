import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { Header } from "../../../../shared/components/header/header";
import { BottomNav } from "../../../../shared/components/bottom-nav/bottom-nav";
import { EntrenamientoService } from "../../../../core/services/entrenamiento.service";
import { PlanUsuarioService } from "../../../../core/services/plan-usuario.service";
import { AuthService } from "../../../../core/services/auth.service";
import { UsuariosService } from "../../../../core/services/usuarios.service";
import { Entrenamiento } from "../../../../shared/models/entrenamiento.model";
import { Ejercicio } from "../../../../shared/models/ejercicio.model";
import { PlanUsuario } from "../../../../shared/models/plan-usuario.model";
import { Usuario } from "../../../../shared/models/usuario";
import { API_BASE_URL } from "../../../../config/api.config";

@Component({
  selector: "app-detalle-programa",
  imports: [CommonModule, Header, BottomNav],
  templateUrl: "./detalle-programa.html",
  styleUrl: "./detalle-programa.css",
})
export class DetallePrograma implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private entrenamientoService = inject(EntrenamientoService);
  private planUsuarioService = inject(PlanUsuarioService);
  private authService = inject(AuthService);
  private usuariosService = inject(UsuariosService);

  programa: Entrenamiento | null = null;
  usuario: Usuario | null = null;
  planActivo: PlanUsuario | null = null;
  loading = true;
  error: string | null = null;
  asignando = false;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.cargarUsuario().then(() => {
        this.cargarPrograma(Number(id));
        if (this.usuario?.id) {
          this.cargarPlanActivo();
        }
      });
    } else {
      this.error = "ID de programa no válido";
      this.loading = false;
    }
  }

  cargarPrograma(id: number) {
    this.loading = true;
    this.error = null;

    this.entrenamientoService.obtenerPorId(id).subscribe({
      next: (programa: Entrenamiento) => {
        this.programa = programa;
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar el programa";
        this.loading = false;
      },
    });
  }

  volver() {
    this.router.navigate(["/home"]);
  }

  async cargarUsuario(): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      this.authService.fetchCurrentUser().subscribe({
        next: (usuario: Usuario) => {
          this.usuario = usuario;
          resolve();
        },
        error: () => {
          this.cargarUsuarioPorEmail(token).then(resolve);
        },
      });
    });
  }

  async cargarUsuarioPorEmail(token: string): Promise<void> {
    try {
      const { JwtUtil } = await import("../../../../shared/utils/jwt.util");
      const email = JwtUtil.getEmailFromToken(token);
      if (!email) {
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        this.usuariosService.listarUsuarios().subscribe({
          next: (usuarios: Usuario[]) => {
            this.usuario = usuarios.find((u: Usuario) => u.email === email) || null;
            resolve();
          },
          error: () => {
            resolve();
          },
        });
      });
    } catch {
      return Promise.resolve();
    }
  }

  cargarPlanActivo(): void {
    if (!this.usuario?.id) return;

    this.planUsuarioService.obtenerPlanActivo(this.usuario.id).subscribe({
      next: (plan) => {
        this.planActivo = plan;
        if (plan) {
          localStorage.setItem(
            `plan-activo-${this.usuario!.id}`,
            JSON.stringify(plan)
          );
        }
      },
      error: () => {
        const planGuardado = localStorage.getItem(
          `plan-activo-${this.usuario!.id}`
        );
        if (planGuardado) {
          try {
            this.planActivo = JSON.parse(planGuardado);
          } catch {}
        }
      },
    });
  }

  calcularDuracionDias(): number {
    if (!this.programa) return 7;
    if (this.programa.fechaInicio && this.programa.fechaFin) {
      const inicio = new Date(this.programa.fechaInicio);
      const fin = new Date(this.programa.fechaFin);
      return Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
    }
    return 7;
  }

  seleccionarPlan(): void {
    if (!this.usuario) {
      alert("Error: No se pudo identificar al usuario. Por favor, recarga la página.");
      return;
    }

    if (!this.usuario.id) {
      alert("Error: El usuario no tiene un ID válido. Por favor, recarga la página.");
      return;
    }

    if (!this.programa || !this.programa.id) {
      alert("Error: El plan seleccionado no es válido.");
      return;
    }

    if (this.esPlanActivo()) {
      return;
    }

    if (this.planActivo) {
      if (
        !confirm(
          "Ya tienes un plan activo. ¿Deseas reemplazarlo por este nuevo plan?"
        )
      ) {
        return;
      }
    }

    const usuarioId = this.usuario.id;
    const entrenamientoId = this.programa.id;

    this.asignando = true;
    this.error = null;

    this.planUsuarioService.asignarPlan(usuarioId, entrenamientoId).subscribe({
      next: (planCreado) => {
        if (
          planCreado.entrenamiento &&
          planCreado.entrenamiento.ejerciciosIds &&
          planCreado.entrenamiento.ejerciciosIds.length > 0 &&
          (!planCreado.entrenamiento.ejercicios ||
            planCreado.entrenamiento.ejercicios.length === 0)
        ) {
          planCreado.entrenamiento = this.programa!;
        }

        if (!planCreado.fechaFin) {
          const fechaInicio = new Date(planCreado.fechaInicio);
          fechaInicio.setDate(fechaInicio.getDate() + this.calcularDuracionDias());
          planCreado.fechaFin = fechaInicio.toISOString().split("T")[0];
        }

        if (!planCreado.ejerciciosCompletados) {
          planCreado.ejerciciosCompletados = [];
        }

        this.planActivo = planCreado;
        this.asignando = false;

        if (this.usuario?.id) {
          localStorage.setItem(
            `plan-activo-${this.usuario.id}`,
            JSON.stringify(this.planActivo)
          );
        }

        alert(`¡Plan "${this.programa!.nombre}" asignado con éxito!`);
        this.router.navigate(["/rutina"]);
      },
      error: () => {
        this.asignarPlanLocalStorage();
      },
    });
  }

  asignarPlanLocalStorage(): void {
    if (!this.usuario?.id || !this.programa?.id) {
      return;
    }

    const usuarioId = this.usuario.id;
    const entrenamientoId = this.programa.id;
    const duracionDias = this.calcularDuracionDias();

    const nuevoPlan: PlanUsuario = {
      usuarioId: usuarioId,
      entrenamientoId: entrenamientoId,
      fechaInicio: new Date().toISOString().split("T")[0],
      activo: true,
      entrenamiento: this.programa,
      ejerciciosCompletados: [],
    };

    const fechaInicio = new Date(nuevoPlan.fechaInicio);
    fechaInicio.setDate(fechaInicio.getDate() + duracionDias);
    nuevoPlan.fechaFin = fechaInicio.toISOString().split("T")[0];

    localStorage.setItem(`plan-activo-${usuarioId}`, JSON.stringify(nuevoPlan));

    this.planActivo = nuevoPlan;
    this.asignando = false;

    alert(
      `¡Plan "${this.programa!.nombre}" asignado con éxito! (modo offline)`
    );
    this.router.navigate(["/rutina"]);
  }

  esPlanActivo(): boolean {
    if (!this.planActivo || !this.programa) return false;
    return this.planActivo.entrenamientoId === this.programa.id;
  }

  comenzarEntrenamiento() {
    this.seleccionarPlan();
  }

  formatearFecha(fecha?: string): string {
    if (!fecha) return "No especificada";
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

  getImagenUrl(entrenamiento: Entrenamiento | null): string {
    if (!entrenamiento) {
      return "/assets/bf-image.jpg";
    }
    if (entrenamiento.imagen) {
      if (entrenamiento.imagen.startsWith("/uploads/")) {
        const baseUrl = API_BASE_URL.replace("/api", "");
        return `${baseUrl}${entrenamiento.imagen}`;
      }
      return entrenamiento.imagen;
    }
    return "/assets/bf-image.jpg";
  }
}
