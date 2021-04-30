import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CancelSgmmModalComponent } from '../shared/modals/cancel-sgmm-modal/cancel-sgmm-modal.component';

@Component({
  selector: 'app-enrollment-profile',
  templateUrl: './enrollment-profile.component.html',
  styleUrls: ['./enrollment-profile.component.scss']
})
export class EnrollmentProfileComponent implements OnInit {

  bsModalRef: BsModalRef = new BsModalRef;

  edited = true;
  panelOpenOne = false;
  panelOpenTwo = false;
  panelOpenThree = false;
  panelOpenFour = false;
  panelOpenFive = false;

  toggle = true;
  icon = 'expand_more'

  constructor(private modalService: BsModalService) { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.edited = false;
      console.log(this.edited);
  }, 10000);
  }

  openCancelSGSM() {
    this.bsModalRef = this.modalService.show(CancelSgmmModalComponent, Object.assign({}, { class: 'modal-lg modal-dialog-centered' }));
  }

  enableChevronIcon() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
    this.icon = this.toggle ? 'expand_less' : 'expand_more'
}
  



}
