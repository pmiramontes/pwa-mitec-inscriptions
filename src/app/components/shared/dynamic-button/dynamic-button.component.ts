import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss']
})
export class DynamicButtonComponent implements OnInit {

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() type: string = "default";
 
  constructor() { }

  ngOnInit(): void {
  }

}
