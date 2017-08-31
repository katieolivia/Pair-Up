import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNamesComponent } from './display-names.component';

describe('DisplayNamesComponent', () => {
  let component: DisplayNamesComponent;
  let fixture: ComponentFixture<DisplayNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
