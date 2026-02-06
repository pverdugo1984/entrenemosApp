import {
  PlanUsuarioService
} from "./chunk-YRCJ6CZ6.js";
import {
  EjercicioService
} from "./chunk-3SLBUA25.js";
import {
  ProgresoService
} from "./chunk-5ZXBIWND.js";
import {
  UsuariosService
} from "./chunk-VGENJJKI.js";
import {
  FormsModule
} from "./chunk-VU3WMXVN.js";
import {
  AuthService
} from "./chunk-RCFFC4IO.js";
import {
  EntrenamientoService
} from "./chunk-JKBF5XQK.js";
import {
  BottomNav,
  Header
} from "./chunk-TT6GHJS4.js";
import {
  Router,
  RouterModule
} from "./chunk-C4S3RDAR.js";
import "./chunk-CIZ2GW32.js";
import {
  CommonModule
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  forkJoin,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CP4LEFUZ.js";
import {
  __async,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/features/user/progreso/progreso.ts
var Progreso = class _Progreso {
  progresoService = inject(ProgresoService);
  ejercicioService = inject(EjercicioService);
  entrenamientoService = inject(EntrenamientoService);
  planUsuarioService = inject(PlanUsuarioService);
  authService = inject(AuthService);
  usuariosService = inject(UsuariosService);
  router = inject(Router);
  // Datos del formulario
  ejercicios = [];
  ejerciciosDelPlan = [];
  // Ejercicios del plan activo
  ejercicioSeleccionadoId = null;
  peso = null;
  repeticiones = null;
  tiempo = null;
  fecha = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  // Fecha actual
  // Usuario y plan activo
  usuario = null;
  usuarioId = null;
  planActivo = null;
  // Estados
  guardando = false;
  exito = false;
  error = null;
  cargando = false;
  ngOnInit() {
    this.cargarUsuarioYPlan();
  }
  cargarUsuarioYPlan() {
    return __async(this, null, function* () {
      this.cargando = true;
      this.error = null;
      yield this.cargarUsuario();
      if (this.usuario && this.usuario.id) {
        this.usuarioId = this.usuario.id;
        this.cargarPlanActivo();
      } else {
        console.warn("Progreso: No se pudo cargar el usuario");
        this.cargando = false;
        this.cargarEjercicios();
      }
    });
  }
  cargarUsuario() {
    return __async(this, null, function* () {
      const token = this.authService.getToken();
      if (!token) {
        console.warn("Progreso: No hay token de autenticaci\xF3n");
        this.cargando = false;
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        this.authService.getCurrentUser().subscribe({
          next: (usuario) => {
            this.usuario = usuario;
            this.usuarioId = usuario.id || null;
            console.log("Progreso: Usuario cargado con getCurrentUser:", usuario);
            resolve();
          },
          error: (err) => {
            console.warn("Progreso: getCurrentUser fall\xF3, intentando m\xE9todo alternativo:", err);
            this.cargarUsuarioPorEmail(token).then(resolve);
          }
        });
      });
    });
  }
  cargarUsuarioPorEmail(token) {
    return __async(this, null, function* () {
      try {
        const { JwtUtil } = yield import("./chunk-NOIVHNUM.js");
        const email = JwtUtil.getEmailFromToken(token);
        if (!email) {
          console.warn("Progreso: No se pudo extraer el email del token");
          this.cargando = false;
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          this.usuariosService.listarUsuarios().subscribe({
            next: (usuarios) => {
              this.usuario = usuarios.find((u) => u.email === email) || null;
              if (!this.usuario) {
                console.warn("Progreso: Usuario no encontrado con email:", email);
                this.error = "No se pudo encontrar tu usuario. Por favor, contacta al administrador.";
              } else {
                this.usuarioId = this.usuario.id || null;
                console.log("Progreso: Usuario cargado correctamente:", this.usuario);
              }
              resolve();
            },
            error: (err) => {
              console.error("Progreso: Error cargando usuarios:", err);
              this.error = "Error al cargar la informaci\xF3n del usuario";
              resolve();
            }
          });
        });
      } catch (error) {
        console.error("Progreso: Error en cargarUsuarioPorEmail:", error);
        this.cargando = false;
        return Promise.resolve();
      }
    });
  }
  cargarPlanActivo() {
    if (!this.usuarioId) {
      console.warn("Progreso: No hay usuarioId para cargar plan");
      this.cargarEjercicios();
      return;
    }
    console.log("Progreso: Cargando plan activo para usuarioId:", this.usuarioId);
    this.planUsuarioService.obtenerPlanActivo(this.usuarioId).subscribe({
      next: (plan) => {
        if (plan) {
          console.log("Progreso: Plan cargado desde backend:", plan);
          this.planActivo = plan;
          this.cargarEjerciciosDelPlan();
          this.cargarEjercicios();
        } else {
          console.log("Progreso: No hay plan en backend, intentando localStorage");
          this.cargarPlanDesdeLocalStorage();
          this.cargarEjercicios();
        }
      },
      error: (err) => {
        console.warn("Progreso: Error cargando plan desde backend:", err);
        this.cargarPlanDesdeLocalStorage();
        this.cargarEjercicios();
      }
    });
  }
  cargarPlanDesdeLocalStorage() {
    if (!this.usuarioId) {
      this.planActivo = null;
      console.log("Progreso: No hay usuarioId, planActivo = null");
      return;
    }
    const planGuardado = localStorage.getItem(`plan-activo-${this.usuarioId}`);
    console.log("Progreso: Plan desde localStorage:", planGuardado);
    if (planGuardado) {
      try {
        const plan = JSON.parse(planGuardado);
        console.log("Progreso: Plan parseado:", plan);
        if (plan && (plan.entrenamientoId || plan.entrenamiento)) {
          this.planActivo = plan;
          console.log("Progreso: Plan activo asignado:", this.planActivo);
          const planActivo = this.planActivo;
          if (planActivo && planActivo.entrenamientoId) {
            if (!planActivo.entrenamiento || !planActivo.entrenamiento.ejerciciosIds) {
              console.log("Progreso: Cargando entrenamiento completo para ID:", planActivo.entrenamientoId);
              this.cargarEntrenamientoCompleto(planActivo.entrenamientoId);
            } else {
              console.log("Progreso: Plan tiene entrenamiento, cargando ejercicios");
              this.cargarEjerciciosDelPlan();
            }
          } else if (planActivo && planActivo.entrenamiento) {
            console.log("Progreso: Plan tiene entrenamiento, cargando ejercicios");
            this.cargarEjerciciosDelPlan();
          } else {
            console.log("Progreso: Plan no tiene entrenamiento ni entrenamientoId");
          }
        } else {
          console.log("Progreso: Plan no v\xE1lido (sin entrenamientoId ni entrenamiento)");
          this.planActivo = null;
        }
      } catch (error) {
        console.error("Error parseando plan desde localStorage:", error);
        this.planActivo = null;
      }
    } else {
      console.log("Progreso: No hay plan guardado en localStorage");
      this.planActivo = null;
    }
  }
  cargarEntrenamientoCompleto(entrenamientoId) {
    console.log("Progreso: Cargando entrenamiento completo, ID:", entrenamientoId);
    this.entrenamientoService.obtenerPorId(entrenamientoId).subscribe({
      next: (entrenamiento) => {
        console.log("Progreso: Entrenamiento cargado:", entrenamiento);
        if (this.planActivo) {
          if (!this.planActivo.entrenamiento) {
            this.planActivo.entrenamiento = entrenamiento;
          } else {
            this.planActivo.entrenamiento = __spreadValues(__spreadValues({}, this.planActivo.entrenamiento), entrenamiento);
          }
          console.log("Progreso: Plan actualizado con entrenamiento:", this.planActivo);
          this.cargarEjerciciosDelPlan();
        }
      },
      error: (err) => {
        console.error("Error cargando entrenamiento completo:", err);
        this.cargarEjerciciosDelPlan();
      }
    });
  }
  cargarEjerciciosDelPlan() {
    if (!this.planActivo) {
      this.ejerciciosDelPlan = [];
      return;
    }
    if (this.planActivo.entrenamiento?.ejercicios && this.planActivo.entrenamiento.ejercicios.length > 0) {
      this.ejerciciosDelPlan = this.planActivo.entrenamiento.ejercicios;
      return;
    }
    if (this.planActivo.entrenamiento?.ejerciciosIds && this.planActivo.entrenamiento.ejerciciosIds.length > 0) {
      const observables = this.planActivo.entrenamiento.ejerciciosIds.map((id) => this.ejercicioService.obtenerPorId(id));
      forkJoin(observables).subscribe({
        next: (ejercicios) => {
          this.ejerciciosDelPlan = ejercicios;
          if (this.planActivo?.entrenamiento) {
            this.planActivo.entrenamiento.ejercicios = ejercicios;
          }
        },
        error: (err) => {
          console.error("Error cargando ejercicios del plan:", err);
          this.ejerciciosDelPlan = [];
        }
      });
    } else {
      if (this.planActivo.entrenamientoId) {
        this.ejercicioService.listar().subscribe({
          next: (todosEjercicios) => {
            this.ejerciciosDelPlan = [];
          },
          error: () => {
            this.ejerciciosDelPlan = [];
          }
        });
      } else {
        this.ejerciciosDelPlan = [];
      }
    }
  }
  cargarEjercicios() {
    this.ejercicioService.listar().subscribe({
      next: (ejercicios) => {
        this.ejercicios = ejercicios;
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error cargando ejercicios:", err);
        this.error = "Error al cargar los ejercicios";
        this.cargando = false;
      }
    });
  }
  get ejerciciosDisponibles() {
    if (this.planActivo && this.ejerciciosDelPlan.length > 0) {
      return this.ejerciciosDelPlan;
    }
    return [];
  }
  get tienePlanActivo() {
    const tienePlan = this.planActivo !== null;
    const tieneEntrenamiento = this.planActivo?.entrenamiento !== null && this.planActivo?.entrenamiento !== void 0;
    const tieneEntrenamientoId = this.planActivo?.entrenamientoId !== null && this.planActivo?.entrenamientoId !== void 0;
    return tienePlan && (tieneEntrenamiento || tieneEntrenamientoId);
  }
  registrarProgreso() {
    if (!this.ejercicioSeleccionadoId) {
      this.error = "Debes seleccionar un ejercicio";
      return;
    }
    if (!this.peso && !this.repeticiones && !this.tiempo) {
      this.error = "Debes registrar al menos peso, repeticiones o tiempo";
      return;
    }
    if (!this.usuarioId) {
      this.error = "No se pudo identificar al usuario";
      return;
    }
    const progreso = {
      fecha: this.fecha,
      peso: this.peso || void 0,
      repeticiones: this.repeticiones || void 0,
      tiempo: this.tiempo || void 0,
      usuarioId: this.usuarioId,
      ejercicioId: this.ejercicioSeleccionadoId
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
        }, 3e3);
      },
      error: (err) => {
        console.error("Error guardando progreso:", err);
        this.error = "Error al guardar el progreso";
        this.guardando = false;
      }
    });
  }
  marcarEjercicioCompletadoEnPlan(ejercicioId) {
    if (!this.planActivo || !this.planActivo.id) {
      if (this.planActivo) {
        if (!this.planActivo.ejerciciosCompletados) {
          this.planActivo.ejerciciosCompletados = [];
        }
        if (!this.planActivo.ejerciciosCompletados.includes(ejercicioId)) {
          this.planActivo.ejerciciosCompletados.push(ejercicioId);
          this.planActivo.fechaUltimaSesion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
          if (this.usuarioId) {
            localStorage.setItem(`plan-activo-${this.usuarioId}`, JSON.stringify(this.planActivo));
          }
        }
      }
      return;
    }
    this.planUsuarioService.marcarEjercicioCompletado(this.planActivo.id, ejercicioId).subscribe({
      next: (planActualizado) => {
        this.planActivo = planActualizado;
        if (this.usuarioId) {
          localStorage.setItem(`plan-activo-${this.usuarioId}`, JSON.stringify(this.planActivo));
        }
      },
      error: (err) => {
        console.warn("Error marcando ejercicio completado en backend:", err);
        if (this.planActivo) {
          if (!this.planActivo.ejerciciosCompletados) {
            this.planActivo.ejerciciosCompletados = [];
          }
          if (!this.planActivo.ejerciciosCompletados.includes(ejercicioId)) {
            this.planActivo.ejerciciosCompletados.push(ejercicioId);
            this.planActivo.fechaUltimaSesion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
            if (this.usuarioId) {
              localStorage.setItem(`plan-activo-${this.usuarioId}`, JSON.stringify(this.planActivo));
            }
          }
        }
      }
    });
  }
  resetearFormulario() {
    this.ejercicioSeleccionadoId = null;
    this.peso = null;
    this.repeticiones = null;
    this.tiempo = null;
    this.fecha = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  esEjercicioCompletado(ejercicioId) {
    if (!this.planActivo)
      return false;
    return this.planActivo.ejerciciosCompletados?.includes(ejercicioId) || false;
  }
  obtenerProgresoPlan() {
    if (!this.planActivo)
      return 0;
    return this.planUsuarioService.calcularProgreso(this.planActivo);
  }
  static \u0275fac = function Progreso_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Progreso)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Progreso, selectors: [["app-progreso"]], decls: 6, vars: 0, consts: [[1, "page-wrapper"], [1, "page-container"]], template: function Progreso_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1)(3, "h1");
      \u0275\u0275text(4, "\u{1F4CA} Progreso");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    RouterModule,
    Header,
    BottomNav
  ], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n}\n.page-container[_ngcontent-%COMP%] {\n  color: black;\n  padding: 40px 20px;\n  padding-bottom: 100px;\n}\n.page-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  text-align: center;\n}\n.seccion-titulo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 32px 0 24px 0;\n  text-align: center;\n  color: #000;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.mensaje-exito[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border: 2px solid #4caf50;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 16px 0;\n  text-align: center;\n  color: #2e7d32;\n  font-weight: 600;\n  font-size: 15px;\n}\n.mensaje-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  border: 2px solid #e53935;\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin: 20px 0;\n  text-align: center;\n  color: #c62828;\n  font-weight: 700;\n  font-size: 15px;\n  box-shadow: 0 2px 4px rgba(229, 57, 53, 0.2);\n}\n.mensaje-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.formulario-progreso[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 24px;\n}\n.campo-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.campo-formulario[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 0.3px;\n  margin-bottom: 4px;\n}\n.campo-input[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border: 2px solid #000;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 16px;\n  font-family: inherit;\n  transition: all 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n.campo-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: indigo;\n  box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.1);\n}\n.campo-input[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.campo-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.metricas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.metricas-grid[_ngcontent-%COMP%]   .campo-formulario[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.metricas-grid[_ngcontent-%COMP%]   .campo-input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.boton-guardar[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: indigo;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.boton-guardar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4b0082;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(75, 0, 130, 0.3);\n}\n.boton-guardar[_ngcontent-%COMP%]:disabled {\n  background: #999;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.plan-activo-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.plan-activo-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.progreso-plan[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.progreso-texto[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  opacity: 0.95;\n}\n.progreso-bar-mini[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progreso-fill-mini[_ngcontent-%COMP%] {\n  height: 100%;\n  background: white;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.plan-activo-acciones[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white;\n}\n.toggle-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: white;\n}\n.ayuda-texto[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  font-style: italic;\n}\n.estado-carga[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  gap: 16px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e0e0e0;\n  border-top: 4px solid indigo;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.estado-carga[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0;\n}\n.sin-plan-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.sin-plan-mensaje[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sin-plan-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.sin-plan-mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 15px;\n  line-height: 1.5;\n  opacity: 0.95;\n}\n.btn-seleccionar-plan[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 24px;\n  background: white;\n  color: #ff9800;\n  text-decoration: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.btn-seleccionar-plan[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.placeholder-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 40px 20px;\n}\n.placeholder-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 300px;\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  display: block;\n  margin-bottom: 24px;\n}\n.placeholder-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  color: #1a1a1a;\n}\n.placeholder-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=progreso.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Progreso, [{
    type: Component,
    args: [{ selector: "app-progreso", imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      Header,
      BottomNav
    ], template: '<div class="page-wrapper">\n    <app-header />\n    <div class="page-container">\n        <h1>\u{1F4CA} Progreso</h1>\n    </div>\n    <app-bottom-nav />\n</div>', styles: ["/* src/app/features/user/progreso/progreso.css */\n.page-wrapper {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n}\n.page-container {\n  color: black;\n  padding: 40px 20px;\n  padding-bottom: 100px;\n}\n.page-container h1 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  text-align: center;\n}\n.seccion-titulo {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 32px 0 24px 0;\n  text-align: center;\n  color: #000;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.mensaje-exito {\n  background: #e8f5e9;\n  border: 2px solid #4caf50;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 16px 0;\n  text-align: center;\n  color: #2e7d32;\n  font-weight: 600;\n  font-size: 15px;\n}\n.mensaje-error {\n  background: #ffebee;\n  border: 2px solid #e53935;\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin: 20px 0;\n  text-align: center;\n  color: #c62828;\n  font-weight: 700;\n  font-size: 15px;\n  box-shadow: 0 2px 4px rgba(229, 57, 53, 0.2);\n}\n.mensaje-error p {\n  margin: 0;\n}\n.formulario-progreso {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 24px;\n}\n.campo-formulario {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.campo-formulario label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 0.3px;\n  margin-bottom: 4px;\n}\n.campo-input {\n  padding: 14px 18px;\n  border: 2px solid #000;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 16px;\n  font-family: inherit;\n  transition: all 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n.campo-input:focus {\n  outline: none;\n  border-color: indigo;\n  box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.1);\n}\n.campo-input:disabled {\n  background: #e0e0e0;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.campo-input select {\n  cursor: pointer;\n}\n.metricas-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.metricas-grid .campo-formulario {\n  margin: 0;\n}\n.metricas-grid .campo-input {\n  text-align: center;\n}\n.boton-guardar {\n  padding: 16px 24px;\n  background: indigo;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.boton-guardar:hover:not(:disabled) {\n  background: #4b0082;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(75, 0, 130, 0.3);\n}\n.boton-guardar:disabled {\n  background: #999;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.plan-activo-info {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.plan-activo-header h3 {\n  margin: 0 0 12px 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.progreso-plan {\n  margin-top: 12px;\n}\n.progreso-texto {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  opacity: 0.95;\n}\n.progreso-bar-mini {\n  width: 100%;\n  height: 8px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progreso-fill-mini {\n  height: 100%;\n  background: white;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.plan-activo-acciones {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white;\n}\n.toggle-label input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: white;\n}\n.ayuda-texto {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  font-style: italic;\n}\n.estado-carga {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  gap: 16px;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e0e0e0;\n  border-top: 4px solid indigo;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.estado-carga p {\n  color: #666;\n  font-size: 14px;\n  margin: 0;\n}\n.sin-plan-info {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.sin-plan-mensaje {\n  text-align: center;\n}\n.sin-plan-icon {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.sin-plan-mensaje p {\n  margin: 0 0 16px 0;\n  font-size: 15px;\n  line-height: 1.5;\n  opacity: 0.95;\n}\n.btn-seleccionar-plan {\n  display: inline-block;\n  padding: 12px 24px;\n  background: white;\n  color: #ff9800;\n  text-decoration: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.btn-seleccionar-plan:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.placeholder-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 40px 20px;\n}\n.placeholder-content {\n  text-align: center;\n  max-width: 300px;\n}\n.placeholder-icon {\n  font-size: 64px;\n  display: block;\n  margin-bottom: 24px;\n}\n.placeholder-content h2 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  color: #1a1a1a;\n}\n.placeholder-content p {\n  font-size: 16px;\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=progreso.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Progreso, { className: "Progreso", filePath: "src/app/features/user/progreso/progreso.ts", lineNumber: 31 });
})();
export {
  Progreso
};
//# sourceMappingURL=chunk-FOJIBO4O.js.map
