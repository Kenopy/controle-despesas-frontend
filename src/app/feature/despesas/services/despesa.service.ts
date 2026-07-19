import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../models/despesa.model';

@Injectable({ providedIn: 'root' })
export class DespesaService {
  private apiUrl = 'http://localhost:8080/api/despesas';
  private http = inject(HttpClient);

  listarTodas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.apiUrl}/${id}`);
  }

  criar(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(this.apiUrl, despesa);
  }

  atualizar(id: number, despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(`${this.apiUrl}/${id}`, despesa);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}