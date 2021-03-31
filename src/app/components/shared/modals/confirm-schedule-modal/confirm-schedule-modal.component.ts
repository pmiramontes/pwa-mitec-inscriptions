import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-schedule-modal',
  templateUrl: './confirm-schedule-modal.component.html',
  styleUrls: ['./confirm-schedule-modal.component.scss']
})
export class ConfirmScheduleModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
