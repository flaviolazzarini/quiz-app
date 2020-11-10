import { Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';

export const homeRoutes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent }
];

