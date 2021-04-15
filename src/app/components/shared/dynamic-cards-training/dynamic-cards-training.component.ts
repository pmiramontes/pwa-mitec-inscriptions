import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-cards-training',
  templateUrl: './dynamic-cards-training.component.html',
  styleUrls: ['./dynamic-cards-training.component.scss']
})
export class DynamicCardsTrainingComponent implements OnInit {

  @Input() code: string = '';
  @Input() title: string = '';
  @Input() groups: string = '';
  @Input() titleButton: string = '';
  @Input() numCredits: string = '';
  @Input() identify: string = '';
  @Input() type: string = "default";
  @Input() color: string = "default";

  constructor() { }

  ngOnInit(): void {
  }

}
