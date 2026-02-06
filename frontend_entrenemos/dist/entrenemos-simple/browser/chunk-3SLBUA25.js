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

// src/app/core/services/ejercicio.service.ts
var EjercicioService = class _EjercicioService {
  http = inject(HttpClient);
  apiUrl = `${API_BASE_URL}/ejercicios`;
  crear(ejercicio) {
    return this.http.post(this.apiUrl, ejercicio);
  }
  listar() {
    return this.http.get(this.apiUrl);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  actualizar(id, ejercicio) {
    return this.http.put(`${this.apiUrl}/${id}`, ejercicio);
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function EjercicioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EjercicioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EjercicioService, factory: _EjercicioService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EjercicioService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  EjercicioService
};
//# sourceMappingURL=chunk-3SLBUA25.js.map
