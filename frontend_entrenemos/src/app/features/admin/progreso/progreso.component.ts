import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../../core/services/usuarios.service';
import { ProgresoService } from '../../../core/services/progreso.service';
import { EjercicioService } from '../../../core/services/ejercicio.service';
import { PlanUsuarioService } from '../../../core/services/plan-usuario.service';
import { AuthService } from '../../../core/services/auth.service';
import { Usuario } from '../../../shared/models/usuario';
import { Progreso } from '../../../shared/models/progreso.model';
import { Ejercicio } from '../../../shared/models/ejercicio.model';
import { PlanUsuario } from '../../../shared/models/plan-usuario.model';
import { forkJoin, Observable } from 'rxjs';

interface ProgresoAgrupado {
  ejercicio: Ejercicio;
  progresos: Progreso[];
  mejorPeso?: number;
  mejorRepeticiones?: number;
  mejorTiempo?: number;
  totalSesiones: number;
}

interface UsuarioConProgreso {
  usuario: Usuario;
  progresos: Progreso[];
  progresosAgrupados: ProgresoAgrupado[];
  planActivo: PlanUsuario | null;
  planesUsuario: PlanUsuario[];
  planSeleccionado: PlanUsuario | null; // null = todos los planes
  cargando: boolean;
  expandido: boolean;
}

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progreso.component.html',
  styleUrl: './progreso.component.css'
})
export class ProgresoComponent implements OnInit {
  private usuariosService = inject(UsuariosService);
  private progresoService = inject(ProgresoService);
  private ejercicioService = inject(EjercicioService);
  private planUsuarioService = inject(PlanUsuarioService);
  private authService = inject(AuthService);

  usuarios: Usuario[] = [];
  usuariosConProgreso: Map<number, UsuarioConProgreso> = new Map();
  ejercicios: Ejercicio[] = [];
  
  cargando = false;
  error: string | null = null;

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;
    this.error = null;

    // Determinar qué método usar según el rol del usuario
    const rol = this.authService.getRol();
    const usuariosObservable: Observable<Usuario[]> = 
      rol === 'ADMIN' 
        ? this.usuariosService.listarUsuarios() // Admin ve todos los usuarios
        : this.usuariosService.listarMisUsuarios(); // Coach ve solo sus atletas asignados

    // Cargar usuarios y ejercicios en paralelo
    forkJoin({
      usuarios: usuariosObservable,
      ejercicios: this.ejercicioService.listar()
    }).subscribe({
      next: ({ usuarios, ejercicios }) => {
        // Si es ADMIN, filtrar solo usuarios con rol ATLETA
        if (rol === 'ADMIN') {
          this.usuarios = usuarios.filter(u => u.rol === 'ATLETA');
        } else {
          this.usuarios = usuarios;
        }
        this.ejercicios = ejercicios;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando datos:', err);
        this.error = 'Error al cargar los datos';
        this.cargando = false;
      }
    });
  }

  verProgreso(usuario: Usuario): void {
    const usuarioId = usuario.id!;
    
    // Si ya está cargado y expandido, solo colapsar
    const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
    if (usuarioProgreso) {
      usuarioProgreso.expandido = !usuarioProgreso.expandido;
      return;
    }

    // Si no está cargado, crear entrada y cargar
    const nuevoUsuarioProgreso: UsuarioConProgreso = {
      usuario,
      progresos: [],
      progresosAgrupados: [],
      planActivo: null,
      planesUsuario: [],
      planSeleccionado: null, // null = mostrar todos
      cargando: true,
      expandido: true
    };

    this.usuariosConProgreso.set(usuarioId, nuevoUsuarioProgreso);

    // Cargar progreso, plan activo y todos los planes en paralelo
    forkJoin({
      progresos: this.progresoService.obtenerPorUsuario(usuarioId),
      planActivo: this.planUsuarioService.obtenerPlanActivo(usuarioId),
      planesUsuario: this.planUsuarioService.obtenerPlanesUsuario(usuarioId)
    }).subscribe({
      next: ({ progresos, planActivo, planesUsuario }) => {
        const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
        if (usuarioProgreso) {
          usuarioProgreso.progresos = progresos;
          usuarioProgreso.planActivo = planActivo;
          // Agrupar planes por entrenamientoId y mantener solo el más reciente de cada tipo
          usuarioProgreso.planesUsuario = this.deduplicarPlanes(planesUsuario);
          usuarioProgreso.planSeleccionado = null; // Por defecto mostrar todos
          
          // Aplicar filtro inicial (mostrar todos)
          this.aplicarFiltroPlan(usuarioId);
          usuarioProgreso.cargando = false;
        }
      },
      error: (err) => {
        console.error('Error cargando progreso:', err);
        const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
        if (usuarioProgreso) {
          usuarioProgreso.cargando = false;
        }
      }
    });
  }

  onPlanFiltroChange(usuarioId: number, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    
    const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
    if (!usuarioProgreso) return;

    if (value === 'todos') {
      usuarioProgreso.planSeleccionado = null;
    } else {
      const planId = Number(value);
      const plan = usuarioProgreso.planesUsuario.find(p => p.id === planId);
      usuarioProgreso.planSeleccionado = plan || null;
    }
    
    this.aplicarFiltroPlan(usuarioId);
  }

  cambiarPlanFiltro(usuarioId: number, plan: PlanUsuario | null): void {
    const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
    if (usuarioProgreso) {
      usuarioProgreso.planSeleccionado = plan;
      this.aplicarFiltroPlan(usuarioId);
    }
  }

  aplicarFiltroPlan(usuarioId: number): void {
    const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
    if (!usuarioProgreso) return;

    let progresosFiltrados = usuarioProgreso.progresos;

    // Si hay un plan seleccionado, filtrar por sus ejercicios
    if (usuarioProgreso.planSeleccionado && usuarioProgreso.planSeleccionado.entrenamiento?.ejerciciosIds) {
      const ejerciciosIds = usuarioProgreso.planSeleccionado.entrenamiento.ejerciciosIds;
      progresosFiltrados = usuarioProgreso.progresos.filter(p => 
        ejerciciosIds.includes(p.ejercicioId)
      );
    }

    usuarioProgreso.progresosAgrupados = this.agruparProgresos(progresosFiltrados);
  }

  agruparProgresos(progresos: Progreso[]): ProgresoAgrupado[] {
    const gruposMap = new Map<number, ProgresoAgrupado>();

    progresos.forEach(progreso => {
      const ejercicioId = progreso.ejercicioId;
      const ejercicio = this.ejercicios.find(e => e.id === ejercicioId);

      if (!ejercicio) return;

      if (!gruposMap.has(ejercicioId)) {
        gruposMap.set(ejercicioId, {
          ejercicio,
          progresos: [],
          totalSesiones: 0
        });
      }

      const grupo = gruposMap.get(ejercicioId)!;
      grupo.progresos.push(progreso);
      grupo.totalSesiones++;

      // Calcular mejores marcas
      if (progreso.peso !== undefined && progreso.peso !== null) {
        if (grupo.mejorPeso === undefined || progreso.peso > grupo.mejorPeso) {
          grupo.mejorPeso = progreso.peso;
        }
      }

      if (progreso.repeticiones !== undefined && progreso.repeticiones !== null) {
        if (grupo.mejorRepeticiones === undefined || progreso.repeticiones > grupo.mejorRepeticiones) {
          grupo.mejorRepeticiones = progreso.repeticiones;
        }
      }

      if (progreso.tiempo !== undefined && progreso.tiempo !== null) {
        if (grupo.mejorTiempo === undefined || progreso.tiempo < grupo.mejorTiempo) {
          grupo.mejorTiempo = progreso.tiempo;
        }
      }
    });

    // Ordenar por fecha más reciente
    gruposMap.forEach(grupo => {
      grupo.progresos.sort((a, b) => 
        new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
      );
    });

    return Array.from(gruposMap.values()).sort((a, b) => 
      new Date(b.progresos[0].fecha).getTime() - new Date(a.progresos[0].fecha).getTime()
    );
  }

  formatearFecha(fecha: string): string {
    try {
      const date = new Date(fecha);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch {
      return fecha;
    }
  }

  formatearTiempo(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = Math.floor(segundos % 60);

    if (horas > 0) {
      return `${horas}h ${minutos}m ${segs}s`;
    } else if (minutos > 0) {
      return `${minutos}m ${segs}s`;
    } else {
      return `${segs}s`;
    }
  }

  getUsuarioProgreso(usuarioId: number): UsuarioConProgreso | undefined {
    return this.usuariosConProgreso.get(usuarioId);
  }

  estaExpandido(usuarioId: number): boolean {
    const usuarioProgreso = this.usuariosConProgreso.get(usuarioId);
    return usuarioProgreso?.expandido || false;
  }

  // Quita duplicados de planes agrupándolos por entrenamientoId
  deduplicarPlanes(planes: PlanUsuario[]): PlanUsuario[] {
    const planesMap = new Map<number, PlanUsuario>();

    planes.forEach(plan => {
      const entrenamientoId = plan.entrenamientoId;
      const planExistente = planesMap.get(entrenamientoId);

      if (!planExistente) {
        // Si no existe, agregarlo
        planesMap.set(entrenamientoId, plan);
      } else {
        // Si existe, mantener el activo o el más reciente
        if (plan.activo && !planExistente.activo) {
          planesMap.set(entrenamientoId, plan);
        } else if (plan.activo === planExistente.activo) {
          // Si ambos tienen el mismo estado activo, mantener el más reciente
          const fechaPlan = new Date(plan.fechaInicio);
          const fechaExistente = new Date(planExistente.fechaInicio);
          if (fechaPlan > fechaExistente) {
            planesMap.set(entrenamientoId, plan);
          }
        }
      }
    });

    return Array.from(planesMap.values());
  }
}
