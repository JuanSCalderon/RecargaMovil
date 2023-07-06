import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UffComponent } from './uff.component';

describe('UffComponent', () => {
  let component: UffComponent;
  let fixture: ComponentFixture<UffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UffComponent]
    });
    fixture = TestBed.createComponent(UffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
