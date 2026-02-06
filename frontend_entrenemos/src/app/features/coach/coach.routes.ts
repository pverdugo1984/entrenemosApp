import { Routes } from "@angular/router";

import { CoachLayoutComponent } from "./coach-layout/coach-layout.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

import { ComunidadComponent } from "./comunidad/comunidad.component";

export const COACH_ROUTES: Routes = [
  {
    path: "",
    component: CoachLayoutComponent,
    children: [
      { path: "usuarios", component: UsuariosComponent },
      {
      path: "programas",
        loadComponent: () =>
          import("../admin/programas/programas.component")
            .then(m => m.ProgramasComponent)
      },
      {
      path: "progreso",
        loadComponent: () =>
          import("../admin/progreso/progreso.component")
            .then(m => m.ProgresoComponent)
      },
      { path: "comunidad", component: ComunidadComponent },
      { path: "", redirectTo: "usuarios", pathMatch: "full" },
    ],
  },
];