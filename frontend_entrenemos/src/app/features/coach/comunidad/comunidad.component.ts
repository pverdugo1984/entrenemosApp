import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatWindowComponent } from "../../chat/components/chat-window.component";

@Component({
  selector: "app-coach-comunidad",
  standalone: true,
  imports: [CommonModule, ChatWindowComponent],
  templateUrl: "./comunidad.component.html",
  styleUrls: ["./comunidad.component.css"],
})
export class ComunidadComponent {}