import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaCollectionsComponent } from './tea-collections.component';

describe('TeaCollectionsComponent', () => {
  let component: TeaCollectionsComponent;
  let fixture: ComponentFixture<TeaCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeaCollectionsComponent]
    });
    fixture = TestBed.createComponent(TeaCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
