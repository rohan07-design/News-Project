import { Component, OnInit } from '@angular/core';
import { NewsserviceService} from '../newsservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _sports:NewsserviceService) { }

  public sportsNews:any[] = [];
  ngOnInit(): void {
    this._sports.getSportsApi().subscribe(sports => {
      this.sportsNews = sports.articles;
    })
  }

}
