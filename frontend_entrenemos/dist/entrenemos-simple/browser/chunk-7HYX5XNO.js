import {
  UsuariosService
} from "./chunk-VGENJJKI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VU3WMXVN.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/admin/usuarios/form/form-usuario.component.ts
var FormUsuarioComponent = class _FormUsuarioComponent {
  service;
  route;
  router;
  usuario = {};
  editando = false;
  constructor(service, route, router) {
    this.service = service;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editando = true;
      this.service.obtenerUsuario(+id).subscribe((u) => this.usuario = u);
    }
  }
  guardar() {
    if (this.editando) {
      this.service.actualizarUsuario(this.usuario.id, this.usuario).subscribe(() => this.router.navigate(["/admin/usuarios"]));
    } else {
      this.service.crearUsuario(this.usuario).subscribe(() => this.router.navigate(["/admin/usuarios"]));
    }
  }
  static \u0275fac = function FormUsuarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormUsuarioComponent)(\u0275\u0275directiveInject(UsuariosService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormUsuarioComponent, selectors: [["app-form-usuario"]], decls: 17, vars: 6, consts: [[3, "ngSubmit"], ["type", "text", "name", "nombre", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "telefono", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "rol", 3, "ngModelChange", "ngModel"], ["type", "submit"]], template: function FormUsuarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2");
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "form", 0);
      \u0275\u0275listener("ngSubmit", function FormUsuarioComponent_Template_form_ngSubmit_2_listener() {
        return ctx.guardar();
      });
      \u0275\u0275elementStart(3, "label");
      \u0275\u0275text(4, "Nombre:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function FormUsuarioComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.usuario.nombre, $event) || (ctx.usuario.nombre = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "label");
      \u0275\u0275text(7, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function FormUsuarioComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.usuario.email, $event) || (ctx.usuario.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label");
      \u0275\u0275text(10, "Tel\xE9fono:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function FormUsuarioComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.usuario.telefono, $event) || (ctx.usuario.telefono = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label");
      \u0275\u0275text(13, "Rol:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function FormUsuarioComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.usuario.rol, $event) || (ctx.usuario.rol = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 5);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.editando ? "Editar usuario" : "Crear usuario");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.usuario.nombre);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.usuario.email);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.usuario.telefono);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.usuario.rol);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editando ? "Guardar cambios" : "Crear usuario", " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormUsuarioComponent, [{
    type: Component,
    args: [{ selector: "app-form-usuario", standalone: true, imports: [CommonModule, FormsModule], template: '<h2>{{ editando ? "Editar usuario" : "Crear usuario" }}</h2>\r\n\r\n<form (ngSubmit)="guardar()">\r\n\r\n  <label>Nombre:</label>\r\n  <input type="text" [(ngModel)]="usuario.nombre" name="nombre" required>\r\n\r\n  <label>Email:</label>\r\n  <input type="email" [(ngModel)]="usuario.email" name="email" required>\r\n\r\n  <label>Tel\xE9fono:</label>\r\n  <input type="text" [(ngModel)]="usuario.telefono" name="telefono">\r\n\r\n  <label>Rol:</label>\r\n  <input type="text" [(ngModel)]="usuario.rol" name="rol">\r\n\r\n  <button type="submit">\r\n    {{ editando ? "Guardar cambios" : "Crear usuario" }}\r\n  </button>\r\n\r\n</form>\r\n' }]
  }], () => [{ type: UsuariosService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormUsuarioComponent, { className: "FormUsuarioComponent", filePath: "src/app/features/admin/usuarios/form/form-usuario.component.ts", lineNumber: 16 });
})();
export {
  FormUsuarioComponent
};
//# sourceMappingURL=chunk-7HYX5XNO.js.map
