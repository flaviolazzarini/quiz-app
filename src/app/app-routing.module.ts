import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './modules/home/home.routes';

const routes: Routes = homeRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
