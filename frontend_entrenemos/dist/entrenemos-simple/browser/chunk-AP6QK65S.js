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
  AuthService
} from "./chunk-RCFFC4IO.js";
import {
  Router
} from "./chunk-C4S3RDAR.js";
import "./chunk-CIZ2GW32.js";
import {
  CommonModule,
  NgIf
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  email = "";
  password = "";
  error = "";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (usuario) => {
        console.log("Usuario logueado:", usuario);
        console.log("Rol recibido:", usuario.rol);
        if (usuario.rol?.toUpperCase().trim() === "ADMIN") {
          this.router.navigate(["/admin/dashboard"]);
        } else {
          this.router.navigate(["/home"]);
        }
      },
      error: (err) => {
        console.error("Error en login:", err);
        this.error = "Email o contrase\xF1a incorrectos";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 13, vars: 3, consts: [[1, "video-background"], ["autoplay", "", "muted", "", "loop", "", "playsinline", ""], ["src", "assets/videos/login.webm", "type", "video/webm"], ["src", "assets/videos/login.mp4", "type", "video/mp4"], [1, "login-container"], [3, "ngSubmit"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Contrase\xF1a", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "video", 1);
      \u0275\u0275element(2, "source", 2)(3, "source", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "h2");
      \u0275\u0275text(6, "Iniciar sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275text(11, "Entrar");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, LoginComponent_p_12_Template, 2, 1, "p", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf], styles: ["\n\n.video-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: -1;\n  overflow: hidden;\n  background-color: black;\n}\n.video-background[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center 35%;\n  filter: grayscale(100%) brightness(0.4);\n}\n.login-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 2rem;\n  border-radius: 15px;\n  width: 90%;\n  max-width: 320px;\n  text-align: center;\n  color: white;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin: 8px 0;\n  border: none;\n  outline: none;\n  border-radius: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-top: 10px;\n  border: none;\n  background: #ff6b00;\n  color: white;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #ff8533;\n}\n.error[_ngcontent-%COMP%] {\n  color: rgb(255, 100, 100);\n  margin-top: 10px;\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .video-background[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    object-fit: cover;\n    object-position: center;\n  }\n  .login-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [FormsModule, CommonModule], template: '<div class="video-background">\r\n  <video autoplay muted loop playsinline>\r\n    <source src="assets/videos/login.webm" type="video/webm">\r\n    <source src="assets/videos/login.mp4" type="video/mp4">\r\n  </video>\r\n</div>\r\n\r\n<div class="login-container">\r\n  <h2>Iniciar sesi\xF3n</h2>\r\n\r\n  <form (ngSubmit)="onLogin()">\r\n    <input type="email" placeholder="Email" [(ngModel)]="email" name="email" required>\r\n    <input type="password" placeholder="Contrase\xF1a" [(ngModel)]="password" name="password" required>\r\n    <button type="submit">Entrar</button>\r\n  </form>\r\n\r\n  <p *ngIf="error" class="error">{{error}}</p>\r\n</div>', styles: ["/* src/app/features/auth/login/login.component.css */\n.video-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: -1;\n  overflow: hidden;\n  background-color: black;\n}\n.video-background video {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center 35%;\n  filter: grayscale(100%) brightness(0.4);\n}\n.login-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 2rem;\n  border-radius: 15px;\n  width: 90%;\n  max-width: 320px;\n  text-align: center;\n  color: white;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\n}\ninput {\n  width: 100%;\n  padding: 12px;\n  margin: 8px 0;\n  border: none;\n  outline: none;\n  border-radius: 8px;\n}\nbutton {\n  width: 100%;\n  padding: 12px;\n  margin-top: 10px;\n  border: none;\n  background: #ff6b00;\n  color: white;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nbutton:hover {\n  background: #ff8533;\n}\n.error {\n  color: rgb(255, 100, 100);\n  margin-top: 10px;\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .video-background video {\n    object-fit: cover;\n    object-position: center;\n  }\n  .login-container {\n    padding: 1.5rem;\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-AP6QK65S.js.map
