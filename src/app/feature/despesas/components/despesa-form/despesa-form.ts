import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BotaoComponent } from '../button-component/button-component';
import { DespesaService } from '../../services/despesa.service'; 
import { Despesa } from '../../models/despesa.model';

@Component({
  selector: 'app-despesa-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    BotaoComponent
  ],
  templateUrl: './despesa-form.html'
})
export class DespesaFormComponent {
  private fb = inject(FormBuilder);
  public dialogRef = inject(MatDialogRef<DespesaFormComponent>);
  private despesaService = inject(DespesaService);
  formDespesa: FormGroup;

  constructor() 
  {
    this.formDespesa = this.fb.group({
      descricao: ['', Validators.required],
      categoria: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      valor: [null, [Validators.required, Validators.min(0.01)]],
      dataDespesa: [new Date().toISOString().split('T')[0], Validators.required],
      parcelas: [1, [Validators.required, Validators.min(1)]]
    });

    this.formDespesa.get('formaPagamento')?.valueChanges.subscribe(forma => {
      const numParcelasControl = this.formDespesa.get('parcelas');
      
      if (forma === 'CARTAO_CREDITO') {
        numParcelasControl?.setValidators([Validators.required, Validators.min(1)]);
      } else {
        numParcelasControl?.setValue(1);
        numParcelasControl?.clearValidators();
      }

      numParcelasControl?.updateValueAndValidity();
    });
  }

  salvar() {
    if (this.formDespesa.valid) {
      const novaDespesa: Despesa = this.formDespesa.value;
      
      this.despesaService.criar(novaDespesa).subscribe({
        next: (despesaRetornadaDoBanco) => {
          console.log('Sucesso! A API salvou e devolveu o ID:', despesaRetornadaDoBanco.id);
          this.dialogRef.close(despesaRetornadaDoBanco);
        },
        error: (erro) => {
          console.error('Falha ao tentar salvar na API:', erro);
        }
      });
    } else {
      this.formDespesa.markAllAsTouched();
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}