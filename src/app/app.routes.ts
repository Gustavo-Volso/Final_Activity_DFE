import { Routes } from '@angular/router';
import { FilaComponent } from './pedidos/fila/fila.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'fila', pathMatch: 'full' },
  { path: 'fila', component: FilaComponent }
];
