import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  dropdownList: Array<any> = [];
  dropdownList1: Array<any> = [];
  dropdownList2: Array<any> = [];
  dropdownList3: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings: any = {};

  constructor() { 
    this.dropdownList = [
      { item_id: 1, item_text: 'General' },
      { item_id: 2, item_text: 'Planeado' },
      { item_id: 3, item_text: 'Recomendado' },
    ];
  
    this.dropdownList1 = [
      { item_id: 1, item_text: 'periodo' },
      { item_id: 2, item_text: 'periodo 2' },
      { item_id: 3, item_text: 'periodo 3' },
    ];
  
    this.dropdownList2 = [
      { item_id: 1, item_text: 'tipo' },
      { item_id: 2, item_text: 'tipo 2' },
      { item_id: 3, item_text: 'tipo 3' },
    ];
  
    this.dropdownList3 = [
      { item_id: 1, item_text: 'horario' },
      { item_id: 2, item_text: 'horario 2' },
      { item_id: 3, item_text: 'horario 3' },
    ];
  
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Todo',
      unSelectAllText: 'Remover',
      itemsShowLimit: 0,
    };
  }

  
  ngOnInit(): void {
  }

  
  clearAllItems() {
    this.selectedItems = [];
  }

  removeItems(item: any) {
    this.selectedItems = this.selectedItems.filter(list => list !== item);   
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
