import {Component, ViewChild, OnInit, inject} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { phosphorTrash, phosphorPencil} from '@ng-icons/phosphor-icons/regular';
import { CommonModule } from '@angular/common';
import { DespesaService } from '../../services/despesa.service';
import { Despesa } from '../../models/despesa.model';

@Component({
  selector: 'app-table-component', 
  styleUrl: 'table-component.css', 
  templateUrl: 'table-component.html', 
  imports: [CommonModule, MatTableModule, MatPaginatorModule, NgIconComponent],
  providers:  provideIcons({phosphorTrash, phosphorPencil }),
})

export class TableComponent implements OnInit{
  private despesaService = inject(DespesaService);

  displayedColumns: string[] = ['dataDespesa', 'descricao', 'categoria', 'formaPagamento', 'parcelas', 'valor', 'acoes'];
  dataSource = new MatTableDataSource<Despesa>([]);
  
  @ViewChild(MatPaginator) set paginator(pager: MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
    }
  }

  ngOnInit(): void {
    this.carregarDespesas();
  }

  carregarDespesas(): void {
    this.despesaService.listarTodas().subscribe({
      
      next: (despesasDoBanco) => {
        // Pegamos os dados reais do banco e jogamos para a variável que desenha a tabela.
        this.dataSource.data = despesasDoBanco;
        console.log('Despesas carregadas com sucesso:', despesasDoBanco);
      },
      
      error: (erro) => {
        console.error('Erro ao buscar as despesas:', erro);
      }
    });
  }

  getCategoriaStyle(categoria: string): string {

    if (!categoria) return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';

    switch (categoria.toLowerCase()) {
      case 'games': 
        return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
      case 'alimentacao': 
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'combustivel': 
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'lazer': 
        return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
      case 'carro': 
        return 'bg-red-500/20 text-red-400 border border-red-500/30';
      default: 
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  }
} 
