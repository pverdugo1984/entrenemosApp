import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EntrenamientoService } from "../../../core/services/entrenamiento.service";
import { EjercicioService } from "../../../core/services/ejercicio.service";
import { UsuariosService } from "../../../core/services/usuarios.service";
import { AuthService } from "../../../core/services/auth.service";
import { Entrenamiento } from "../../../shared/models/entrenamiento.model";
import { Ejercicio } from "../../../shared/models/ejercicio.model";
import { Usuario } from "../../../shared/models/usuario";
import { API_BASE_URL } from "../../../config/api.config";

@Component({
  selector: "app-programas",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./programas.component.html",
  styleUrl: "./programas.component.css",
})
export class ProgramasComponent implements OnInit {
  entrenamientoService = inject(EntrenamientoService);
  private ejercicioService = inject(EjercicioService);
  private usuariosService = inject(UsuariosService);
  authService = inject(AuthService);

  entrenamientos: Entrenamiento[] = [];
  ejercicios: Ejercicio[] = [];
  atletas: Usuario[] = [];
  entrenadores: Usuario[] = [];
  programasDisponibles: Entrenamiento[] = [];
  cargando = false;
  error: string | null = null;

  mostrarFormulario = false;
  editando = false;
  entrenamientoForm: Entrenamiento = {
    nombre: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    ejerciciosIds: [],
  };
  ejerciciosSeleccionados: number[] = [];
  atletasSeleccionados: number[] = [];
  entrenadoresSeleccionados: number[] = [];
  programasSeleccionadosEjercicio: number[] = [];

  mostrarFormularioEjercicio = false;
  editandoEjercicio = false;
  ejercicioForm: Ejercicio = {
    nombre: "",
    descripcion: "",
    tipo: "",
    repeticiones: undefined,
    peso: undefined,
    videoUrl: "",
  };

  campoOrden: string | null = null;
  ordenAscendente = true;
  get ejerciciosOrdenados(): Ejercicio[] {
    if (!this.campoOrden) {
      return this.ejercicios;
    }
    const ejercicios = [...this.ejercicios];
    ejercicios.sort((a, b) => {
      if (this.campoOrden === "planes") {
        const numPlanesA = this.obtenerPlanesDelEjercicio(a.id!).length;
        const numPlanesB = this.obtenerPlanesDelEjercicio(b.id!).length;
        return this.ordenAscendente ? numPlanesA - numPlanesB : numPlanesB - numPlanesA;
      }

      const valorA = (a as any)[this.campoOrden!] ?? "";
      const valorB = (b as any)[this.campoOrden!] ?? "";

      if (typeof valorA === "number" && typeof valorB === "number") {
        return this.ordenAscendente ? valorA - valorB : valorB - valorA;
      }

      const strA = String(valorA).toLowerCase();
      const strB = String(valorB).toLowerCase();

      if (strA < strB) return this.ordenAscendente ? -1 : 1;
      if (strA > strB) return this.ordenAscendente ? 1 : -1;
      return 0;
    });
    return ejercicios;
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;
    this.error = null;

    this.entrenamientoService.listar().subscribe({
      next: (entrenamientos) => {
        this.entrenamientos = entrenamientos;
        this.cargarProgramasDisponibles();
        this.cargando = false;
      },
      error: () => {
        this.error = "Error al cargar los entrenamientos";
        this.cargando = false;
      },
    });

    this.ejercicioService.listar().subscribe({
      next: (ejercicios) => {
        this.ejercicios = ejercicios;
      },
      error: () => {},
    });

    this.cargarAtletas();
    this.cargarEntrenadores();
    this.cargarProgramasDisponibles();
  }

  cargarProgramasDisponibles(): void {
    const rol = this.authService.getRol();
    if (rol === 'ENTRENADOR') {
      this.programasDisponibles = [...this.entrenamientos];
    } else {
      this.programasDisponibles = [...this.entrenamientos];
    }
  }

  cargarAtletas(): void {
    const rol = this.authService.getRol();
    
    if (rol === 'ADMIN') {
      this.usuariosService.listarUsuarios().subscribe({
        next: (usuarios) => {
          this.atletas = usuarios.filter(u => u.rol === 'ATLETA');
        },
        error: () => {},
      });
    } else if (rol === 'ENTRENADOR') {
      this.usuariosService.listarMisUsuarios().subscribe({
        next: (atletas) => {
          this.atletas = atletas;
        },
        error: () => {},
      });
    }
  }

  cargarEntrenadores(): void {
    const rol = this.authService.getRol();
    
    if (rol === 'ADMIN') {
      this.usuariosService.listarEntrenadores().subscribe({
        next: (entrenadores) => {
          this.entrenadores = entrenadores.filter(e => e.rol === 'ENTRENADOR');
        },
        error: () => {},
      });
    }
  }

  abrirFormulario(entrenamiento?: Entrenamiento): void {
    if (entrenamiento) {
      this.editando = true;
      this.entrenamientoForm = { ...entrenamiento };
      this.ejerciciosSeleccionados = entrenamiento.ejerciciosIds
        ? [...entrenamiento.ejerciciosIds]
        : [];
      this.atletasSeleccionados = entrenamiento.usuariosAsignadosIds
        ? [...entrenamiento.usuariosAsignadosIds]
        : [];
      this.entrenadoresSeleccionados = entrenamiento.entrenadoresAsignadosIds
        ? [...entrenamiento.entrenadoresAsignadosIds]
        : [];
    } else {
      this.editando = false;
      this.entrenamientoForm = {
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        imagen: undefined,
        ejerciciosIds: [],
      };
      this.ejerciciosSeleccionados = [];
      this.atletasSeleccionados = [];
      this.entrenadoresSeleccionados = [];
    }
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.editando = false;
    this.entrenamientoForm = {
      nombre: "",
      descripcion: "",
      fechaInicio: "",
      fechaFin: "",
      imagen: undefined,
      ejerciciosIds: [],
    };
    this.ejerciciosSeleccionados = [];
    this.atletasSeleccionados = [];
    this.entrenadoresSeleccionados = [];
  }

  toggleEjercicio(ejercicioId: number): void {
    const index = this.ejerciciosSeleccionados.indexOf(ejercicioId);
    if (index > -1) {
      this.ejerciciosSeleccionados.splice(index, 1);
    } else {
      this.ejerciciosSeleccionados.push(ejercicioId);
    }
  }

  estaSeleccionado(ejercicioId: number): boolean {
    return this.ejerciciosSeleccionados.includes(ejercicioId);
  }

  toggleAtleta(atletaId: number): void {
    const index = this.atletasSeleccionados.indexOf(atletaId);
    if (index > -1) {
      this.atletasSeleccionados.splice(index, 1);
    } else {
      this.atletasSeleccionados.push(atletaId);
    }
  }

  estaAtletaSeleccionado(atletaId: number): boolean {
    return this.atletasSeleccionados.includes(atletaId);
  }

  toggleEntrenador(entrenadorId: number): void {
    const index = this.entrenadoresSeleccionados.indexOf(entrenadorId);
    if (index > -1) {
      this.entrenadoresSeleccionados.splice(index, 1);
    } else {
      this.entrenadoresSeleccionados.push(entrenadorId);
    }
  }

  estaEntrenadorSeleccionado(entrenadorId: number): boolean {
    return this.entrenadoresSeleccionados.includes(entrenadorId);
  }

  guardar(): void {
    if (!this.entrenamientoForm.nombre) {
      alert("El nombre es obligatorio");
      return;
    }

    this.cargando = true;
    this.error = null;

    const entrenamientoParaGuardar: Entrenamiento = {
      ...this.entrenamientoForm,
      ejerciciosIds: this.ejerciciosSeleccionados,
      usuariosIds: this.atletasSeleccionados,
      entrenadoresIds: this.authService.getRol() === 'ADMIN' ? this.entrenadoresSeleccionados : undefined,
    };

    if (this.editando && this.entrenamientoForm.id) {
      this.entrenamientoService
        .actualizar(this.entrenamientoForm.id, entrenamientoParaGuardar)
        .subscribe({
          next: () => {
            this.cargarDatos();
            this.cerrarFormulario();
            alert("Entrenamiento actualizado con éxito");
          },
          error: () => {
            this.error = "Error al actualizar el entrenamiento";
            this.cargando = false;
          },
        });
    } else {
      this.entrenamientoService.crear(entrenamientoParaGuardar).subscribe({
        next: () => {
          this.cargarDatos();
          this.cerrarFormulario();
          alert("Entrenamiento creado con éxito");
        },
        error: () => {
          this.error = "Error al crear el entrenamiento";
          this.cargando = false;
        },
      });
    }
  }

  eliminar(id: number): void {
    if (!confirm("¿Estás seguro de que quieres eliminar este entrenamiento?")) {
      return;
    }

    this.entrenamientoService.eliminar(id).subscribe({
      next: () => {
        this.cargarDatos();
        alert("Entrenamiento eliminado con éxito");
      },
      error: () => {
        alert("Error al eliminar el entrenamiento");
      },
    });
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

  abrirFormularioEjercicio(ejercicio?: Ejercicio): void {
    if (ejercicio) {
      this.editandoEjercicio = true;
      this.ejercicioForm = {
        id: ejercicio.id,
        nombre: ejercicio.nombre || "",
        descripcion: ejercicio.descripcion || "",
        tipo: ejercicio.tipo || "",
        repeticiones: ejercicio.repeticiones ?? undefined,
        peso: ejercicio.peso ?? undefined,
        videoUrl: ejercicio.videoUrl || "",
      };
      this.programasSeleccionadosEjercicio = ejercicio.entrenamientosAsignadosIds
        ? [...ejercicio.entrenamientosAsignadosIds]
        : [];
    } else {
      this.editandoEjercicio = false;
      this.ejercicioForm = {
        nombre: "",
        descripcion: "",
        tipo: "",
        repeticiones: undefined,
        peso: undefined,
        videoUrl: "",
      };
      this.programasSeleccionadosEjercicio = [];
    }
    this.mostrarFormularioEjercicio = true;
  }

  cerrarFormularioEjercicio(): void {
    this.mostrarFormularioEjercicio = false;
    this.editandoEjercicio = false;
    this.ejercicioForm = {
      nombre: "",
      descripcion: "",
      tipo: "",
      repeticiones: undefined,
      peso: undefined,
      videoUrl: "",
    };
    this.programasSeleccionadosEjercicio = [];
  }

  guardarEjercicio(): void {
    if (!this.ejercicioForm.nombre) {
      alert("El nombre es obligatorio");
      return;
    }

    this.cargando = true;
    this.error = null;

    const ejercicioParaGuardar: Ejercicio = {
      ...this.ejercicioForm,
      entrenamientosIds: this.programasSeleccionadosEjercicio,
    };

    if (this.editandoEjercicio && this.ejercicioForm.id) {
      this.ejercicioService
        .actualizar(this.ejercicioForm.id, ejercicioParaGuardar)
        .subscribe({
          next: () => {
            this.cargarDatos();
            this.cerrarFormularioEjercicio();
            alert("Ejercicio actualizado con éxito");
          },
          error: () => {
            this.error = "Error al actualizar el ejercicio";
            this.cargando = false;
          },
        });
    } else {
      this.ejercicioService.crear(ejercicioParaGuardar).subscribe({
        next: () => {
          this.cargarDatos();
          this.cerrarFormularioEjercicio();
          alert("Ejercicio creado con éxito");
        },
        error: () => {
          this.error = "Error al crear el ejercicio";
          this.cargando = false;
        },
      });
    }
  }

  toggleProgramaEjercicio(programaId: number): void {
    const index = this.programasSeleccionadosEjercicio.indexOf(programaId);
    if (index > -1) {
      this.programasSeleccionadosEjercicio.splice(index, 1);
    } else {
      this.programasSeleccionadosEjercicio.push(programaId);
    }
  }

  estaProgramaSeleccionado(programaId: number): boolean {
    return this.programasSeleccionadosEjercicio.includes(programaId);
  }

  eliminarEjercicio(id: number): void {
    if (!confirm("¿Estás seguro de que quieres eliminar este ejercicio?")) {
      return;
    }

    this.ejercicioService.eliminar(id).subscribe({
      next: () => {
        this.cargarDatos();
        alert("Ejercicio eliminado con éxito");
      },
      error: () => {
        alert("Error al eliminar el ejercicio");
      },
    });
  }

  ordenarPor(campo: string): void {
    if (this.campoOrden === campo) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.campoOrden = campo;
      this.ordenAscendente = true;
    }
  }

  obtenerIconoOrden(campo: string): string {
    if (this.campoOrden !== campo) {
      return "⇅";
    }
    return this.ordenAscendente ? "↑" : "↓";
  }

  obtenerPlanesDelEjercicio(ejercicioId: number): Entrenamiento[] {
    return this.entrenamientos.filter(
      (entrenamiento) =>
        entrenamiento.ejerciciosIds?.includes(ejercicioId) ||
        entrenamiento.ejercicios?.some((ej) => ej.id === ejercicioId)
    );
  }

  getImagenUrl(entrenamiento: Entrenamiento): string {
    if (entrenamiento.imagen) {
      if (entrenamiento.imagen.startsWith("/uploads/")) {
        const baseUrl = API_BASE_URL.replace("/api", "");
        return `${baseUrl}${entrenamiento.imagen}`;
      }
      return entrenamiento.imagen;
    }
    return "/assets/bf-image.jpg";
  }

  onImagenClick(event: Event, entrenamiento: Entrenamiento): void {
    event.stopPropagation();
    if (!entrenamiento.id) {
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        this.subirImagen(entrenamiento.id!, file);
      }
    };
    input.click();
  }

  subirImagen(entrenamientoId: number, file: File): void {
    if (file.size > 5 * 1024 * 1024) {
      alert("La imagen es demasiado grande. Máximo 5MB");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("El archivo debe ser una imagen");
      return;
    }

    this.cargando = true;
    this.error = null;

    this.entrenamientoService.subirImagen(entrenamientoId, file).subscribe({
      next: (response) => {
        const index = this.entrenamientos.findIndex(
          (e) => e.id === entrenamientoId
        );
        if (index !== -1) {
          this.entrenamientos[index].imagen = response.imagen;
        }
        this.cargarDatos();
        this.cargando = false;
      },
      error: (err) => {
        this.error = err.error?.error || "Error al subir la imagen";
        this.cargando = false;
      },
    });
  }
}
