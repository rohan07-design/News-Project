import { Component, OnInit } from '@angular/core';
import { NewsserviceService} from '../newsservice.service';

@Component({
  selector: 'app-technology-news',
  templateUrl: './technology-news.component.html',
  styleUrls: ['./technology-news.component.css']
})
export class TechnologyNewsComponent implements OnInit {

  constructor(private _technologyHttp:NewsserviceService) { }

  public technologyNews:any[] = [];
  
  ngOnInit(): void {
    this._technologyHttp.getTechnologyApi().subscribe(technology => {
      this.technologyNews = technology.articles;
    })
  }

}
