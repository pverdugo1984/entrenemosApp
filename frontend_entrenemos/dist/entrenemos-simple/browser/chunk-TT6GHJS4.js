import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-C4S3RDAR.js";
import {
  CommonModule
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-CP4LEFUZ.js";

// src/app/shared/components/header/header.ts
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], decls: 10, vars: 0, consts: [[1, "header"], [1, "header-bottom"], [1, "header-left"], [1, "header-right"], [1, "icon"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Entrenemos App");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 3)(6, "span", 4);
      \u0275\u0275text(7, "\u{1F514}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "span", 4);
      \u0275\u0275text(9, "\u22EF");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n\n.header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 16px 20px;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border-bottom: 1px solid #e8ecf1;\n}\n.header-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 414px;\n  margin: 0 auto;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  cursor: pointer;\n  color: #666;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  transition: all 0.2s;\n  position: relative;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n  color: #667eea;\n  transform: scale(1.1);\n}\n.icon[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [], template: '<header class="header">\r\n    <div class="header-bottom">\r\n        <div class="header-left">\r\n            <h1>Entrenemos App</h1>\r\n        </div>\r\n        <div class="header-right">\r\n            <span class="icon">\u{1F514}</span>\r\n            <span class="icon">\u22EF</span>\r\n        </div>\r\n    </div>\r\n</header>', styles: ["/* src/app/shared/components/header/header.css */\n.header {\n  background: white;\n  padding: 16px 20px;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border-bottom: 1px solid #e8ecf1;\n}\n.header-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 414px;\n  margin: 0 auto;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.header-left h1 {\n  font-size: 22px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0;\n}\n.header-right {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.icon {\n  font-size: 22px;\n  cursor: pointer;\n  color: #666;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  transition: all 0.2s;\n  position: relative;\n}\n.icon:hover {\n  background: #f5f7fa;\n  color: #667eea;\n  transform: scale(1.1);\n}\n.icon:active {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/components/header/header.ts", lineNumber: 9 });
})();

// src/app/shared/components/bottom-nav/bottom-nav.ts
var _c0 = () => ({ exact: false });
var BottomNav = class _BottomNav {
  router = inject(Router);
  navegarAProgreso() {
    console.log("Navegando a progreso...");
    this.router.navigate(["/progreso"]).then((success) => {
      if (success) {
        console.log("Navegaci\xF3n exitosa a /progreso");
      } else {
        console.error("Error en la navegaci\xF3n a /progreso");
      }
    }, (error) => {
      console.error("Error navegando a /progreso:", error);
    });
  }
  static \u0275fac = function BottomNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomNav, selectors: [["app-bottom-nav"]], decls: 27, vars: 2, consts: [[1, "bottom-nav"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "nav-icon"], [1, "nav-label"], ["routerLink", "/comunidad", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/rutina", "routerLinkActive", "active", 1, "nav-item", "center-button"], [1, "circle-button"], [1, "nav-icon", "center-icon"], ["routerLink", "/progreso", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/perfil", "routerLinkActive", "active", 1, "nav-item"]], template: function BottomNav_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "Inicio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "a", 4)(7, "span", 2);
      \u0275\u0275text(8, "\u{1F44A}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 3);
      \u0275\u0275text(10, "Comunidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "a", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "\u{1F3CB}\uFE0F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "span", 3);
      \u0275\u0275text(16, "Rutina");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "a", 8);
      \u0275\u0275listener("click", function BottomNav_Template_a_click_17_listener() {
        return ctx.navegarAProgreso();
      });
      \u0275\u0275elementStart(18, "span", 2);
      \u0275\u0275text(19, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 3);
      \u0275\u0275text(21, "Progreso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "a", 9)(23, "span", 2);
      \u0275\u0275text(24, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 3);
      \u0275\u0275text(26, "Perfil");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ['\n\n.bottom-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  max-width: 414px;\n  background: white;\n  border-top: 1px solid #e8ecf1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 8px 8px;\n  padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 20px 20px 0 0;\n  z-index: 100;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: #666;\n  padding: 8px 4px;\n  flex: 1;\n  max-width: 80px;\n  text-align: center;\n  border-radius: 12px;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n  color: #667eea;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 32px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 0 0 4px 4px;\n}\n.nav-item.center-button[_ngcontent-%COMP%] {\n  flex: 0;\n  max-width: auto;\n  padding: 0;\n  margin: -20px auto 0;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  transition: all 0.2s;\n  display: block;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n}\n.circle-button[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 4px;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);\n}\n.circle-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);\n}\n.circle-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.nav-item.active[_ngcontent-%COMP%]   .circle-button[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);\n}\n.center-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  filter: none;\n}\n.nav-item.active[_ngcontent-%COMP%]   .center-icon[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.nav-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n  width: 100%;\n  transition: color 0.2s;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 700;\n}\n@supports (padding: env(safe-area-inset-bottom)) {\n  .bottom-nav[_ngcontent-%COMP%] {\n    padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=bottom-nav.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNav, [{
    type: Component,
    args: [{ selector: "app-bottom-nav", imports: [CommonModule, RouterModule], template: '<nav class="bottom-nav">\n    <!-- Izquierda -->\n    <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: false}" class="nav-item">\n        <span class="nav-icon">\u{1F3E0}</span>\n        <span class="nav-label">Inicio</span>\n    </a>\n\n    <a routerLink="/comunidad" routerLinkActive="active" class="nav-item">\n        <span class="nav-icon">\u{1F44A}</span>\n        <span class="nav-label">Comunidad</span>\n    </a>\n\n    <!-- Centro - Funcionalidad principal -->\n    <a routerLink="/rutina" routerLinkActive="active" class="nav-item center-button">\n        <div class="circle-button">\n            <span class="nav-icon center-icon">\u{1F3CB}\uFE0F</span>\n        </div>\n        <span class="nav-label">Rutina</span>\n    </a>\n\n    <!-- Derecha -->\n    <a routerLink="/progreso" routerLinkActive="active" class="nav-item" (click)="navegarAProgreso()">\n        <span class="nav-icon">\u{1F4CA}</span>\n        <span class="nav-label">Progreso</span>\n    </a>\n\n    <a routerLink="/perfil" routerLinkActive="active" class="nav-item">\n        <span class="nav-icon">\u{1F464}</span>\n        <span class="nav-label">Perfil</span>\n    </a>\n</nav>', styles: ['/* src/app/shared/components/bottom-nav/bottom-nav.css */\n.bottom-nav {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  max-width: 414px;\n  background: white;\n  border-top: 1px solid #e8ecf1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 8px 8px;\n  padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 20px 20px 0 0;\n  z-index: 100;\n}\n.nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: #666;\n  padding: 8px 4px;\n  flex: 1;\n  max-width: 80px;\n  text-align: center;\n  border-radius: 12px;\n  position: relative;\n}\n.nav-item:hover {\n  background: #f5f7fa;\n  color: #667eea;\n}\n.nav-item.active {\n  color: #667eea;\n}\n.nav-item.active::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 32px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 0 0 4px 4px;\n}\n.nav-item.center-button {\n  flex: 0;\n  max-width: auto;\n  padding: 0;\n  margin: -20px auto 0;\n}\n.nav-icon {\n  font-size: 22px;\n  transition: all 0.2s;\n  display: block;\n}\n.nav-item.active .nav-icon {\n  transform: scale(1.15);\n}\n.circle-button {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 4px;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);\n}\n.circle-button:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);\n}\n.circle-button:active {\n  transform: scale(0.95);\n}\n.nav-item.active .circle-button {\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);\n}\n.center-icon {\n  font-size: 32px;\n  filter: none;\n}\n.nav-item.active .center-icon {\n  transform: scale(1);\n}\n.nav-label {\n  font-size: 10px;\n  color: #666;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-align: center;\n  width: 100%;\n  transition: color 0.2s;\n}\n.nav-item.active .nav-label {\n  color: #667eea;\n  font-weight: 700;\n}\n@supports (padding: env(safe-area-inset-bottom)) {\n  .bottom-nav {\n    padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=bottom-nav.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomNav, { className: "BottomNav", filePath: "src/app/shared/components/bottom-nav/bottom-nav.ts", lineNumber: 11 });
})();

export {
  Header,
  BottomNav
};
//# sourceMappingURL=chunk-TT6GHJS4.js.map
