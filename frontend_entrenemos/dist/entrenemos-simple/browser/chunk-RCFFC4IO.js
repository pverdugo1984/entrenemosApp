import {
  Router
} from "./chunk-C4S3RDAR.js";
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
  signal,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-CP4LEFUZ.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = `${API_BASE_URL}/auth`;
  // Signals para el token y rol (Angular 20)
  tokenSignal = signal(null, ...ngDevMode ? [{ debugName: "tokenSignal" }] : []);
  token = this.tokenSignal.asReadonly();
  rolSignal = signal(null, ...ngDevMode ? [{ debugName: "rolSignal" }] : []);
  rol = this.rolSignal.asReadonly();
  constructor() {
    const savedToken = localStorage.getItem("token");
    const savedRol = localStorage.getItem("rol");
    if (savedToken) {
      this.tokenSignal.set(savedToken);
      this.rolSignal.set(savedRol);
    }
  }
  login(email, password) {
    const credentials = { email, password };
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(switchMap((response) => {
      const token = response.jwt || response.token || "";
      this.tokenSignal.set(token);
      this.rolSignal.set(response.rol);
      localStorage.setItem("token", token);
      localStorage.setItem("rol", response.rol);
      return this.getCurrentUser().pipe(tap((usuario) => {
        localStorage.setItem("nombre", usuario.nombre || email);
      }));
    }));
  }
  logout() {
    this.tokenSignal.set(null);
    this.rolSignal.set(null);
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("nombre");
    this.router.navigate(["/login"]);
  }
  isAuthenticated() {
    return this.tokenSignal() !== null;
  }
  getToken() {
    return this.tokenSignal();
  }
  getRol() {
    return this.rolSignal();
  }
  // Métodos legacy para compatibilidad
  guardarToken(token) {
    this.tokenSignal.set(token);
    localStorage.setItem("token", token);
  }
  guardarRol(rol) {
    this.rolSignal.set(rol);
    localStorage.setItem("rol", rol);
  }
  getCurrentUser() {
    return this.http.get(`${this.apiUrl}/me`);
  }
  // Método para obtener el nombre del usuario actual (para chat)
  getNombre() {
    return localStorage.getItem("nombre");
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-RCFFC4IO.js.map
