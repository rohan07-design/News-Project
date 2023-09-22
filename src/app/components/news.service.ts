import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }

  url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=58bd5301006240e594bd17e97203fa9d";
  
  getApi():Observable<any> {
    return this._http.get(this.url);
  }
  //For the Technology purpose
  technologyUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=58bd5301006240e594bd17e97203fa9d";

  getTechnologyApi():Observable<any> {
    return this._http.get(this.technologyUrl);
  }  

  //For the Buisness Purpose
  buisnessUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=58bd5301006240e594bd17e97203fa9d";

  getBuisnessApi():Observable<any> {
    return this._http.get(this.buisnessUrl);
  }

  //For the Entertainment purpose
  entertainmentUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=58bd5301006240e594bd17e97203fa9d";

  getEntertainmentApi():Observable<any> {
    return this._http.get(this.entertainmentUrl);
  }

  //For the Sports purpose
  sportsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=58bd5301006240e594bd17e97203fa9d";
  
  getSportsApi():Observable<any> {
    return this._http.get(this.sportsUrl);
  }

  //For the Health purpose
  healthUrl ="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=58bd5301006240e594bd17e97203fa9d";

  getHealthApi():Observable<any> {
    return this._http.get(this.healthUrl);
  }
}
