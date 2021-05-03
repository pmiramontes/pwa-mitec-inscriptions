import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-cancel-sgmm-modal',
  templateUrl: './cancel-sgmm-modal.component.html',
  styleUrls: ['./cancel-sgmm-modal.component.scss']
})
export class CancelSgmmModalComponent implements OnInit {
  
    fileLetter = "";
    filePolicy = "";
    fileText = "No choosen file"

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onChangeLetter(letter: any) {
    this.fileLetter = letter.target.files[0].name;
    console.log(this.fileLetter);
  }

  onChangePolicy(policy: any) {
    this.filePolicy = policy.target.files[0].name;
    console.log(this.fileLetter);
  }

  downloadFile() {
    const pdfUrl = '../../../../../assets/files/Prueba de descarga PDF.pdf';
    const pdfName = 'Prueba descarga.pdf';
    fileSaver.saveAs(pdfUrl, pdfName);
  }

}
