import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  @Input() pedido!: Pedido;
  @Output() removerPedido = new EventEmitter<number>();
  @Output() statusPedido = new EventEmitter<'pendente' | 'em preparo' | 'entregue'>();

  remover() {
    this.removerPedido.emit(this.pedido.id);
  }

  mudarStatus(status: 'pendente' | 'em preparo' | 'entregue') {
    this.statusPedido.emit(status);
  }
}
