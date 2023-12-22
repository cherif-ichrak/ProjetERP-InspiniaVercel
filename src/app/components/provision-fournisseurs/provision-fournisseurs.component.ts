import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-provision-fournisseurs',
  templateUrl: './provision-fournisseurs.component.html',
  styleUrls: ['./provision-fournisseurs.component.css'],
})
export class ProvisionFournisseursComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openProvisioner(contentProvisioner: any) {
    this.modalService.open(contentProvisioner, { size: 'xl' });
  }
}