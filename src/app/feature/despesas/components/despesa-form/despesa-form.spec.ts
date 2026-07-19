import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFormComponent } from './despesa-form';

describe('DespesaForm', () => {
  let component: DespesaFormComponent;
  let fixture: ComponentFixture<DespesaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespesaFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DespesaFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
