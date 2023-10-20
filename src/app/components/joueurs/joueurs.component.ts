import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css'],
})
export class JoueursComponent {
  selectedOption: string = 'option1'; // Option par défaut
}
