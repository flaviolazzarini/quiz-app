import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './pages/quiz/quiz.component';
import { RouterModule } from '@angular/router';
import { routes } from './quiz.routes';
import { AnswerComponent } from './components/answer/answer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [QuizComponent, AnswerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    routing
  ]
})
export class QuizModule { }
