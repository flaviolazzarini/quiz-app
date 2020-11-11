import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from './../../app/shared/models/Question';
import { map, pluck, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private questionUrl = 'https://opentdb.com/api.php';
  public tokenUrl = 'https://opentdb.com/api_token.php?command=request';
  private numberOfQuestions = '10';
  public currentToken: string;
  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl, { params: { amount: this.numberOfQuestions } }).pipe(pluck('results'));
  }

  public getToken(): Observable<string> {
    return this.http.get<string>(this.tokenUrl)
      .pipe(pluck('token'));
  }
}

