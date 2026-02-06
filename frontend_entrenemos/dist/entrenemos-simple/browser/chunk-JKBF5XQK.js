import {
  API_BASE_URL
} from "./chunk-CIZ2GW32.js";
import {
  HttpClient
} from "./chunk-GGXBPUUZ.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CP4LEFUZ.js";

// src/app/core/services/entrenamiento.service.ts
var EntrenamientoService = class _EntrenamientoService {
  http = inject(HttpClient);
  apiUrl = `${API_BASE_URL}/entrenamientos`;
  crear(entrenamiento) {
    return this.http.post(this.apiUrl, entrenamiento);
  }
  listar() {
    return this.http.get(this.apiUrl);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  actualizar(id, entrenamiento) {
    return this.http.put(`${this.apiUrl}/${id}`, entrenamiento);
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function EntrenamientoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntrenamientoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntrenamientoService, factory: _EntrenamientoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrenamientoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  EntrenamientoService
};
//# sourceMappingURL=chunk-JKBF5XQK.js.map
