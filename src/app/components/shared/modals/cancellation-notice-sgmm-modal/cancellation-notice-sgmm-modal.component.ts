import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cancellation-notice-sgmm-modal',
  templateUrl: './cancellation-notice-sgmm-modal.component.html',
  styleUrls: ['./cancellation-notice-sgmm-modal.component.scss']
})
export class CancellationNoticeSgmmModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
