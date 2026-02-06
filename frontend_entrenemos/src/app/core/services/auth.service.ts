import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { API_BASE_URL } from "../../config/api.config";
import { LoginRequest, LoginResponse } from "../../shared/models/auth.model";
import { Usuario } from "../../shared/models/usuario";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = `${API_BASE_URL}/auth`;

  private tokenSignal = signal<string | null>(null);
  public token = this.tokenSignal.asReadonly();

  private rolSignal = signal<string | null>(null);
  public rol = this.rolSignal.asReadonly();

  private nombreSignal = signal<string | null>(null);
  public nombre = this.nombreSignal.asReadonly();

  constructor() {
    const savedToken = localStorage.getItem("token");
    const savedRol = localStorage.getItem("rol");
    const savedNombre = localStorage.getItem("nombre");

    if (savedToken) this.tokenSignal.set(savedToken);
    if (savedRol) this.rolSignal.set(savedRol);
    if (savedNombre) this.nombreSignal.set(savedNombre);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    const credentials: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        const token = response.jwt || response.token || "";
        const rol = response.rol || "";

        this.tokenSignal.set(token);
        this.rolSignal.set(rol);

        localStorage.setItem("token", token);
        localStorage.setItem("rol", rol);
      })
    );
  }

  logout(): void {
    this.tokenSignal.set(null);
    this.rolSignal.set(null);
    this.nombreSignal.set(null);

    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("nombre");

    this.router.navigate(["/login"]);
  }

  isAuthenticated(): boolean {
    return this.tokenSignal() !== null;
  }

  getToken(): string | null {
    return this.tokenSignal();
  }

  getRol(): string | null {
    return this.rolSignal();
  }

  getNombre(): string | null {
    return this.nombreSignal();
  }

  getUsuarioId(): number {
  const token = this.getToken();
  if (!token) return 0;

  const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id;
}

  getCurrentUser(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/me`).pipe(
      tap((usuario) => {
        this.nombreSignal.set(usuario.nombre || null);
        if (usuario.nombre) localStorage.setItem("nombre", usuario.nombre);
      })
    );
  }

  fetchCurrentUser(): Observable<Usuario> {
    return this.getCurrentUser();
  }
}