import { FilaComponent } from './pedidos/fila/fila.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    FilaComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    // Angular Material modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
