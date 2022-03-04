import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsserviceService} from '../newsservice.service';


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor() { }
  ngOnInit():void{
    
  }

}
