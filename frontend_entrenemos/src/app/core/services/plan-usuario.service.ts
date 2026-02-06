import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { API_BASE_URL } from "../../config/api.config";
import {
  PlanUsuario,
  PlanDisponible,
} from "../../shared/models/plan-usuario.model";
import { Entrenamiento } from "../../shared/models/entrenamiento.model";

@Injectable({
  providedIn: "root",
})
export class PlanUsuarioService {
  private http = inject(HttpClient);
  private apiUrl = `${API_BASE_URL}/plan-usuario`;

  asignarPlan(
    usuarioId: number,
    entrenamientoId: number
  ): Observable<PlanUsuario> {
    return this.http.post<PlanUsuario>(this.apiUrl, {
      usuarioId,
      entrenamientoId,
      fechaInicio: new Date().toISOString().split("T")[0],
      activo: true,
    });
  }

  obtenerPlanActivo(usuarioId: number): Observable<PlanUsuario | null> {
    return this.http
      .get<PlanUsuario | null>(`${this.apiUrl}/usuario/${usuarioId}/activo`)
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

  obtenerPlanesUsuario(usuarioId: number): Observable<PlanUsuario[]> {
    return this.http.get<PlanUsuario[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

  marcarEjercicioCompletado(
    planUsuarioId: number,
    ejercicioId: number
  ): Observable<PlanUsuario> {
    return this.http
      .post<PlanUsuario>(
        `${this.apiUrl}/${planUsuarioId}/ejercicio/${ejercicioId}/completar`,
        {}
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  finalizarPlan(planUsuarioId: number): Observable<PlanUsuario> {
    return this.http.put<PlanUsuario>(
      `${this.apiUrl}/${planUsuarioId}/finalizar`,
      {}
    );
  }

  obtenerPlanesDisponibles(): Observable<PlanDisponible[]> {
    return this.http
      .get<Entrenamiento[]>(`${API_BASE_URL}/entrenamientos`)
      .pipe(
        map((entrenamientos) => {
          return entrenamientos.map((ent) => {
            let duracionDias = 7;
            if (ent.fechaInicio && ent.fechaFin) {
              const inicio = new Date(ent.fechaInicio);
              const fin = new Date(ent.fechaFin);
              duracionDias = Math.ceil(
                (fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24)
              );
            }

            let dificultad: "Principiante" | "Intermedio" | "Avanzado" =
              "Principiante";
            const numEjercicios = ent.ejerciciosIds?.length || 0;
            if (numEjercicios <= 3) {
              dificultad = "Principiante";
            } else if (numEjercicios <= 6) {
              dificultad = "Intermedio";
            } else {
              dificultad = "Avanzado";
            }

            return {
              entrenamiento: ent,
              duracionDias,
              dificultad,
              categoria: "General",
            } as PlanDisponible;
          });
        })
      );
  }

  calcularProgreso(plan: PlanUsuario): number {
    if (
      plan.entrenamiento?.ejercicios &&
      plan.entrenamiento.ejercicios.length > 0
    ) {
      const ejerciciosCompletados = plan.ejerciciosCompletados?.length || 0;
      const totalEjercicios = plan.entrenamiento.ejercicios.length;
      return Math.round((ejerciciosCompletados / totalEjercicios) * 100);
    }

    if (
      plan.entrenamiento?.ejerciciosIds &&
      plan.entrenamiento.ejerciciosIds.length > 0
    ) {
      const ejerciciosCompletados = plan.ejerciciosCompletados?.length || 0;
      const totalEjercicios = plan.entrenamiento.ejerciciosIds.length;
      return Math.round((ejerciciosCompletados / totalEjercicios) * 100);
    }

    return 0;
  }

  esEjercicioCompletado(plan: PlanUsuario, ejercicioId: number): boolean {
    return plan.ejerciciosCompletados?.includes(ejercicioId) || false;
  }
}
