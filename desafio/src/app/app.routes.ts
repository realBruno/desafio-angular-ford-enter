import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent}
];
