import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigoComponent } from './tigo.component';

describe('TigoComponent', () => {
  let component: TigoComponent;
  let fixture: ComponentFixture<TigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TigoComponent]
    });
    fixture = TestBed.createComponent(TigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
