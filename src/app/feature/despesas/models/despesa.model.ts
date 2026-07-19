export interface Despesa {
  id?: number; 
  descricao: string;
  valor: number;
  categoria: 'ALIMENTACAO' | 'CASA' | 'LAZER' | 'SAUDE' | 'TRANSPORTE' | 'EDUCACAO' | 'GAMES' | 'CARRO' | 'OUTROS';
  formaPagamento: 'PIX' | 'DINHEIRO' | 'CARTAO_CREDITO' | 'CARTAO_DEBITO' | 'BOLETO';
  dataDespesa: string; 
  dataRegistro?: string; 
}