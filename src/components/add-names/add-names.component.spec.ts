import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNamesComponent } from './add-names.component';

describe('AddNamesComponent', () => {
  let component: AddNamesComponent;
  let fixture: ComponentFixture<AddNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
