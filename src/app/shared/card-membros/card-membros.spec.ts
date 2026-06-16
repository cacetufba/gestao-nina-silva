import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembros } from './card-membros';

describe('CardMembros', () => {
  let component: CardMembros;
  let fixture: ComponentFixture<CardMembros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMembros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMembros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
