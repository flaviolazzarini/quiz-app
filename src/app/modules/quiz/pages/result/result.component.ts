import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public correctAnswers: string;
  public totalAnswers: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.correctAnswers = this.route.snapshot.paramMap.get('correctAnswers');
    this.totalAnswers = this.route.snapshot.paramMap.get('totalAnswers');
  }

}
