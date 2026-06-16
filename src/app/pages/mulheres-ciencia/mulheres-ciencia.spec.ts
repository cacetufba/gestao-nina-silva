import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulheresCiencia } from './mulheres-ciencia';

describe('MulheresCiencia', () => {
  let component: MulheresCiencia;
  let fixture: ComponentFixture<MulheresCiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulheresCiencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulheresCiencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
