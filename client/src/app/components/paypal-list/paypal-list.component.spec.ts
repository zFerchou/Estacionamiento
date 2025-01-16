import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalListComponent } from './paypal-list.component';

describe('PaypalListComponent', () => {
  let component: PaypalListComponent;
  let fixture: ComponentFixture<PaypalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaypalListComponent]
    });
    fixture = TestBed.createComponent(PaypalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
