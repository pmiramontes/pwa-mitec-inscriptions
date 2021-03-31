import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.scss'],
  providers: [NgbNavConfig] // add NgbNavConfig to the component providers

})
export class FinalSummaryComponent implements OnInit {

  cards = [
    {
      letra: 'A',
      code: 'EH1001B',
      group: '(Grupo 02)',
      materia: 'Imnersión y experimentación creativa',
      imgCard: '../assets/images/img_avatar.png',
      teacher: 'Nayra Mendoza (+ 1 Co-titular)',
      campus: 'Monterrey (A2 - 204)',
      periody: 'Periodos 1-3 (3 agosto al 4 de septiembre)',
      days: 'Lu Ma Ju (7:00 AM - 10:00 AM)',
      format: 'Presencial (Español - Inglés)',
      socio: 'Gamesa'
    },
    {
      letra: 'B',
      code: 'A1004',
      group: '(Grupo 03)',
      materia: 'Cultura visual y sonaora',
      imgCard: '../assets/images/img_avatar.png',
      teacher: 'Nayra Mendoza (+ 1 Co-titular)',
      campus: 'Monterrey (A2 - 204)',
      periody: 'Periodos 1-3 (3 agosto al 4 de septiembre)',
      days: 'Lu Ma Ju (7:00 AM - 10:00 AM)',
      format: 'Presencial (Español - Inglés)',
      socio: 'Gamesa'
    },
    {
      letra: 'C',
      code: 'EH1009',
      group: '(Grupo 02)',
      materia: 'Semiótica y narrativas contemporáneas',
      imgCard: '../assets/images/img_avatar.png',
      teacher: 'Nayra Mendoza (+ 1 Co-titular)',
      campus: 'Monterrey (A2 - 204)',
      periody: 'Periodos 1-3 (3 agosto al 4 de septiembre)',
      days: 'Lu Ma Ju (7:00 AM - 10:00 AM)',
      format: 'Presencial (Español - Inglés)',
      socio: 'Gamesa'
    }
  ]

  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
   }

  ngOnInit(): void {
  }

}
