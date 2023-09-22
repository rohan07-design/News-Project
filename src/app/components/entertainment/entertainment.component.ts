import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  constructor(private _entertainment: NewsService) { }

  public entertainmentNews: any[] = [];
  ngOnInit(): void {
    this._entertainment.getEntertainmentApi().subscribe(enter => {
      this.entertainmentNews = enter.articles;
    })
  }
}
