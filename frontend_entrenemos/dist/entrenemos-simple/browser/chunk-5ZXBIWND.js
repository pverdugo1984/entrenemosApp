import {
  API_BASE_URL
} from "./chunk-CIZ2GW32.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-GGXBPUUZ.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CP4LEFUZ.js";

// src/app/core/services/progreso.service.ts
var ProgresoService = class _ProgresoService {
  http = inject(HttpClient);
  apiUrl = `${API_BASE_URL}/progresos`;
  crear(progreso) {
    return this.http.post(this.apiUrl, progreso);
  }
  listar() {
    return this.http.get(this.apiUrl);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  obtenerPorUsuarioYEjercicio(usuarioId, ejercicioId) {
    const params = new HttpParams().set("usuarioId", usuarioId.toString()).set("ejercicioId", ejercicioId.toString());
    return this.http.get(this.apiUrl, { params });
  }
  obtenerPorUsuario(usuarioId) {
    const params = new HttpParams().set("usuarioId", usuarioId.toString());
    return this.http.get(this.apiUrl, { params });
  }
  static \u0275fac = function ProgresoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgresoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProgresoService, factory: _ProgresoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgresoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ProgresoService
};
//# sourceMappingURL=chunk-5ZXBIWND.js.map
