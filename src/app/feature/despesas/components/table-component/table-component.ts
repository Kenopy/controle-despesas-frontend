import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { phosphorTrash, phosphorPencil} from '@ng-icons/phosphor-icons/regular';
import { CommonModule } from '@angular/common';
const ELEMENT_DATA: PeriodicElement[] = [
  {data: new Date(2026, 3, 23), descricao: 'Hydrogen', categoria: 'games', formaPagamento: 'Dinheiro', numeroParcelas: 1},
  {data: new Date(2026, 3, 24), descricao: 'Helium', categoria: 'alimentacao', formaPagamento: 'Cartão de Crédito', numeroParcelas: 1},
  {data: new Date(2026, 3, 25), descricao: 'Lithium', categoria: 'combustivel', formaPagamento: 'Cartão de Débito', numeroParcelas: 1},
  {data: new Date(2026, 3, 26), descricao: 'Beryllium', categoria: 'lazer', formaPagamento: 'Transferência Bancária', numeroParcelas: 1},
  {data: new Date(2026, 3, 27), descricao: 'Boron', categoria: 'carro', formaPagamento: 'Dinheiro', numeroParcelas: 1},
  {data: new Date(2026, 3, 28), descricao: 'Carbon', categoria: 'games', formaPagamento: 'Cartão de Crédito', numeroParcelas: 5},
  {data: new Date(2026, 3, 29), descricao: 'Nitrogen', categoria: 'games', formaPagamento: 'Cartão de Débito', numeroParcelas: 1},
  {data: new Date(2026, 3, 30), descricao: 'Oxygen', categoria: 'alimentacao', formaPagamento: 'Transferência Bancária', numeroParcelas: 1},
  {data: new Date(2026, 3, 31), descricao: 'Fluorine', categoria: 'combustivel', formaPagamento: 'Dinheiro', numeroParcelas: 1},
  {data: new Date(2026, 4, 1), descricao: 'Neon', categoria: 'lazer', formaPagamento: 'Cartão de Crédito', numeroParcelas: 2},
  {data: new Date(2026, 3, 25), descricao: 'Lithium', categoria: 'lazer', formaPagamento: 'Cartão de Débito', numeroParcelas: 1},
  {data: new Date(2026, 3, 26), descricao: 'Beryllium', categoria: 'lazer', formaPagamento: 'Transferência Bancária', numeroParcelas: 1},
  {data: new Date(2026, 3, 27), descricao: 'Boron', categoria: 'carro', formaPagamento: 'Cartão de Crédito', numeroParcelas: 10},
  {data: new Date(2026, 3, 28), descricao: 'Carbon', categoria: 'games', formaPagamento: 'Cartão de Crédito', numeroParcelas: 3},
  {data: new Date(2026, 3, 29), descricao: 'Nitrogen', categoria: 'games', formaPagamento: 'Cartão de Débito', numeroParcelas: 5},
  {data: new Date(2026, 3, 30), descricao: 'Oxygen', categoria: 'alimentacao', formaPagamento: 'Transferência Bancária', numeroParcelas: 1},
  {data: new Date(2026, 3, 31), descricao: 'Fluorine', categoria: 'combustivel', formaPagamento: 'Dinheiro', numeroParcelas: 1},
  {data: new Date(2026, 4, 1), descricao: 'Neon', categoria: 'lazer', formaPagamento: 'Cartão de Crédito', numeroParcelas: 1},
];

export interface PeriodicElement {
  data: Date;
  descricao: string;
  categoria: string;
  formaPagamento: string;
  numeroParcelas: number;
}

@Component({
  selector: 'app-table-component', 
  styleUrl: 'table-component.css', 
  templateUrl: 'table-component.html', 
  imports: [CommonModule, MatTableModule, MatPaginatorModule, NgIconComponent],
  providers:  provideIcons({phosphorTrash, phosphorPencil }),
})

export class TableComponent {
  displayedColumns: string[] = ['data', 'descricao', 'categoria', 'formaPagamento', 'numeroParcelas', 'valor', 'acoes'];
  getCategoriaStyle(categoria: string): string {

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
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) set paginator(pager: MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
    }
  }
} 
