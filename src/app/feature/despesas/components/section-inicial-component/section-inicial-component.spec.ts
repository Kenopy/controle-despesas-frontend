import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDespesasComponent } from './section-inicial-component';

describe('FormDespesasComponent', () => {
  let component: FormDespesasComponent;
  let fixture: ComponentFixture<FormDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDespesasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDespesasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
