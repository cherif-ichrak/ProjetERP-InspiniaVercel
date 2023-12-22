import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mouv-stocks-entree-sortie',
  templateUrl: './mouv-stocks-entree-sortie.component.html',
  styleUrls: ['./mouv-stocks-entree-sortie.component.css']
})
export class MouvStocksEntreeSortieComponent {
 constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openES(contentES : any) {
    this.modalService.open(contentES , { size: 'xl' });
  }
}

