import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCvcComponent } from './card-cvc.component';

describe('CardCvcComponent', () => {
  let component: CardCvcComponent;
  let fixture: ComponentFixture<CardCvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
