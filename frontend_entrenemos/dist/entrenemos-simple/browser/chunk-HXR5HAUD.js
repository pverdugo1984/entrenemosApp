import {
  UserProfile
} from "./chunk-6CGTQ5KK.js";
import {
  ProgresoService
} from "./chunk-5ZXBIWND.js";
import "./chunk-VGENJJKI.js";
import {
  AuthService
} from "./chunk-RCFFC4IO.js";
import {
  BottomNav,
  Header
} from "./chunk-TT6GHJS4.js";
import {
  Router
} from "./chunk-C4S3RDAR.js";
import "./chunk-CIZ2GW32.js";
import {
  CommonModule
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/user/perfil/perfil.ts
function Perfil_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando perfil...");
    \u0275\u0275elementEnd()();
  }
}
function Perfil_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function Perfil_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargarDatos());
    });
    \u0275\u0275text(4, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function Perfil_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "p", 15);
    \u0275\u0275text(5, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.usuario.telefono);
  }
}
function Perfil_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "p", 15);
    \u0275\u0275text(5, "Miembro desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatearFecha(ctx_r1.usuario.fechaRegistro));
  }
}
function Perfil_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8)(2, "h1", 9);
    \u0275\u0275text(3, "Mi Perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "app-user-profile", 10);
    \u0275\u0275listener("fotoActualizada", function Perfil_Conditional_5_Template_app_user_profile_fotoActualizada_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFotoActualizada($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "section", 11)(6, "div", 12)(7, "div", 13);
    \u0275\u0275text(8, "\u{1F4E7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "p", 15);
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, Perfil_Conditional_5_Conditional_14_Template, 8, 1, "div", 12);
    \u0275\u0275conditionalCreate(15, Perfil_Conditional_5_Conditional_15_Template, 8, 1, "div", 12);
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
    \u0275\u0275text(18, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 14)(20, "p", 15);
    \u0275\u0275text(21, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "section", 17)(25, "h2", 18);
    \u0275\u0275text(26, "Estad\xEDsticas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 21);
    \u0275\u0275text(30, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 22)(32, "p", 23);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 24);
    \u0275\u0275text(35, "Progresos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 20)(37, "div", 21);
    \u0275\u0275text(38, "\u{1F4AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 22)(40, "p", 23);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 24);
    \u0275\u0275text(43, "Sesiones");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "section", 25)(45, "button", 26);
    \u0275\u0275listener("click", function Perfil_Conditional_5_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarSesion());
    });
    \u0275\u0275elementStart(46, "span", 27);
    \u0275\u0275text(47, "\u{1F6AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 28);
    \u0275\u0275text(49, "Cerrar Sesi\xF3n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("usuario", ctx_r1.usuario);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.usuario.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usuario.telefono ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usuario.fechaRegistro ? 15 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.usuario.rol);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.totalProgresos);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalSesiones);
  }
}
function Perfil_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "No se pudo cargar la informaci\xF3n del usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function Perfil_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargarDatos());
    });
    \u0275\u0275text(4, "Reintentar");
    \u0275\u0275elementEnd()();
  }
}
var Perfil = class _Perfil {
  authService = inject(AuthService);
  progresoService = inject(ProgresoService);
  router = inject(Router);
  usuario = null;
  progresos = [];
  loading = true;
  error = null;
  onFotoActualizada(usuario) {
    this.usuario = usuario;
  }
  // Estadísticas
  totalProgresos = 0;
  totalSesiones = 0;
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
      next: (usuario) => {
        this.usuario = usuario;
        if (usuario.id) {
          this.cargarProgresos(usuario.id);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error al cargar usuario:", err);
        this.error = "Error al cargar la informaci\xF3n del usuario";
        this.loading = false;
      }
    });
  }
  cargarProgresos(usuarioId) {
    this.progresoService.obtenerPorUsuario(usuarioId).subscribe({
      next: (progresos) => {
        this.progresos = progresos;
        this.totalProgresos = progresos.length;
        const sesionesUnicas = new Set(progresos.map((p) => p.fecha).filter(Boolean));
        this.totalSesiones = sesionesUnicas.size;
      },
      error: (err) => {
        console.error("Error al cargar progresos:", err);
      }
    });
  }
  formatearFecha(fecha) {
    if (!fecha)
      return "No disponible";
    try {
      const date = new Date(fecha);
      return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return fecha;
    }
  }
  cerrarSesion() {
    this.authService.logout();
  }
  static \u0275fac = function Perfil_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Perfil)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Perfil, selectors: [["app-perfil"]], decls: 8, vars: 1, consts: [[1, "app-container"], [1, "main-content"], [1, "loading-container"], [1, "error-container"], [1, "empty-container"], [1, "spinner"], [1, "retry-button", 3, "click"], [1, "profile-section"], [1, "profile-header"], [1, "page-title"], [3, "fotoActualizada", "usuario"], [1, "info-section"], [1, "info-card"], [1, "info-icon"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "stats-section"], [1, "section-title"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "actions-section"], [1, "logout-button", 3, "click"], [1, "logout-icon"], [1, "logout-text"]], template: function Perfil_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275conditionalCreate(3, Perfil_Conditional_3_Template, 4, 0, "div", 2)(4, Perfil_Conditional_4_Template, 5, 1, "div", 3)(5, Perfil_Conditional_5_Template, 50, 7)(6, Perfil_Conditional_6_Template, 5, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 3 : ctx.error ? 4 : ctx.usuario ? 5 : 6);
    }
  }, dependencies: [CommonModule, Header, BottomNav, UserProfile], styles: ['\n\n.app-container[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f7fa 0%,\n      #e8ecf1 100%);\n  min-height: 100vh;\n  color: #1a1a1a;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 20px 16px;\n  padding-bottom: 100px;\n}\n.profile-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.profile-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.info-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 0 0 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n  word-break: break-word;\n}\n.stats-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 16px 0;\n  text-transform: capitalize;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n}\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 4px 0 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.logout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n  border: 2px solid #d32f2f;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  color: #d32f2f;\n}\n.logout-button[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);\n}\n.logout-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.logout-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.logout-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%], \n.empty-container[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n  color: #666;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.empty-container[_ngcontent-%COMP%] {\n  color: #999;\n}\n.retry-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.retry-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.retry-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=perfil.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Perfil, [{
    type: Component,
    args: [{ selector: "app-perfil", imports: [CommonModule, Header, BottomNav, UserProfile], template: '<div class="app-container">\n    <app-header />\n\n    <main class="main-content">\n        @if (loading) {\n        <div class="loading-container">\n            <div class="spinner"></div>\n            <p>Cargando perfil...</p>\n        </div>\n        } @else if (error) {\n        <div class="error-container">\n            <p>{{ error }}</p>\n            <button (click)="cargarDatos()" class="retry-button">Reintentar</button>\n        </div>\n        } @else if (usuario) {\n        <!-- Informaci\xF3n del usuario -->\n        <section class="profile-section">\n            <div class="profile-header">\n                <h1 class="page-title">Mi Perfil</h1>\n            </div>\n            <app-user-profile [usuario]="usuario" (fotoActualizada)="onFotoActualizada($event)" />\n        </section>\n\n        <!-- Informaci\xF3n detallada -->\n        <section class="info-section">\n            <div class="info-card">\n                <div class="info-icon">\u{1F4E7}</div>\n                <div class="info-content">\n                    <p class="info-label">Email</p>\n                    <p class="info-value">{{ usuario.email }}</p>\n                </div>\n            </div>\n\n            @if (usuario.telefono) {\n            <div class="info-card">\n                <div class="info-icon">\u{1F4F1}</div>\n                <div class="info-content">\n                    <p class="info-label">Tel\xE9fono</p>\n                    <p class="info-value">{{ usuario.telefono }}</p>\n                </div>\n            </div>\n            }\n\n            @if (usuario.fechaRegistro) {\n            <div class="info-card">\n                <div class="info-icon">\u{1F4C5}</div>\n                <div class="info-content">\n                    <p class="info-label">Miembro desde</p>\n                    <p class="info-value">{{ formatearFecha(usuario.fechaRegistro) }}</p>\n                </div>\n            </div>\n            }\n\n            <div class="info-card">\n                <div class="info-icon">\u{1F464}</div>\n                <div class="info-content">\n                    <p class="info-label">Rol</p>\n                    <p class="info-value">{{ usuario.rol }}</p>\n                </div>\n            </div>\n        </section>\n\n        <!-- Estad\xEDsticas -->\n        <section class="stats-section">\n            <h2 class="section-title">Estad\xEDsticas</h2>\n            <div class="stats-grid">\n                <div class="stat-card">\n                    <div class="stat-icon">\u{1F4CA}</div>\n                    <div class="stat-content">\n                        <p class="stat-value">{{ totalProgresos }}</p>\n                        <p class="stat-label">Progresos</p>\n                    </div>\n                </div>\n\n                <div class="stat-card">\n                    <div class="stat-icon">\u{1F4AA}</div>\n                    <div class="stat-content">\n                        <p class="stat-value">{{ totalSesiones }}</p>\n                        <p class="stat-label">Sesiones</p>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <!-- Acciones -->\n        <section class="actions-section">\n            <button class="logout-button" (click)="cerrarSesion()">\n                <span class="logout-icon">\u{1F6AA}</span>\n                <span class="logout-text">Cerrar Sesi\xF3n</span>\n            </button>\n        </section>\n        } @else {\n        <div class="empty-container">\n            <p>No se pudo cargar la informaci\xF3n del usuario</p>\n            <button (click)="cargarDatos()" class="retry-button">Reintentar</button>\n        </div>\n        }\n    </main>\n\n    <app-bottom-nav />\n</div>', styles: ['/* src/app/features/user/perfil/perfil.css */\n.app-container {\n  max-width: 414px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f7fa 0%,\n      #e8ecf1 100%);\n  min-height: 100vh;\n  color: #1a1a1a;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.main-content {\n  padding: 20px 16px;\n  padding-bottom: 100px;\n}\n.profile-section {\n  margin-bottom: 24px;\n}\n.profile-header {\n  margin-bottom: 16px;\n}\n.page-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.info-section {\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.info-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.info-icon {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.info-content {\n  flex: 1;\n  min-width: 0;\n}\n.info-label {\n  font-size: 12px;\n  color: #666;\n  margin: 0 0 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.info-value {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n  word-break: break-word;\n}\n.stats-section {\n  margin-bottom: 24px;\n}\n.section-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 16px 0;\n  text-transform: capitalize;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.stat-card {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.stat-icon {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n}\n.stat-content {\n  flex: 1;\n}\n.stat-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n  line-height: 1;\n}\n.stat-label {\n  font-size: 12px;\n  color: #666;\n  margin: 4px 0 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-section {\n  margin-top: 24px;\n}\n.logout-button {\n  width: 100%;\n  background: white;\n  border: 2px solid #d32f2f;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  color: #d32f2f;\n}\n.logout-button:hover {\n  background: #d32f2f;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);\n}\n.logout-button:active {\n  transform: translateY(0);\n}\n.logout-icon {\n  font-size: 20px;\n}\n.logout-text {\n  font-size: 16px;\n}\n.loading-container,\n.error-container,\n.empty-container {\n  padding: 60px 20px;\n  text-align: center;\n  color: #666;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-container {\n  color: #d32f2f;\n}\n.empty-container {\n  color: #999;\n}\n.retry-button {\n  margin-top: 16px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.retry-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.retry-button:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=perfil.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Perfil, { className: "Perfil", filePath: "src/app/features/user/perfil/perfil.ts", lineNumber: 18 });
})();
export {
  Perfil
};
//# sourceMappingURL=chunk-HXR5HAUD.js.map
