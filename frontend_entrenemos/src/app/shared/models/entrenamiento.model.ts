/**
 * Modelo que corresponde a EntrenamientoDto del backend
 */
import { Ejercicio } from "./ejercicio.model";

export interface Entrenamiento {
  id?: number;
  nombre: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  imagen?: string;
  ejerciciosIds?: number[];
  ejercicios?: Ejercicio[];
  usuariosIds?: number[];
  usuariosAsignadosIds?: number[];
  entrenadoresIds?: number[];
  entrenadoresAsignadosIds?: number[];
}
