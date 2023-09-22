import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-topnewshome',
  templateUrl: './topnewshome.component.html',
  styleUrls: ['./topnewshome.component.css']
})
export class TopnewshomeComponent {
  constructor(private _http:NewsService) {}
  public allNews:any[] = [];
  ngOnInit():void {
    this._http.getApi().subscribe(data => {
      console.log(data)
      this.allNews = data.articles;
    })
  }
}
