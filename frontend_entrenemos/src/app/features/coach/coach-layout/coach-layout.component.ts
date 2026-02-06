import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "app-coach-layout",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./coach-layout.component.html",
  styleUrls: ["./coach-layout.component.css"],
})
export class CoachLayoutComponent {
  private authService = inject(AuthService);

  cerrarSesion() {
    this.authService.logout();
  }
}