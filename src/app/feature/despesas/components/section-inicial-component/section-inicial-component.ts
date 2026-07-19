import { Component, inject } from '@angular/core';
import { BotaoComponent } from '../button-component/button-component';
import { TableComponent } from '../table-component/table-component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DespesaFormComponent } from '../despesa-form/despesa-form';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-section-inicial-component',
  imports: [BotaoComponent, TableComponent, MatDialogModule, MatSnackBarModule],
  templateUrl: './section-inicial-component.html',
  styleUrl: './section-inicial-component.css',
})
export class SectionInicialComponent {
  
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  abrirModalCadastro() {
    const dialogRef = this.dialog.open(DespesaFormComponent, {
      width: '450px',
      panelClass: 'modal-customizado' 
    });

    dialogRef.afterClosed().subscribe(dadosDoFormulario => {
      if (dadosDoFormulario) {
        console.log('Dados recebidos do Modal:', dadosDoFormulario);
        
        this.snackBar.open('Despesa cadastrada com sucesso!', 'X', {
          duration: 3000, // 
          horizontalPosition: 'right', 
          verticalPosition: 'top', 
          panelClass: ['!bg-lime-500', '!text-fundo', 'font-bold', 'rounded-md'] 
        });
      }
    });

  }
}