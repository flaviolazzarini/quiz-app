import { Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultComponent } from './pages/result/result.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];
