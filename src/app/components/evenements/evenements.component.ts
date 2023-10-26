import { Component } from '@angular/core';

@Component({
  selector: "app-evenements",
  templateUrl: "./evenements.component.html",
  styleUrls: ["./evenements.component.css"],
})
export class EvenementsComponent {
  selectedOption: string = "option1"; // Option sélectionnée par défaut
}
