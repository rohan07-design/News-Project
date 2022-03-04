import { Component, OnInit } from '@angular/core';
import { NewsserviceService} from '../newsservice.service';

@Component({
  selector: 'app-buisness-news',
  templateUrl: './buisness-news.component.html',
  styleUrls: ['./buisness-news.component.css']
})
export class BuisnessNewsComponent implements OnInit {

  constructor(private _buisnesshttp:NewsserviceService) { }

  public buisnessNews:any[] = [];
  ngOnInit(): void {
    this._buisnesshttp.getBuisnessApi().subscribe(buisness => {
      this.buisnessNews = buisness.articles;
    })
  }

}
