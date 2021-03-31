import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-training-units',
  templateUrl: './selection-training-units.component.html',
  styleUrls: ['./selection-training-units.component.scss']
})
export class SelectionTrainingUnitsComponent implements OnInit {
  showFiller = false;
  toggle = false;
  arrowChange = 'arrow_forward_ios'

  constructor() { }

  ngOnInit(): void {
  }

  expandSidebar() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
    this.arrowChange = this.toggle ? 'arrow_back_ios_new' : 'arrow_forward_ios'
}

}
