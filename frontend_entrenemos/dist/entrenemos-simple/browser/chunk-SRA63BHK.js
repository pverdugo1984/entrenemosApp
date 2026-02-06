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
  EntrenamientoService
} from "./chunk-JKBF5XQK.js";
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
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/shared/components/program-card/program-card.ts
var ProgramCard = class _ProgramCard {
  entrenamiento;
  nombre;
  // Mantener compatibilidad
  detalles;
  imagen;
  get nombrePrograma() {
    return this.entrenamiento?.nombre || this.nombre || "Programa";
  }
  get detallesPrograma() {
    if (this.entrenamiento) {
      const partes = [];
      if (this.entrenamiento.descripcion) {
        partes.push(this.entrenamiento.descripcion);
      }
      if (this.entrenamiento.ejercicios && this.entrenamiento.ejercicios.length > 0) {
        partes.push(`${this.entrenamiento.ejercicios.length} ejercicios`);
      }
      return partes.join(" | ") || "Sin detalles";
    }
    return this.detalles || "";
  }
  get imagenPrograma() {
    if (this.imagen) {
      return this.imagen;
    }
    const nombre = this.nombrePrograma.toLowerCase();
    if (nombre.includes("trx"))
      return "trx";
    if (nombre.includes("builder"))
      return "builder";
    if (nombre.includes("basic"))
      return "basic";
    return "basic";
  }
  static \u0275fac = function ProgramCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramCard, selectors: [["app-program-card"]], inputs: { entrenamiento: "entrenamiento", nombre: "nombre", detalles: "detalles", imagen: "imagen" }, decls: 7, vars: 4, consts: [[1, "program-card"], [1, "program-info"], [1, "program-name"], [1, "program-details"], [1, "program-image"]], template: function ProgramCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(6, "div", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.nombrePrograma);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.detallesPrograma);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.imagenPrograma);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.program-card[_ngcontent-%COMP%] {\n  background: white;\n  border: none;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  border-radius: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.program-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s;\n}\n.program-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);\n}\n.program-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.program-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.program-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n}\n.program-details[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.program-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 16px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.program-card[_ngcontent-%COMP%]:hover   .program-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.program-image[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.1) 0%,\n      rgba(118, 75, 162, 0.1) 100%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.program-card[_ngcontent-%COMP%]:hover   .program-image[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.program-image.trx[_ngcontent-%COMP%] {\n  background-image: url(/assets/trx-image.jpg);\n}\n.program-image.builder[_ngcontent-%COMP%] {\n  background-image: url(/assets/bb-image.jpg);\n}\n.program-image.basic[_ngcontent-%COMP%] {\n  background-image: url(/assets/bf-image.jpg);\n}\n/*# sourceMappingURL=program-card.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramCard, [{
    type: Component,
    args: [{ selector: "app-program-card", imports: [CommonModule], template: '<div class="program-card">\r\n    <div class="program-info">\r\n        <h3 class="program-name">{{ nombrePrograma }}</h3>\r\n        <p class="program-details">{{ detallesPrograma }}</p>\r\n    </div>\r\n    <div class="program-image" [class]="imagenPrograma"></div>\r\n</div>', styles: ['/* src/app/shared/components/program-card/program-card.css */\n.program-card {\n  background: white;\n  border: none;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  border-radius: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.program-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s;\n}\n.program-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);\n}\n.program-card:hover::before {\n  transform: scaleX(1);\n}\n.program-info {\n  flex: 1;\n  min-width: 0;\n}\n.program-name {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n}\n.program-details {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.program-image {\n  width: 100px;\n  height: 100px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 16px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.program-card:hover .program-image {\n  transform: scale(1.05);\n}\n.program-image::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.1) 0%,\n      rgba(118, 75, 162, 0.1) 100%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.program-card:hover .program-image::after {\n  opacity: 1;\n}\n.program-image.trx {\n  background-image: url(/assets/trx-image.jpg);\n}\n.program-image.builder {\n  background-image: url(/assets/bb-image.jpg);\n}\n.program-image.basic {\n  background-image: url(/assets/bf-image.jpg);\n}\n/*# sourceMappingURL=program-card.css.map */\n'] }]
  }], null, { entrenamiento: [{
    type: Input
  }], nombre: [{
    type: Input
  }], detalles: [{
    type: Input
  }], imagen: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramCard, { className: "ProgramCard", filePath: "src/app/shared/components/program-card/program-card.ts", lineNumber: 11 });
})();

// src/app/features/user/home/home.ts
var _forTrack0 = ($index, $item) => $item.id;
function Home_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h1", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Contin\xFAa tu progreso hoy");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "app-user-profile", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.saludoPersonalizado, ", ", ctx_r0.usuario.nombre, "!");
    \u0275\u0275advance(3);
    \u0275\u0275property("usuario", ctx_r0.usuario);
  }
}
function Home_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h1", 14);
    \u0275\u0275text(2, "\xA1Bienvenido a Entrenemos!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Inicia tu viaje fitness hoy");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "app-user-profile");
  }
}
function Home_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 21);
    \u0275\u0275text(8, "Sesiones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 17)(10, "div", 18);
    \u0275\u0275text(11, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19)(13, "p", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 21);
    \u0275\u0275text(16, "Completados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18);
    \u0275\u0275text(19, "\u{1F4AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 21);
    \u0275\u0275text(24, "Programas");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.totalProgresos);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.programasCompletados);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.totalProgramas);
  }
}
function Home_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function Home_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/rutina"]));
    });
    \u0275\u0275text(1, " Ver todos ");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando programas...");
    \u0275\u0275elementEnd()();
  }
}
function Home_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function Home_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cargarDatos());
    });
    \u0275\u0275text(4, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function Home_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2, "No hay programas disponibles");
    \u0275\u0275elementEnd()();
  }
}
function Home_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function Home_Conditional_15_For_2_Template_div_click_0_listener() {
      const programa_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verDetallePrograma(programa_r5));
    });
    \u0275\u0275element(1, "app-program-card", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const programa_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("entrenamiento", programa_r5);
  }
}
function Home_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, Home_Conditional_15_For_2_Template, 2, 1, "div", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.programasDestacados);
  }
}
function Home_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 6);
    \u0275\u0275text(2, "Acciones r\xE1pidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "button", 29);
    \u0275\u0275listener("click", function Home_Conditional_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/progreso"]));
    });
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8, "Ver Progreso");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 29);
    \u0275\u0275listener("click", function Home_Conditional_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/rutina"]));
    });
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11, "\u{1F3CB}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 31);
    \u0275\u0275text(13, "Mis Rutinas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 29);
    \u0275\u0275listener("click", function Home_Conditional_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/comunidad"]));
    });
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 31);
    \u0275\u0275text(18, "Comunidad");
    \u0275\u0275elementEnd()()()();
  }
}
var Home = class _Home {
  entrenamientoService = inject(EntrenamientoService);
  progresoService = inject(ProgresoService);
  authService = inject(AuthService);
  router = inject(Router);
  programas = [];
  programasDestacados = [];
  usuario = null;
  progresos = [];
  loading = true;
  error = null;
  // Estadísticas
  totalProgramas = 0;
  totalProgresos = 0;
  programasCompletados = 0;
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.error = null;
    this.entrenamientoService.listar().subscribe({
      next: (programas) => {
        this.programas = programas;
        this.totalProgramas = programas.length;
        this.programasDestacados = programas.slice(0, 3);
        this.loading = false;
      },
      error: (err) => {
        console.error("Error al cargar programas:", err);
        this.error = "Error al cargar los programas";
        this.loading = false;
      }
    });
    this.cargarUsuarioActual();
  }
  cargarUsuarioActual() {
    if (!this.authService.isAuthenticated()) {
      console.log("Usuario no autenticado");
      return;
    }
    this.authService.getCurrentUser().subscribe({
      next: (usuario) => {
        console.log("Usuario actual cargado:", usuario);
        this.usuario = usuario;
        if (usuario.id) {
          this.cargarProgresos(usuario.id);
        }
      },
      error: (err) => {
        console.error("Error al cargar usuario actual:", err);
        this.usuario = null;
      }
    });
  }
  cargarProgresos(usuarioId) {
    this.progresoService.obtenerPorUsuario(usuarioId).subscribe({
      next: (progresos) => {
        this.progresos = progresos;
        this.totalProgresos = progresos.length;
        this.programasCompletados = Math.floor(progresos.length / 3);
      },
      error: (err) => {
        console.error("Error al cargar progresos:", err);
      }
    });
  }
  get saludoPersonalizado() {
    const hora = (/* @__PURE__ */ new Date()).getHours();
    if (hora < 12)
      return "Buenos d\xEDas";
    if (hora < 18)
      return "Buenas tardes";
    return "Buenas noches";
  }
  verDetallePrograma(programa) {
    if (programa.id) {
      this.router.navigate(["/rutina", programa.id]);
    }
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 18, vars: 5, consts: [[1, "app-container"], [1, "main-content"], [1, "welcome-section"], [1, "stats-section"], [1, "featured-programs"], [1, "section-header"], [1, "section-title"], [1, "see-all-button"], [1, "loading-container"], [1, "error-container"], [1, "empty-container"], [1, "programs-container"], [1, "quick-actions"], [1, "welcome-content"], [1, "welcome-title"], [1, "welcome-subtitle"], [3, "usuario"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "see-all-button", 3, "click"], [1, "spinner"], [1, "retry-button", 3, "click"], [1, "program-wrapper"], [1, "program-wrapper", 3, "click"], [3, "entrenamiento"], [1, "actions-grid"], [1, "action-card", 3, "click"], [1, "action-icon"], [1, "action-text"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "main", 1)(3, "section", 2);
      \u0275\u0275conditionalCreate(4, Home_Conditional_4_Template, 6, 3)(5, Home_Conditional_5_Template, 6, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, Home_Conditional_6_Template, 25, 3, "section", 3);
      \u0275\u0275elementStart(7, "section", 4)(8, "div", 5)(9, "h2", 6);
      \u0275\u0275text(10, "Programas destacados");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, Home_Conditional_11_Template, 2, 0, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, Home_Conditional_12_Template, 4, 0, "div", 8)(13, Home_Conditional_13_Template, 5, 1, "div", 9)(14, Home_Conditional_14_Template, 3, 0, "div", 10)(15, Home_Conditional_15_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, Home_Conditional_16_Template, 19, 0, "section", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.usuario ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.usuario && !ctx.loading ? 6 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.programas.length > 3 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 12 : ctx.error ? 13 : ctx.programas.length === 0 ? 14 : 15);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading ? 16 : -1);
    }
  }, dependencies: [CommonModule, Header, UserProfile, ProgramCard, BottomNav], styles: ['\n\n.app-container[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f7fa 0%,\n      #e8ecf1 100%);\n  min-height: 100vh;\n  color: #1a1a1a;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 20px 16px;\n  padding-bottom: 100px;\n}\n.welcome-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.welcome-content[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  font-weight: 400;\n}\n.stats-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n}\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 4px 0 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.featured-programs[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n  text-transform: capitalize;\n}\n.see-all-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #667eea;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  font-family: "Stardos Stencil", sans-serif;\n  transition: color 0.2s;\n}\n.see-all-button[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n.programs-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.program-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.program-wrapper[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.program-wrapper[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n}\n.quick-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.action-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e8ecf1;\n  border-radius: 16px;\n  padding: 20px 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.action-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a1a;\n  text-align: center;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%], \n.empty-container[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n  color: #666;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.empty-container[_ngcontent-%COMP%] {\n  color: #999;\n}\n.retry-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.retry-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.retry-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [CommonModule, Header, UserProfile, ProgramCard, BottomNav], template: `<div class="app-container">\r
    <app-header />\r
\r
    <main class="main-content">\r
        <!-- Secci\xF3n de bienvenida -->\r
        <section class="welcome-section">\r
            @if (usuario) {\r
            <div class="welcome-content">\r
                <h1 class="welcome-title">{{ saludoPersonalizado }}, {{ usuario.nombre }}!</h1>\r
                <p class="welcome-subtitle">Contin\xFAa tu progreso hoy</p>\r
            </div>\r
            <app-user-profile [usuario]="usuario" />\r
            } @else {\r
            <div class="welcome-content">\r
                <h1 class="welcome-title">\xA1Bienvenido a Entrenemos!</h1>\r
                <p class="welcome-subtitle">Inicia tu viaje fitness hoy</p>\r
            </div>\r
            <app-user-profile />\r
            }\r
        </section>\r
\r
        <!-- Estad\xEDsticas r\xE1pidas -->\r
        @if (usuario && !loading) {\r
        <section class="stats-section">\r
            <div class="stat-card">\r
                <div class="stat-icon">\u{1F4CA}</div>\r
                <div class="stat-content">\r
                    <p class="stat-value">{{ totalProgresos }}</p>\r
                    <p class="stat-label">Sesiones</p>\r
                </div>\r
            </div>\r
            <div class="stat-card">\r
                <div class="stat-icon">\u{1F3AF}</div>\r
                <div class="stat-content">\r
                    <p class="stat-value">{{ programasCompletados }}</p>\r
                    <p class="stat-label">Completados</p>\r
                </div>\r
            </div>\r
            <div class="stat-card">\r
                <div class="stat-icon">\u{1F4AA}</div>\r
                <div class="stat-content">\r
                    <p class="stat-value">{{ totalProgramas }}</p>\r
                    <p class="stat-label">Programas</p>\r
                </div>\r
            </div>\r
        </section>\r
        }\r
\r
        <!-- Programas destacados -->\r
        <section class="featured-programs">\r
            <div class="section-header">\r
                <h2 class="section-title">Programas destacados</h2>\r
                @if (programas.length > 3) {\r
                <button class="see-all-button" (click)="router.navigate(['/rutina'])">\r
                    Ver todos\r
                </button>\r
                }\r
            </div>\r
\r
            @if (loading) {\r
            <div class="loading-container">\r
                <div class="spinner"></div>\r
                <p>Cargando programas...</p>\r
            </div>\r
            } @else if (error) {\r
            <div class="error-container">\r
                <p>{{ error }}</p>\r
                <button (click)="cargarDatos()" class="retry-button">Reintentar</button>\r
            </div>\r
            } @else if (programas.length === 0) {\r
            <div class="empty-container">\r
                <p>No hay programas disponibles</p>\r
            </div>\r
            } @else {\r
            <div class="programs-container">\r
                @for (programa of programasDestacados; track programa.id) {\r
                <div class="program-wrapper" (click)="verDetallePrograma(programa)">\r
                    <app-program-card [entrenamiento]="programa" />\r
                </div>\r
                }\r
            </div>\r
            }\r
        </section>\r
\r
        <!-- Acciones r\xE1pidas -->\r
        @if (!loading) {\r
        <section class="quick-actions">\r
            <h2 class="section-title">Acciones r\xE1pidas</h2>\r
            <div class="actions-grid">\r
                <button class="action-card" (click)="router.navigate(['/progreso'])">\r
                    <span class="action-icon">\u{1F4C8}</span>\r
                    <span class="action-text">Ver Progreso</span>\r
                </button>\r
                <button class="action-card" (click)="router.navigate(['/rutina'])">\r
                    <span class="action-icon">\u{1F3CB}\uFE0F</span>\r
                    <span class="action-text">Mis Rutinas</span>\r
                </button>\r
                <button class="action-card" (click)="router.navigate(['/comunidad'])">\r
                    <span class="action-icon">\u{1F465}</span>\r
                    <span class="action-text">Comunidad</span>\r
                </button>\r
            </div>\r
        </section>\r
        }\r
    </main>\r
\r
    <app-bottom-nav />\r
</div>`, styles: ['/* src/app/features/user/home/home.css */\n.app-container {\n  max-width: 414px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f7fa 0%,\n      #e8ecf1 100%);\n  min-height: 100vh;\n  color: #1a1a1a;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.main-content {\n  padding: 20px 16px;\n  padding-bottom: 100px;\n}\n.welcome-section {\n  margin-bottom: 24px;\n}\n.welcome-content {\n  margin-bottom: 16px;\n}\n.welcome-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n.welcome-subtitle {\n  font-size: 16px;\n  color: #666;\n  font-weight: 400;\n}\n.stats-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.stat-card {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.stat-icon {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n}\n.stat-content {\n  flex: 1;\n}\n.stat-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n  line-height: 1;\n}\n.stat-label {\n  font-size: 12px;\n  color: #666;\n  margin: 4px 0 0 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.featured-programs {\n  margin-bottom: 24px;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n  text-transform: capitalize;\n}\n.see-all-button {\n  background: transparent;\n  border: none;\n  color: #667eea;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 8px;\n  font-family: "Stardos Stencil", sans-serif;\n  transition: color 0.2s;\n}\n.see-all-button:hover {\n  color: #764ba2;\n}\n.programs-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.program-wrapper {\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.program-wrapper:hover {\n  transform: translateY(-4px);\n}\n.program-wrapper:active {\n  transform: translateY(-2px);\n}\n.quick-actions {\n  margin-top: 24px;\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.action-card {\n  background: white;\n  border: 2px solid #e8ecf1;\n  border-radius: 16px;\n  padding: 20px 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.action-card:hover {\n  border-color: #667eea;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);\n}\n.action-icon {\n  font-size: 28px;\n}\n.action-text {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a1a;\n  text-align: center;\n}\n.loading-container,\n.error-container,\n.empty-container {\n  padding: 60px 20px;\n  text-align: center;\n  color: #666;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-container {\n  color: #d32f2f;\n}\n.empty-container {\n  color: #999;\n}\n.retry-button {\n  margin-top: 16px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.retry-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.retry-button:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/features/user/home/home.ts", lineNumber: 21 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-SRA63BHK.js.map
