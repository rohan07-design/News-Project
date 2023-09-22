import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  constructor(private _health:NewsService) { }

  public healthNews:any[] = [];
  ngOnInit(): void {
    this._health.getHealthApi().subscribe(health => {
      this.healthNews = health.articles;
    })
  }
}
