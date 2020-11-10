import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './pages/quiz/quiz.component';
import { RouterModule } from '@angular/router';
import { routes } from './quiz.routes';

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class QuizModule { }
