import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-class-details-modal',
  templateUrl: './class-details-modal.component.html',
  styleUrls: ['./class-details-modal.component.scss']
})
export class ClassDetailsModalComponent implements OnInit {
  isCollapsed = true;

  ModalMatter: any[] = [
    {
      titleOne: 'Campus:',
      concept: 'Monterrey',
      titleTwo: 'Formato:',
      conceptTwo: 'Presencial'
    },
    {
      titleOne: 'Periodo:',
      concept: '1',
      titleTwo: 'Idioma:',
      conceptTwo: 'Español, Inglés'
    },
    {
      titleOne: 'Espacios disponibles:',
      concept: '9 asientos',
      titleTwo: 'Socio formador:',
      conceptTwo: 'Gamesa'
    }
  ]

  toggle = false;
  name = 'Expandir'
  icon = 'expand_more'

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
    this.name = this.toggle ? 'Esconder' : 'Expandir';
    this.icon = this.toggle ? 'expand_less' : 'expand_more'
}


}
