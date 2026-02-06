import {
  EjercicioService
} from "./chunk-3SLBUA25.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VU3WMXVN.js";
import {
  EntrenamientoService
} from "./chunk-JKBF5XQK.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CP4LEFUZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/features/admin/programas/programas.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProgramasComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u274C ", ctx_r0.error);
  }
}
function ProgramasComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando programas...");
    \u0275\u0275elementEnd()();
  }
}
function ProgramasComponent_Conditional_9_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entrenamiento_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entrenamiento_r3.descripcion);
  }
}
function ProgramasComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 14)(2, "h3", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_9_For_2_Template_button_click_5_listener() {
      const entrenamiento_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirFormulario(entrenamiento_r3));
    });
    \u0275\u0275text(6, " \u270F\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_9_For_2_Template_button_click_7_listener() {
      const entrenamiento_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(entrenamiento_r3.id));
    });
    \u0275\u0275text(8, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, ProgramasComponent_Conditional_9_For_2_Conditional_9_Template, 2, 1, "p", 19);
    \u0275\u0275elementStart(10, "div", 20)(11, "div", 21)(12, "span", 22);
    \u0275\u0275text(13, "\u{1F4C5} Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21)(17, "span", 22);
    \u0275\u0275text(18, "\u{1F4C5} Fin:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "span", 22);
    \u0275\u0275text(23, "\u{1F3CB}\uFE0F Ejercicios:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 23);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entrenamiento_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entrenamiento_r3.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(entrenamiento_r3.descripcion ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatearFecha(entrenamiento_r3.fechaInicio));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatearFecha(entrenamiento_r3.fechaFin));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (entrenamiento_r3.ejerciciosIds == null ? null : entrenamiento_r3.ejerciciosIds.length) || (entrenamiento_r3.ejercicios == null ? null : entrenamiento_r3.ejercicios.length) || 0, " ");
  }
}
function ProgramasComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} No hay programas de entrenamiento creados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_9_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirFormulario());
    });
    \u0275\u0275text(4, " Crear el primero ");
    \u0275\u0275elementEnd()();
  }
}
function ProgramasComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, ProgramasComponent_Conditional_9_For_2_Template, 26, 5, "div", 12, _forTrack0);
    \u0275\u0275conditionalCreate(3, ProgramasComponent_Conditional_9_Conditional_3_Template, 5, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.entrenamientos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.entrenamientos.length === 0 ? 3 : -1);
  }
}
function ProgramasComponent_Conditional_10_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "No hay ejercicios disponibles. Crea ejercicios primero.");
    \u0275\u0275elementEnd();
  }
}
function ProgramasComponent_Conditional_10_Conditional_30_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ejercicio_r7.tipo);
  }
}
function ProgramasComponent_Conditional_10_Conditional_30_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 45)(1, "input", 46);
    \u0275\u0275listener("change", function ProgramasComponent_Conditional_10_Conditional_30_For_1_Template_input_change_1_listener() {
      const ejercicio_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleEjercicio(ejercicio_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 47)(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ProgramasComponent_Conditional_10_Conditional_30_For_1_Conditional_5_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ejercicio_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.estaSeleccionado(ejercicio_r7.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ejercicio_r7.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ejercicio_r7.tipo ? 5 : -1);
  }
}
function ProgramasComponent_Conditional_10_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProgramasComponent_Conditional_10_Conditional_30_For_1_Template, 6, 3, "label", 45, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.ejercicios);
  }
}
function ProgramasComponent_Conditional_10_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Guardando...");
    \u0275\u0275elementEnd();
  }
}
function ProgramasComponent_Conditional_10_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.editando ? "\u{1F4BE} Actualizar" : "\u2705 Crear");
  }
}
function ProgramasComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormulario());
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 26)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormulario());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 28);
    \u0275\u0275listener("ngSubmit", function ProgramasComponent_Conditional_10_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 30);
    \u0275\u0275text(10, "Nombre del Programa *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_10_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entrenamientoForm.nombre, $event) || (ctx_r0.entrenamientoForm.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 29)(13, "label", 32);
    \u0275\u0275text(14, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_10_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entrenamientoForm.descripcion, $event) || (ctx_r0.entrenamientoForm.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 34)(17, "div", 29)(18, "label", 35);
    \u0275\u0275text(19, "Fecha de Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_10_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entrenamientoForm.fechaInicio, $event) || (ctx_r0.entrenamientoForm.fechaInicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 29)(22, "label", 37);
    \u0275\u0275text(23, "Fecha de Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_10_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.entrenamientoForm.fechaFin, $event) || (ctx_r0.entrenamientoForm.fechaFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 29)(26, "label");
    \u0275\u0275text(27, "Ejercicios del Programa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 39);
    \u0275\u0275conditionalCreate(29, ProgramasComponent_Conditional_10_Conditional_29_Template, 2, 0, "p", 40)(30, ProgramasComponent_Conditional_10_Conditional_30_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 41);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 42)(34, "button", 43);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_10_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormulario());
    });
    \u0275\u0275text(35, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 44);
    \u0275\u0275conditionalCreate(37, ProgramasComponent_Conditional_10_Conditional_37_Template, 2, 0, "span")(38, ProgramasComponent_Conditional_10_Conditional_38_Template, 2, 1, "span");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editando ? "\u270F\uFE0F Editar Programa" : "\u2795 Nuevo Programa");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entrenamientoForm.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entrenamientoForm.descripcion);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entrenamientoForm.fechaInicio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.entrenamientoForm.fechaFin);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.ejercicios.length === 0 ? 29 : 30);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ejerciciosSeleccionados.length, " ejercicio(s) seleccionado(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.cargando);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cargando ? 37 : 38);
  }
}
function ProgramasComponent_Conditional_11_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Guardando...");
    \u0275\u0275elementEnd();
  }
}
function ProgramasComponent_Conditional_11_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.editandoEjercicio ? "\u{1F4BE} Actualizar" : "\u2705 Crear");
  }
}
function ProgramasComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormularioEjercicio());
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 26)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormularioEjercicio());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 28);
    \u0275\u0275listener("ngSubmit", function ProgramasComponent_Conditional_11_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarEjercicio());
    });
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 50);
    \u0275\u0275text(10, "Nombre del Ejercicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_11_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioForm.nombre, $event) || (ctx_r0.ejercicioForm.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 29)(13, "label", 52);
    \u0275\u0275text(14, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_11_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioForm.descripcion, $event) || (ctx_r0.ejercicioForm.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 34)(17, "div", 29)(18, "label", 54);
    \u0275\u0275text(19, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_11_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioForm.tipo, $event) || (ctx_r0.ejercicioForm.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 29)(22, "label", 56);
    \u0275\u0275text(23, "Repeticiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_11_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioForm.repeticiones, $event) || (ctx_r0.ejercicioForm.repeticiones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 34)(26, "div", 29)(27, "label", 58);
    \u0275\u0275text(28, "Peso (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_11_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioForm.peso, $event) || (ctx_r0.ejercicioForm.peso = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 29)(31, "label", 60);
    \u0275\u0275text(32, "URL del Video");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramasComponent_Conditional_11_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ejercicioForm.videoUrl, $event) || (ctx_r0.ejercicioForm.videoUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 42)(35, "button", 43);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_11_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormularioEjercicio());
    });
    \u0275\u0275text(36, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 44);
    \u0275\u0275conditionalCreate(38, ProgramasComponent_Conditional_11_Conditional_38_Template, 2, 0, "span")(39, ProgramasComponent_Conditional_11_Conditional_39_Template, 2, 1, "span");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editandoEjercicio ? "\u270F\uFE0F Editar Ejercicio" : "\u2795 Nuevo Ejercicio");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioForm.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioForm.descripcion);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioForm.tipo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioForm.repeticiones);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioForm.peso);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ejercicioForm.videoUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.cargando);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cargando ? 38 : 39);
  }
}
function ProgramasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} No hay ejercicios creados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirFormularioEjercicio());
    });
    \u0275\u0275text(4, " Crear el primero ");
    \u0275\u0275elementEnd()();
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ejercicio_r12.descripcion);
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ejercicio_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ejercicio_r12.tipo);
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ejercicio_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", ejercicio_r12.repeticiones, " ");
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ejercicio_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", ejercicio_r12.peso, " ");
  }
}
function ProgramasComponent_Conditional_19_For_28_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ProgramasComponent_Conditional_19_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 65)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProgramasComponent_Conditional_19_For_28_Conditional_4_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275conditionalCreate(6, ProgramasComponent_Conditional_19_For_28_Conditional_6_Template, 2, 1, "span", 67)(7, ProgramasComponent_Conditional_19_For_28_Conditional_7_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, ProgramasComponent_Conditional_19_For_28_Conditional_9_Template, 1, 1)(10, ProgramasComponent_Conditional_19_For_28_Conditional_10_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, ProgramasComponent_Conditional_19_For_28_Conditional_12_Template, 1, 1)(13, ProgramasComponent_Conditional_19_For_28_Conditional_13_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 69)(15, "button", 70);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_19_For_28_Template_button_click_15_listener() {
      const ejercicio_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirFormularioEjercicio(ejercicio_r12));
    });
    \u0275\u0275text(16, " \u270F\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 71);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_19_For_28_Template_button_click_17_listener() {
      const ejercicio_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminarEjercicio(ejercicio_r12.id));
    });
    \u0275\u0275text(18, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ejercicio_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ejercicio_r12.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(ejercicio_r12.descripcion ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ejercicio_r12.tipo ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ejercicio_r12.repeticiones ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ejercicio_r12.peso ? 12 : 13);
  }
}
function ProgramasComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 62)(2, "thead")(3, "tr")(4, "th", 63);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_19_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ordenarPor("nombre"));
    });
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 63);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_19_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ordenarPor("tipo"));
    });
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "th", 63);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_19_Template_th_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ordenarPor("repeticiones"));
    });
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Repeticiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 64);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 63);
    \u0275\u0275listener("click", function ProgramasComponent_Conditional_19_Template_th_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ordenarPor("peso"));
    });
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Peso (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 64);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, ProgramasComponent_Conditional_19_For_28_Template, 19, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.obtenerIconoOrden("nombre"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.obtenerIconoOrden("tipo"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.obtenerIconoOrden("repeticiones"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.obtenerIconoOrden("peso"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.ejerciciosOrdenados);
  }
}
var ProgramasComponent = class _ProgramasComponent {
  entrenamientoService = inject(EntrenamientoService);
  ejercicioService = inject(EjercicioService);
  entrenamientos = [];
  ejercicios = [];
  cargando = false;
  error = null;
  // Formulario de entrenamiento
  mostrarFormulario = false;
  editando = false;
  entrenamientoForm = {
    nombre: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    ejerciciosIds: []
  };
  ejerciciosSeleccionados = [];
  // Formulario de ejercicio
  mostrarFormularioEjercicio = false;
  editandoEjercicio = false;
  ejercicioForm = {
    nombre: "",
    descripcion: "",
    tipo: "",
    repeticiones: void 0,
    peso: void 0,
    videoUrl: ""
  };
  // Ordenamiento de ejercicios
  campoOrden = null;
  ordenAscendente = true;
  get ejerciciosOrdenados() {
    if (!this.campoOrden) {
      return this.ejercicios;
    }
    const ejercicios = [...this.ejercicios];
    ejercicios.sort((a, b) => {
      const valorA = a[this.campoOrden] ?? "";
      const valorB = b[this.campoOrden] ?? "";
      if (typeof valorA === "number" && typeof valorB === "number") {
        return this.ordenAscendente ? valorA - valorB : valorB - valorA;
      }
      const strA = String(valorA).toLowerCase();
      const strB = String(valorB).toLowerCase();
      if (strA < strB)
        return this.ordenAscendente ? -1 : 1;
      if (strA > strB)
        return this.ordenAscendente ? 1 : -1;
      return 0;
    });
    return ejercicios;
  }
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.cargando = true;
    this.error = null;
    this.entrenamientoService.listar().subscribe({
      next: (entrenamientos) => {
        this.entrenamientos = entrenamientos;
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error cargando entrenamientos:", err);
        this.error = "Error al cargar los entrenamientos";
        this.cargando = false;
      }
    });
    this.ejercicioService.listar().subscribe({
      next: (ejercicios) => {
        this.ejercicios = ejercicios;
      },
      error: (err) => {
        console.error("Error cargando ejercicios:", err);
      }
    });
  }
  abrirFormulario(entrenamiento) {
    if (entrenamiento) {
      this.editando = true;
      this.entrenamientoForm = __spreadValues({}, entrenamiento);
      this.ejerciciosSeleccionados = entrenamiento.ejerciciosIds ? [...entrenamiento.ejerciciosIds] : [];
    } else {
      this.editando = false;
      this.entrenamientoForm = {
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        ejerciciosIds: []
      };
      this.ejerciciosSeleccionados = [];
    }
    this.mostrarFormulario = true;
  }
  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.editando = false;
    this.entrenamientoForm = {
      nombre: "",
      descripcion: "",
      fechaInicio: "",
      fechaFin: "",
      ejerciciosIds: []
    };
    this.ejerciciosSeleccionados = [];
  }
  toggleEjercicio(ejercicioId) {
    const index = this.ejerciciosSeleccionados.indexOf(ejercicioId);
    if (index > -1) {
      this.ejerciciosSeleccionados.splice(index, 1);
    } else {
      this.ejerciciosSeleccionados.push(ejercicioId);
    }
  }
  estaSeleccionado(ejercicioId) {
    return this.ejerciciosSeleccionados.includes(ejercicioId);
  }
  guardar() {
    if (!this.entrenamientoForm.nombre) {
      alert("El nombre es obligatorio");
      return;
    }
    this.cargando = true;
    this.error = null;
    const entrenamientoParaGuardar = __spreadProps(__spreadValues({}, this.entrenamientoForm), {
      ejerciciosIds: this.ejerciciosSeleccionados
    });
    if (this.editando && this.entrenamientoForm.id) {
      this.entrenamientoService.actualizar(this.entrenamientoForm.id, entrenamientoParaGuardar).subscribe({
        next: () => {
          this.cargarDatos();
          this.cerrarFormulario();
          alert("Entrenamiento actualizado con \xE9xito");
        },
        error: (err) => {
          console.error("Error actualizando:", err);
          this.error = "Error al actualizar el entrenamiento";
          this.cargando = false;
        }
      });
    } else {
      this.entrenamientoService.crear(entrenamientoParaGuardar).subscribe({
        next: () => {
          this.cargarDatos();
          this.cerrarFormulario();
          alert("Entrenamiento creado con \xE9xito");
        },
        error: (err) => {
          console.error("Error creando:", err);
          this.error = "Error al crear el entrenamiento";
          this.cargando = false;
        }
      });
    }
  }
  eliminar(id) {
    if (!confirm("\xBFEst\xE1s seguro de que quieres eliminar este entrenamiento?")) {
      return;
    }
    this.entrenamientoService.eliminar(id).subscribe({
      next: () => {
        this.cargarDatos();
        alert("Entrenamiento eliminado con \xE9xito");
      },
      error: (err) => {
        console.error("Error eliminando:", err);
        alert("Error al eliminar el entrenamiento");
      }
    });
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
  // Métodos para gestión de ejercicios
  abrirFormularioEjercicio(ejercicio) {
    if (ejercicio) {
      this.editandoEjercicio = true;
      this.ejercicioForm = {
        id: ejercicio.id,
        nombre: ejercicio.nombre || "",
        descripcion: ejercicio.descripcion || "",
        tipo: ejercicio.tipo || "",
        repeticiones: ejercicio.repeticiones ?? void 0,
        peso: ejercicio.peso ?? void 0,
        videoUrl: ejercicio.videoUrl || ""
      };
    } else {
      this.editandoEjercicio = false;
      this.ejercicioForm = {
        nombre: "",
        descripcion: "",
        tipo: "",
        repeticiones: void 0,
        peso: void 0,
        videoUrl: ""
      };
    }
    this.mostrarFormularioEjercicio = true;
  }
  cerrarFormularioEjercicio() {
    this.mostrarFormularioEjercicio = false;
    this.editandoEjercicio = false;
    this.ejercicioForm = {
      nombre: "",
      descripcion: "",
      tipo: "",
      repeticiones: void 0,
      peso: void 0,
      videoUrl: ""
    };
  }
  guardarEjercicio() {
    if (!this.ejercicioForm.nombre) {
      alert("El nombre es obligatorio");
      return;
    }
    this.cargando = true;
    this.error = null;
    if (this.editandoEjercicio && this.ejercicioForm.id) {
      this.ejercicioService.actualizar(this.ejercicioForm.id, this.ejercicioForm).subscribe({
        next: () => {
          this.cargarDatos();
          this.cerrarFormularioEjercicio();
          alert("Ejercicio actualizado con \xE9xito");
        },
        error: (err) => {
          console.error("Error actualizando ejercicio:", err);
          this.error = "Error al actualizar el ejercicio";
          this.cargando = false;
        }
      });
    } else {
      this.ejercicioService.crear(this.ejercicioForm).subscribe({
        next: () => {
          this.cargarDatos();
          this.cerrarFormularioEjercicio();
          alert("Ejercicio creado con \xE9xito");
        },
        error: (err) => {
          console.error("Error creando ejercicio:", err);
          this.error = "Error al crear el ejercicio";
          this.cargando = false;
        }
      });
    }
  }
  eliminarEjercicio(id) {
    if (!confirm("\xBFEst\xE1s seguro de que quieres eliminar este ejercicio?")) {
      return;
    }
    this.ejercicioService.eliminar(id).subscribe({
      next: () => {
        this.cargarDatos();
        alert("Ejercicio eliminado con \xE9xito");
      },
      error: (err) => {
        console.error("Error eliminando ejercicio:", err);
        alert("Error al eliminar el ejercicio");
      }
    });
  }
  ordenarPor(campo) {
    if (this.campoOrden === campo) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.campoOrden = campo;
      this.ordenAscendente = true;
    }
  }
  obtenerIconoOrden(campo) {
    if (this.campoOrden !== campo) {
      return "\u21C5";
    }
    return this.ordenAscendente ? "\u2191" : "\u2193";
  }
  static \u0275fac = function ProgramasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramasComponent, selectors: [["app-programas"]], decls: 20, vars: 6, consts: [[1, "programas-admin-container"], [1, "programas-section"], [1, "header-section"], [1, "btn-nuevo", 3, "click"], [1, "error-message"], [1, "loading-container"], [1, "entrenamientos-grid"], [1, "modal-overlay"], [1, "ejercicios-section"], [1, "sin-ejercicios-card"], [1, "ejercicios-table-container"], [1, "spinner"], [1, "entrenamiento-card"], [1, "sin-entrenamientos"], [1, "card-header"], [1, "entrenamiento-nombre"], [1, "card-actions"], [1, "btn-editar", 3, "click"], [1, "btn-eliminar", 3, "click"], [1, "entrenamiento-descripcion"], [1, "entrenamiento-info"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "btn-cerrar", 3, "click"], [1, "formulario", 3, "ngSubmit"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "required", "", "placeholder", "Ej: Plan de Fuerza 4 Semanas", 3, "ngModelChange", "ngModel"], ["for", "descripcion"], ["id", "descripcion", "name", "descripcion", "rows", "3", "placeholder", "Describe el programa de entrenamiento...", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "fechaInicio"], ["type", "date", "id", "fechaInicio", "name", "fechaInicio", 3, "ngModelChange", "ngModel"], ["for", "fechaFin"], ["type", "date", "id", "fechaFin", "name", "fechaFin", 3, "ngModelChange", "ngModel"], [1, "ejercicios-list"], [1, "sin-ejercicios"], [1, "ejercicios-seleccionados"], [1, "form-actions"], ["type", "button", 1, "btn-cancelar", 3, "click"], ["type", "submit", 1, "btn-guardar", 3, "disabled"], [1, "ejercicio-checkbox"], ["type", "checkbox", 3, "change", "checked"], [1, "ejercicio-info"], [1, "ejercicio-nombre"], [1, "ejercicio-tipo"], ["for", "ejercicio-nombre"], ["type", "text", "id", "ejercicio-nombre", "name", "ejercicio-nombre", "required", "", "placeholder", "Ej: Press de Banca", 3, "ngModelChange", "ngModel"], ["for", "ejercicio-descripcion"], ["id", "ejercicio-descripcion", "name", "ejercicio-descripcion", "rows", "3", "placeholder", "Describe el ejercicio...", 3, "ngModelChange", "ngModel"], ["for", "ejercicio-tipo"], ["type", "text", "id", "ejercicio-tipo", "name", "ejercicio-tipo", "placeholder", "Ej: Fuerza, Cardio, Flexibilidad", 3, "ngModelChange", "ngModel"], ["for", "ejercicio-repeticiones"], ["type", "number", "id", "ejercicio-repeticiones", "name", "ejercicio-repeticiones", "min", "0", "placeholder", "Ej: 10", 3, "ngModelChange", "ngModel"], ["for", "ejercicio-peso"], ["type", "number", "id", "ejercicio-peso", "name", "ejercicio-peso", "min", "0", "step", "0.1", "placeholder", "Ej: 20.5", 3, "ngModelChange", "ngModel"], ["for", "ejercicio-videoUrl"], ["type", "url", "id", "ejercicio-videoUrl", "name", "ejercicio-videoUrl", "placeholder", "https://...", 3, "ngModelChange", "ngModel"], [1, "ejercicios-table"], [1, "sortable", 3, "click"], [1, "sort-icon"], [1, "ejercicio-nombre-cell"], [1, "ejercicio-descripcion-table"], [1, "ejercicio-tipo-badge"], [1, "text-muted"], [1, "acciones-cell"], ["title", "Editar", 1, "btn-editar-table", 3, "click"], ["title", "Eliminar", 1, "btn-eliminar-table", 3, "click"]], template: function ProgramasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u{1F4AA} Gesti\xF3n de Programas de Entrenamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ProgramasComponent_Template_button_click_5_listener() {
        return ctx.abrirFormulario();
      });
      \u0275\u0275text(6, " \u2795 Nuevo Programa ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ProgramasComponent_Conditional_7_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(8, ProgramasComponent_Conditional_8_Template, 4, 0, "div", 5);
      \u0275\u0275conditionalCreate(9, ProgramasComponent_Conditional_9_Template, 4, 1, "div", 6);
      \u0275\u0275conditionalCreate(10, ProgramasComponent_Conditional_10_Template, 39, 9, "div", 7);
      \u0275\u0275conditionalCreate(11, ProgramasComponent_Conditional_11_Template, 40, 9, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 2)(14, "h2");
      \u0275\u0275text(15, "\u{1F3CB}\uFE0F Gesti\xF3n de Ejercicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 3);
      \u0275\u0275listener("click", function ProgramasComponent_Template_button_click_16_listener() {
        return ctx.abrirFormularioEjercicio();
      });
      \u0275\u0275text(17, " \u2795 Nuevo Ejercicio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, ProgramasComponent_Conditional_18_Template, 5, 0, "div", 9)(19, ProgramasComponent_Conditional_19_Template, 29, 4, "div", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.error ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cargando && ctx.entrenamientos.length === 0 ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando || ctx.entrenamientos.length > 0 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mostrarFormulario ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mostrarFormularioEjercicio ? 11 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.ejercicios.length === 0 ? 18 : 19);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: ['\n\n.programas-admin-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.programas-section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n  padding-bottom: 32px;\n  border-bottom: 2px solid #e8ecf1;\n}\n.ejercicios-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.header-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn-nuevo[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-nuevo[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee;\n  border: 2px solid #f44;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  color: #c00;\n}\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.entrenamientos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.entrenamiento-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n}\n.entrenamiento-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.entrenamiento-nombre[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n  flex: 1;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-editar[_ngcontent-%COMP%], \n.btn-eliminar[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.btn-editar[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.btn-eliminar[_ngcontent-%COMP%]:hover {\n  background: #fee;\n}\n.entrenamiento-descripcion[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #666;\n}\n.entrenamiento-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e8ecf1;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #666;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.sin-entrenamientos[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.sin-entrenamientos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin-bottom: 20px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e8ecf1;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.btn-cerrar[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 4px 8px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.btn-cerrar[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n  color: #1a1a1a;\n}\n.formulario[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e8ecf1;\n  border-radius: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.ejercicios-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 2px solid #e8ecf1;\n  border-radius: 12px;\n  padding: 12px;\n  margin-top: 8px;\n}\n.sin-ejercicios[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #999;\n  font-size: 14px;\n}\n.ejercicio-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ejercicio-checkbox[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.ejercicio-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 12px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.ejercicio-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n}\n.ejercicio-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.ejercicio-tipo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 8px;\n  background: #e8ecf1;\n  border-radius: 6px;\n  color: #666;\n}\n.ejercicios-seleccionados[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #666;\n  font-style: italic;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid #e8ecf1;\n}\n.btn-cancelar[_ngcontent-%COMP%], \n.btn-guardar[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-cancelar[_ngcontent-%COMP%] {\n  background: #f5f7fa;\n  color: #666;\n}\n.btn-cancelar[_ngcontent-%COMP%]:hover {\n  background: #e8ecf1;\n}\n.btn-guardar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.btn-guardar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.btn-guardar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ejercicios-table-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: white;\n  border: 1px solid #e8ecf1;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ejercicios-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ejercicios-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 2px solid #e8ecf1;\n}\n.ejercicios-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 13px;\n  color: #495057;\n  vertical-align: middle;\n}\n.ejercicios-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.15s;\n  white-space: nowrap;\n}\n.ejercicios-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.ejercicios-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: inline-block;\n  margin-right: 6px;\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  opacity: 0.5;\n  transition: opacity 0.15s;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.ejercicios-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover   .sort-icon[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.ejercicios-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover   .sort-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ejercicios-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f5;\n  transition: background-color 0.15s;\n}\n.ejercicios-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.ejercicios-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ejercicios-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #212529;\n}\n.ejercicio-nombre-cell[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.ejercicio-nombre-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #212529;\n  margin-bottom: 2px;\n}\n.ejercicio-descripcion-table[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n  line-height: 1.4;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ejercicio-tipo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #f1f3f5;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #495057;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.acciones-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.btn-editar-table[_ngcontent-%COMP%], \n.btn-eliminar-table[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: all 0.15s;\n  margin-right: 4px;\n  opacity: 0.7;\n}\n.btn-editar-table[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  opacity: 1;\n}\n.btn-eliminar-table[_ngcontent-%COMP%]:hover {\n  background: #fee;\n  opacity: 1;\n}\n.sin-ejercicios-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border: 1px solid #e8ecf1;\n  border-radius: 8px;\n  margin-top: 24px;\n}\n.sin-ejercicios-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6c757d;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e8ecf1;\n  border-radius: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n@media (max-width: 768px) {\n  .ejercicios-table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .ejercicios-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .ejercicio-descripcion-table[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=programas.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramasComponent, [{
    type: Component,
    args: [{ selector: "app-programas", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="programas-admin-container">
    <!-- Secci\xF3n de Programas -->
    <div class="programas-section">
        <div class="header-section">
            <h1>\u{1F4AA} Gesti\xF3n de Programas de Entrenamiento</h1>
            <button class="btn-nuevo" (click)="abrirFormulario()">
                \u2795 Nuevo Programa
            </button>
        </div>

        <!-- Mensaje de error -->
        @if (error) {
        <div class="error-message">
            <p>\u274C {{ error }}</p>
        </div>
        }

        <!-- Estado de carga -->
        @if (cargando && entrenamientos.length === 0) {
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Cargando programas...</p>
        </div>
        }

        <!-- Lista de entrenamientos -->
        @if (!cargando || entrenamientos.length > 0) {
        <div class="entrenamientos-grid">
            @for (entrenamiento of entrenamientos; track entrenamiento.id) {
            <div class="entrenamiento-card">
                <div class="card-header">
                    <h3 class="entrenamiento-nombre">{{ entrenamiento.nombre }}</h3>
                    <div class="card-actions">
                        <button class="btn-editar" (click)="abrirFormulario(entrenamiento)">
                            \u270F\uFE0F
                        </button>
                        <button class="btn-eliminar" (click)="eliminar(entrenamiento.id!)">
                            \u{1F5D1}\uFE0F
                        </button>
                    </div>
                </div>

                @if (entrenamiento.descripcion) {
                <p class="entrenamiento-descripcion">{{ entrenamiento.descripcion }}</p>
                }

                <div class="entrenamiento-info">
                    <div class="info-item">
                        <span class="info-label">\u{1F4C5} Inicio:</span>
                        <span class="info-value">{{ formatearFecha(entrenamiento.fechaInicio) }}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">\u{1F4C5} Fin:</span>
                        <span class="info-value">{{ formatearFecha(entrenamiento.fechaFin) }}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">\u{1F3CB}\uFE0F Ejercicios:</span>
                        <span class="info-value">
                            {{ entrenamiento.ejerciciosIds?.length || entrenamiento.ejercicios?.length || 0 }}
                        </span>
                    </div>
                </div>
            </div>
            }

            @if (entrenamientos.length === 0) {
            <div class="sin-entrenamientos">
                <p>\u{1F4ED} No hay programas de entrenamiento creados</p>
                <button class="btn-nuevo" (click)="abrirFormulario()">
                    Crear el primero
                </button>
            </div>
            }
        </div>
        }

        <!-- Modal de formulario -->
        @if (mostrarFormulario) {
        <div class="modal-overlay" (click)="cerrarFormulario()">
            <div class="modal-content" (click)="$event.stopPropagation()">
                <div class="modal-header">
                    <h2>{{ editando ? "\u270F\uFE0F Editar Programa" : "\u2795 Nuevo Programa" }}</h2>
                    <button class="btn-cerrar" (click)="cerrarFormulario()">\u2715</button>
                </div>

                <form class="formulario" (ngSubmit)="guardar()">
                    <div class="form-group">
                        <label for="nombre">Nombre del Programa *</label>
                        <input type="text" id="nombre" [(ngModel)]="entrenamientoForm.nombre" name="nombre" required
                            placeholder="Ej: Plan de Fuerza 4 Semanas" />
                    </div>

                    <div class="form-group">
                        <label for="descripcion">Descripci\xF3n</label>
                        <textarea id="descripcion" [(ngModel)]="entrenamientoForm.descripcion" name="descripcion"
                            rows="3" placeholder="Describe el programa de entrenamiento..."></textarea>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="fechaInicio">Fecha de Inicio</label>
                            <input type="date" id="fechaInicio" [(ngModel)]="entrenamientoForm.fechaInicio"
                                name="fechaInicio" />
                        </div>

                        <div class="form-group">
                            <label for="fechaFin">Fecha de Fin</label>
                            <input type="date" id="fechaFin" [(ngModel)]="entrenamientoForm.fechaFin" name="fechaFin" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Ejercicios del Programa</label>
                        <div class="ejercicios-list">
                            @if (ejercicios.length === 0) {
                            <p class="sin-ejercicios">No hay ejercicios disponibles. Crea ejercicios primero.</p>
                            } @else {
                            @for (ejercicio of ejercicios; track ejercicio.id) {
                            <label class="ejercicio-checkbox">
                                <input type="checkbox" [checked]="estaSeleccionado(ejercicio.id!)"
                                    (change)="toggleEjercicio(ejercicio.id!)" />
                                <span class="ejercicio-info">
                                    <span class="ejercicio-nombre">{{ ejercicio.nombre }}</span>
                                    @if (ejercicio.tipo) {
                                    <span class="ejercicio-tipo">{{ ejercicio.tipo }}</span>
                                    }
                                </span>
                            </label>
                            }
                            }
                        </div>
                        <p class="ejercicios-seleccionados">
                            {{ ejerciciosSeleccionados.length }} ejercicio(s) seleccionado(s)
                        </p>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn-cancelar" (click)="cerrarFormulario()">
                            Cancelar
                        </button>
                        <button type="submit" class="btn-guardar" [disabled]="cargando">
                            @if (cargando) {
                            <span>\u23F3 Guardando...</span>
                            } @else {
                            <span>{{ editando ? "\u{1F4BE} Actualizar" : "\u2705 Crear" }}</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
        }

        <!-- Modal de formulario de ejercicio -->
        @if (mostrarFormularioEjercicio) {
        <div class="modal-overlay" (click)="cerrarFormularioEjercicio()">
            <div class="modal-content" (click)="$event.stopPropagation()">
                <div class="modal-header">
                    <h2>{{ editandoEjercicio ? "\u270F\uFE0F Editar Ejercicio" : "\u2795 Nuevo Ejercicio" }}</h2>
                    <button class="btn-cerrar" (click)="cerrarFormularioEjercicio()">\u2715</button>
                </div>

                <form class="formulario" (ngSubmit)="guardarEjercicio()">
                    <div class="form-group">
                        <label for="ejercicio-nombre">Nombre del Ejercicio *</label>
                        <input type="text" id="ejercicio-nombre" [(ngModel)]="ejercicioForm.nombre"
                            name="ejercicio-nombre" required placeholder="Ej: Press de Banca" />
                    </div>

                    <div class="form-group">
                        <label for="ejercicio-descripcion">Descripci\xF3n</label>
                        <textarea id="ejercicio-descripcion" [(ngModel)]="ejercicioForm.descripcion"
                            name="ejercicio-descripcion" rows="3" placeholder="Describe el ejercicio..."></textarea>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="ejercicio-tipo">Tipo</label>
                            <input type="text" id="ejercicio-tipo" [(ngModel)]="ejercicioForm.tipo"
                                name="ejercicio-tipo" placeholder="Ej: Fuerza, Cardio, Flexibilidad" />
                        </div>

                        <div class="form-group">
                            <label for="ejercicio-repeticiones">Repeticiones</label>
                            <input type="number" id="ejercicio-repeticiones" [(ngModel)]="ejercicioForm.repeticiones"
                                name="ejercicio-repeticiones" min="0" placeholder="Ej: 10" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="ejercicio-peso">Peso (kg)</label>
                            <input type="number" id="ejercicio-peso" [(ngModel)]="ejercicioForm.peso"
                                name="ejercicio-peso" min="0" step="0.1" placeholder="Ej: 20.5" />
                        </div>

                        <div class="form-group">
                            <label for="ejercicio-videoUrl">URL del Video</label>
                            <input type="url" id="ejercicio-videoUrl" [(ngModel)]="ejercicioForm.videoUrl"
                                name="ejercicio-videoUrl" placeholder="https://..." />
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn-cancelar" (click)="cerrarFormularioEjercicio()">
                            Cancelar
                        </button>
                        <button type="submit" class="btn-guardar" [disabled]="cargando">
                            @if (cargando) {
                            <span>\u23F3 Guardando...</span>
                            } @else {
                            <span>{{ editandoEjercicio ? "\u{1F4BE} Actualizar" : "\u2705 Crear" }}</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
        }
    </div>

    <!-- Secci\xF3n de Ejercicios -->
    <div class="ejercicios-section">
        <div class="header-section">
            <h2>\u{1F3CB}\uFE0F Gesti\xF3n de Ejercicios</h2>
            <button class="btn-nuevo" (click)="abrirFormularioEjercicio()">
                \u2795 Nuevo Ejercicio
            </button>
        </div>

        <!-- Tabla de ejercicios -->
        @if (ejercicios.length === 0) {
        <div class="sin-ejercicios-card">
            <p>\u{1F4ED} No hay ejercicios creados</p>
            <button class="btn-nuevo" (click)="abrirFormularioEjercicio()">
                Crear el primero
            </button>
        </div>
        } @else {
        <div class="ejercicios-table-container">
            <table class="ejercicios-table">
                <thead>
                    <tr>
                        <th class="sortable" (click)="ordenarPor('nombre')">
                            <span>Nombre</span>
                            <span class="sort-icon">{{ obtenerIconoOrden('nombre') }}</span>
                        </th>
                        <th class="sortable" (click)="ordenarPor('tipo')">
                            <span>Tipo</span>
                            <span class="sort-icon">{{ obtenerIconoOrden('tipo') }}</span>
                        </th>
                        <th class="sortable" (click)="ordenarPor('repeticiones')">
                            <span>Repeticiones</span>
                            <span class="sort-icon">{{ obtenerIconoOrden('repeticiones') }}</span>
                        </th>
                        <th class="sortable" (click)="ordenarPor('peso')">
                            <span>Peso (kg)</span>
                            <span class="sort-icon">{{ obtenerIconoOrden('peso') }}</span>
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @for (ejercicio of ejerciciosOrdenados; track ejercicio.id) {
                    <tr>
                        <td class="ejercicio-nombre-cell">
                            <strong>{{ ejercicio.nombre }}</strong>
                            @if (ejercicio.descripcion) {
                            <span class="ejercicio-descripcion-table">{{ ejercicio.descripcion }}</span>
                            }
                        </td>
                        <td>
                            @if (ejercicio.tipo) {
                            <span class="ejercicio-tipo-badge">{{ ejercicio.tipo }}</span>
                            } @else {
                            <span class="text-muted">-</span>
                            }
                        </td>
                        <td>
                            @if (ejercicio.repeticiones) {
                            {{ ejercicio.repeticiones }}
                            } @else {
                            <span class="text-muted">-</span>
                            }
                        </td>
                        <td>
                            @if (ejercicio.peso) {
                            {{ ejercicio.peso }}
                            } @else {
                            <span class="text-muted">-</span>
                            }
                        </td>
                        <td class="acciones-cell">
                            <button class="btn-editar-table" (click)="abrirFormularioEjercicio(ejercicio)"
                                title="Editar">
                                \u270F\uFE0F
                            </button>
                            <button class="btn-eliminar-table" (click)="eliminarEjercicio(ejercicio.id!)"
                                title="Eliminar">
                                \u{1F5D1}\uFE0F
                            </button>
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
        }

        <!-- Modal de formulario de ejercicio -->`, styles: ['/* src/app/features/admin/programas/programas.component.css */\n.programas-admin-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.programas-section {\n  margin-bottom: 48px;\n  padding-bottom: 32px;\n  border-bottom: 2px solid #e8ecf1;\n}\n.ejercicios-section {\n  margin-top: 32px;\n}\n.header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.header-section h1 {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.header-section h2 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn-nuevo {\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-nuevo:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.error-message {\n  background: #fee;\n  border: 2px solid #f44;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  color: #c00;\n}\n.loading-container {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.entrenamientos-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.entrenamiento-card {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n}\n.entrenamiento-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.entrenamiento-nombre {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n  flex: 1;\n}\n.card-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-editar,\n.btn-eliminar {\n  background: transparent;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.btn-editar:hover {\n  background: #f5f7fa;\n}\n.btn-eliminar:hover {\n  background: #fee;\n}\n.entrenamiento-descripcion {\n  margin: 12px 0;\n  padding: 12px;\n  background: #f5f7fa;\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #666;\n}\n.entrenamiento-info {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e8ecf1;\n}\n.info-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n}\n.info-label {\n  font-weight: 600;\n  color: #666;\n}\n.info-value {\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.sin-entrenamientos {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.sin-entrenamientos p {\n  font-size: 18px;\n  color: #666;\n  margin-bottom: 20px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: white;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid #e8ecf1;\n}\n.modal-header h2 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n  color: #1a1a1a;\n}\n.btn-cerrar {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 4px 8px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.btn-cerrar:hover {\n  background: #f5f7fa;\n  color: #1a1a1a;\n}\n.formulario {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n}\n.form-group input[type=text],\n.form-group input[type=date],\n.form-group textarea {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e8ecf1;\n  border-radius: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.ejercicios-list {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 2px solid #e8ecf1;\n  border-radius: 12px;\n  padding: 12px;\n  margin-top: 8px;\n}\n.sin-ejercicios {\n  text-align: center;\n  padding: 20px;\n  color: #999;\n  font-size: 14px;\n}\n.ejercicio-checkbox {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ejercicio-checkbox:hover {\n  background: #f5f7fa;\n}\n.ejercicio-checkbox input[type=checkbox] {\n  margin-right: 12px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.ejercicio-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n}\n.ejercicio-nombre {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.ejercicio-tipo {\n  font-size: 12px;\n  padding: 4px 8px;\n  background: #e8ecf1;\n  border-radius: 6px;\n  color: #666;\n}\n.ejercicios-seleccionados {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #666;\n  font-style: italic;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid #e8ecf1;\n}\n.btn-cancelar,\n.btn-guardar {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-cancelar {\n  background: #f5f7fa;\n  color: #666;\n}\n.btn-cancelar:hover {\n  background: #e8ecf1;\n}\n.btn-guardar {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.btn-guardar:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.btn-guardar:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ejercicios-table-container {\n  margin-top: 24px;\n  background: white;\n  border: 1px solid #e8ecf1;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ejercicios-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ejercicios-table thead {\n  background: #f8f9fa;\n  border-bottom: 2px solid #e8ecf1;\n}\n.ejercicios-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 13px;\n  color: #495057;\n  vertical-align: middle;\n}\n.ejercicios-table th.sortable {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.15s;\n  white-space: nowrap;\n}\n.ejercicios-table th.sortable:hover {\n  background: #e9ecef;\n}\n.ejercicios-table th.sortable > span:first-child {\n  display: inline-block;\n  margin-right: 6px;\n}\n.sort-icon {\n  font-size: 11px;\n  color: #6c757d;\n  opacity: 0.5;\n  transition: opacity 0.15s;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.ejercicios-table th.sortable:hover .sort-icon {\n  opacity: 0.8;\n}\n.ejercicios-table th.sortable:hover .sort-icon {\n  opacity: 1;\n}\n.ejercicios-table tbody tr {\n  border-bottom: 1px solid #f1f3f5;\n  transition: background-color 0.15s;\n}\n.ejercicios-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.ejercicios-table tbody tr:last-child {\n  border-bottom: none;\n}\n.ejercicios-table td {\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #212529;\n}\n.ejercicio-nombre-cell {\n  min-width: 200px;\n}\n.ejercicio-nombre-cell strong {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #212529;\n  margin-bottom: 2px;\n}\n.ejercicio-descripcion-table {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 2px;\n  line-height: 1.4;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ejercicio-tipo-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #f1f3f5;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #495057;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.acciones-cell {\n  white-space: nowrap;\n}\n.btn-editar-table,\n.btn-eliminar-table {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: all 0.15s;\n  margin-right: 4px;\n  opacity: 0.7;\n}\n.btn-editar-table:hover {\n  background: #e9ecef;\n  opacity: 1;\n}\n.btn-eliminar-table:hover {\n  background: #fee;\n  opacity: 1;\n}\n.sin-ejercicios-card {\n  text-align: center;\n  padding: 60px 32px;\n  background: white;\n  border: 1px solid #e8ecf1;\n  border-radius: 8px;\n  margin-top: 24px;\n}\n.sin-ejercicios-card p {\n  font-size: 16px;\n  color: #6c757d;\n  margin-bottom: 20px;\n}\n.form-group input[type=number],\n.form-group input[type=url] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e8ecf1;\n  border-radius: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group input[type=number]:focus,\n.form-group input[type=url]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n@media (max-width: 768px) {\n  .ejercicios-table-container {\n    overflow-x: auto;\n  }\n  .ejercicios-table {\n    min-width: 600px;\n  }\n  .ejercicio-descripcion-table {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=programas.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramasComponent, { className: "ProgramasComponent", filePath: "src/app/features/admin/programas/programas.component.ts", lineNumber: 16 });
})();
export {
  ProgramasComponent
};
//# sourceMappingURL=chunk-P4EVP75K.js.map
