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
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  Router
} from "./chunk-C4S3RDAR.js";
import "./chunk-CIZ2GW32.js";
import {
  CommonModule
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  forkJoin,
  inject,
  interval,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CP4LEFUZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/shared/components/wod-timer/wod-timer.ts
function WodTimerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 7);
    \u0275\u0275domListener("click", function WodTimerComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.iniciarTimer());
    });
    \u0275\u0275text(1, " \u25B6\uFE0F Iniciar ");
    \u0275\u0275domElementEnd();
  }
}
function WodTimerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 8);
    \u0275\u0275domListener("click", function WodTimerComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pausarTimer());
    });
    \u0275\u0275text(1, " \u23F8\uFE0F Pausar ");
    \u0275\u0275domElementEnd();
  }
}
var WodTimerComponent = class _WodTimerComponent {
  // For Time: cronómetro simple
  fortimeTiempoTranscurrido = 0;
  // segundos
  fortimeEnCurso = false;
  // Control común
  timer$ = null;
  ngOnDestroy() {
    this.detenerTimer();
  }
  iniciarTimer() {
    if (this.timer$)
      return;
    this.timer$ = interval(1e3).subscribe(() => {
      this.fortimeTiempoTranscurrido++;
    });
    this.fortimeEnCurso = true;
  }
  pausarTimer() {
    this.detenerTimer();
  }
  detenerTimer() {
    if (this.timer$) {
      this.timer$.unsubscribe();
      this.timer$ = null;
    }
    this.fortimeEnCurso = false;
  }
  resetearTimer() {
    this.fortimeTiempoTranscurrido = 0;
  }
  formatearTiempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor(segundos % 3600 / 60);
    const seg = Math.floor(segundos % 60);
    if (horas > 0) {
      return `${horas}:${minutos.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
    }
    return `${minutos}:${seg.toString().padStart(2, "0")}`;
  }
  static \u0275fac = function WodTimerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WodTimerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WodTimerComponent, selectors: [["app-wod-timer"]], decls: 11, vars: 3, consts: [[1, "wod-timer-container"], [1, "wod-panel"], [1, "display-tiempo"], [1, "controles"], [1, "btn-control", "btn-start"], [1, "btn-control", "btn-pause"], [1, "btn-control", "btn-stop", 3, "click"], [1, "btn-control", "btn-start", 3, "click"], [1, "btn-control", "btn-pause", 3, "click"]], template: function WodTimerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Cron\xF3metro");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 2);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 3);
      \u0275\u0275conditionalCreate(7, WodTimerComponent_Conditional_7_Template, 2, 0, "button", 4);
      \u0275\u0275conditionalCreate(8, WodTimerComponent_Conditional_8_Template, 2, 0, "button", 5);
      \u0275\u0275domElementStart(9, "button", 6);
      \u0275\u0275domListener("click", function WodTimerComponent_Template_button_click_9_listener() {
        ctx.detenerTimer();
        return ctx.resetearTimer();
      });
      \u0275\u0275text(10, " \u23F9\uFE0F Detener ");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatearTiempo(ctx.fortimeTiempoTranscurrido));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.fortimeEnCurso ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fortimeEnCurso ? 8 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.wod-timer-container[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.wod-panel[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 16px;\n  text-align: center;\n}\n.wod-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.display-tiempo[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin: 16px 0;\n  font-family: "Courier New", monospace;\n}\n.controles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 16px;\n}\n.btn-control[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid #000;\n  background: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n.btn-control[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #fff;\n}\n.btn-start[_ngcontent-%COMP%] {\n  border-color: #4caf50;\n}\n.btn-start[_ngcontent-%COMP%]:hover {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.btn-pause[_ngcontent-%COMP%] {\n  border-color: #ff9800;\n}\n.btn-pause[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  border-color: #ff9800;\n}\n.btn-stop[_ngcontent-%COMP%] {\n  border-color: #f44336;\n}\n.btn-stop[_ngcontent-%COMP%]:hover {\n  background: #f44336;\n  border-color: #f44336;\n}\n/*# sourceMappingURL=wod-timer.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WodTimerComponent, [{
    type: Component,
    args: [{ selector: "app-wod-timer", standalone: true, imports: [CommonModule], template: '<div class="wod-timer-container">\r\n    <!-- For Time -->\r\n    <div class="wod-panel">\r\n        <h3>Cron\xF3metro</h3>\r\n        <div class="display-tiempo">{{ formatearTiempo(fortimeTiempoTranscurrido) }}</div>\r\n        <div class="controles">\r\n            @if (!fortimeEnCurso) {\r\n            <button class="btn-control btn-start" (click)="iniciarTimer()">\r\n                \u25B6\uFE0F Iniciar\r\n            </button>\r\n            }\r\n            @if (fortimeEnCurso) {\r\n            <button class="btn-control btn-pause" (click)="pausarTimer()">\r\n                \u23F8\uFE0F Pausar\r\n            </button>\r\n            }\r\n            <button class="btn-control btn-stop" (click)="detenerTimer(); resetearTimer()">\r\n                \u23F9\uFE0F Detener\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>', styles: ['/* src/app/shared/components/wod-timer/wod-timer.css */\n.wod-timer-container {\n  margin: 16px 0;\n}\n.wod-panel {\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 16px;\n  text-align: center;\n}\n.wod-panel h3 {\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.display-tiempo {\n  font-size: 48px;\n  font-weight: 700;\n  margin: 16px 0;\n  font-family: "Courier New", monospace;\n}\n.controles {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 16px;\n}\n.btn-control {\n  padding: 8px 16px;\n  border: 2px solid #000;\n  background: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n.btn-control:hover {\n  background: #000;\n  color: #fff;\n}\n.btn-start {\n  border-color: #4caf50;\n}\n.btn-start:hover {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.btn-pause {\n  border-color: #ff9800;\n}\n.btn-pause:hover {\n  background: #ff9800;\n  border-color: #ff9800;\n}\n.btn-stop {\n  border-color: #f44336;\n}\n.btn-stop:hover {\n  background: #f44336;\n  border-color: #f44336;\n}\n/*# sourceMappingURL=wod-timer.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WodTimerComponent, { className: "WodTimerComponent", filePath: "src/app/shared/components/wod-timer/wod-timer.ts", lineNumber: 12 });
})();

// src/app/features/user/programas/programas.ts
var _forTrack0 = ($index, $item) => $item.entrenamiento.id;
var _forTrack1 = ($index, $item) => $item.id;
function Programas_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u23F3 Cargando...");
    \u0275\u0275elementEnd()();
  }
}
function Programas_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u274C ", ctx_r0.error);
  }
}
function Programas_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} No hay planes disponibles en este momento");
    \u0275\u0275elementEnd()();
  }
}
function Programas_Conditional_12_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2705 Activo");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_12_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(plan_r3.dificultad.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r3.dificultad, " ");
  }
}
function Programas_Conditional_12_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r3.entrenamiento.descripcion);
  }
}
function Programas_Conditional_12_For_3_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Asignando...");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_12_For_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Cargando usuario...");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_12_For_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 Seleccionar Plan");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h2", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275conditionalCreate(5, Programas_Conditional_12_For_3_Conditional_5_Template, 2, 0, "span", 15);
    \u0275\u0275conditionalCreate(6, Programas_Conditional_12_For_3_Conditional_6_Template, 2, 3, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Programas_Conditional_12_For_3_Conditional_7_Template, 2, 1, "p", 17);
    \u0275\u0275elementStart(8, "div", 18)(9, "div", 19)(10, "span", 20);
    \u0275\u0275text(11, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "span", 20);
    \u0275\u0275text(16, "\u{1F3CB}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function Programas_Conditional_12_For_3_Template_button_click_19_listener() {
      const plan_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarPlan(plan_r3));
    });
    \u0275\u0275conditionalCreate(20, Programas_Conditional_12_For_3_Conditional_20_Template, 2, 0, "span")(21, Programas_Conditional_12_For_3_Conditional_21_Template, 2, 0, "span")(22, Programas_Conditional_12_For_3_Conditional_22_Template, 2, 0, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("plan-activo-marcado", ctx_r0.esPlanActivo(plan_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r3.entrenamiento.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.esPlanActivo(plan_r3) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r3.dificultad ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r3.entrenamiento.descripcion ? 7 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", plan_r3.duracionDias, " d\xEDas");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (plan_r3.entrenamiento.ejercicios == null ? null : plan_r3.entrenamiento.ejercicios.length) || (plan_r3.entrenamiento.ejerciciosIds == null ? null : plan_r3.entrenamiento.ejerciciosIds.length) || 0, " ejercicios ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.asignando || !ctx_r0.usuario || !ctx_r0.usuario.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.asignando ? 20 : !ctx_r0.usuario || !ctx_r0.usuario.id ? 21 : 22);
  }
}
function Programas_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, Programas_Conditional_12_Conditional_1_Template, 3, 0, "div", 9);
    \u0275\u0275repeaterCreate(2, Programas_Conditional_12_For_3_Template, 23, 10, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.planesDisponibles.length === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.planesDisponibles);
  }
}
function Programas_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 44)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47);
    \u0275\u0275element(8, "div", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F3AF} Plan Activo: ", (ctx_r0.planActivo == null ? null : ctx_r0.planActivo.entrenamiento == null ? null : ctx_r0.planActivo.entrenamiento.nombre) || "Cargando...");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Progreso: ", ctx_r0.obtenerProgresoPlan(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.obtenerProgresoPlan(), "%");
  }
}
function Programas_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No tienes un plan activo. Selecciona un plan para comenzar a registrar tu progreso.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function Programas_Conditional_13_Conditional_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarVista("disponibles"));
    });
    \u0275\u0275text(7, "Seleccionar Plan");
    \u0275\u0275elementEnd()()();
  }
}
function Programas_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2, "\u2705 \xA1Progreso registrado correctamente!");
    \u0275\u0275elementEnd()();
  }
}
function Programas_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u274C ", ctx_r0.error);
  }
}
function Programas_Conditional_13_Conditional_12_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function Programas_Conditional_13_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, Programas_Conditional_13_Conditional_12_For_4_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ejercicio_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ejercicio_r7.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.esEjercicioCompletado(ejercicio_r7.id) ? 2 : -1);
  }
}
function Programas_Conditional_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function Programas_Conditional_13_Conditional_12_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioSeleccionadoId, $event) || (ctx_r0.ejercicioSeleccionadoId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 53);
    \u0275\u0275text(2, "Selecciona un ejercicio");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, Programas_Conditional_13_Conditional_12_For_4_Template, 3, 3, "option", 53, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioSeleccionadoId);
    \u0275\u0275property("disabled", ctx_r0.guardando || ctx_r0.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.ejerciciosDisponibles);
  }
}
function Programas_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 54)(1, "option", 53);
    \u0275\u0275text(2, "Selecciona plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "\u26A0\uFE0F Necesitas tener un plan activo para registrar ejercicios");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
  }
}
function Programas_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "\u26A0\uFE0F El plan activo no tiene ejercicios asignados");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_13_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Progreso");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_13_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Programas_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-wod-timer");
    \u0275\u0275elementStart(2, "h2", 24);
    \u0275\u0275text(3, "Registra tu progreso");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Programas_Conditional_13_Conditional_4_Template, 9, 4, "div", 25)(5, Programas_Conditional_13_Conditional_5_Template, 8, 0, "div", 26);
    \u0275\u0275conditionalCreate(6, Programas_Conditional_13_Conditional_6_Template, 3, 0, "div", 27);
    \u0275\u0275conditionalCreate(7, Programas_Conditional_13_Conditional_7_Template, 3, 1, "div", 28);
    \u0275\u0275elementStart(8, "form", 29);
    \u0275\u0275listener("ngSubmit", function Programas_Conditional_13_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.registrarProgreso());
    });
    \u0275\u0275elementStart(9, "div", 30)(10, "label", 31);
    \u0275\u0275text(11, "Ejercicio");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, Programas_Conditional_13_Conditional_12_Template, 5, 3, "select", 32)(13, Programas_Conditional_13_Conditional_13_Template, 5, 1);
    \u0275\u0275conditionalCreate(14, Programas_Conditional_13_Conditional_14_Template, 2, 0, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 30)(16, "label", 34);
    \u0275\u0275text(17, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function Programas_Conditional_13_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.fecha, $event) || (ctx_r0.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 36)(20, "div", 30)(21, "label", 37);
    \u0275\u0275text(22, "Peso (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function Programas_Conditional_13_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.peso, $event) || (ctx_r0.peso = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 30)(25, "label", 39);
    \u0275\u0275text(26, "Repeticiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function Programas_Conditional_13_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.repeticiones, $event) || (ctx_r0.repeticiones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 30)(29, "label", 41);
    \u0275\u0275text(30, "Tiempo (seg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function Programas_Conditional_13_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tiempo, $event) || (ctx_r0.tiempo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 43);
    \u0275\u0275conditionalCreate(33, Programas_Conditional_13_Conditional_33_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(34, Programas_Conditional_13_Conditional_34_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.tienePlanActivo ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.exito ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.tienePlanActivo ? 12 : 13);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.planActivo && ctx_r0.ejerciciosDelPlan.length === 0 ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fecha);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.peso);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.repeticiones);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tiempo);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.guardando ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.guardando ? 34 : -1);
  }
}
var Programas = class _Programas {
  entrenamientoService = inject(EntrenamientoService);
  ejercicioService = inject(EjercicioService);
  planUsuarioService = inject(PlanUsuarioService);
  progresoService = inject(ProgresoService);
  authService = inject(AuthService);
  usuariosService = inject(UsuariosService);
  router = inject(Router);
  vistaSeleccionada = "mi-plan";
  planesDisponibles = [];
  planActivo = null;
  usuario = null;
  cargando = false;
  error = null;
  asignando = false;
  // Variables para el formulario de progreso
  ejercicios = [];
  ejerciciosDelPlan = [];
  ejercicioSeleccionadoId = null;
  peso = null;
  repeticiones = null;
  tiempo = null;
  fecha = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  guardando = false;
  exito = false;
  ngOnInit() {
    this.cargarUsuarioYPlan();
  }
  cambiarVista(vista) {
    this.vistaSeleccionada = vista;
    if (vista === "disponibles") {
      this.cargarPlanesDisponibles();
    } else {
      this.cargarPlanActivo();
      this.cargarEjercicios();
    }
  }
  cargarUsuarioYPlan() {
    this.cargando = true;
    this.error = null;
    this.cargarUsuario().then(() => {
      if (this.usuario && this.usuario.id) {
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargarPlanActivo();
          this.cargarEjercicios();
        } else {
          this.cargarPlanesDisponibles();
        }
      } else {
        this.error = "No se pudo cargar la informaci\xF3n del usuario. Por favor, recarga la p\xE1gina.";
        this.cargando = false;
        console.error("Usuario no cargado despu\xE9s de cargarUsuario()");
      }
    });
  }
  cargarUsuario() {
    return __async(this, null, function* () {
      const token = this.authService.getToken();
      if (!token) {
        console.warn("No hay token de autenticaci\xF3n");
        this.cargando = false;
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        this.authService.getCurrentUser().subscribe({
          next: (usuario) => {
            this.usuario = usuario;
            console.log("Usuario cargado con getCurrentUser:", usuario);
            resolve();
          },
          error: (err) => {
            console.warn("getCurrentUser fall\xF3, intentando m\xE9todo alternativo:", err);
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
          console.warn("No se pudo extraer el email del token");
          this.cargando = false;
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          this.usuariosService.listarUsuarios().subscribe({
            next: (usuarios) => {
              this.usuario = usuarios.find((u) => u.email === email) || null;
              if (!this.usuario) {
                console.warn("Usuario no encontrado con email:", email);
                this.error = "No se pudo encontrar tu usuario. Por favor, contacta al administrador.";
              } else {
                console.log("Usuario cargado correctamente:", this.usuario);
              }
              resolve();
            },
            error: (err) => {
              console.error("Error cargando usuarios:", err);
              this.error = "Error al cargar los datos del usuario";
              this.cargando = false;
              resolve();
            }
          });
        });
      } catch (error) {
        console.error("Error en cargarUsuarioPorEmail:", error);
        this.cargando = false;
        return Promise.resolve();
      }
    });
  }
  cargarPlanesDisponibles() {
    this.cargando = true;
    this.error = null;
    this.entrenamientoService.listar().subscribe({
      next: (entrenamientos) => {
        const planes = entrenamientos.map((ent) => {
          let duracionDias = 7;
          if (ent.fechaInicio && ent.fechaFin) {
            const inicio = new Date(ent.fechaInicio);
            const fin = new Date(ent.fechaFin);
            duracionDias = Math.ceil((fin.getTime() - inicio.getTime()) / (1e3 * 60 * 60 * 24));
          }
          return {
            entrenamiento: ent,
            duracionDias,
            dificultad: this.estimarDificultad(ent),
            categoria: "General"
          };
        });
        if (planes.length === 0) {
          this.planesDisponibles = [];
          this.cargando = false;
          return;
        }
        const solicitudesEjercicios = planes.map((plan) => {
          const ent = plan.entrenamiento;
          if (!ent.ejerciciosIds || ent.ejerciciosIds.length === 0) {
            return of(__spreadProps(__spreadValues({}, plan), {
              entrenamiento: __spreadProps(__spreadValues({}, ent), { ejercicios: [] })
            }));
          }
          const observablesEjercicios = ent.ejerciciosIds.map((id) => this.ejercicioService.obtenerPorId(id));
          return forkJoin(observablesEjercicios).pipe(map((ejercicios) => __spreadProps(__spreadValues({}, plan), {
            entrenamiento: __spreadProps(__spreadValues({}, ent), { ejercicios })
          })));
        });
        forkJoin(solicitudesEjercicios).subscribe({
          next: (planesConEjercicios) => {
            this.planesDisponibles = planesConEjercicios;
            this.cargando = false;
          },
          error: (err) => {
            console.error("Error cargando ejercicios:", err);
            this.error = "Error al cargar los ejercicios";
            this.cargando = false;
          }
        });
      },
      error: (err) => {
        console.error("Error cargando planes:", err);
        this.error = "Error al cargar los planes disponibles";
        this.cargando = false;
      }
    });
  }
  cargarPlanActivo() {
    if (!this.usuario?.id) {
      this.planActivo = null;
      return;
    }
    const usuarioId = this.usuario.id;
    this.cargando = true;
    this.planUsuarioService.obtenerPlanActivo(usuarioId).subscribe({
      next: (plan) => {
        if (plan) {
          if (plan.entrenamiento && plan.entrenamiento.ejerciciosIds && plan.entrenamiento.ejerciciosIds.length > 0 && (!plan.entrenamiento.ejercicios || plan.entrenamiento.ejercicios.length === 0)) {
            this.cargarEjerciciosDelPlanConPlan(plan);
          } else {
            this.planActivo = plan;
            this.cargando = false;
            if (this.vistaSeleccionada === "mi-plan") {
              this.cargarEjerciciosDelPlan();
              this.cargarEjercicios();
            }
          }
        } else {
          this.cargarPlanDesdeLocalStorage();
        }
      },
      error: (err) => {
        console.warn("Error al cargar plan desde backend, usando localStorage:", err);
        this.cargarPlanDesdeLocalStorage();
      }
    });
  }
  cargarPlanDesdeLocalStorage() {
    if (!this.usuario?.id) {
      this.planActivo = null;
      this.cargando = false;
      return;
    }
    const usuarioId = this.usuario.id;
    const planGuardado = localStorage.getItem(`plan-activo-${usuarioId}`);
    if (planGuardado) {
      try {
        this.planActivo = JSON.parse(planGuardado);
        if (this.planActivo && !this.planActivo.id) {
          this.sincronizarPlanConBackend();
        }
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargarEjerciciosDelPlan();
          this.cargarEjercicios();
        }
      } catch {
        this.planActivo = null;
      }
    } else {
      this.planActivo = null;
    }
    this.cargando = false;
  }
  cargarEjerciciosDelPlanConPlan(plan) {
    if (!plan.entrenamiento?.ejerciciosIds || plan.entrenamiento.ejerciciosIds.length === 0) {
      this.planActivo = plan;
      this.cargando = false;
      return;
    }
    const observablesEjercicios = plan.entrenamiento.ejerciciosIds.map((id) => this.ejercicioService.obtenerPorId(id));
    forkJoin(observablesEjercicios).subscribe({
      next: (ejercicios) => {
        if (plan.entrenamiento) {
          plan.entrenamiento.ejercicios = ejercicios;
        }
        this.planActivo = plan;
        this.cargando = false;
        if (this.vistaSeleccionada === "mi-plan") {
          this.cargarEjerciciosDelPlan();
          this.cargarEjercicios();
        }
      },
      error: (err) => {
        console.error("Error cargando ejercicios del plan:", err);
        this.planActivo = plan;
        this.cargando = false;
      }
    });
  }
  sincronizarPlanConBackend() {
    if (!this.planActivo || !this.usuario?.id || !this.planActivo.entrenamientoId) {
      return;
    }
    const usuarioId = this.usuario.id;
    const entrenamientoId = this.planActivo.entrenamientoId;
    this.planUsuarioService.asignarPlan(usuarioId, entrenamientoId).subscribe({
      next: (planCreado) => {
        this.planActivo = __spreadValues(__spreadValues({}, this.planActivo), planCreado);
        localStorage.setItem(`plan-activo-${usuarioId}`, JSON.stringify(this.planActivo));
      },
      error: (err) => {
        console.warn("No se pudo sincronizar con el backend:", err);
      }
    });
  }
  seleccionarPlan(plan) {
    if (!this.usuario) {
      alert("Error: No se pudo identificar al usuario. Por favor, recarga la p\xE1gina.");
      console.error("Usuario no cargado:", this.usuario);
      return;
    }
    if (!this.usuario.id) {
      alert("Error: El usuario no tiene un ID v\xE1lido. Por favor, recarga la p\xE1gina.");
      console.error("Usuario sin ID:", this.usuario);
      return;
    }
    if (!plan.entrenamiento || !plan.entrenamiento.id) {
      alert("Error: El plan seleccionado no es v\xE1lido.");
      console.error("Plan sin ID:", plan);
      return;
    }
    if (this.planActivo) {
      if (!confirm("Ya tienes un plan activo. \xBFDeseas reemplazarlo por este nuevo plan?")) {
        return;
      }
    }
    const usuarioId = this.usuario.id;
    const entrenamientoId = plan.entrenamiento.id;
    this.asignando = true;
    this.error = null;
    this.planUsuarioService.asignarPlan(usuarioId, entrenamientoId).subscribe({
      next: (planCreado) => {
        if (planCreado.entrenamiento && planCreado.entrenamiento.ejerciciosIds && planCreado.entrenamiento.ejerciciosIds.length > 0 && (!planCreado.entrenamiento.ejercicios || planCreado.entrenamiento.ejercicios.length === 0)) {
          planCreado.entrenamiento = plan.entrenamiento;
        }
        if (!planCreado.fechaFin) {
          const fechaInicio = new Date(planCreado.fechaInicio);
          fechaInicio.setDate(fechaInicio.getDate() + plan.duracionDias);
          planCreado.fechaFin = fechaInicio.toISOString().split("T")[0];
        }
        if (!planCreado.ejerciciosCompletados) {
          planCreado.ejerciciosCompletados = [];
        }
        this.planActivo = planCreado;
        this.asignando = false;
        this.vistaSeleccionada = "mi-plan";
        this.cargarEjerciciosDelPlan();
        this.cargarEjercicios();
        if (this.usuario?.id) {
          localStorage.setItem(`plan-activo-${this.usuario.id}`, JSON.stringify(this.planActivo));
        }
        alert(`\xA1Plan "${plan.entrenamiento.nombre}" asignado con \xE9xito!`);
      },
      error: (err) => {
        console.warn("Error asignando plan en backend, usando localStorage:", err);
        this.asignarPlanLocalStorage(plan);
      }
    });
  }
  asignarPlanLocalStorage(plan) {
    if (!this.usuario?.id || !plan.entrenamiento.id) {
      return;
    }
    const usuarioId = this.usuario.id;
    const entrenamientoId = plan.entrenamiento.id;
    const nuevoPlan = {
      usuarioId,
      entrenamientoId,
      fechaInicio: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      activo: true,
      entrenamiento: plan.entrenamiento,
      ejerciciosCompletados: []
    };
    const fechaInicio = new Date(nuevoPlan.fechaInicio);
    fechaInicio.setDate(fechaInicio.getDate() + plan.duracionDias);
    nuevoPlan.fechaFin = fechaInicio.toISOString().split("T")[0];
    localStorage.setItem(`plan-activo-${usuarioId}`, JSON.stringify(nuevoPlan));
    this.planActivo = nuevoPlan;
    this.asignando = false;
    this.vistaSeleccionada = "mi-plan";
    alert(`\xA1Plan "${plan.entrenamiento.nombre}" asignado con \xE9xito! (modo offline)`);
  }
  estimarDificultad(entrenamiento) {
    const numEjercicios = entrenamiento.ejerciciosIds?.length || 0;
    if (numEjercicios <= 3)
      return "Principiante";
    if (numEjercicios <= 6)
      return "Intermedio";
    return "Avanzado";
  }
  obtenerProgresoPlan() {
    if (!this.planActivo)
      return 0;
    return this.planUsuarioService.calcularProgreso(this.planActivo);
  }
  verPlanActivo() {
    if (this.planActivo?.entrenamiento?.id) {
      this.router.navigate(["/rutina", this.planActivo.entrenamiento.id]);
    }
  }
  formatearFecha(fecha) {
    if (!fecha)
      return "No especificada";
    try {
      const date = new Date(fecha);
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    } catch {
      return fecha;
    }
  }
  calcularDiasRestantes() {
    if (!this.planActivo?.fechaFin)
      return 0;
    const hoy = /* @__PURE__ */ new Date();
    const fin = new Date(this.planActivo.fechaFin);
    const diff = fin.getTime() - hoy.getTime();
    return Math.ceil(diff / (1e3 * 60 * 60 * 24));
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
      this.ejerciciosDelPlan = [];
    }
  }
  cargarEjercicios() {
    this.ejercicioService.listar().subscribe({
      next: (ejercicios) => {
        this.ejercicios = ejercicios;
      },
      error: (err) => {
        console.error("Error cargando ejercicios:", err);
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
    if (!this.usuario?.id) {
      this.error = "No se pudo identificar al usuario";
      return;
    }
    const progreso = {
      fecha: this.fecha,
      peso: this.peso || void 0,
      repeticiones: this.repeticiones || void 0,
      tiempo: this.tiempo || void 0,
      usuarioId: this.usuario.id,
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
          if (this.usuario?.id) {
            localStorage.setItem(`plan-activo-${this.usuario.id}`, JSON.stringify(this.planActivo));
          }
        }
      }
      return;
    }
    this.planUsuarioService.marcarEjercicioCompletado(this.planActivo.id, ejercicioId).subscribe({
      next: (planActualizado) => {
        this.planActivo = planActualizado;
        if (this.usuario?.id) {
          localStorage.setItem(`plan-activo-${this.usuario.id}`, JSON.stringify(this.planActivo));
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
            if (this.usuario?.id) {
              localStorage.setItem(`plan-activo-${this.usuario.id}`, JSON.stringify(this.planActivo));
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
  esPlanActivo(plan) {
    if (!this.planActivo || !plan.entrenamiento)
      return false;
    return this.planActivo.entrenamientoId === plan.entrenamiento.id;
  }
  static \u0275fac = function Programas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Programas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Programas, selectors: [["app-programas"]], decls: 15, vars: 8, consts: [[1, "page-wrapper"], [1, "page-container"], [1, "vista-selector"], [1, "vista-btn", 3, "click"], [1, "estado-carga"], [1, "error-message"], [1, "planes-container"], [1, "mi-plan-container"], [1, "spinner"], [1, "sin-planes"], [1, "plan-card", 3, "plan-activo-marcado"], [1, "plan-card"], [1, "plan-header"], [1, "plan-nombre"], [1, "plan-badges"], [1, "plan-activo-indicador"], [1, "dificultad-badge", 3, "class"], [1, "plan-descripcion"], [1, "plan-info"], [1, "info-item"], [1, "info-icon"], [1, "info-text"], [1, "btn-seleccionar", 3, "click", "disabled"], [1, "dificultad-badge"], [1, "seccion-titulo"], [1, "plan-activo-info"], [1, "sin-plan-info"], [1, "mensaje-exito"], [1, "mensaje-error"], [1, "formulario-progreso", 3, "ngSubmit"], [1, "campo-formulario"], ["for", "ejercicio"], ["id", "ejercicio", "name", "ejercicio", "required", "", 1, "campo-input", 3, "ngModel", "disabled"], [1, "ayuda-texto"], ["for", "fecha"], ["type", "date", "id", "fecha", "name", "fecha", "required", "", 1, "campo-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "metricas-grid"], ["for", "peso"], ["type", "number", "id", "peso", "name", "peso", "placeholder", "0", "step", "0.1", "min", "0", 1, "campo-input", 3, "ngModelChange", "ngModel", "disabled"], ["for", "repeticiones"], ["type", "number", "id", "repeticiones", "name", "repeticiones", "placeholder", "0", "min", "0", 1, "campo-input", 3, "ngModelChange", "ngModel", "disabled"], ["for", "tiempo"], ["type", "number", "id", "tiempo", "name", "tiempo", "placeholder", "0", "step", "0.1", "min", "0", 1, "campo-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "boton-guardar", 3, "disabled"], [1, "plan-activo-header"], [1, "progreso-plan"], [1, "progreso-texto"], [1, "progreso-bar-mini"], [1, "progreso-fill-mini"], [1, "sin-plan-mensaje"], [1, "sin-plan-icon"], [1, "btn-seleccionar-plan", 3, "click"], ["id", "ejercicio", "name", "ejercicio", "required", "", 1, "campo-input", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["id", "ejercicio", "disabled", "", 1, "campo-input"]], template: function Programas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1)(3, "h1");
      \u0275\u0275text(4, "\u{1F4AA} Planes de Entrenamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
      \u0275\u0275listener("click", function Programas_Template_button_click_6_listener() {
        return ctx.cambiarVista("mi-plan");
      });
      \u0275\u0275text(7, " \u{1F3AF} Mi Plan ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function Programas_Template_button_click_8_listener() {
        return ctx.cambiarVista("disponibles");
      });
      \u0275\u0275text(9, " \u{1F4CB} Disponibles ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, Programas_Conditional_10_Template, 4, 0, "div", 4);
      \u0275\u0275conditionalCreate(11, Programas_Conditional_11_Template, 3, 1, "div", 5);
      \u0275\u0275conditionalCreate(12, Programas_Conditional_12_Template, 4, 1, "div", 6);
      \u0275\u0275conditionalCreate(13, Programas_Conditional_13_Template, 35, 16, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275classProp("activo", ctx.vistaSeleccionada === "mi-plan");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("activo", ctx.vistaSeleccionada === "disponibles");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error && !ctx.cargando ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando && !ctx.error && ctx.vistaSeleccionada === "disponibles" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando && ctx.vistaSeleccionada === "mi-plan" ? 13 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, Header, BottomNav, WodTimerComponent], styles: ['\n\n.page-wrapper[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f7fa 0%,\n      #e8ecf1 100%);\n  min-height: 100vh;\n}\n.page-container[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  padding: 20px 16px;\n  padding-bottom: 100px;\n}\n.page-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.vista-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: white;\n  padding: 4px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.vista-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 0.2s;\n  color: #666;\n}\n.vista-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n  color: #667eea;\n}\n.vista-btn.activo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n.estado-carga[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n  font-size: 16px;\n  color: #666;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee;\n  border: 2px solid #f44;\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px 0;\n  text-align: center;\n  color: #c00;\n}\n.planes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sin-planes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border-radius: 20px;\n  color: #666;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.plan-card[_ngcontent-%COMP%] {\n  background: white;\n  border: none;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);\n}\n.plan-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n  gap: 12px;\n}\n.plan-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n}\n.plan-activo-indicador[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #45a049 100%);\n  color: white;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.plan-card.plan-activo-marcado[_ngcontent-%COMP%] {\n  border: 2px solid #4caf50;\n  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.2);\n}\n.plan-nombre[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  flex: 1;\n  color: #1a1a1a;\n}\n.dificultad-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.dificultad-badge.principiante[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.dificultad-badge.intermedio[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.dificultad-badge.avanzado[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.plan-descripcion[_ngcontent-%COMP%] {\n  margin: 12px 0 16px 0;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #666;\n}\n.plan-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.btn-seleccionar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-seleccionar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.btn-seleccionar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.mi-plan-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sin-plan[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.sin-plan-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.sin-plan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 12px 0;\n  color: #1a1a1a;\n}\n.sin-plan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 24px 0;\n  line-height: 1.6;\n}\n.btn-ver-disponibles[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-ver-disponibles[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.plan-activo-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.plan-activo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  gap: 12px;\n}\n.plan-activo-nombre[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  flex: 1;\n  color: #1a1a1a;\n}\n.plan-activo-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #45a049 100%);\n  color: white;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.plan-activo-descripcion[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #666;\n}\n.progreso-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #f5f7fa;\n  border-radius: 12px;\n}\n.progreso-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.progreso-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n}\n.progreso-porcentaje[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #667eea;\n}\n.progreso-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  background: #e8ecf1;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.progreso-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 6px;\n  transition: width 0.3s ease;\n}\n.estadisticas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.estadistica-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  background: #f5f7fa;\n  border-radius: 12px;\n  gap: 8px;\n}\n.estadistica-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.estadistica-valor[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.estadistica-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.fechas-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n}\n.fecha-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.fecha-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n}\n.fecha-valor[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.acciones-plan[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-ver-plan[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-ver-plan[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.seccion-titulo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 32px 0 24px 0;\n  text-align: center;\n  color: #1a1a1a;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.mensaje-exito[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border: 2px solid #4caf50;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 16px 0;\n  text-align: center;\n  color: #2e7d32;\n  font-weight: 600;\n  font-size: 15px;\n}\n.mensaje-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  border: 2px solid #e53935;\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin: 20px 0;\n  text-align: center;\n  color: #c62828;\n  font-weight: 700;\n  font-size: 15px;\n  box-shadow: 0 2px 4px rgba(229, 57, 53, 0.2);\n}\n.mensaje-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.formulario-progreso[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 24px;\n}\n.campo-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.campo-formulario[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: 0.3px;\n  margin-bottom: 4px;\n}\n.campo-input[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border: 2px solid #d0d5dd;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 16px;\n  font-family: inherit;\n  transition: all 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n.campo-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.campo-input[_ngcontent-%COMP%]:disabled {\n  background: #e0e0e0;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.metricas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.metricas-grid[_ngcontent-%COMP%]   .campo-formulario[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.metricas-grid[_ngcontent-%COMP%]   .campo-input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.boton-guardar[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.boton-guardar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.boton-guardar[_ngcontent-%COMP%]:disabled {\n  background: #999;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.plan-activo-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.plan-activo-info[_ngcontent-%COMP%]   .plan-activo-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.progreso-plan[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.progreso-texto[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  opacity: 0.95;\n}\n.progreso-bar-mini[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progreso-fill-mini[_ngcontent-%COMP%] {\n  height: 100%;\n  background: white;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.sin-plan-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.sin-plan-mensaje[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sin-plan-mensaje[_ngcontent-%COMP%]   .sin-plan-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.sin-plan-mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 15px;\n  line-height: 1.5;\n  opacity: 0.95;\n}\n.btn-seleccionar-plan[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 24px;\n  background: white;\n  color: #ff9800;\n  text-decoration: none;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n.btn-seleccionar-plan[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.ayuda-texto[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  font-style: italic;\n}\n/*# sourceMappingURL=programas.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Programas, [{
    type: Component,
    args: [{ selector: "app-programas", imports: [CommonModule, FormsModule, Header, BottomNav, WodTimerComponent], template: `<div class="page-wrapper">
    <app-header />
    <div class="page-container">
        <h1>\u{1F4AA} Planes de Entrenamiento</h1>

        <!-- Selector de vista -->
        <div class="vista-selector">
            <button class="vista-btn" [class.activo]="vistaSeleccionada === 'mi-plan'"
                (click)="cambiarVista('mi-plan')">
                \u{1F3AF} Mi Plan
            </button>
            <button class="vista-btn" [class.activo]="vistaSeleccionada === 'disponibles'"
                (click)="cambiarVista('disponibles')">
                \u{1F4CB} Disponibles
            </button>
        </div>

        <!-- Estado de carga -->
        @if (cargando) {
        <div class="estado-carga">
            <div class="spinner"></div>
            <p>\u23F3 Cargando...</p>
        </div>
        }

        <!-- Mensaje de error -->
        @if (error && !cargando) {
        <div class="error-message">
            <p>\u274C {{ error }}</p>
        </div>
        }

        <!-- Vista: Planes Disponibles -->
        @if (!cargando && !error && vistaSeleccionada === 'disponibles') {
        <div class="planes-container">
            @if (planesDisponibles.length === 0) {
            <div class="sin-planes">
                <p>\u{1F4ED} No hay planes disponibles en este momento</p>
            </div>
            }

            @for (plan of planesDisponibles; track plan.entrenamiento.id) {
            <div class="plan-card" [class.plan-activo-marcado]="esPlanActivo(plan)">
                <div class="plan-header">
                    <h2 class="plan-nombre">{{ plan.entrenamiento.nombre }}</h2>
                    <div class="plan-badges">
                        @if (esPlanActivo(plan)) {
                        <span class="plan-activo-indicador">\u2705 Activo</span>
                        }
                        @if (plan.dificultad) {
                        <span class="dificultad-badge" [class]="plan.dificultad.toLowerCase()">
                            {{ plan.dificultad }}
                        </span>
                        }
                    </div>
                </div>

                @if (plan.entrenamiento.descripcion) {
                <p class="plan-descripcion">{{ plan.entrenamiento.descripcion }}</p>
                }

                <div class="plan-info">
                    <div class="info-item">
                        <span class="info-icon">\u{1F4C5}</span>
                        <span class="info-text">{{ plan.duracionDias }} d\xEDas</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">\u{1F3CB}\uFE0F</span>
                        <span class="info-text">
                            {{ plan.entrenamiento.ejercicios?.length || plan.entrenamiento.ejerciciosIds?.length || 0 }}
                            ejercicios
                        </span>
                    </div>
                </div>

                <button class="btn-seleccionar" (click)="seleccionarPlan(plan)"
                    [disabled]="asignando || !usuario || !usuario.id">
                    @if (asignando) {
                    <span>\u23F3 Asignando...</span>
                    } @else if (!usuario || !usuario.id) {
                    <span>\u23F3 Cargando usuario...</span>
                    } @else {
                    <span>\u2705 Seleccionar Plan</span>
                    }
                </button>
            </div>
            }
        </div>
        }

        <!-- Vista: Mi Plan Activo -->
        @if (!cargando && vistaSeleccionada === 'mi-plan') {
        <div class="mi-plan-container">
            <!-- Cron\xF3metro WOD -->
            <app-wod-timer />

            <h2 class="seccion-titulo">Registra tu progreso</h2>

            <!-- Informaci\xF3n del plan activo -->
            @if (tienePlanActivo) {
            <div class="plan-activo-info">
                <div class="plan-activo-header">
                    <h3>\u{1F3AF} Plan Activo: {{ planActivo?.entrenamiento?.nombre || 'Cargando...' }}</h3>
                    <div class="progreso-plan">
                        <span class="progreso-texto">Progreso: {{ obtenerProgresoPlan() }}%</span>
                        <div class="progreso-bar-mini">
                            <div class="progreso-fill-mini" [style.width.%]="obtenerProgresoPlan()"></div>
                        </div>
                    </div>
                </div>
            </div>
            } @else {
            <div class="sin-plan-info">
                <div class="sin-plan-mensaje">
                    <span class="sin-plan-icon">\u{1F3AF}</span>
                    <p>No tienes un plan activo. Selecciona un plan para comenzar a registrar tu progreso.</p>
                    <button class="btn-seleccionar-plan" (click)="cambiarVista('disponibles')">Seleccionar Plan</button>
                </div>
            </div>
            }

            <!-- Mensaje de \xE9xito -->
            @if (exito) {
            <div class="mensaje-exito">
                <p>\u2705 \xA1Progreso registrado correctamente!</p>
            </div>
            }

            <!-- Mensaje de error -->
            @if (error) {
            <div class="mensaje-error">
                <p>\u274C {{ error }}</p>
            </div>
            }

            <!-- Formulario de registro -->
            <form class="formulario-progreso" (ngSubmit)="registrarProgreso()">
                <div class="campo-formulario">
                    <label for="ejercicio">Ejercicio</label>
                    @if (tienePlanActivo) {
                    <select id="ejercicio" class="campo-input" [(ngModel)]="ejercicioSeleccionadoId" name="ejercicio"
                        [disabled]="guardando || cargando" required>
                        <option [value]="null">Selecciona un ejercicio</option>
                        @for (ejercicio of ejerciciosDisponibles; track ejercicio.id) {
                        <option [value]="ejercicio.id">
                            {{ ejercicio.nombre }}
                            @if (esEjercicioCompletado(ejercicio.id!)) {
                            \u2705
                            }
                        </option>
                        }
                    </select>
                    } @else {
                    <select id="ejercicio" class="campo-input" disabled>
                        <option [value]="null">Selecciona plan</option>
                    </select>
                    <p class="ayuda-texto">\u26A0\uFE0F Necesitas tener un plan activo para registrar ejercicios</p>
                    }
                    @if (planActivo && ejerciciosDelPlan.length === 0) {
                    <p class="ayuda-texto">\u26A0\uFE0F El plan activo no tiene ejercicios asignados</p>
                    }
                </div>

                <div class="campo-formulario">
                    <label for="fecha">Fecha</label>
                    <input type="date" id="fecha" class="campo-input" [(ngModel)]="fecha" name="fecha"
                        [disabled]="guardando" required />
                </div>

                <div class="metricas-grid">
                    <div class="campo-formulario">
                        <label for="peso">Peso (kg)</label>
                        <input type="number" id="peso" class="campo-input" [(ngModel)]="peso" name="peso"
                            placeholder="0" step="0.1" min="0" [disabled]="guardando" />
                    </div>

                    <div class="campo-formulario">
                        <label for="repeticiones">Repeticiones</label>
                        <input type="number" id="repeticiones" class="campo-input" [(ngModel)]="repeticiones"
                            name="repeticiones" placeholder="0" min="0" [disabled]="guardando" />
                    </div>

                    <div class="campo-formulario">
                        <label for="tiempo">Tiempo (seg)</label>
                        <input type="number" id="tiempo" class="campo-input" [(ngModel)]="tiempo" name="tiempo"
                            placeholder="0" step="0.1" min="0" [disabled]="guardando" />
                    </div>
                </div>

                <button type="submit" class="boton-guardar" [disabled]="guardando">
                    @if (!guardando) {
                    <span>\u{1F4BE} Guardar Progreso</span>
                    }
                    @if (guardando) {
                    <span>\u23F3 Guardando...</span>
                    }
                </button>
            </form>
        </div>
        }
    </div>
    <app-bottom-nav />
</div>`, styles: ['/* src/app/features/user/programas/programas.css */\n.page-wrapper {\n  max-width: 414px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f7fa 0%,\n      #e8ecf1 100%);\n  min-height: 100vh;\n}\n.page-container {\n  color: #1a1a1a;\n  padding: 20px 16px;\n  padding-bottom: 100px;\n}\n.page-container h1 {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.vista-selector {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  background: white;\n  padding: 4px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.vista-btn {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 0.2s;\n  color: #666;\n}\n.vista-btn:hover {\n  background: #f5f7fa;\n  color: #667eea;\n}\n.vista-btn.activo {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n.estado-carga {\n  text-align: center;\n  padding: 40px 24px;\n  font-size: 16px;\n  color: #666;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  background: #fee;\n  border: 2px solid #f44;\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px 0;\n  text-align: center;\n  color: #c00;\n}\n.planes-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sin-planes {\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border-radius: 20px;\n  color: #666;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.plan-card {\n  background: white;\n  border: none;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n}\n.plan-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);\n}\n.plan-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n  gap: 12px;\n}\n.plan-badges {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n}\n.plan-activo-indicador {\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #45a049 100%);\n  color: white;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.plan-card.plan-activo-marcado {\n  border: 2px solid #4caf50;\n  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.2);\n}\n.plan-nombre {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  flex: 1;\n  color: #1a1a1a;\n}\n.dificultad-badge {\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.dificultad-badge.principiante {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.dificultad-badge.intermedio {\n  background: #fff3e0;\n  color: #e65100;\n}\n.dificultad-badge.avanzado {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.plan-descripcion {\n  margin: 12px 0 16px 0;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #666;\n}\n.plan-info {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n}\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n}\n.info-icon {\n  font-size: 18px;\n}\n.info-text {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.btn-seleccionar {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-seleccionar:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.btn-seleccionar:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.mi-plan-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sin-plan {\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.sin-plan-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.sin-plan h2 {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 12px 0;\n  color: #1a1a1a;\n}\n.sin-plan p {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 24px 0;\n  line-height: 1.6;\n}\n.btn-ver-disponibles {\n  padding: 14px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-ver-disponibles:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.plan-activo-card {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.plan-activo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  gap: 12px;\n}\n.plan-activo-nombre {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  flex: 1;\n  color: #1a1a1a;\n}\n.plan-activo-badge {\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #45a049 100%);\n  color: white;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.plan-activo-descripcion {\n  margin: 0 0 20px 0;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #666;\n}\n.progreso-section {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: #f5f7fa;\n  border-radius: 12px;\n}\n.progreso-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.progreso-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n}\n.progreso-porcentaje {\n  font-size: 18px;\n  font-weight: 700;\n  color: #667eea;\n}\n.progreso-bar {\n  width: 100%;\n  height: 12px;\n  background: #e8ecf1;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.progreso-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 6px;\n  transition: width 0.3s ease;\n}\n.estadisticas-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.estadistica-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  background: #f5f7fa;\n  border-radius: 12px;\n  gap: 8px;\n}\n.estadistica-icon {\n  font-size: 24px;\n}\n.estadistica-valor {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.estadistica-label {\n  font-size: 11px;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.fechas-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 12px;\n}\n.fecha-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.fecha-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n}\n.fecha-valor {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.acciones-plan {\n  display: flex;\n  gap: 12px;\n}\n.btn-ver-plan {\n  flex: 1;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-ver-plan:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.seccion-titulo {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 32px 0 24px 0;\n  text-align: center;\n  color: #1a1a1a;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.mensaje-exito {\n  background: #e8f5e9;\n  border: 2px solid #4caf50;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 16px 0;\n  text-align: center;\n  color: #2e7d32;\n  font-weight: 600;\n  font-size: 15px;\n}\n.mensaje-error {\n  background: #ffebee;\n  border: 2px solid #e53935;\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin: 20px 0;\n  text-align: center;\n  color: #c62828;\n  font-weight: 700;\n  font-size: 15px;\n  box-shadow: 0 2px 4px rgba(229, 57, 53, 0.2);\n}\n.mensaje-error p {\n  margin: 0;\n}\n.formulario-progreso {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 24px;\n}\n.campo-formulario {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.campo-formulario label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: 0.3px;\n  margin-bottom: 4px;\n}\n.campo-input {\n  padding: 14px 18px;\n  border: 2px solid #d0d5dd;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 16px;\n  font-family: inherit;\n  transition: all 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n.campo-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.campo-input:disabled {\n  background: #e0e0e0;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.metricas-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.metricas-grid .campo-formulario {\n  margin: 0;\n}\n.metricas-grid .campo-input {\n  text-align: center;\n}\n.boton-guardar {\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.boton-guardar:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.boton-guardar:disabled {\n  background: #999;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.plan-activo-info {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.plan-activo-info .plan-activo-header h3 {\n  margin: 0 0 12px 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.progreso-plan {\n  margin-top: 12px;\n}\n.progreso-texto {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  opacity: 0.95;\n}\n.progreso-bar-mini {\n  width: 100%;\n  height: 8px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progreso-fill-mini {\n  height: 100%;\n  background: white;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.sin-plan-info {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  color: white;\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.sin-plan-mensaje {\n  text-align: center;\n}\n.sin-plan-mensaje .sin-plan-icon {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.sin-plan-mensaje p {\n  margin: 0 0 16px 0;\n  font-size: 15px;\n  line-height: 1.5;\n  opacity: 0.95;\n}\n.btn-seleccionar-plan {\n  display: inline-block;\n  padding: 12px 24px;\n  background: white;\n  color: #ff9800;\n  text-decoration: none;\n  border: none;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n.btn-seleccionar-plan:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.ayuda-texto {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  font-style: italic;\n}\n/*# sourceMappingURL=programas.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Programas, { className: "Programas", filePath: "src/app/features/user/programas/programas.ts", lineNumber: 34 });
})();
export {
  Programas
};
//# sourceMappingURL=chunk-4ZEDB7UO.js.map
