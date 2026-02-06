import {
  ChatWindowComponent
} from "./chunk-5XQCRHSE.js";
import "./chunk-VU3WMXVN.js";
import "./chunk-RCFFC4IO.js";
import {
  BottomNav,
  Header
} from "./chunk-TT6GHJS4.js";
import "./chunk-C4S3RDAR.js";
import "./chunk-CIZ2GW32.js";
import {
  CommonModule
} from "./chunk-GGXBPUUZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/user/comunidad/comunidad.ts
var Comunidad = class _Comunidad {
  static \u0275fac = function Comunidad_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Comunidad)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Comunidad, selectors: [["app-comunidad"]], decls: 5, vars: 0, consts: [[1, "page-wrapper"], [1, "page-container"]], template: function Comunidad_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-chat-window");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule, Header, BottomNav, ChatWindowComponent], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n}\n.page-container[_ngcontent-%COMP%] {\n  color: black;\n  padding: 40px 20px;\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=comunidad.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Comunidad, [{
    type: Component,
    args: [{ selector: "app-comunidad", imports: [CommonModule, Header, BottomNav, ChatWindowComponent], template: '<div class="page-wrapper">\r\n    <app-header />\r\n    <div class="page-container">\r\n        <app-chat-window></app-chat-window>\r\n    </div>\r\n    <app-bottom-nav />\r\n</div>', styles: ["/* src/app/features/user/comunidad/comunidad.css */\n.page-wrapper {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n}\n.page-container {\n  color: black;\n  padding: 40px 20px;\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=comunidad.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Comunidad, { className: "Comunidad", filePath: "src/app/features/user/comunidad/comunidad.ts", lineNumber: 13 });
})();
export {
  Comunidad
};
//# sourceMappingURL=chunk-KL3KI6WR.js.map
