import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/core/question.service';
import { Question } from 'src/app/shared/models/Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public questions: Question[];
  private currentQuestionCount = 0;
  public tempSelectedAnswer: string;
  private correctAnswers = 0;
  get currentQuestion(): Question {
    return this.questions[this.currentQuestionCount];
  }

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(question => this.questions = question);

  }

  answerSelected(selectedAnswer: string): void {
    this.tempSelectedAnswer = selectedAnswer;
  }

  onAnswerClick(): void {
    this.currentQuestion.selected_answer = this.tempSelectedAnswer;
    if (this.currentQuestion.selected_answer === this.currentQuestion.correct_answer) {
      this.correctAnswers++;
    }
  }

  onNextClick(): void {
    if (this.currentQuestionCount < this.questions.length - 1) {
      this.currentQuestionCount += 1;
      this.tempSelectedAnswer = undefined;
    }
    else {
      this.router.navigate(['result', { correctAnswers: this.correctAnswers, totalAnswers: this.questions.length }],
        { relativeTo: this.route });
    }
  }

}
