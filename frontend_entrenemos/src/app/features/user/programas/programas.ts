import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";
import { Header } from "../../../shared/components/header/header";
import { BottomNav } from "../../../shared/components/bottom-nav/bottom-nav";
import { WodTimerComponent } from "../../../shared/components/wod-timer/wod-timer";
import { EntrenamientoService } from "../../../core/services/entrenamiento.service";
import { EjercicioService } from "../../../core/services/ejercicio.service";
import { PlanUsuarioService } from "../../../core/services/plan-usuario.service";
import { ProgresoService } from "../../../core/services/progreso.service";
import { AuthService } from "../../../core/services/auth.service";
import { UsuariosService } from "../../../core/services/usuarios.service";
import { Entrenamiento } from "../../../shared/models/entrenamiento.model";
import { Ejercicio } from "../../../shared/models/ejercicio.model";
import {
  PlanUsuario,
  PlanDisponible,
} from "../../../shared/models/plan-usuario.model";
import { Progreso as ProgresoModelo } from "../../../shared/models/progreso.model";
import { Usuario } from "../../../shared/models/usuario";
import { forkJoin, map, of } from "rxjs";
import { API_BASE_URL } from "../../../config/api.config";

interface EntrenamientoConEjercicios extends Entrenamiento {
  ejercicios: Ejercicio[];
}

@Component({
  selector: "app-programas",
  imports: [CommonModule, FormsModule, RouterModule, Header, BottomNav, WodTimerComponent],
  templateUrl: "./programas.html",
  styleUrl: "./programas.css",
})
export class Programas implements OnInit {
  private entrenamientoService = inject(EntrenamientoService);
  private ejercicioService = inject(EjercicioService);
  private planUsuarioService = inject(PlanUsuarioService);
  private progresoService = inject(ProgresoService);
  private authService = inject(AuthService);
  private usuariosService = inject(UsuariosService);
  private route = inject(ActivatedRoute);
  router = inject(Router);

  vistaSeleccionada: "disponibles" | "mi-plan" = "mi-plan";
  planesDisponibles: PlanDisponible[] = [];
  planActivo: PlanUsuario | null = null;
  usuario: Usuario | null = null;
  cargando = false;
  error: string | null = null;
  asignando = false;

  ejercicios: Ejercicio[] = [];
  ejerciciosDelPlan: Ejercicio[] = [];
  ejercicioSeleccionadoId: number | null = null;
  peso: number | null = null;
  repeticiones: number | null = null;
  tiempo: number | null = null;
  fecha: string = new Date().toISOString().split("T")[0];
  guardando = false;
  exito = false;

  ngOnInit(): void {
    const vistaParam = this.route.snapshot.queryParams['vista'];
    if (vistaParam === 'disponibles') {
      this.vistaSeleccionada = 'disponibles';
    }
    this.cargarUsuarioYPlan();
  }

  cambiarVista(vista: "disponibles" | "mi-plan"): void {
    this.vistaSeleccionada = vista;
    if (vista === "disponibles") {
      this.cargarPlanesDisponibles();
    } else {
      this.cargarPlanActivo();
      this.cargarEjercicios();
    }
  }

  cargarUsuarioYPlan() {
    this.cargando = true;
    this.error = null;
    this.cargarUsuario().then(() => {
      if (this.usuario && this.usuario.id) {
        this.cargarPlanActivo();
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargarEjercicios();
        } else {
          this.cargarPlanesDisponibles();
        }
      } else {
        this.error =
          "No se pudo cargar la información del usuario. Por favor, recarga la página.";
        this.cargando = false;
      }
    });
  }

  async cargarUsuario(): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      this.cargando = false;
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
      const { JwtUtil } = await import("../../../shared/utils/jwt.util");
      const email = JwtUtil.getEmailFromToken(token);
      if (!email) {
        this.cargando = false;
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        this.usuariosService.listarUsuarios().subscribe({
          next: (usuarios: Usuario[]) => {
            this.usuario =
              usuarios.find((u: Usuario) => u.email === email) || null;

            if (!this.usuario) {
              this.error =
                "No se pudo encontrar tu usuario. Por favor, contacta al administrador.";
            }
            resolve();
          },
          error: () => {
            this.error = "Error al cargar los datos del usuario";
            this.cargando = false;
            resolve();
          },
        });
      });
    } catch {
      this.cargando = false;
      return Promise.resolve();
    }
  }

  cargarPlanesDisponibles(): void {
    this.cargando = true;
    this.error = null;

    this.entrenamientoService.listar().subscribe({
      next: (entrenamientos) => {
        const planes: PlanDisponible[] = entrenamientos.map((ent) => {
          let duracionDias = 7;
          if (ent.fechaInicio && ent.fechaFin) {
            const inicio = new Date(ent.fechaInicio);
            const fin = new Date(ent.fechaFin);
            duracionDias = Math.ceil(
              (fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24)
            );
          }

          return {
            entrenamiento: ent,
            duracionDias,
            dificultad: this.estimarDificultad(ent),
            categoria: "General",
          };
        });

        if (planes.length === 0) {
          this.planesDisponibles = [];
          this.cargando = false;
          return;
        }

        const solicitudesEjercicios = planes.map((plan) => {
          const ent = plan.entrenamiento;
          if (!ent.ejerciciosIds || ent.ejerciciosIds.length === 0) {
            return of({
              ...plan,
              entrenamiento: { ...ent, ejercicios: [] as Ejercicio[] },
            });
          }

          const observablesEjercicios = ent.ejerciciosIds.map((id) =>
            this.ejercicioService.obtenerPorId(id)
          );

          return forkJoin(observablesEjercicios).pipe(
            map((ejercicios) => ({
              ...plan,
              entrenamiento: { ...ent, ejercicios },
            }))
          );
        });

        forkJoin(solicitudesEjercicios).subscribe({
          next: (planesConEjercicios) => {
            this.planesDisponibles = planesConEjercicios as PlanDisponible[];
            this.cargando = false;
          },
          error: () => {
            this.error = "Error al cargar los ejercicios";
            this.cargando = false;
          },
        });
      },
      error: () => {
        this.error = "Error al cargar los planes disponibles";
        this.cargando = false;
      },
    });
  }

  cargarPlanActivo(): void {
    if (!this.usuario?.id) {
      this.planActivo = null;
      return;
    }

    const usuarioId = this.usuario.id;
    this.planUsuarioService.obtenerPlanActivo(usuarioId).subscribe({
      next: (plan) => {
        if (plan) {
          if (
            plan.entrenamiento &&
            plan.entrenamiento.ejerciciosIds &&
            plan.entrenamiento.ejerciciosIds.length > 0 &&
            (!plan.entrenamiento.ejercicios ||
              plan.entrenamiento.ejercicios.length === 0)
          ) {
            this.cargarEjerciciosDelPlanConPlan(plan);
          } else {
            this.planActivo = plan;
            if (this.vistaSeleccionada === "mi-plan") {
              this.cargando = false;
              this.cargarEjerciciosDelPlan();
              this.cargarEjercicios();
            }
          }
        } else {
          this.cargarPlanDesdeLocalStorage();
        }
      },
      error: () => {
        this.cargarPlanDesdeLocalStorage();
      },
    });
  }

  cargarPlanDesdeLocalStorage(): void {
    if (!this.usuario?.id) {
      this.planActivo = null;
      if (this.vistaSeleccionada === "mi-plan") {
        this.cargando = false;
      }
      return;
    }

    const usuarioId = this.usuario.id;
    const planGuardado = localStorage.getItem(`plan-activo-${usuarioId}`);
    if (planGuardado) {
      try {
        this.planActivo = JSON.parse(planGuardado);
        if (this.planActivo && !this.planActivo.id) {
          this.sincronizarPlanConBackend();
        }
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargarEjerciciosDelPlan();
          this.cargarEjercicios();
        }
      } catch {
        this.planActivo = null;
      }
    } else {
      this.planActivo = null;
    }
    if (this.vistaSeleccionada === "mi-plan") {
      this.cargando = false;
    }
  }

  cargarEjerciciosDelPlanConPlan(plan: PlanUsuario): void {
    if (
      !plan.entrenamiento?.ejerciciosIds ||
      plan.entrenamiento.ejerciciosIds.length === 0
    ) {
      this.planActivo = plan;
      if (this.vistaSeleccionada === "mi-plan") {
        this.cargando = false;
      }
      return;
    }

    const observablesEjercicios = plan.entrenamiento.ejerciciosIds.map((id) =>
      this.ejercicioService.obtenerPorId(id)
    );

    forkJoin(observablesEjercicios).subscribe({
      next: (ejercicios) => {
        if (plan.entrenamiento) {
          plan.entrenamiento.ejercicios = ejercicios;
        }
        this.planActivo = plan;
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargando = false;
          this.cargarEjerciciosDelPlan();
          this.cargarEjercicios();
        }
      },
      error: () => {
        this.planActivo = plan;
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargando = false;
        }
      },
    });
  }

  sincronizarPlanConBackend(): void {
    if (
      !this.planActivo ||
      !this.usuario?.id ||
      !this.planActivo.entrenamientoId
    ) {
      return;
    }

    const usuarioId = this.usuario.id;
    const entrenamientoId = this.planActivo.entrenamientoId;

    this.planUsuarioService.asignarPlan(usuarioId, entrenamientoId).subscribe({
      next: (planCreado) => {
        this.planActivo = { ...this.planActivo, ...planCreado };
        localStorage.setItem(
          `plan-activo-${usuarioId}`,
          JSON.stringify(this.planActivo)
        );
      },
      error: () => {},
    });
  }

  seleccionarPlan(plan: PlanDisponible): void {
    if (!this.usuario) {
      alert(
        "Error: No se pudo identificar al usuario. Por favor, recarga la página."
      );
      return;
    }

    if (!this.usuario.id) {
      alert(
        "Error: El usuario no tiene un ID válido. Por favor, recarga la página."
      );
      return;
    }

    if (!plan.entrenamiento || !plan.entrenamiento.id) {
      alert("Error: El plan seleccionado no es válido.");
      return;
    }

    if (this.esPlanActivo(plan)) {
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
    const entrenamientoId = plan.entrenamiento.id;

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
          planCreado.entrenamiento = plan.entrenamiento;
        }

        if (!planCreado.fechaFin) {
          const fechaInicio = new Date(planCreado.fechaInicio);
          fechaInicio.setDate(fechaInicio.getDate() + plan.duracionDias);
          planCreado.fechaFin = fechaInicio.toISOString().split("T")[0];
        }

        if (!planCreado.ejerciciosCompletados) {
          planCreado.ejerciciosCompletados = [];
        }

        this.planActivo = planCreado;
        this.asignando = false;
        this.vistaSeleccionada = "mi-plan";
        this.cargarEjerciciosDelPlan();
        this.cargarEjercicios();

        if (this.usuario?.id) {
          localStorage.setItem(
            `plan-activo-${this.usuario.id}`,
            JSON.stringify(this.planActivo)
          );
        }

        alert(`¡Plan "${plan.entrenamiento.nombre}" asignado con éxito!`);
      },
      error: () => {
        this.asignarPlanLocalStorage(plan);
      },
    });
  }

  asignarPlanLocalStorage(plan: PlanDisponible): void {
    if (!this.usuario?.id || !plan.entrenamiento.id) {
      return;
    }

    const usuarioId = this.usuario.id;
    const entrenamientoId = plan.entrenamiento.id;

    const nuevoPlan: PlanUsuario = {
      usuarioId: usuarioId,
      entrenamientoId: entrenamientoId,
      fechaInicio: new Date().toISOString().split("T")[0],
      activo: true,
      entrenamiento: plan.entrenamiento,
      ejerciciosCompletados: [],
    };

    const fechaInicio = new Date(nuevoPlan.fechaInicio);
    fechaInicio.setDate(fechaInicio.getDate() + plan.duracionDias);
    nuevoPlan.fechaFin = fechaInicio.toISOString().split("T")[0];

    localStorage.setItem(`plan-activo-${usuarioId}`, JSON.stringify(nuevoPlan));

    this.planActivo = nuevoPlan;
    this.asignando = false;
    this.vistaSeleccionada = "mi-plan";

    alert(
      `¡Plan "${plan.entrenamiento.nombre}" asignado con éxito! (modo offline)`
    );
  }

  estimarDificultad(
    entrenamiento: Entrenamiento
  ): "Principiante" | "Intermedio" | "Avanzado" {
    const numEjercicios = entrenamiento.ejerciciosIds?.length || 0;
    if (numEjercicios <= 3) return "Principiante";
    if (numEjercicios <= 6) return "Intermedio";
    return "Avanzado";
  }

  obtenerProgresoPlan(): number {
    if (!this.planActivo) return 0;

    const fechaInicio = this.planActivo.entrenamiento?.fechaInicio;
    if (!fechaInicio) return 0;

    const fechaFin = this.planActivo.entrenamiento?.fechaFin;
    if (!fechaFin) return 0;

    const fechaInicioStr = fechaInicio.split('T')[0];
    const fechaFinStr = fechaFin.split('T')[0];
    const hoyStr = new Date().toISOString().split('T')[0];

    const inicioNum = parseInt(fechaInicioStr.replace(/-/g, ''), 10);
    const finNum = parseInt(fechaFinStr.replace(/-/g, ''), 10);
    const hoyNum = parseInt(hoyStr.replace(/-/g, ''), 10);

    if (hoyNum < inicioNum) return 0;
    if (hoyNum >= finNum) return 100;

    const [inicioYear, inicioMonth, inicioDay] = fechaInicioStr.split('-').map(Number);
    const [finYear, finMonth, finDay] = fechaFinStr.split('-').map(Number);
    const [hoyYear, hoyMonth, hoyDay] = hoyStr.split('-').map(Number);

    const inicioUTC = Date.UTC(inicioYear, inicioMonth - 1, inicioDay);
    const finUTC = Date.UTC(finYear, finMonth - 1, finDay);
    const hoyUTC = Date.UTC(hoyYear, hoyMonth - 1, hoyDay);

    const diasTranscurridos = Math.floor((hoyUTC - inicioUTC) / (1000 * 60 * 60 * 24)) + 1;
    const diasTotales = Math.floor((finUTC - inicioUTC) / (1000 * 60 * 60 * 24)) + 1;

    if (diasTotales <= 0) return 0;

    const porcentaje = Math.round((diasTranscurridos / diasTotales) * 100);
    
    return Math.max(0, Math.min(100, porcentaje));
  }

  verPlanActivo(): void {
    if (this.planActivo?.entrenamiento?.id) {
      this.router.navigate(["/rutina", this.planActivo.entrenamiento.id]);
    }
  }

  verDetallePlan(entrenamientoId: number | undefined): void {
    if (entrenamientoId) {
      this.router.navigate(["/rutina", entrenamientoId]);
    }
  }

  formatearFecha(fecha?: string): string {
    if (!fecha) return "No especificada";
    try {
      const date = new Date(fecha);
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return fecha;
    }
  }

  calcularDiasRestantes(): number {
    if (!this.planActivo?.fechaFin) return 0;
    const hoy = new Date();
    const fin = new Date(this.planActivo.fechaFin);
    const diff = fin.getTime() - hoy.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  cargarEjerciciosDelPlan(): void {
    if (!this.planActivo) {
      this.ejerciciosDelPlan = [];
      return;
    }

    if (
      this.planActivo.entrenamiento?.ejercicios &&
      this.planActivo.entrenamiento.ejercicios.length > 0
    ) {
      this.ejerciciosDelPlan = this.planActivo.entrenamiento.ejercicios;
      return;
    }

    if (
      this.planActivo.entrenamiento?.ejerciciosIds &&
      this.planActivo.entrenamiento.ejerciciosIds.length > 0
    ) {
      const observables = this.planActivo.entrenamiento.ejerciciosIds.map(
        (id) => this.ejercicioService.obtenerPorId(id)
      );

      forkJoin(observables).subscribe({
        next: (ejercicios) => {
          this.ejerciciosDelPlan = ejercicios;
          if (this.planActivo?.entrenamiento) {
            this.planActivo.entrenamiento.ejercicios = ejercicios;
          }
        },
        error: () => {
          this.ejerciciosDelPlan = [];
        },
      });
    } else {
      this.ejerciciosDelPlan = [];
    }
  }

  cargarEjercicios(): void {
    this.ejercicioService.listar().subscribe({
      next: (ejercicios) => {
        this.ejercicios = ejercicios;
      },
      error: () => {},
    });
  }

  get ejerciciosDisponibles(): Ejercicio[] {
    if (this.planActivo && this.ejerciciosDelPlan.length > 0) {
      return this.ejerciciosDelPlan;
    }
    return [];
  }

  get ejercicioSeleccionado(): Ejercicio | null {
    if (!this.ejercicioSeleccionadoId) return null;
    
    const idBuscado = Number(this.ejercicioSeleccionadoId);
    
    let ejercicio = this.ejerciciosDisponibles.find(
      (ej) => ej.id === idBuscado
    );
    
    if (!ejercicio || !ejercicio.videoUrl) {
      const ejercicioCompleto = this.ejercicios.find(
        (ej) => ej.id === idBuscado
      );
      
      if (ejercicioCompleto) {
        if (ejercicio && ejercicioCompleto.videoUrl) {
          ejercicio.videoUrl = ejercicioCompleto.videoUrl;
          const index = this.ejerciciosDelPlan.findIndex(ej => ej.id === idBuscado);
          if (index !== -1) {
            this.ejerciciosDelPlan[index] = { ...this.ejerciciosDelPlan[index], videoUrl: ejercicioCompleto.videoUrl };
          }
        } else {
          ejercicio = ejercicioCompleto;
        }
      }
    }
    
    return ejercicio || null;
  }

  get tienePlanActivo(): boolean {
    const tienePlan = this.planActivo !== null;
    const tieneEntrenamiento =
      this.planActivo?.entrenamiento !== null &&
      this.planActivo?.entrenamiento !== undefined;
    const tieneEntrenamientoId =
      this.planActivo?.entrenamientoId !== null &&
      this.planActivo?.entrenamientoId !== undefined;

    return tienePlan && (tieneEntrenamiento || tieneEntrenamientoId);
  }

  registrarProgreso(): void {
    if (!this.ejercicioSeleccionadoId) {
      this.error = "Debes seleccionar un ejercicio";
      return;
    }

    if (!this.peso && !this.repeticiones && !this.tiempo) {
      this.error = "Debes registrar al menos peso, repeticiones o tiempo";
      return;
    }

    if (!this.usuario?.id) {
      this.error = "No se pudo identificar al usuario";
      return;
    }

    const progreso: ProgresoModelo = {
      fecha: this.fecha,
      peso: this.peso || undefined,
      repeticiones: this.repeticiones || undefined,
      tiempo: this.tiempo || undefined,
      usuarioId: this.usuario.id,
      ejercicioId: this.ejercicioSeleccionadoId,
    };

    this.guardando = true;
    this.error = null;
    this.exito = false;

    this.progresoService.crear(progreso).subscribe({
      next: () => {
        this.exito = true;
        this.guardando = false;

        if (this.planActivo && this.ejercicioSeleccionadoId) {
          this.marcarEjercicioCompletadoEnPlan(this.ejercicioSeleccionadoId);
        }

        this.resetearFormulario();
        setTimeout(() => {
          this.exito = false;
        }, 3000);
      },
      error: () => {
        this.error = "Error al guardar el progreso";
        this.guardando = false;
      },
    });
  }

  marcarEjercicioCompletadoEnPlan(ejercicioId: number): void {
    if (!this.planActivo || !this.planActivo.id) {
      if (this.planActivo) {
        if (!this.planActivo.ejerciciosCompletados) {
          this.planActivo.ejerciciosCompletados = [];
        }
        if (!this.planActivo.ejerciciosCompletados.includes(ejercicioId)) {
          this.planActivo.ejerciciosCompletados.push(ejercicioId);
          this.planActivo.fechaUltimaSesion = new Date()
            .toISOString()
            .split("T")[0];

          if (this.usuario?.id) {
            localStorage.setItem(
              `plan-activo-${this.usuario.id}`,
              JSON.stringify(this.planActivo)
            );
          }
        }
      }
      return;
    }

    this.planUsuarioService
      .marcarEjercicioCompletado(this.planActivo.id, ejercicioId)
      .subscribe({
        next: (planActualizado) => {
          this.planActivo = planActualizado;
          if (this.usuario?.id) {
            localStorage.setItem(
              `plan-activo-${this.usuario.id}`,
              JSON.stringify(this.planActivo)
            );
          }
        },
        error: () => {
          if (this.planActivo) {
            if (!this.planActivo.ejerciciosCompletados) {
              this.planActivo.ejerciciosCompletados = [];
            }
            if (!this.planActivo.ejerciciosCompletados.includes(ejercicioId)) {
              this.planActivo.ejerciciosCompletados.push(ejercicioId);
              this.planActivo.fechaUltimaSesion = new Date()
                .toISOString()
                .split("T")[0];

              if (this.usuario?.id) {
                localStorage.setItem(
                  `plan-activo-${this.usuario.id}`,
                  JSON.stringify(this.planActivo)
                );
              }
            }
          }
        },
      });
  }

  resetearFormulario(): void {
    this.ejercicioSeleccionadoId = null;
    this.peso = null;
    this.repeticiones = null;
    this.tiempo = null;
    this.fecha = new Date().toISOString().split("T")[0];
  }

  esEjercicioCompletado(ejercicioId: number): boolean {
    if (!this.planActivo) return false;
    return (
      this.planActivo.ejerciciosCompletados?.includes(ejercicioId) || false
    );
  }

  esPlanActivo(plan: PlanDisponible): boolean {
    if (!this.planActivo || !plan.entrenamiento) return false;
    return this.planActivo.entrenamientoId === plan.entrenamiento.id;
  }

  getImagenUrl(entrenamiento: Entrenamiento | null | undefined): string {
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
