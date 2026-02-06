export interface Ejercicio {
  id?: number;
  nombre: string;
  descripcion?: string;
  repeticiones?: number;
  peso?: number;
  tipo?: string;
  videoUrl?: string;
  entrenamientosIds?: number[];
  entrenamientosAsignadosIds?: number[];
}
