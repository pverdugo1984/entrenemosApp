import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Entrenamiento } from "../../models/entrenamiento.model";
import { API_BASE_URL } from "../../../config/api.config";

@Component({
  selector: "app-program-card",
  imports: [CommonModule],
  templateUrl: "./program-card.html",
  styleUrl: "./program-card.css",
})
export class ProgramCard {
  @Input() entrenamiento?: Entrenamiento;
  @Input() nombre?: string;
  @Input() detalles?: string;
  @Input() imagen?: string;

  get nombrePrograma(): string {
    return this.entrenamiento?.nombre || this.nombre || "Programa";
  }

  get detallesPrograma(): string {
    if (this.entrenamiento) {
      const partes: string[] = [];
      if (this.entrenamiento.descripcion) {
        partes.push(this.entrenamiento.descripcion);
      }
      if (
        this.entrenamiento.ejercicios &&
        this.entrenamiento.ejercicios.length > 0
      ) {
        partes.push(`${this.entrenamiento.ejercicios.length} ejercicios`);
      }
      return partes.join(" | ") || "Sin detalles";
    }
    return this.detalles || "";
  }

  getImagenUrl(): string {
    if (this.entrenamiento?.imagen) {
      const imagen = this.entrenamiento.imagen;
      if (imagen.startsWith("/uploads/")) {
        const baseUrl = API_BASE_URL.replace("/api", "");
        return `${baseUrl}${imagen}`;
      }
      return imagen;
    }
    if (this.imagen) {
      return this.imagen;
    }
    return "/assets/bf-image.jpg";
  }

  get imagenPrograma(): string {
    const nombre = this.nombrePrograma.toLowerCase();
    if (nombre.includes("trx")) return "trx";
    if (nombre.includes("builder")) return "builder";
    if (nombre.includes("basic")) return "basic";
    return "basic";
  }
}
