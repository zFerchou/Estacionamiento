import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionListComponent } from './ubicacion-list.component';

describe('UbicacionListComponent', () => {
  let component: UbicacionListComponent;
  let fixture: ComponentFixture<UbicacionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbicacionListComponent]
    });
    fixture = TestBed.createComponent(UbicacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
