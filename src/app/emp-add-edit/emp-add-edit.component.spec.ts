import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddEditComponent } from './emp-add-edit.component';

describe('EmpAddEditComponent', () => {
  let component: EmpAddEditComponent;
  let fixture: ComponentFixture<EmpAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpAddEditComponent]
    });
    fixture = TestBed.createComponent(EmpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
