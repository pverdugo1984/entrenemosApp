import {
  UsuariosService
} from "./chunk-VGENJJKI.js";
import {
  Router
} from "./chunk-C4S3RDAR.js";
import "./chunk-CIZ2GW32.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/admin/usuarios/usuarios.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsuariosComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 6);
    \u0275\u0275domListener("click", function UsuariosComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargarUsuarios());
    });
    \u0275\u0275text(4, " \u{1F504} Reintentar ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u274C ", ctx_r1.error);
  }
}
function UsuariosComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275domElement(1, "div", 7);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Cargando usuarios...");
    \u0275\u0275domElementEnd()();
  }
}
function UsuariosComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} No hay usuarios registrados");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 2);
    \u0275\u0275domListener("click", function UsuariosComponent_Conditional_8_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.crear());
    });
    \u0275\u0275text(4, " Crear el primero ");
    \u0275\u0275domElementEnd()();
  }
}
function UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, u_r5.fechaRegistro, "dd/MM/yyyy HH:mm"), " ");
  }
}
function UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(u_r5.rol.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.rol, " ");
  }
}
function UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275domElementEnd();
  }
}
function UsuariosComponent_Conditional_8_Conditional_2_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275conditionalCreate(10, UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_10_Template, 2, 4)(11, UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_11_Template, 1, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td");
    \u0275\u0275conditionalCreate(13, UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_13_Template, 2, 3, "span", 10)(14, UsuariosComponent_Conditional_8_Conditional_2_For_19_Conditional_14_Template, 2, 0, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td")(16, "div", 11)(17, "button", 12);
    \u0275\u0275domListener("click", function UsuariosComponent_Conditional_8_Conditional_2_For_19_Template_button_click_17_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editar(u_r5));
    });
    \u0275\u0275text(18, " \u270F\uFE0F Editar ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "button", 13);
    \u0275\u0275domListener("click", function UsuariosComponent_Conditional_8_Conditional_2_For_19_Template_button_click_19_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.eliminar(u_r5.id));
    });
    \u0275\u0275text(20, " \u{1F5D1}\uFE0F Eliminar ");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.telefono || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(u_r5.fechaRegistro ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(u_r5.rol ? 13 : 14);
  }
}
function UsuariosComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Nombre");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Email");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Tel\xE9fono");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Fecha Registro");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Rol");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th");
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, UsuariosComponent_Conditional_8_Conditional_2_For_19_Template, 21, 6, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.usuarios);
  }
}
function UsuariosComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, UsuariosComponent_Conditional_8_Conditional_1_Template, 5, 0, "div", 8)(2, UsuariosComponent_Conditional_8_Conditional_2_Template, 20, 0, "table", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usuarios.length === 0 ? 1 : 2);
  }
}
var UsuariosComponent = class _UsuariosComponent {
  usuarioService;
  router;
  usuarios = [];
  cargando = true;
  error = null;
  constructor(usuarioService, router) {
    this.usuarioService = usuarioService;
    this.router = router;
  }
  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.cargando = true;
    this.error = null;
    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => {
        console.log("Usuarios recibidos:", data);
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error cargando usuarios:", err);
        this.error = err.error?.message || "Error al cargar los usuarios. Verifica que tengas rol ADMIN.";
        this.cargando = false;
      }
    });
  }
  eliminar(id) {
    if (!confirm("\xBFSeguro que quieres eliminar este usuario?"))
      return;
    this.usuarioService.eliminarUsuario(id).subscribe({
      next: () => {
        this.cargarUsuarios();
        alert("Usuario eliminado con \xE9xito");
      },
      error: (err) => {
        console.error("Error eliminando usuario:", err);
        alert("No se pudo eliminar el usuario: " + (err.error?.message || "Error desconocido"));
      }
    });
  }
  editar(usuario) {
    this.router.navigate(["/admin/usuarios", usuario.id]);
  }
  crear() {
    this.router.navigate(["/admin/usuarios/nuevo"]);
  }
  static \u0275fac = function UsuariosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuariosComponent)(\u0275\u0275directiveInject(UsuariosService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosComponent, selectors: [["app-usuarios"]], decls: 9, vars: 3, consts: [[1, "usuarios-admin-container"], [1, "header-section"], [1, "btn-nuevo", 3, "click"], [1, "error-message"], [1, "loading-container"], [1, "usuarios-table-container"], [1, "btn-reintentar", 3, "click"], [1, "spinner"], [1, "sin-usuarios"], [1, "usuarios-table"], [1, "rol-badge", 3, "class"], [1, "acciones"], [1, "btn-editar", 3, "click"], [1, "btn-eliminar", 3, "click"], [1, "rol-badge"]], template: function UsuariosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u{1F465} Gesti\xF3n de Usuarios");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 2);
      \u0275\u0275domListener("click", function UsuariosComponent_Template_button_click_4_listener() {
        return ctx.crear();
      });
      \u0275\u0275text(5, " \u2795 Nuevo Usuario ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(6, UsuariosComponent_Conditional_6_Template, 5, 1, "div", 3);
      \u0275\u0275conditionalCreate(7, UsuariosComponent_Conditional_7_Template, 4, 0, "div", 4);
      \u0275\u0275conditionalCreate(8, UsuariosComponent_Conditional_8_Template, 3, 1, "div", 5);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.error ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cargando ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando && !ctx.error ? 8 : -1);
    }
  }, dependencies: [CommonModule, DatePipe], styles: ['\n\n.usuarios-admin-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn-nuevo[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-nuevo[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee;\n  border: 2px solid #f44;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  color: #c00;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n}\n.btn-reintentar[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #f44;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-reintentar[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n  transform: translateY(-2px);\n}\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.usuarios-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  overflow-x: auto;\n}\n.sin-usuarios[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 32px;\n  color: #666;\n}\n.sin-usuarios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.usuarios-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.usuarios-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f5f7fa;\n  border-bottom: 2px solid #e8ecf1;\n}\n.usuarios-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 700;\n  color: #1a1a1a;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.usuarios-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #e8ecf1;\n  color: #1a1a1a;\n}\n.usuarios-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.usuarios-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.rol-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.rol-badge.admin[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.rol-badge.entrenador[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.rol-badge.atleta[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-editar[_ngcontent-%COMP%], \n.btn-eliminar[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-editar[_ngcontent-%COMP%] {\n  background: #f5f7fa;\n  color: #667eea;\n}\n.btn-editar[_ngcontent-%COMP%]:hover {\n  background: #e8ecf1;\n  transform: translateY(-2px);\n}\n.btn-eliminar[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #d32f2f;\n}\n.btn-eliminar[_ngcontent-%COMP%]:hover {\n  background: #fcc;\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .usuarios-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .usuarios-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .usuarios-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n  }\n  .acciones[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .btn-editar[_ngcontent-%COMP%], \n   .btn-eliminar[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=usuarios.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-usuarios", standalone: true, imports: [CommonModule, DatePipe], template: `<div class="usuarios-admin-container">\r
  <div class="header-section">\r
    <h1>\u{1F465} Gesti\xF3n de Usuarios</h1>\r
    <button class="btn-nuevo" (click)="crear()">\r
      \u2795 Nuevo Usuario\r
    </button>\r
  </div>\r
\r
  <!-- Mensaje de error -->\r
  @if (error) {\r
  <div class="error-message">\r
    <p>\u274C {{ error }}</p>\r
    <button class="btn-reintentar" (click)="cargarUsuarios()">\r
      \u{1F504} Reintentar\r
    </button>\r
  </div>\r
  }\r
\r
  <!-- Estado de carga -->\r
  @if (cargando) {\r
  <div class="loading-container">\r
    <div class="spinner"></div>\r
    <p>Cargando usuarios...</p>\r
  </div>\r
  }\r
\r
  <!-- Lista de usuarios -->\r
  @if (!cargando && !error) {\r
  <div class="usuarios-table-container">\r
    @if (usuarios.length === 0) {\r
    <div class="sin-usuarios">\r
      <p>\u{1F4ED} No hay usuarios registrados</p>\r
      <button class="btn-nuevo" (click)="crear()">\r
        Crear el primero\r
      </button>\r
    </div>\r
    } @else {\r
    <table class="usuarios-table">\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Nombre</th>\r
          <th>Email</th>\r
          <th>Tel\xE9fono</th>\r
          <th>Fecha Registro</th>\r
          <th>Rol</th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (u of usuarios; track u.id) {\r
        <tr>\r
          <td>{{ u.id }}</td>\r
          <td>{{ u.nombre }}</td>\r
          <td>{{ u.email }}</td>\r
          <td>{{ u.telefono || "-" }}</td>\r
          <td>\r
            @if (u.fechaRegistro) {\r
            {{ u.fechaRegistro | date:'dd/MM/yyyy HH:mm' }}\r
            } @else {\r
            -\r
            }\r
          </td>\r
          <td>\r
            @if (u.rol) {\r
            <span class="rol-badge" [class]="u.rol.toLowerCase()">\r
              {{ u.rol }}\r
            </span>\r
            } @else {\r
            <span>-</span>\r
            }\r
          </td>\r
          <td>\r
            <div class="acciones">\r
              <button class="btn-editar" (click)="editar(u)">\r
                \u270F\uFE0F Editar\r
              </button>\r
              <button class="btn-eliminar" (click)="eliminar(u.id!)">\r
                \u{1F5D1}\uFE0F Eliminar\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
        }\r
      </tbody>\r
    </table>\r
    }\r
  </div>\r
  }\r
</div>`, styles: ['/* src/app/features/admin/usuarios/usuarios.component.css */\n.usuarios-admin-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.header-section h1 {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn-nuevo {\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-nuevo:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.error-message {\n  background: #fee;\n  border: 2px solid #f44;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  color: #c00;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.error-message p {\n  margin: 0;\n  flex: 1;\n}\n.btn-reintentar {\n  padding: 8px 16px;\n  background: #f44;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-reintentar:hover {\n  background: #d32f2f;\n  transform: translateY(-2px);\n}\n.loading-container {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e8ecf1;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.usuarios-table-container {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  overflow-x: auto;\n}\n.sin-usuarios {\n  text-align: center;\n  padding: 60px 32px;\n  color: #666;\n}\n.sin-usuarios p {\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.usuarios-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.usuarios-table thead {\n  background: #f5f7fa;\n  border-bottom: 2px solid #e8ecf1;\n}\n.usuarios-table th {\n  padding: 16px;\n  text-align: left;\n  font-weight: 700;\n  color: #1a1a1a;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.usuarios-table td {\n  padding: 16px;\n  border-bottom: 1px solid #e8ecf1;\n  color: #1a1a1a;\n}\n.usuarios-table tbody tr:hover {\n  background: #f5f7fa;\n}\n.usuarios-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.rol-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.rol-badge.admin {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.rol-badge.entrenador {\n  background: #fff3e0;\n  color: #e65100;\n}\n.rol-badge.atleta {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.acciones {\n  display: flex;\n  gap: 8px;\n}\n.btn-editar,\n.btn-eliminar {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Stardos Stencil", sans-serif;\n}\n.btn-editar {\n  background: #f5f7fa;\n  color: #667eea;\n}\n.btn-editar:hover {\n  background: #e8ecf1;\n  transform: translateY(-2px);\n}\n.btn-eliminar {\n  background: #fee;\n  color: #d32f2f;\n}\n.btn-eliminar:hover {\n  background: #fcc;\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .usuarios-table {\n    font-size: 12px;\n  }\n  .usuarios-table th,\n  .usuarios-table td {\n    padding: 12px 8px;\n  }\n  .acciones {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .btn-editar,\n  .btn-eliminar {\n    font-size: 11px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=usuarios.component.css.map */\n'] }]
  }], () => [{ type: UsuariosService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosComponent, { className: "UsuariosComponent", filePath: "src/app/features/admin/usuarios/usuarios.component.ts", lineNumber: 14 });
})();
export {
  UsuariosComponent
};
//# sourceMappingURL=chunk-R557IL5D.js.map
