export interface Despesa {
  id?: string; 
  descricao: string;
  valor: number;
  categoria: 'ALIMENTACAO' | 'CASA' | 'LAZER' | 'SAUDE' | 'TRANSPORTE' | 'EDUCACAO' | 'GAMES' | 'CARRO' | 'OUTROS';
  formaPagamento: 'PIX' | 'DINHEIRO' | 'CARTAO_CREDITO' | 'CARTAO_DEBITO' | 'BOLETO';
  parcelas?: number;
  dataDespesa: string; 
  dataRegistro?: string; 
}