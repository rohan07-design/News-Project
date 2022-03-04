import { Component, OnInit } from '@angular/core';
import { NewsserviceService} from '../newsservice.service';

@Component({
  selector: 'app-topnewshome',
  templateUrl: './topnewshome.component.html',
  styleUrls: ['./topnewshome.component.css']
})
export class TopnewshomeComponent implements OnInit {

  constructor(private _http:NewsserviceService) { }

  public allNews:any[] = [];
  ngOnInit(): void {
    this._http.getApi().subscribe(name => {
      console.log(name);
      this.allNews = name.articles;
    });
  }

}
