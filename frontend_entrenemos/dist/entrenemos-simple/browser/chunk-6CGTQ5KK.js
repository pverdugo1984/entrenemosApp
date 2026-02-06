import {
  UsuariosService
} from "./chunk-VGENJJKI.js";
import {
  AuthService
} from "./chunk-RCFFC4IO.js";
import {
  API_BASE_URL
} from "./chunk-CIZ2GW32.js";
import {
  CommonModule
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CP4LEFUZ.js";

// src/app/shared/components/user-profile/user-profile.ts
function UserProfile_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275domElement(1, "div", 12);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Subiendo...");
    \u0275\u0275domElementEnd()();
  }
}
function UserProfile_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1, "\u{1F4F7}");
    \u0275\u0275domElementEnd();
  }
}
function UserProfile_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function UserProfile_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.usuario.rol);
  }
}
var UserProfile = class _UserProfile {
  usuario;
  fotoActualizada = new EventEmitter();
  usuariosService = inject(UsuariosService);
  authService = inject(AuthService);
  subiendo = false;
  error = null;
  get nombreUsuario() {
    return this.usuario?.nombre || "Usuario";
  }
  get detallesUsuario() {
    if (!this.usuario) {
      return "Inicia sesi\xF3n para ver tu perfil";
    }
    const partes = [];
    if (this.usuario.telefono) {
      partes.push(this.usuario.telefono);
    }
    if (this.usuario.rol) {
      partes.push(this.usuario.rol);
    }
    return partes.join(" | ") || "Miembro";
  }
  get fotoPerfilUrl() {
    if (this.usuario?.fotoPerfil) {
      if (this.usuario.fotoPerfil.startsWith("/uploads/")) {
        const baseUrl = API_BASE_URL.replace("/api", "");
        return `${baseUrl}${this.usuario.fotoPerfil}`;
      }
      return this.usuario.fotoPerfil;
    }
    return "/assets/user-avatar.png";
  }
  onFotoClick() {
    if (!this.usuario?.id) {
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        this.subirFoto(file);
      }
    };
    input.click();
  }
  subirFoto(file) {
    if (!this.usuario?.id) {
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.error = "La imagen es demasiado grande. M\xE1ximo 5MB";
      setTimeout(() => this.error = null, 3e3);
      return;
    }
    if (!file.type.startsWith("image/")) {
      this.error = "El archivo debe ser una imagen";
      setTimeout(() => this.error = null, 3e3);
      return;
    }
    this.subiendo = true;
    this.error = null;
    this.usuariosService.subirFotoPerfil(this.usuario.id, file).subscribe({
      next: (response) => {
        if (this.usuario) {
          this.usuario.fotoPerfil = response.fotoPerfil;
          this.fotoActualizada.emit(this.usuario);
        }
        this.subiendo = false;
      },
      error: (err) => {
        console.error("Error subiendo foto:", err);
        this.error = err.error?.error || "Error al subir la foto";
        this.subiendo = false;
        setTimeout(() => this.error = null, 5e3);
      }
    });
  }
  static \u0275fac = function UserProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfile, selectors: [["app-user-profile"]], inputs: { usuario: "usuario" }, outputs: { fotoActualizada: "fotoActualizada" }, decls: 14, vars: 11, consts: [[1, "user-profile"], [1, "profile-avatar"], [1, "avatar-wrapper", 3, "click"], [1, "upload-overlay"], ["alt", "Perfil de usuario", 3, "src"], [1, "edit-icon"], [1, "status-indicator"], [1, "error-message-small"], [1, "profile-info"], [1, "user-name"], [1, "user-details"], [1, "user-badge"], [1, "spinner-small"]], template: function UserProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domListener("click", function UserProfile_Template_div_click_2_listener() {
        return ctx.onFotoClick();
      });
      \u0275\u0275conditionalCreate(3, UserProfile_Conditional_3_Template, 4, 0, "div", 3);
      \u0275\u0275domElement(4, "img", 4);
      \u0275\u0275conditionalCreate(5, UserProfile_Conditional_5_Template, 2, 0, "div", 5);
      \u0275\u0275domElement(6, "div", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(7, UserProfile_Conditional_7_Template, 2, 1, "div", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 8)(9, "h2", 9);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 10);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(13, UserProfile_Conditional_13_Template, 2, 1, "span", 11);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("clickeable", ctx.usuario == null ? null : ctx.usuario.id)("subiendo", ctx.subiendo);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subiendo ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275domProperty("src", ctx.fotoPerfilUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.usuario == null ? null : ctx.usuario.id) && !ctx.subiendo ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.nombreUsuario);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.detallesUsuario);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.usuario && ctx.usuario.rol ? 13 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.avatar-wrapper[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 3px;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.avatar-wrapper.clickeable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.avatar-wrapper.clickeable[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.avatar-wrapper.subiendo[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: wait;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 17px;\n}\n.edit-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px;\n  border-radius: 50%;\n  font-size: 20px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.avatar-wrapper.clickeable[_ngcontent-%COMP%]:hover   .edit-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.upload-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 17px;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 10;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top: 3px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-message-small[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #e53935;\n  text-align: center;\n  font-weight: 600;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 16px;\n  height: 16px;\n  background: #4caf50;\n  border: 3px solid white;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 6px 0;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-details[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n.user-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n/*# sourceMappingURL=user-profile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfile, [{
    type: Component,
    args: [{ selector: "app-user-profile", imports: [CommonModule], template: '<section class="user-profile">\n    <div class="profile-avatar">\n        <div class="avatar-wrapper" (click)="onFotoClick()" [class.clickeable]="usuario?.id"\n            [class.subiendo]="subiendo">\n            @if (subiendo) {\n            <div class="upload-overlay">\n                <div class="spinner-small"></div>\n                <span>Subiendo...</span>\n            </div>\n            }\n            <img [src]="fotoPerfilUrl" alt="Perfil de usuario" />\n            @if (usuario?.id && !subiendo) {\n            <div class="edit-icon">\u{1F4F7}</div>\n            }\n            <div class="status-indicator"></div>\n        </div>\n        @if (error) {\n        <div class="error-message-small">{{ error }}</div>\n        }\n    </div>\n    <div class="profile-info">\n        <h2 class="user-name">{{ nombreUsuario }}</h2>\n        <p class="user-details">{{ detallesUsuario }}</p>\n        @if (usuario && usuario.rol) {\n        <span class="user-badge">{{ usuario.rol }}</span>\n        }\n    </div>\n</section>', styles: ["/* src/app/shared/components/user-profile/user-profile.css */\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.user-profile:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n}\n.profile-avatar {\n  position: relative;\n}\n.avatar-wrapper {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 3px;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.avatar-wrapper.clickeable {\n  cursor: pointer;\n}\n.avatar-wrapper.clickeable:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.avatar-wrapper.subiendo {\n  opacity: 0.7;\n  cursor: wait;\n}\n.avatar-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 17px;\n}\n.edit-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px;\n  border-radius: 50%;\n  font-size: 20px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.avatar-wrapper.clickeable:hover .edit-icon {\n  opacity: 1;\n}\n.upload-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 17px;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 10;\n}\n.spinner-small {\n  width: 24px;\n  height: 24px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top: 3px solid white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin-bottom: 8px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-message-small {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #e53935;\n  text-align: center;\n  font-weight: 600;\n}\n.status-indicator {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 16px;\n  height: 16px;\n  background: #4caf50;\n  border: 3px solid white;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.profile-info {\n  flex: 1;\n  min-width: 0;\n}\n.user-name {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 6px 0;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-details {\n  font-size: 14px;\n  color: #666;\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n.user-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n/*# sourceMappingURL=user-profile.css.map */\n"] }]
  }], null, { usuario: [{
    type: Input
  }], fotoActualizada: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfile, { className: "UserProfile", filePath: "src/app/shared/components/user-profile/user-profile.ts", lineNumber: 14 });
})();

export {
  UserProfile
};
//# sourceMappingURL=chunk-6CGTQ5KK.js.map
