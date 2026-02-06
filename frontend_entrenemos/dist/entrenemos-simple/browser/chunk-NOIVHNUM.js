import "./chunk-YP43Q66R.js";

// src/app/shared/utils/jwt.util.ts
var JwtUtil = class {
  /**
   * Decodifica un token JWT y devuelve el payload
   */
  static decodeToken(token) {
    try {
      const base64Url = token.split(".")[1];
      if (!base64Url) {
        return null;
      }
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(atob(base64).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decodificando token:", error);
      return null;
    }
  }
  /**
   * Obtiene el email del usuario desde el token
   */
  static getEmailFromToken(token) {
    const decoded = this.decodeToken(token);
    return decoded?.sub || decoded?.email || null;
  }
  /**
   * Verifica si el token está expirado
   */
  static isTokenExpired(token) {
    const decoded = this.decodeToken(token);
    if (!decoded || !decoded.exp) {
      return true;
    }
    const expirationDate = new Date(decoded.exp * 1e3);
    return expirationDate < /* @__PURE__ */ new Date();
  }
};
export {
  JwtUtil
};
//# sourceMappingURL=chunk-NOIVHNUM.js.map
