import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { QuestionService } from 'src/app/core/question.service';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

/* Pass untouched request through to the next request handler. */
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private questionService: QuestionService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (this.isTokenRequest(req)) {
      return next.handle(req);
    }
    if (!this.questionService.currentToken) {
      return this.questionService.getToken().pipe(
        tap(token => this.questionService.currentToken = token),
        map(token => req.clone({ setParams: { token: token as string } })),
        mergeMap(newreq => next.handle(newreq)));
    }
    return of(this.questionService.currentToken).pipe(
      map(token => req.clone({ setParams: { token: token as string } })),
      mergeMap(newreq => next.handle(newreq))
    );
  }

  isTokenRequest(req: HttpRequest<any>): boolean {
    return req.url === this.questionService.tokenUrl;
  }
}
