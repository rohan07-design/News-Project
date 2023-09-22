import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuisnessNewsComponent } from './components/buisness-news/buisness-news.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HealthComponent } from './components/health/health.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { TopnewshomeComponent } from './components/topnewshome/topnewshome.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "buisness-news", component:BuisnessNewsComponent },
  { path: "entertainment", component:EntertainmentComponent },
  { path: "sports", component:SportsComponent },
  { path: "topnews", component:TopnewshomeComponent },
  { path: "health", component:HealthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
