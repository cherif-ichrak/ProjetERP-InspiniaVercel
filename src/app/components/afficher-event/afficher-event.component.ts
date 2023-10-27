import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-afficher-event",
  templateUrl: "./afficher-event.component.html",
  styleUrls: ["./afficher-event.component.css"],
})
export class AfficherEventComponent {
  selectedOption: string = "option1"; // Option par défaut
  
}
