import { Component, OnInit } from '@angular/core';
import { NewsserviceService} from '../newsservice.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _entertainment:NewsserviceService) { }

  public entertainmentNews:any[] = [];
  ngOnInit(): void {
    this._entertainment.getEntertainmentApi().subscribe(enter => {
      this.entertainmentNews = enter.articles;
    })
  }

}
