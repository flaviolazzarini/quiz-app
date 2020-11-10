import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './pages/start/start.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class HomeModule { }
