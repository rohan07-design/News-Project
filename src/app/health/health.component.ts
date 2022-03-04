import { Component, OnInit } from '@angular/core';

import { NewsserviceService} from '../newsservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _health:NewsserviceService) { }

  public healthNews:any[] = [];
  ngOnInit(): void {
    this._health.getHealthApi().subscribe(health => {
      this.healthNews = health.articles;
    })
  }

}
