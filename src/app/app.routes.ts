import { Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { ListComponent } from '../app/list/list/list.component';
import { AuthGuard } from '../app/shared/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
