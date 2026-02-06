import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  error: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        const rol = (response.rol || "").toUpperCase().trim();

        if (rol === "ADMIN") this.router.navigate(["/admin/usuarios"]);
        else if (rol === "ENTRENADOR") this.router.navigate(["/coach"]);
        else this.router.navigate(["/home"]);

        this.authService.fetchCurrentUser().subscribe();
      },
      error: () => {
        this.error = "Email o contraseña incorrectos";
      }
    });
  }
}