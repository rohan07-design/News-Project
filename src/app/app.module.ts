import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuisnessNewsComponent } from './components/buisness-news/buisness-news.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HealthComponent } from './components/health/health.component';
import { SportsComponent } from './components/sports/sports.component';
import { HomeComponent } from './components/home/home.component';
import { TopnewshomeComponent } from './components/topnewshome/topnewshome.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BuisnessNewsComponent,
    EntertainmentComponent,
    HealthComponent,
    SportsComponent,
    HomeComponent,
    TopnewshomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
