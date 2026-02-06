import {
  EntrenamientoService
} from "./chunk-JKBF5XQK.js";
import {
  BottomNav,
  Header
} from "./chunk-TT6GHJS4.js";
import {
  ActivatedRoute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/user/programas/detalle-programa/detalle-programa.ts
var _forTrack0 = ($index, $item) => $item.id;
function DetallePrograma_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "Cargando programa...");
    \u0275\u0275elementEnd()();
  }
}
function DetallePrograma_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function DetallePrograma_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.volver());
    });
    \u0275\u0275text(4, "Volver");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function DetallePrograma_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.programa.descripcion);
  }
}
function DetallePrograma_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 15);
    \u0275\u0275text(2, "Per\xEDodo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatearFecha(ctx_r1.programa.fechaInicio), " - ", ctx_r1.formatearFecha(ctx_r1.programa.fechaFin), " ");
  }
}
function DetallePrograma_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 15);
    \u0275\u0275text(2, "Ejercicios:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.programa.ejercicios.length);
  }
}
function DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ejercicio_r4.descripcion);
  }
}
function DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Reps: ", ejercicio_r4.repeticiones);
  }
}
function DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Peso: ", ejercicio_r4.peso, "kg");
  }
}
function DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ejercicio_r4.tipo);
  }
}
function DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275text(1, " Ver video \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", ejercicio_r4.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function DetallePrograma_Conditional_5_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_3_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275conditionalCreate(5, DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_5_Template, 2, 1, "span", 23);
    \u0275\u0275conditionalCreate(6, DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_6_Template, 2, 1, "span", 23);
    \u0275\u0275conditionalCreate(7, DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_7_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DetallePrograma_Conditional_5_Conditional_10_For_5_Conditional_8_Template, 2, 1, "a", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ejercicio_r4.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ejercicio_r4.descripcion ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ejercicio_r4.repeticiones ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ejercicio_r4.peso ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ejercicio_r4.tipo ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ejercicio_r4.videoUrl ? 8 : -1);
  }
}
function DetallePrograma_Conditional_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 17);
    \u0275\u0275text(2, "Ejercicios del programa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275repeaterCreate(4, DetallePrograma_Conditional_5_Conditional_10_For_5_Template, 9, 6, "div", 19, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.programa.ejercicios);
  }
}
function DetallePrograma_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2, "Este programa no tiene ejercicios asignados a\xFAn.");
    \u0275\u0275elementEnd()();
  }
}
function DetallePrograma_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function DetallePrograma_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.volver());
    });
    \u0275\u0275text(2, "\u2190 Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DetallePrograma_Conditional_5_Conditional_6_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275conditionalCreate(8, DetallePrograma_Conditional_5_Conditional_8_Template, 5, 2, "div", 10);
    \u0275\u0275conditionalCreate(9, DetallePrograma_Conditional_5_Conditional_9_Template, 5, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DetallePrograma_Conditional_5_Conditional_10_Template, 6, 0, "div", 11)(11, DetallePrograma_Conditional_5_Conditional_11_Template, 3, 0, "div", 12);
    \u0275\u0275elementStart(12, "div", 13)(13, "button", 14);
    \u0275\u0275text(14, "Comenzar entrenamiento");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.programa.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.programa.descripcion ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.programa.fechaInicio || ctx_r1.programa.fechaFin ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.programa.ejercicios && ctx_r1.programa.ejercicios.length > 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.programa.ejercicios && ctx_r1.programa.ejercicios.length > 0 ? 10 : 11);
  }
}
var DetallePrograma = class _DetallePrograma {
  route = inject(ActivatedRoute);
  router = inject(Router);
  entrenamientoService = inject(EntrenamientoService);
  programa = null;
  loading = true;
  error = null;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.cargarPrograma(Number(id));
    } else {
      this.error = "ID de programa no v\xE1lido";
      this.loading = false;
    }
  }
  cargarPrograma(id) {
    this.loading = true;
    this.error = null;
    this.entrenamientoService.obtenerPorId(id).subscribe({
      next: (programa) => {
        this.programa = programa;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error al cargar programa:", err);
        this.error = "Error al cargar el programa";
        this.loading = false;
      }
    });
  }
  volver() {
    this.router.navigate(["/home"]);
  }
  formatearFecha(fecha) {
    if (!fecha)
      return "No especificada";
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
  static \u0275fac = function DetallePrograma_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetallePrograma)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetallePrograma, selectors: [["app-detalle-programa"]], decls: 7, vars: 1, consts: [[1, "page-wrapper"], [1, "page-container"], [1, "loading-container"], [1, "error-container"], [1, "programa-detalle"], [1, "back-button", 3, "click"], [1, "programa-header"], [1, "programa-titulo"], [1, "programa-descripcion"], [1, "programa-info"], [1, "info-item"], [1, "ejercicios-section"], [1, "empty-ejercicios"], [1, "action-buttons"], [1, "primary-button"], [1, "info-label"], [1, "info-value"], [1, "section-title"], [1, "ejercicios-list"], [1, "ejercicio-card"], [1, "ejercicio-nombre"], [1, "ejercicio-descripcion"], [1, "ejercicio-detalles"], [1, "detalle-badge"], ["target", "_blank", 1, "video-link", 3, "href"]], template: function DetallePrograma_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275conditionalCreate(3, DetallePrograma_Conditional_3_Template, 3, 0, "div", 2)(4, DetallePrograma_Conditional_4_Template, 5, 1, "div", 3)(5, DetallePrograma_Conditional_5_Template, 15, 5, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 3 : ctx.error ? 4 : ctx.programa ? 5 : -1);
    }
  }, dependencies: [CommonModule, Header, BottomNav], styles: ['\n\n.page-wrapper[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n  color: black;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  padding-bottom: 100px;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #666;\n}\n.error-container[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.back-button[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 8px 16px;\n  background: transparent;\n  color: #000;\n  border: 2px solid #000;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #fff;\n}\n.programa-detalle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.programa-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.programa-titulo[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 12px;\n  text-transform: capitalize;\n}\n.programa-descripcion[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #555;\n  line-height: 1.5;\n}\n.programa-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 2px solid #000;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #666;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 700;\n}\n.ejercicios-section[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 20px;\n  text-transform: capitalize;\n}\n.ejercicios-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.ejercicio-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #000;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ejercicio-nombre[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 4px;\n}\n.ejercicio-descripcion[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.ejercicio-detalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.detalle-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #f0f0f0;\n  border: 1px solid #000;\n  font-size: 12px;\n  font-weight: 700;\n  color: #000;\n}\n.video-link[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #000;\n  text-decoration: underline;\n  font-weight: 700;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.video-link[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n.empty-ejercicios[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #666;\n  background: #fff;\n  border: 2px solid #000;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.primary-button[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #000;\n  color: #fff;\n  border: 2px solid #000;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: uppercase;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  background: #333;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.primary-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=detalle-programa.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetallePrograma, [{
    type: Component,
    args: [{ selector: "app-detalle-programa", imports: [CommonModule, Header, BottomNav], template: '<div class="page-wrapper">\r\n    <app-header />\r\n\r\n    <div class="page-container">\r\n        @if (loading) {\r\n        <div class="loading-container">\r\n            <p>Cargando programa...</p>\r\n        </div>\r\n        } @else if (error) {\r\n        <div class="error-container">\r\n            <p>{{ error }}</p>\r\n            <button (click)="volver()" class="back-button">Volver</button>\r\n        </div>\r\n        } @else if (programa) {\r\n        <div class="programa-detalle">\r\n            <button (click)="volver()" class="back-button">\u2190 Volver</button>\r\n\r\n            <div class="programa-header">\r\n                <h1 class="programa-titulo">{{ programa.nombre }}</h1>\r\n                @if (programa.descripcion) {\r\n                <p class="programa-descripcion">{{ programa.descripcion }}</p>\r\n                }\r\n            </div>\r\n\r\n            <div class="programa-info">\r\n                @if (programa.fechaInicio || programa.fechaFin) {\r\n                <div class="info-item">\r\n                    <span class="info-label">Per\xEDodo:</span>\r\n                    <span class="info-value">\r\n                        {{ formatearFecha(programa.fechaInicio) }} -\r\n                        {{ formatearFecha(programa.fechaFin) }}\r\n                    </span>\r\n                </div>\r\n                }\r\n                @if (programa.ejercicios && programa.ejercicios.length > 0) {\r\n                <div class="info-item">\r\n                    <span class="info-label">Ejercicios:</span>\r\n                    <span class="info-value">{{ programa.ejercicios.length }}</span>\r\n                </div>\r\n                }\r\n            </div>\r\n\r\n            @if (programa.ejercicios && programa.ejercicios.length > 0) {\r\n            <div class="ejercicios-section">\r\n                <h2 class="section-title">Ejercicios del programa</h2>\r\n                <div class="ejercicios-list">\r\n                    @for (ejercicio of programa.ejercicios; track ejercicio.id) {\r\n                    <div class="ejercicio-card">\r\n                        <h3 class="ejercicio-nombre">{{ ejercicio.nombre }}</h3>\r\n                        @if (ejercicio.descripcion) {\r\n                        <p class="ejercicio-descripcion">{{ ejercicio.descripcion }}</p>\r\n                        }\r\n                        <div class="ejercicio-detalles">\r\n                            @if (ejercicio.repeticiones) {\r\n                            <span class="detalle-badge">Reps: {{ ejercicio.repeticiones }}</span>\r\n                            }\r\n                            @if (ejercicio.peso) {\r\n                            <span class="detalle-badge">Peso: {{ ejercicio.peso }}kg</span>\r\n                            }\r\n                            @if (ejercicio.tipo) {\r\n                            <span class="detalle-badge">{{ ejercicio.tipo }}</span>\r\n                            }\r\n                        </div>\r\n                        @if (ejercicio.videoUrl) {\r\n                        <a [href]="ejercicio.videoUrl" target="_blank" class="video-link">\r\n                            Ver video \u2192\r\n                        </a>\r\n                        }\r\n                    </div>\r\n                    }\r\n                </div>\r\n            </div>\r\n            } @else {\r\n            <div class="empty-ejercicios">\r\n                <p>Este programa no tiene ejercicios asignados a\xFAn.</p>\r\n            </div>\r\n            }\r\n\r\n            <div class="action-buttons">\r\n                <button class="primary-button">Comenzar entrenamiento</button>\r\n            </div>\r\n        </div>\r\n        }\r\n    </div>\r\n\r\n    <app-bottom-nav />\r\n</div>', styles: ['/* src/app/features/user/programas/detalle-programa/detalle-programa.css */\n.page-wrapper {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n  color: black;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.page-container {\n  padding: 24px 16px;\n  padding-bottom: 100px;\n}\n.loading-container,\n.error-container {\n  padding: 40px 20px;\n  text-align: center;\n  color: #666;\n}\n.error-container {\n  color: #d32f2f;\n}\n.back-button {\n  margin-bottom: 20px;\n  padding: 8px 16px;\n  background: transparent;\n  color: #000;\n  border: 2px solid #000;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-button:hover {\n  background: #000;\n  color: #fff;\n}\n.programa-detalle {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.programa-header {\n  margin-bottom: 8px;\n}\n.programa-titulo {\n  font-size: 32px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 12px;\n  text-transform: capitalize;\n}\n.programa-descripcion {\n  font-size: 16px;\n  color: #555;\n  line-height: 1.5;\n}\n.programa-info {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 2px solid #000;\n}\n.info-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.info-label {\n  font-weight: 700;\n  color: #666;\n}\n.info-value {\n  color: #000;\n  font-weight: 700;\n}\n.ejercicios-section {\n  margin-top: 8px;\n}\n.section-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 20px;\n  text-transform: capitalize;\n}\n.ejercicios-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.ejercicio-card {\n  background: #fff;\n  border: 2px solid #000;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ejercicio-nombre {\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n  margin-bottom: 4px;\n}\n.ejercicio-descripcion {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.ejercicio-detalles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.detalle-badge {\n  padding: 6px 12px;\n  background: #f0f0f0;\n  border: 1px solid #000;\n  font-size: 12px;\n  font-weight: 700;\n  color: #000;\n}\n.video-link {\n  margin-top: 8px;\n  color: #000;\n  text-decoration: underline;\n  font-weight: 700;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n.video-link:hover {\n  color: #666;\n}\n.empty-ejercicios {\n  padding: 40px 20px;\n  text-align: center;\n  color: #666;\n  background: #fff;\n  border: 2px solid #000;\n}\n.action-buttons {\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.primary-button {\n  padding: 16px 24px;\n  background: #000;\n  color: #fff;\n  border: 2px solid #000;\n  font-family: "Stardos Stencil", sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: uppercase;\n}\n.primary-button:hover {\n  background: #333;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.primary-button:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=detalle-programa.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetallePrograma, { className: "DetallePrograma", filePath: "src/app/features/user/programas/detalle-programa/detalle-programa.ts", lineNumber: 16 });
})();
export {
  DetallePrograma
};
//# sourceMappingURL=chunk-T2ZEYQSZ.js.map
