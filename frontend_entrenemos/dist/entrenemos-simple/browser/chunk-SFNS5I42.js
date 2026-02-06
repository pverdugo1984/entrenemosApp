import {
  BottomNav,
  Header
} from "./chunk-TT6GHJS4.js";
import "./chunk-C4S3RDAR.js";
import "./chunk-GGXBPUUZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CP4LEFUZ.js";
import "./chunk-YP43Q66R.js";

// src/app/features/user/tienda/tienda.ts
var Tienda = class _Tienda {
  static \u0275fac = function Tienda_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tienda)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tienda, selectors: [["app-tienda"]], decls: 8, vars: 0, consts: [[1, "page-wrapper"], [1, "page-container"]], template: function Tienda_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1)(3, "h1");
      \u0275\u0275text(4, "\u{1F6D2} Tienda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Compra planes premium y suplementos");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "app-bottom-nav");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [Header, BottomNav], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n}\n.page-container[_ngcontent-%COMP%] {\n  color: black;\n  padding: 40px 20px;\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=tienda.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tienda, [{
    type: Component,
    args: [{ selector: "app-tienda", imports: [Header, BottomNav], template: '<div class="page-wrapper">\r\n    <app-header />\r\n    <div class="page-container">\r\n        <h1>\u{1F6D2} Tienda</h1>\r\n        <p>Compra planes premium y suplementos</p>\r\n    </div>\r\n    <app-bottom-nav />\r\n</div>', styles: ["/* src/app/features/user/tienda/tienda.css */\n.page-wrapper {\n  max-width: 414px;\n  margin: 0 auto;\n  background: #d3d3d3;\n  min-height: 100vh;\n}\n.page-container {\n  color: black;\n  padding: 40px 20px;\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=tienda.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tienda, { className: "Tienda", filePath: "src/app/features/user/tienda/tienda.ts", lineNumber: 11 });
})();
export {
  Tienda
};
//# sourceMappingURL=chunk-SFNS5I42.js.map
