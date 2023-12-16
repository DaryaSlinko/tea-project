import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaFullProductCardComponent } from './tea-full-product-card.component';

describe('TeaFullProductCardComponent', () => {
  let component: TeaFullProductCardComponent;
  let fixture: ComponentFixture<TeaFullProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeaFullProductCardComponent]
    });
    fixture = TestBed.createComponent(TeaFullProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
