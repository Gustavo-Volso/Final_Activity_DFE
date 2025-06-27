export interface Pedido {
  id: number;
  mesa: string;
  itens: string;
  status: 'pendente' | 'em preparo' | 'entregue';
}
