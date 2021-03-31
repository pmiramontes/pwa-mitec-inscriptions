import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CancellationNoticeSgmmModalComponent } from '../shared/modals/cancellation-notice-sgmm-modal/cancellation-notice-sgmm-modal.component';
import { ConfirmScheduleModalComponent } from '../shared/modals/confirm-schedule-modal/confirm-schedule-modal.component';

@Component({
  selector: 'app-registration-summary',
  templateUrl: './registration-summary.component.html',
  styleUrls: ['./registration-summary.component.scss']
})
export class RegistrationSummaryComponent implements OnInit {

  Pagos: any[] = [
    {
      "name": "Mensualidad colegiatura",
      "fecha": "20-FEB-2020",
      "monto": "$1000"
    },
    {
      "name": "Mensualidad colegiatura",
      "fecha": "20-FEB-2020",
      "monto": "$1000"
    },
    {
      "name": "Mensualidad colegiatura",
      "fecha": "20-FEB-2020",
      "monto": "$1000"
    },
    {
      "name": "Mensualidad colegiatura",
      "fecha": "20-FEB-2020",
      "monto": "$1000"
    },
    {
      "name": "Mensualidad colegiatura",
      "fecha": "20-FEB-2020",
      "monto": "$1000"
    }
  ];


  bsModalRef: BsModalRef = new BsModalRef;

  disabledYes = true;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openCancel() {
    this.bsModalRef = this.modalService.show(CancellationNoticeSgmmModalComponent, Object.assign({}, {  class: 'modal-dialog-centered' }));
  }

  confirmInscription() {
    this.bsModalRef = this.modalService.show(ConfirmScheduleModalComponent, Object.assign({}, {  class: 'modal-dialog-centered' }));
  }


}
