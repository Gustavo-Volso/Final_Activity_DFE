import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoComponent } from '../pedido/pedido.component';
import { Pedido } from '../models/pedido';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fila',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PedidoComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent {
  mesa = '';
  itens = '';
  lista: Pedido[] = [];
  private idAtual = 1;

  add() {
    if (this.mesa && this.itens) {
      const novo: Pedido = {
        id: this.idAtual++,
        mesa: this.mesa,
        itens: this.itens,
        status: 'pendente'
      };
      this.lista.push(novo);
      this.mesa = '';
      this.itens = '';
    }
  }

  remover(id: number) {
    this.lista = this.lista.filter(p => p.id !== id);
  }

  alterarStatus(id: number, status: 'pendente' | 'em preparo' | 'entregue') {
    const pedido = this.lista.find(p => p.id === id);
    if (pedido) pedido.status = status;
  }
}
