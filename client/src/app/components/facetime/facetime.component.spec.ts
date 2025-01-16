import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetimeComponent } from './facetime.component';

describe('FacetimeComponent', () => {
  let component: FacetimeComponent;
  let fixture: ComponentFixture<FacetimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacetimeComponent]
    });
    fixture = TestBed.createComponent(FacetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
