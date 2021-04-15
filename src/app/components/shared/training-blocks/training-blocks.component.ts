import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-blocks',
  templateUrl: './training-blocks.component.html',
  styleUrls: ['./training-blocks.component.scss']
})
export class TrainingBlocksComponent implements OnInit {

  CardMater: any[] = [
    {
      code: 'EH1001C',
      materia: 'Tecnologías de la Información',
      identificador: ' ',
      button: 'DISCIPLINARIA',
      groups: '3 grupos disponibles',
      credits: '2',
      color: 'transparent',
    },
    {
      code: 'EH1002C',
      materia: 'Inmersión y Experimentación Creativa',
      identificador: ' ',
      button: 'DISCIPLINARIA',
      groups: '2 grupos disponibles',
      credits: '3',
      color: 'transparent',
    },
    {
      code: 'EH103BC',
      materia: 'Roboticas',
      identificador: 'R',
      button: 'DISCIPLINARIA',
      groups: '3 grupos disponibles',
      credits: '2',
    },
    {
      code: 'EH1001C',
      materia: 'Ciencias de la Comunicación',
      identificador: 'P',
      button: 'DISCIPLINARIA',
      groups: '3 grupos disponibles',
      credits: '2',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
