import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss']
})
export class DynamicModalComponent implements OnInit {

  titleHeader: string = '';
  contentBody: string = '';
  contentFooter: string = '';


  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
