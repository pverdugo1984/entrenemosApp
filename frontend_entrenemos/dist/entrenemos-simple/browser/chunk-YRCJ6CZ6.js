import {
  API_BASE_URL
} from "./chunk-CIZ2GW32.js";
import {
  HttpClient
} from "./chunk-GGXBPUUZ.js";
import {
  Injectable,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-CP4LEFUZ.js";

// src/app/core/services/plan-usuario.service.ts
var PlanUsuarioService = class _PlanUsuarioService {
  http = inject(HttpClient);
  apiUrl = `${API_BASE_URL}/plan-usuario`;
  /**
   * Asignar un plan de entrenamiento a un usuario
   */
  asignarPlan(usuarioId, entrenamientoId) {
    return this.http.post(this.apiUrl, {
      usuarioId,
      entrenamientoId,
      fechaInicio: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      activo: true
    });
  }
  /**
   * Obtener el plan activo de un usuario
   */
  obtenerPlanActivo(usuarioId) {
    return this.http.get(`${this.apiUrl}/usuario/${usuarioId}/activo`).pipe(catchError((error) => {
      console.warn("Error obteniendo plan activo del backend:", error);
      return of(null);
    }));
  }
  /**
   * Obtener todos los planes de un usuario
   */
  obtenerPlanesUsuario(usuarioId) {
    return this.http.get(`${this.apiUrl}/usuario/${usuarioId}`);
  }
  /**
   * Marcar un ejercicio como completado
   */
  marcarEjercicioCompletado(planUsuarioId, ejercicioId) {
    return this.http.post(`${this.apiUrl}/${planUsuarioId}/ejercicio/${ejercicioId}/completar`, {}).pipe(catchError((error) => {
      console.warn("Error marcando ejercicio completado en backend:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Finalizar un plan
   */
  finalizarPlan(planUsuarioId) {
    return this.http.put(`${this.apiUrl}/${planUsuarioId}/finalizar`, {});
  }
  /**
   * Obtener planes disponibles (todos los entrenamientos)
   * Esto es una función helper que usa el EntrenamientoService
   */
  obtenerPlanesDisponibles() {
    return this.http.get(`${API_BASE_URL}/entrenamientos`).pipe(map((entrenamientos) => {
      return entrenamientos.map((ent) => {
        let duracionDias = 7;
        if (ent.fechaInicio && ent.fechaFin) {
          const inicio = new Date(ent.fechaInicio);
          const fin = new Date(ent.fechaFin);
          duracionDias = Math.ceil((fin.getTime() - inicio.getTime()) / (1e3 * 60 * 60 * 24));
        }
        let dificultad = "Principiante";
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
          categoria: "General"
        };
      });
    }));
  }
  /**
   * Calcular el progreso de un plan (porcentaje completado)
   */
  calcularProgreso(plan) {
    if (plan.entrenamiento?.ejercicios && plan.entrenamiento.ejercicios.length > 0) {
      const ejerciciosCompletados = plan.ejerciciosCompletados?.length || 0;
      const totalEjercicios = plan.entrenamiento.ejercicios.length;
      return Math.round(ejerciciosCompletados / totalEjercicios * 100);
    }
    if (plan.entrenamiento?.ejerciciosIds && plan.entrenamiento.ejerciciosIds.length > 0) {
      const ejerciciosCompletados = plan.ejerciciosCompletados?.length || 0;
      const totalEjercicios = plan.entrenamiento.ejerciciosIds.length;
      return Math.round(ejerciciosCompletados / totalEjercicios * 100);
    }
    return 0;
  }
  /**
   * Verificar si un ejercicio está completado
   */
  esEjercicioCompletado(plan, ejercicioId) {
    return plan.ejerciciosCompletados?.includes(ejercicioId) || false;
  }
  static \u0275fac = function PlanUsuarioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanUsuarioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlanUsuarioService, factory: _PlanUsuarioService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlanUsuarioService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PlanUsuarioService
};
//# sourceMappingURL=chunk-YRCJ6CZ6.js.map
