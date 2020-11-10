import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit, OnChanges {

  constructor() { }
  public answers: string[];
  @Input() questionType: string;
  @Input() questionCorrectAnswer: string;
  @Input() questionIncorrectAnswers: string[];

  ngOnInit(): void {
    this.setAnswers(this.questionCorrectAnswer, this.questionIncorrectAnswers);
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.setAnswers(this.questionCorrectAnswer, this.questionIncorrectAnswers)
  }

  private setAnswers(questionCorrectAnswer: string, questionIncorrectAnswers: string[]): void {
    this.answers = questionIncorrectAnswers.concat(questionCorrectAnswer);
    this.answers = this.answers.sort(() => .5 - Math.random());
  }
}
