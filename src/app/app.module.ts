import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http';
import { NewsserviceService } from './newsservice.service';
import { TopheadingComponent } from './topheading/topheading.component';
import { TopnewshomeComponent } from './topnewshome/topnewshome.component';
import { Routes, RouterModule} from '@angular/router';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { ErrorComponent } from './error/error.component'

const newsApi : Routes = [
  {path:'', redirectTo:'topheading', pathMatch:'full'},
  {path:'topheading',component:TopheadingComponent},
  {path:'topnewshome',component:TopnewshomeComponent},
  {path:'technology-news',component:TechnologyNewsComponent},
  {path:'buisness-news',component:BuisnessNewsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'sports',component:SportsComponent},
  {path:'health',component:HealthComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TopnewshomeComponent,
    TechnologyNewsComponent,
    BuisnessNewsComponent,
    EntertainmentComponent,
    SportsComponent,
    HealthComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(newsApi)
  ],
  providers: [NewsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
