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

// src/app/core/services/usuarios.service.ts
var UsuariosService = class _UsuariosService {
  http = inject(HttpClient);
  apiUrl = `${API_BASE_URL}/usuarios`;
  listarUsuarios() {
    return this.http.get(this.apiUrl);
  }
  crearUsuario(usuario) {
    return this.http.post(this.apiUrl, usuario);
  }
  eliminarUsuario(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  obtenerUsuario(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  actualizarUsuario(id, usuario) {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }
  subirFotoPerfil(id, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/${id}/foto-perfil`, formData);
  }
  static \u0275fac = function UsuariosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuariosService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuariosService, factory: _UsuariosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  UsuariosService
};
//# sourceMappingURL=chunk-VGENJJKI.js.map
