import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {

  constructor() { }

  @Input() questionType: string;
  @Input() questionCorrectAnswer: string;
  @Input() questionIncorrectAnser: string;

  ngOnInit(): void {
  }

}
