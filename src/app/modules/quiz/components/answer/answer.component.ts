import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

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
  @Input() disabled: boolean;

  @Output() selectedAnswer = new EventEmitter<string>();

  ngOnInit(): void {
    this.setAnswers(this.questionCorrectAnswer, this.questionIncorrectAnswers);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled.currentValue === false) {
      this.setAnswers(this.questionCorrectAnswer, this.questionIncorrectAnswers);
    }
  }

  onRadioSelected(event: MatRadioChange): void {
    this.selectedAnswer.emit(event.value);
  }

  private setAnswers(questionCorrectAnswer: string, questionIncorrectAnswers: string[]): void {
    this.answers = questionIncorrectAnswers.concat(questionCorrectAnswer);
    this.answers = this.answers.sort(() => .5 - Math.random());
  }
}
