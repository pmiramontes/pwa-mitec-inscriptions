import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatmentComponent } from './account-statment.component';

describe('AccountStatmentComponent', () => {
  let component: AccountStatmentComponent;
  let fixture: ComponentFixture<AccountStatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountStatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
