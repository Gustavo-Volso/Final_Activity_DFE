import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private pedidos: Pedido[] = [];
  private contadorId = 1;

  adicionarPedido(mesa: string, itens: string): Pedido {
    const novo: Pedido = {
      id: this.contadorId++,
      mesa,
      itens,
      status: 'pendente'
    };
    this.pedidos.push(novo);
    return novo;
  }

  listarPedidos(): Pedido[] {
    return this.pedidos;
  }

  alterarStatus(id: number, novoStatus: Pedido['status']) {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) pedido.status = novoStatus;
  }

  removerPedido(id: number) {
    this.pedidos = this.pedidos.filter(p => p.id !== id);
  }

  obterPedido(id: number): Pedido | undefined {
    return this.pedidos.find(p => p.id === id);
  }
}
