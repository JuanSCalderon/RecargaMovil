import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcelComponent } from './comcel.component';

describe('ComcelComponent', () => {
  let component: ComcelComponent;
  let fixture: ComponentFixture<ComcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComcelComponent]
    });
    fixture = TestBed.createComponent(ComcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
