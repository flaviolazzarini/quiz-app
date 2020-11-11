import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from './../../app/shared/models/Question';
import { pluck, switchMap } from 'rxjs/operators';

const questions: Question[] = [
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question: "Who had a US and UK number 1 hit in 1962 with the instrumental, &#039;Telstar&#039;?",
    correct_answer: "John%20and%20Mary",
    incorrect_answers: [
      "Joseph%20and%20Catherine",
      "William%20and%20Elizabeth",
      "George%20and%20Anne"
    ]

  },
  {
    category: "Entertainment%3A%20Video%20Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which%20of%20these%20is%20NOT%20the%20name%20of%20a%20team%20leader%20in%20Pok%C3%A9mon%20GO%3F",
    correct_answer: "Leif",
    incorrect_answers: [
      "Blanche",
      "Spark",
      "Candela"
    ]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which%20of%20the%20following%20Grand%20Slam%20tennis%20tournaments%20occurs%20LAST%3F",
    correct_answer: "US%20Open",
    incorrect_answers: [
      "French%20Open",
      "Wimbledon",
      "Australian%20Open"
    ]
  },
  {
    category: "Science%20%26%20Nature",
    type: "boolean",
    difficulty: "easy",
    question: "An%20average%20human%20can%20go%20two%20weeks%20without%20water.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  }
];

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private questionUrl = 'https://opentdb.com/api.php';
  private tokenUrl = 'https://opentdb.com/api_token.php';
  private numberOfQuestions = '10';
  private currentToken$: Observable<string>;
  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this.http.get(this.tokenUrl, { params: { command: 'request' } }).pipe(pluck('token'),
      switchMap(receivedToken =>
        this.http.get<Question[]>(this.questionUrl, { params: { amount: this.numberOfQuestions, token: receivedToken as string } })),
      pluck('results'));
  }
}

