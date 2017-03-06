import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpiryComponent } from './card-expiry.component';

describe('CardExpiryComponent', () => {
  let component: CardExpiryComponent;
  let fixture: ComponentFixture<CardExpiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExpiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
