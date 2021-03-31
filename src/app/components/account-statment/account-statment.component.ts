import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-statment',
  templateUrl: './account-statment.component.html',
  styleUrls: ['./account-statment.component.scss']
})
export class AccountStatmentComponent implements OnInit {

  Plan: any[] = [
    {
      "name": "Seguros por colegiatura",
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
    },
    {
      "name": "Mensualidad colegiatura",
      "fecha": "20-FEB-2020",
      "monto": "$1000"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
