import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mouv-stocks-transfert',
  templateUrl: './mouv-stocks-transfert.component.html',
  styleUrls: ['./mouv-stocks-transfert.component.css'],
})
export class MouvStocksTransfertComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openTransfert(contentTransfert: any) {
    this.modalService.open(contentTransfert, { size: 'xl' });
  }
}
