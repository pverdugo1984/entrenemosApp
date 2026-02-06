import {
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-C4S3RDAR.js";
import "./chunk-GGXBPUUZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/admin/admin-layout/admin-layout.component.ts
var AdminLayoutComponent = class _AdminLayoutComponent {
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 19, vars: 0, consts: [[1, "admin-wrapper"], [1, "sidebar"], ["routerLink", "/admin/dashboard"], ["routerLink", "/admin/usuarios"], ["routerLink", "/admin/programas"], ["routerLink", "/admin/progreso"], ["routerLink", "/admin/comunidad"], ["routerLink", "/admin/configuracion"], [1, "content"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "h2");
      \u0275\u0275text(3, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav")(5, "a", 2);
      \u0275\u0275text(6, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, "Usuarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 4);
      \u0275\u0275text(10, "Programas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 5);
      \u0275\u0275text(12, "Progreso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275text(14, "Comunidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 7);
      \u0275\u0275text(16, "Configuraci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "main", 8);
      \u0275\u0275element(18, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterOutlet, RouterModule, RouterLink], styles: ["\n\n.admin-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #111;\n  color: white;\n  padding: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  margin: 10px 0;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n}\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [RouterOutlet, RouterModule], template: '<div class="admin-wrapper">\r\n  <aside class="sidebar">\r\n    <h2>Admin</h2>\r\n    <nav>\r\n      <a routerLink="/admin/dashboard">Dashboard</a>\r\n      <a routerLink="/admin/usuarios">Usuarios</a>\r\n      <a routerLink="/admin/programas">Programas</a>\r\n      <a routerLink="/admin/progreso">Progreso</a>\r\n      <a routerLink="/admin/comunidad">Comunidad</a>\r\n      <a routerLink="/admin/configuracion">Configuraci\xF3n</a>\r\n    </nav>\r\n  </aside>\r\n\r\n  <main class="content">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>', styles: ["/* src/app/features/admin/admin-layout/admin-layout.component.css */\n.admin-container {\n  display: flex;\n  height: 100vh;\n}\n.sidebar {\n  width: 250px;\n  background: #111;\n  color: white;\n  padding: 20px;\n}\n.sidebar h2 {\n  margin-top: 0;\n  text-align: center;\n}\n.sidebar a {\n  display: block;\n  color: white;\n  margin: 10px 0;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n}\n.sidebar a:hover {\n  background: #333;\n}\n.content {\n  flex: 1;\n  padding: 20px;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/features/admin/admin-layout/admin-layout.component.ts", lineNumber: 11 });
})();

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-RHPQ26E2.js").then((m) => m.DashboardComponent)
      },
      {
        path: "usuarios",
        loadComponent: () => import("./chunk-R557IL5D.js").then((m) => m.UsuariosComponent)
      },
      {
        path: "usuarios/nuevo",
        loadComponent: () => import("./chunk-7HYX5XNO.js").then((m) => m.FormUsuarioComponent)
      },
      {
        path: "usuarios/:id",
        loadComponent: () => import("./chunk-7HYX5XNO.js").then((m) => m.FormUsuarioComponent)
      },
      {
        path: "programas",
        loadComponent: () => import("./chunk-P4EVP75K.js").then((m) => m.ProgramasComponent)
      },
      {
        path: "comunidad",
        loadComponent: () => import("./chunk-SYKFLYAZ.js").then((m) => m.ComunidadComponent)
      },
      {
        path: "progreso",
        loadComponent: () => import("./chunk-SO63GY6K.js").then((m) => m.ProgresoComponent)
      },
      {
        path: "configuracion",
        loadComponent: () => import("./chunk-EFGRWPD3.js").then((m) => m.ConfiguracionComponent)
      }
    ]
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=chunk-7MIXOLIB.js.map
