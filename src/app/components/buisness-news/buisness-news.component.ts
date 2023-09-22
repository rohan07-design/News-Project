import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-buisness-news',
  templateUrl: './buisness-news.component.html',
  styleUrls: ['./buisness-news.component.css']
})
export class BuisnessNewsComponent {
  constructor(private _buisnesshttp: NewsService) { }

  public buisnessNews: any[] = [];
  ngOnInit(): void {
    this._buisnesshttp.getBuisnessApi().subscribe(buisness => {
      this.buisnessNews = buisness.articles;
    })
  }
}
