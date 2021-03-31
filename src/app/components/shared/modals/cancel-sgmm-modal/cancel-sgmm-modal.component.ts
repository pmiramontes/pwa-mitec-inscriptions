import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cancel-sgmm-modal',
  templateUrl: './cancel-sgmm-modal.component.html',
  styleUrls: ['./cancel-sgmm-modal.component.scss']
})
export class CancelSgmmModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
