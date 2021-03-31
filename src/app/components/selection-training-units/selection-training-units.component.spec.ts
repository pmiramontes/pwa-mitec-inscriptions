import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTrainingUnitsComponent } from './selection-training-units.component';

describe('SelectionTrainingUnitsComponent', () => {
  let component: SelectionTrainingUnitsComponent;
  let fixture: ComponentFixture<SelectionTrainingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionTrainingUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTrainingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
