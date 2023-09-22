import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private _sports: NewsService) { }

  public sportsNews: any[] = [];
  ngOnInit(): void {
    this._sports.getSportsApi().subscribe(sports => {
      console.log(sports)
      this.sportsNews = sports.articles;
    })
  }
}
