import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './pages/start/start.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './home.routes';


export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [StartComponent],
  imports: [
    routing,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ]
})
export class HomeModule { }
